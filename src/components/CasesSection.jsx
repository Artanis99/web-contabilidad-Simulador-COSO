import { useMemo, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const casos = {
  tecnologia: {
    nombre: "Tech Solution S.A.",
    desc: "Empresa de software SaaS con rápido crecimiento y brechas de control iniciales.",
    riesgos: ["Disponibilidad de servicios", "Cumplimiento normativo", "Fraude en compras"],
    controles: ["Backups y monitoreo 24/7", "Segregación de funciones en pagos", "PMO y revisiones de alcance"],
    indicadores: [
      { nombre: "Incidentes", Antes: 18, Después: 7 },
      { nombre: "Eficiencia", Antes: 60, Después: 85 },
      { nombre: "Calidad de info", Antes: 65, Después: 95 },
    ],
    lecciones: [
      "El compromiso visible de la alta dirección acelera adopción.",
      "Automatizar alertas reduce incidentes críticos.",
      "Capacitación en desarrollo seguro disminuye vulnerabilidades.",
    ],
  },
  textil: {
    nombre: "Textil del Valle S.A.",
    desc: "Exportadora textil que enfrenta riesgos de sostenibilidad, trazabilidad y tipo de cambio.",
    riesgos: ["Cadena de suministro", "Variación de precios e impuestos", "Cumplimiento ambiental"],
    controles: ["Contratos con SLA y auditorías a proveedores", "Coberturas financieras", "Medición de huella hídrica y carbono"],
    indicadores: [
      { nombre: "Incidentes", Antes: 15, Después: 6 },
      { nombre: "Eficiencia", Antes: 55, Después: 80 },
      { nombre: "Cumplimiento", Antes: 60, Después: 90 },
    ],
    lecciones: [
      "Diversificar proveedores reduce rupturas de inventario.",
      "Coberturas estabilizan márgenes ante volatilidad.",
      "Auditorías ambientales impulsan mejoras sostenibles.",
    ],
  },
};

export default function CasesSection({ innerRef }) {
  const [clave, setClave] = useState("tecnologia");
  const caso = useMemo(() => casos[clave], [clave]);

  return (
    <section id="casos" ref={innerRef} className="max-w-6xl mx-auto px-4">
      <div className="mb-6 flex items-center justify-between gap-3 flex-wrap">
        <div>
          <h2 className="text-3xl font-black text-emerald-700">Casos prácticos</h2>
          <p className="text-slate-600 text-sm">Compara resultados antes y después de implementar controles COSO.</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setClave("tecnologia")}
            className={`px-4 py-2 rounded-full text-sm font-semibold ${
              clave === "tecnologia" ? "bg-emerald-600 text-white" : "bg-slate-100"
            }`}
          >
            Tech Solution
          </button>
          <button
            onClick={() => setClave("textil")}
            className={`px-4 py-2 rounded-full text-sm font-semibold ${
              clave === "textil" ? "bg-emerald-600 text-white" : "bg-slate-100"
            }`}
          >
            Textil del Valle
          </button>
        </div>
      </div>
      <div className="bg-white rounded-2xl shadow border border-emerald-50 p-5 space-y-4">
        <div className="flex flex-col md:flex-row gap-5">
          <div className="flex-1 space-y-3">
            <h3 className="text-xl font-bold text-emerald-700">{caso.nombre}</h3>
            <p className="text-slate-700 text-sm">{caso.desc}</p>
            <div className="grid sm:grid-cols-2 gap-3 text-sm">
              <div className="p-3 rounded-xl bg-slate-50">
                <div className="font-semibold text-slate-800">Riesgos prioritarios</div>
                <ul className="mt-1 space-y-1">
                  {caso.riesgos.map((r) => (
                    <li key={r} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-3 rounded-xl bg-slate-50">
                <div className="font-semibold text-slate-800">Controles aplicados</div>
                <ul className="mt-1 space-y-1">
                  {caso.controles.map((r) => (
                    <li key={r} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-sky-500 rounded-full" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className="font-semibold text-slate-800">Lecciones aprendidas</div>
              <ul className="mt-2 space-y-1 text-sm text-slate-700">
                {caso.lecciones.map((l) => (
                  <li key={l} className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-1" />
                    {l}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="md:w-80 w-full h-64 bg-slate-50 rounded-xl p-3">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={caso.indicadores} margin={{ top: 10, right: 10, left: 0, bottom: 10 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="nombre" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Antes" fill="#f97316" radius={[6, 6, 0, 0]} />
                <Bar dataKey="Después" fill="#10b981" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
