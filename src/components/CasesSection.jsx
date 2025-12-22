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
    <section id="casos" ref={innerRef} className="max-w-6xl mx-auto px-4 scroll-mt-24 mt-10">
      <div className="mb-6 flex items-center justify-between gap-3 flex-wrap">
        <div>
          <h2 className="text-3xl font-black text-[#0b1d3b]">Casos prácticos</h2>
          <p className="text-slate-600 text-sm">Compara resultados antes y después de implementar controles COSO.</p>
        </div>
        <div className="flex flex-wrap gap-2 w-full sm:w-auto">
          <button
            onClick={() => setClave("tecnologia")}
            className={`flex-1 sm:flex-none px-4 py-2 rounded-full text-sm font-semibold border ${
              clave === "tecnologia"
                ? "bg-[#1f6b4a] text-white border-transparent"
                : "bg-[#f3f0e8] text-[#0b1d3b] border-[#ead9b2]"
            }`}
          >
            Tech Solution
          </button>
          <button
            onClick={() => setClave("textil")}
            className={`flex-1 sm:flex-none px-4 py-2 rounded-full text-sm font-semibold border ${
              clave === "textil"
                ? "bg-[#1f6b4a] text-white border-transparent"
                : "bg-[#f3f0e8] text-[#0b1d3b] border-[#ead9b2]"
            }`}
          >
            Textil del Valle
          </button>
        </div>
      </div>
      <div className="bg-white rounded-2xl shadow border border-[#f0e2c1] p-4 sm:p-5 space-y-4">
        <div className="flex flex-col md:flex-row gap-5">
          <div className="flex-1 min-w-0 space-y-3">
            <h3 className="text-xl font-bold text-[#1f6b4a]">{caso.nombre}</h3>
            <p className="text-slate-700 text-sm">{caso.desc}</p>
            <div className="grid sm:grid-cols-2 gap-3 text-sm">
              <div className="p-3 rounded-xl bg-[#f7f2e6]">
                <div className="font-semibold text-slate-800">Riesgos prioritarios</div>
                <ul className="mt-1 space-y-1">
                  {caso.riesgos.map((r) => (
                    <li key={r} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#b11e2c] rounded-full" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-3 rounded-xl bg-[#f7f2e6]">
                <div className="font-semibold text-slate-800">Controles aplicados</div>
                <ul className="mt-1 space-y-1">
                  {caso.controles.map((r) => (
                    <li key={r} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#1f6b4a] rounded-full" />
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
                    <span className="w-2 h-2 bg-[#c7a04a] rounded-full mt-1" />
                    {l}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="md:w-80 w-full h-56 sm:h-64 bg-[#f7f2e6] rounded-xl p-3">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={caso.indicadores} margin={{ top: 10, right: 10, left: 0, bottom: 10 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="nombre" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Antes" fill="#b11e2c" radius={[6, 6, 0, 0]} />
                <Bar dataKey="Después" fill="#1f6b4a" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
