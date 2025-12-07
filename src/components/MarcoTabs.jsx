import { useState } from "react";

const tabs = [
  {
    id: "definicion",
    label: "Definición",
    title: "¿Qué es el Control Interno?",
    content: [
      "Proceso ejecutado por toda la organización para dar seguridad razonable en operaciones, información y cumplimiento.",
      "Se apoya en políticas, procedimientos, registros y cultura ética.",
      "Debe adaptarse de forma dinámica a cambios del negocio y entorno regulatorio.",
    ],
  },
  {
    id: "principios",
    label: "Principios",
    title: "Principios clave del componente Entorno de Control",
    content: [
      "Compromiso con integridad y valores éticos desde la alta dirección.",
      "Consejo independiente que supervisa a la gerencia.",
      "Estructuras y responsabilidades claras, con rendición de cuentas.",
      "Cultura de competencia profesional y responsabilidad por el control interno.",
    ],
  },
  {
    id: "controles",
    label: "Tipos de Controles",
    title: "Controles preventivos y detectivos",
    content: [
      "Preventivos: autorizaciones, segregación de funciones, verificaciones previas.",
      "Detectivos: conciliaciones, revisiones y análisis de variaciones.",
      "Reconciliaciones comparan dos fuentes y accionan ante diferencias (ej: conciliación bancaria).",
      "Controles físicos: conteo de inventarios, activos fijos, arqueos y comparación con libros.",
    ],
  },
  {
    id: "tecnologia",
    label: "Tecnología",
    title: "Controles tecnológicos",
    content: [
      "Infraestructura, seguridad y accesos alineados a niveles de madurez.",
      "Desarrollo y mantenimiento con segregación de ambientes y revisiones.",
      "Protección contra accesos no autorizados y monitoreo continuo.",
    ],
    bars: [
      { name: "Infraestructura", actual: 78, madurez: 70 },
      { name: "Seguridad", actual: 85, madurez: 78 },
      { name: "Accesos", actual: 92, madurez: 85 },
      { name: "Desarrollo", actual: 74, madurez: 68 },
      { name: "Mantenimiento", actual: 81, madurez: 76 },
    ],
  },
  {
    id: "politicas",
    label: "Políticas y Procedimientos",
    title: "Revisión periódica",
    content: [
      "Se actualizan frente a crecimiento, cambios legales o de mercado.",
      "El personal debe contar con competencias requeridas para la complejidad de procesos.",
      "Los controles definidos se ajustan para asegurar efectividad en entornos cambiantes.",
    ],
  },
];

export default function MarcoTabs({ innerRef }) {
  const [active, setActive] = useState("definicion");
  const tab = tabs.find((t) => t.id === active) || tabs[0];

  return (
    <section id="marco" ref={innerRef} className="max-w-6xl mx-auto px-4">
      <div className="mb-6 flex items-center justify-between gap-3 flex-wrap">
        <div>
          <h2 className="text-3xl font-black text-emerald-700">Marco integrado COSO 2013</h2>
          <p className="text-slate-600 text-sm">Explora definición, principios, tipos de controles y el rol de la tecnología.</p>
        </div>
        <div className="flex flex-wrap gap-2 bg-slate-100 rounded-full p-1 text-sm font-semibold">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`px-4 py-2 rounded-full transition ${
                active === t.id ? "bg-emerald-600 text-white shadow" : "text-slate-700"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>
      <div className="bg-white rounded-2xl shadow border border-emerald-50 p-6">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1 space-y-3">
            <h3 className="text-xl font-bold text-emerald-700">{tab.title}</h3>
            <ul className="space-y-2 text-sm text-slate-700">
              {tab.content.map((c) => (
                <li key={c} className="flex items-start gap-2">
                  <span className="mt-1 w-2 h-2 rounded-full bg-emerald-500" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
          {tab.bars && (
            <div className="lg:w-80 bg-slate-50 rounded-xl p-4 space-y-3">
              <div className="text-sm font-semibold text-slate-700">Niveles de implementación vs madurez</div>
              <div className="space-y-3">
                {tab.bars.map((b) => (
                  <div key={b.name}>
                    <div className="flex justify-between text-xs font-semibold text-slate-600">
                      <span>{b.name}</span>
                      <span>{b.actual}% / {b.madurez}%</span>
                    </div>
                    <div className="h-3 bg-white rounded-full border border-slate-200 overflow-hidden">
                      <div
                        className="h-full bg-emerald-500"
                        style={{ width: `${b.actual}%`, opacity: 0.8 }}
                      />
                      <div
                        className="h-full bg-sky-400/60 -mt-3"
                        style={{ width: `${b.madurez}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-500">Azul: implementación actual. Celeste: nivel de madurez esperado.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
