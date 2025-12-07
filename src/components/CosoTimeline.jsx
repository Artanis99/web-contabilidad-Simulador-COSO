import { useState } from "react";

const modelos = [
  {
    key: "cosoI",
    titulo: "COSO I (1992)",
    subtitulo: "Control Interno",
    bullets: [
      "Enfoque en control interno financiero",
      "5 componentes originales",
      "Orientación al cumplimiento normativo",
      "Limitado a riesgos financieros",
    ],
  },
  {
    key: "cosoII",
    titulo: "COSO II (2004)",
    subtitulo: "Gestión de Riesgos Empresariales",
    bullets: [
      "Ampliación a gestión integral de riesgos",
      "8 componentes",
      "Enfoque estratégico y operativo",
      "Considera oportunidades y riesgos",
    ],
  },
  {
    key: "cosoIII",
    titulo: "COSO II ERM (2013)",
    subtitulo: "Marco actualizado",
    bullets: [
      "Mayor agilidad y adaptabilidad",
      "Enfoque en creación de valor",
      "Mejora en información y comunicación",
      "Visión proactiva de riesgos",
    ],
  },
];

const comparativa = [
  { aspecto: "Componentes", cosoI: "5", cosoII: "8", cosoIII: "5 + 17 principios" },
  { aspecto: "Alcance", cosoI: "Financiero", cosoII: "Estrategia y operación", cosoIII: "Estrategia y desempeño" },
  { aspecto: "Riesgos", cosoI: "Financieros", cosoII: "Oportunidades y riesgos", cosoIII: "Riesgos emergentes" },
  { aspecto: "Comunicación", cosoI: "Lineal", cosoII: "Multidireccional", cosoIII: "Iterativa y digital" },
  { aspecto: "Agilidad", cosoI: "Baja", cosoII: "Media", cosoIII: "Alta" },
];

export default function CosoTimeline({ innerRef }) {
  const [active, setActive] = useState("cosoIII");

  return (
    <section id="coso" ref={innerRef} className="max-w-6xl mx-auto px-4">
      <div className="mb-8 flex items-center justify-between gap-3 flex-wrap">
        <div>
          <h2 className="text-3xl font-black text-emerald-700">Evolución del marco COSO</h2>
          <p className="text-slate-600 text-sm">Selecciona una tarjeta para resaltar sus características.</p>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {modelos.map((m) => (
          <button
            key={m.key}
            onClick={() => setActive(m.key)}
            className={`text-left p-5 rounded-2xl border shadow transition ${
              active === m.key
                ? "bg-emerald-600 text-white border-emerald-700 shadow-lg scale-[1.02]"
                : "bg-white text-slate-800 border-emerald-100 hover:-translate-y-1"
            }`}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-white/15 text-center grid place-items-center font-black">
                {m.key === "cosoI" ? "I" : m.key === "cosoII" ? "II" : "II ERM"}
              </div>
              <div>
                <h3 className="text-lg font-bold">{m.titulo}</h3>
                <p className="text-xs opacity-80">{m.subtitulo}</p>
              </div>
            </div>
            <ul className="space-y-2 text-sm">
              {m.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <span className="mt-1 w-2 h-2 rounded-full bg-white/80" />
                  {b}
                </li>
              ))}
            </ul>
          </button>
        ))}
      </div>
      <div className="mt-8 overflow-x-auto bg-white rounded-2xl shadow border border-emerald-50">
        <table className="min-w-full text-sm">
          <thead className="bg-emerald-50 text-emerald-800 uppercase">
            <tr>
              <th className="px-4 py-3 text-left">Aspecto</th>
              <th className="px-4 py-3 text-left">COSO I</th>
              <th className="px-4 py-3 text-left">COSO II</th>
              <th className="px-4 py-3 text-left">COSO 2013</th>
            </tr>
          </thead>
          <tbody>
            {comparativa.map((row) => (
              <tr key={row.aspecto} className="border-t border-emerald-50">
                <td className="px-4 py-3 font-semibold text-slate-700">{row.aspecto}</td>
                <td className={`px-4 py-3 ${active === "cosoI" ? "bg-emerald-50 font-bold" : ""}`}>
                  {row.cosoI}
                </td>
                <td className={`px-4 py-3 ${active === "cosoII" ? "bg-emerald-50 font-bold" : ""}`}>
                  {row.cosoII}
                </td>
                <td className={`px-4 py-3 ${active === "cosoIII" ? "bg-emerald-50 font-bold" : ""}`}>
                  {row.cosoIII}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
