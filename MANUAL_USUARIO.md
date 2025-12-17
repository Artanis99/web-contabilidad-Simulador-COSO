# Manual de usuario (Simulador COSO)

## 1) Descripción
Aplicación web interactiva para estudiar y aplicar **COSO 2013** (Control Interno) y **COSO ERM 2017** (Gestión de Riesgos), con:
- Resumen por componentes y principios (con explicación, evidencias y preguntas guía).
- Casos prácticos y visualizaciones.
- Evaluación rápida (quiz).
- Recursos/bibliografía y videos comparativos.

---

## 2) Tecnología utilizada
**Desarrollo**
- **React 18** (interfaz de usuario).
- **Vite 5** (entorno de desarrollo y build).
- **Tailwind CSS 3** (estilos y diseño responsivo).
- **Recharts** (gráficos: radar, barras).

**Requisitos para ejecutar**
- **Node.js** (recomendado: 18+)
- **npm** (incluido con Node)

---

## 3) Instalación y ejecución (uso técnico)
En la carpeta del proyecto:

1. Instalar dependencias:
   - `npm install`

2. Ejecutar en modo desarrollo:
   - `npm run dev`
   - Abre la URL que aparece en la terminal (por ejemplo `http://localhost:5173`).

3. Generar build de producción:
   - `npm run build`

4. Previsualizar la build:
   - `npm run preview`

---

## 4) Navegación general (uso funcional)
La aplicación usa navegación por hash (`#/`):
- **Inicio**: `#/`
- **COSO 2013**: `#/coso-2013`
- **COSO ERM 2017**: `#/coso-erm-2017`

En la barra superior puedes ir al inicio, a los marcos COSO, o a secciones del inicio.

En todas las páginas aparece un botón flotante (flecha) abajo a la izquierda para **volver al inicio**.

---

## 5) Inicio: secciones
En el inicio encontrarás:
- **Casos prácticos**: selecciona un caso y revisa indicadores “Antes/Después”.
- **Evaluación rápida**: responde preguntas y obtén retroalimentación inmediata.
- **Recursos y bibliografía**: enlaces para profundizar.
- **Comparación**: videos para reforzar diferencias y similitudes.

---

## 6) Páginas COSO 2013 y COSO ERM 2017
Cada página incluye:

### 6.1 Resumen ejecutivo
Bloque de introducción con ideas clave (y, cuando aplica, objetivos, limitaciones o conexiones).

### 6.2 Componentes y principios
- Los componentes se muestran en una lista desplegable.
- Al abrir un componente se despliegan sus principios con:
  - **Explicación** (concepto aterrizado).
  - **Cómo aplicarlo** (acciones sugeridas).
  - **Evidencias / prácticas** (qué documentos/controles buscar).
  - **Preguntas guía** (para evaluación o auditoría).
- El buscador permite encontrar texto dentro de títulos, explicación, evidencias y preguntas.

### 6.3 Simulador de caso práctico
- Selecciona un caso.
- Ajusta el nivel por componente (0–100).
- Revisa el **radar** y los **focos sugeridos** para priorizar mejoras.

En **COSO ERM 2017** además hay un simulador adicional para ajustar parámetros (apetito, enfoque, inversión, industria) y visualizar resultados.

---

## 7) Sugerencia de uso (rápido)
1. Entra a **COSO 2013** para comprender controles y evidencias por proceso.
2. Entra a **COSO ERM 2017** para ver cómo el riesgo se integra a estrategia y desempeño.
3. Practica con un **caso** y ajusta niveles para identificar brechas.
4. Usa la **evaluación** para reforzar conceptos.

