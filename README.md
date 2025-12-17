# Simulador Interactivo de Control Interno (COSO 2013)

SPA en React + Vite + TailwindCSS con gráficos (Recharts). Incluye navegación anclada, tabs del marco COSO, timeline de evolución, mapa de calor de riesgos, simulador ERM con radar, casos comparativos, quiz, recursos y videos.

## Documentación
- Manual de usuario: `MANUAL_USUARIO.md`

## Requisitos
- Node.js 18+ (recomendado 20+)
- npm

## Inicio rápido
```bash
npm install
npm run dev
```

Abre el enlace que muestra Vite (por defecto `http://localhost:5173`).

## Scripts
```bash
npm run dev      # desarrollo
npm run build    # build de producción en /dist
npm run preview  # servir el build para validación local
```

## Build de producción
```bash
npm run build
npm run preview  # opcional para revisar el build
```
Con `base: "./"` en `vite.config.js`, el build queda listo para abrirse sin servidor desde `dist/index.html` (por ejemplo, con doble clic en Windows).

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
