# Simulador Interactivo de Control Interno (COSO 2013)

SPA en React + Vite + TailwindCSS con gráficos Recharts. Incluye navegación anclada, tabs de marco COSO, timeline de evolución, mapa de calor de riesgos, simulador ERM con radar, casos comparativos, quiz, recursos y videos.

## Requisitos
- Node.js 18+ (recomendado 20+)
- npm

## Instalación
```bash
npm install
```

## Desarrollo
```bash
npm run dev
```
Abre el enlace que muestra Vite (ej. http://localhost:5173). La navbar permite scroll suave a cada sección.
> Nota: si tu entorno no permite levantar servidores (error `listen EPERM`), usa el build y abre `dist/index.html` directamente en el navegador.

## Build de producción
```bash
npm run build
npm run preview  # opcional para revisar el build
```
Con `base: "./"` en `vite.config.js`, el build queda listo para abrirse sin servidor desde `dist/index.html`.

## Estructura clave
- `src/main.jsx`: arranque de React y estilos globales.
- `src/App.jsx`: orquestación de secciones, refs de scroll y estado compartido.
- `src/pages/`: páginas principales (COSO 2013 y COSO ERM 2017).
- `src/components/`: vistas modulares (Navbar, Hero, FrameworkContent, ErmSimulator, CasesSection, QuizSection, ResourcesSection, VideosSection).
- `src/styles/global.css`: Tailwind + ajustes básicos.

## Interactividad principal
- **Páginas COSO** (`Coso2013Page`, `CosoErm2017Page` + `FrameworkContent`): componentes, principios y simulador de caso práctico por marco.
- **Simulador ERM** (`ErmSimulator` + RadarChart): sliders/botones calculan niveles actual vs objetivo por componente COSO.
- **Casos** (`CasesSection`): switch entre Tech Solution y Textil, gráfico de barras antes/después.
- **Quiz** (`QuizSection`): 5 preguntas con feedback inmediato.

## Estilos
- Tailwind para layout responsivo y paleta verde/azul.
- Gradientes en hero y botones; tarjetas con sombra y bordes suaves.

## Notas
- Si ves warning de tamaño de bundle en build, es por Recharts; se puede reducir con code splitting/lazy load.
- Usa `npm run dev` para hot reload; evita crear refs en bucles de hooks (ya corregido en `App.jsx`).
