<# 
  deploy.ps1 - Despliegue/arranque robusto para Windows

  Ejemplos:
    powershell -ExecutionPolicy Bypass -File .\scripts\deploy.ps1 -Mode build
    powershell -ExecutionPolicy Bypass -File .\scripts\deploy.ps1 -Mode preview -Port 4173 -Host 0.0.0.0
    powershell -ExecutionPolicy Bypass -File .\scripts\deploy.ps1 -Mode dev -Port 5173 -Host 0.0.0.0

  Nota:
    - Requiere Node.js 18+ (Vite 5).
    - No hace "git push" ni modifica remotos; solo prepara y ejecuta el proyecto.
#>

[CmdletBinding()]
param(
  [ValidateSet("build", "dev", "preview")]
  [string]$Mode = "build",

  [int]$Port = 0,

  [Alias("Host")]
  [string]$BindHost = "",

  [switch]$CleanDist,
  [switch]$CleanNodeModules,
  [switch]$SkipInstall
)

$ErrorActionPreference = "Stop"

function Write-Section([string]$Title) {
  Write-Host ""
  Write-Host "== $Title ==" -ForegroundColor Cyan
}

function Require-Command([string]$Name) {
  if (-not (Get-Command $Name -ErrorAction SilentlyContinue)) {
    throw "No se encontró '$Name' en PATH. Instálalo y vuelve a ejecutar."
  }
}

function Parse-SemVer([string]$VersionText) {
  # Acepta "v20.11.0" o "20.11.0"
  $clean = $VersionText.Trim()
  if ($clean.StartsWith("v")) { $clean = $clean.Substring(1) }
  try { return [Version]$clean } catch { return $null }
}

function Require-Node([Version]$MinVersion) {
  Require-Command "node"
  $nodeRaw = (& node --version) 2>$null
  if (-not $nodeRaw) { throw "No se pudo leer la versión de Node.js." }
  $nodeVer = Parse-SemVer $nodeRaw
  if (-not $nodeVer) { throw "Versión de Node inválida: '$nodeRaw'." }
  if ($nodeVer -lt $MinVersion) {
    throw "Node.js $($MinVersion) o superior requerido. Detectado: $nodeVer. Actualiza Node.js."
  }
  Write-Host "Node.js: $nodeVer"
}

function Require-Npm {
  Require-Command "npm"
  $npmRaw = (& npm --version) 2>$null
  if ($npmRaw) { Write-Host "npm: $npmRaw" }
}

function Exec([string]$File, [string[]]$Args) {
  $argLine = ($Args | ForEach-Object { if ($_ -match '\s') { '"' + $_ + '"' } else { $_ } }) -join " "
  Write-Host "`n> $File $argLine" -ForegroundColor DarkGray

  $p = Start-Process -FilePath $File -ArgumentList $Args -NoNewWindow -Wait -PassThru
  if ($p.ExitCode -ne 0) {
    throw "Comando falló (exit code $($p.ExitCode)): $File $argLine"
  }
}

Write-Section "Validaciones"

# Ir a la raíz del repo (un nivel arriba de scripts/)
$repoRoot = Resolve-Path (Join-Path $PSScriptRoot "..")
Set-Location $repoRoot

if (-not (Test-Path ".\package.json")) {
  throw "No se encontró package.json en '$repoRoot'. Ejecuta desde la raíz del proyecto."
}

Require-Node ([Version]"18.0.0")
Require-Npm

Write-Host "Ruta del proyecto: $repoRoot"

if ($CleanDist) {
  Write-Section "Limpieza"
  if (Test-Path ".\dist") {
    Write-Host "Eliminando .\dist ..."
    Remove-Item -Recurse -Force ".\dist"
  }
}

if ($CleanNodeModules) {
  Write-Section "Limpieza"
  if (Test-Path ".\node_modules") {
    Write-Host "Eliminando .\node_modules (puede tardar) ..."
    Remove-Item -Recurse -Force ".\node_modules"
  }
}

Write-Section "Dependencias"
if ($SkipInstall) {
  Write-Host "Instalación omitida (-SkipInstall)."
} else {
  $hasLock = Test-Path ".\package-lock.json"
  $hasNodeModules = Test-Path ".\node_modules"

  if ($hasLock) {
    if ($hasNodeModules) {
      Write-Host "Detectado node_modules + package-lock.json: usando 'npm ci' (recomendado)."
    } else {
      Write-Host "Detectado package-lock.json: usando 'npm ci'."
    }
    Exec "npm" @("ci", "--no-fund", "--no-audit")
  } else {
    Write-Host "No hay package-lock.json: usando 'npm install'."
    Exec "npm" @("install", "--no-fund", "--no-audit")
  }
}

if ($Mode -eq "build") {
  Write-Section "Build"
  Exec "npm" @("run", "build")
  if (-not (Test-Path ".\dist\index.html")) {
    throw "Build terminó, pero no existe .\dist\index.html. Revisa la configuración de Vite."
  }
  Write-Host "OK: Build generado en .\dist" -ForegroundColor Green
  exit 0
}

if ($Mode -eq "dev") {
  Write-Section "Dev Server"
  $args = @("run", "dev")
  if ($Port -gt 0) { $args += @("--", "--port", "$Port") }
  if ($BindHost -ne "") { $args += @("--", "--host", "$BindHost") }
  Exec "npm" $args
  exit 0
}

if ($Mode -eq "preview") {
  Write-Section "Preview"
  $args = @("run", "preview")
  if ($Port -gt 0) { $args += @("--", "--port", "$Port") }
  if ($BindHost -ne "") { $args += @("--", "--host", "$BindHost") }
  Exec "npm" $args
  exit 0
}

throw "Modo no soportado: $Mode"
