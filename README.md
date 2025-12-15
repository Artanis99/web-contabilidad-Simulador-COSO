# Simulador Interactivo de Control Interno (COSO 2013)

SPA en React + Vite + TailwindCSS con gráficos Recharts. Incluye navegación anclada, tabs de marco COSO, timeline de evolución, mapa de calor de riesgos, simulador ERM con radar, casos comparativos, quiz, recursos y videos.

## Requisitos
- Node.js 18+ (recomendado 20+)
- npm

## Instalación (manual)
```bash
npm install
```

## Desarrollo
```bash
npm run dev
```
Abre el enlace que muestra Vite (ej. http://localhost:5173).

## Build de producción
```bash
npm run build
npm run preview  # opcional para revisar el build
```
Con `base: "./"` en `vite.config.js`, el build queda listo para abrirse sin servidor desde `dist/index.html`.

## Despliegue en Windows (desde 0)
Scripts incluidos:
- PowerShell: `scripts/deploy.ps1`
- CMD wrapper: `scripts/deploy.cmd`

Ejemplos:
```bat
scripts\deploy.cmd dev
scripts\deploy.cmd build
scripts\deploy.cmd preview 4173 0.0.0.0
```

En PowerShell:
```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File .\scripts\deploy.ps1 -Mode dev
powershell -NoProfile -ExecutionPolicy Bypass -File .\scripts\deploy.ps1 -Mode dev -CleanNodeModules -CleanDist
```

## Acceso público (ngrok / Cloudflare Tunnel)
Este proyecto valida hosts por seguridad (Vite `server.allowedHosts`). Ya está configurado para:
- `*.trycloudflare.com`
- `*.ngrok-free.dev` y `*.ngrok-free.app`

Comandos típicos:
- ngrok: `ngrok http 5173`
- cloudflared (quick tunnel): `cloudflared tunnel --url http://localhost:5173/`

Si aparece `Blocked request. This host (...) is not allowed`, agrega el dominio (o subdominio) a `vite.config.js` en `server.allowedHosts`.

## Estructura clave
- `src/main.jsx`: arranque de React y estilos globales.
- `src/App.jsx`: orquestación de secciones, refs de scroll y estado compartido.
- `src/pages/`: páginas principales (COSO 2013 y COSO ERM 2017).
- `src/components/`: vistas modulares (Navbar, Hero, FrameworkContent, ErmSimulator, CasesSection, QuizSection, ResourcesSection, VideosSection).
- `src/styles/global.css`: Tailwind + ajustes básicos.

## Interactividad principal
- **Páginas COSO** (`Coso2013Page`, `CosoErm2017Page` + `FrameworkContent`): componentes, principios y simulador de caso práctico por marco.
- **Radar por marco** (`FrameworkContent`): radar sincronizado con el “Simulador de caso práctico” (línea base vs ajuste actual).
- **Simulador ERM** (`ErmSimulator` + RadarChart): disponible dentro de la página **COSO ERM 2017**.
- **Casos** (`CasesSection`): switch entre Tech Solution y Textil, gráfico de barras antes/después.
- **Quiz** (`QuizSection`): 5 preguntas con feedback inmediato.

## Estilos
- Tailwind para layout responsivo.
- Navbar con menú móvil.
- Páginas COSO 2013 / COSO ERM 2017 con estilos por tema (verde/indigo).

## Notas
- El build usa code-splitting (rutas COSO bajo demanda) y chunks separados para `recharts`.
- Archivos que no deben subirse están en `.gitignore` (incluye `personal/`, `node_modules/`, `dist/`, `.env*`).
