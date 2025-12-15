@echo off
setlocal

REM Wrapper simple para ejecutar el deploy en Windows sin pelearse con ExecutionPolicy.
REM Ejemplos:
REM   scripts\deploy.cmd build
REM   scripts\deploy.cmd preview 4173 0.0.0.0
REM   scripts\deploy.cmd dev 5173 0.0.0.0

set MODE=%1
if "%MODE%"=="" set MODE=build

set PORT=%2
set HOST=%3

set PS_ARGS=-Mode %MODE%
if not "%PORT%"=="" set PS_ARGS=%PS_ARGS% -Port %PORT%
if not "%HOST%"=="" set PS_ARGS=%PS_ARGS% -Host %HOST%

powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0deploy.ps1" %PS_ARGS%
exit /b %ERRORLEVEL%

