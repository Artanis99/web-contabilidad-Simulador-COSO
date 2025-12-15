import { ScatterChart, CartesianGrid, XAxis, YAxis, Tooltip, Scatter, ResponsiveContainer } from "recharts";
import { useMemo } from "react";

const palette = {
  Operativo: "#ef4444",
  Financiero: "#f59e0b",
  Cumplimiento: "#10b981",
  Estratégico: "#8b5cf6",
};

const mock = [
  { nombre: "Caída de ERP", prob: 72, impacto: 68, tipo: "Operativo", desc: "Interrupción de procesos críticos" },
  { nombre: "Fraude interno", prob: 38, impacto: 70, tipo: "Financiero", desc: "Manipulación de gastos" },
  { nombre: "Sanción regulatoria", prob: 28, impacto: 86, tipo: "Cumplimiento", desc: "Incumplimiento normativo" },
  { nombre: "Pérdida de mercado", prob: 52, impacto: 90, tipo: "Estratégico", desc: "Entrada de competidores" },
  { nombre: "Error de inventario", prob: 60, impacto: 48, tipo: "Operativo", desc: "Conteo y registro incorrecto" },
  { nombre: "Tipo de cambio", prob: 35, impacto: 58, tipo: "Financiero", desc: "Volatilidad cambiaria" },
  { nombre: "Ciberataque", prob: 50, impacto: 95, tipo: "Cumplimiento", desc: "Exposición de datos sensibles" },
  { nombre: "Proyecto fallido", prob: 44, impacto: 65, tipo: "Estratégico", desc: "Ejecución deficiente" },
  { nombre: "Accidente laboral", prob: 58, impacto: 55, tipo: "Operativo", desc: "Protocolos de seguridad incompletos" },
  { nombre: "Licencia vencida", prob: 65, impacto: 40, tipo: "Cumplimiento", desc: "Documentación desactualizada" },
  { nombre: "Alianza fallida", prob: 32, impacto: 62, tipo: "Estratégico", desc: "Socios no alineados" },
  { nombre: "Liquidez ajustada", prob: 26, impacto: 57, tipo: "Financiero", desc: "Flujo de efectivo limitado" },
];

export default function RiskHeatMap({ innerRef, selection, onSelect }) {
  const data = useMemo(() => mock, []);

  return (
    <section id="riesgos" ref={innerRef} className="max-w-6xl mx-auto px-4 scroll-mt-24">
      <div className="mb-6 flex items-center justify-between gap-3 flex-wrap">
        <div>
          <h2 className="text-3xl font-black text-emerald-700">Mapa de calor de riesgos</h2>
          <p className="text-slate-600 text-sm">Haz clic en una burbuja para ver descripción y controles sugeridos.</p>
        </div>
      </div>
      <div className="grid md:grid-cols-[2fr_1fr] gap-6">
        <div className="bg-white rounded-2xl shadow border border-emerald-50 p-4">
          <div className="h-72 sm:h-96">
            <ResponsiveContainer width="100%" height="100%">
              <ScatterChart margin={{ top: 10, right: 12, bottom: 20, left: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                type="number"
                dataKey="prob"
                name="Probabilidad"
                domain={[0, 100]}
                tick={{ fontSize: 11 }}
                tickFormatter={(v) => `${v}%`}
              />
              <YAxis
                type="number"
                dataKey="impacto"
                name="Impacto"
                domain={[0, 100]}
                tick={{ fontSize: 11 }}
                tickFormatter={(v) => `${v}%`}
              />
              <Tooltip cursor={{ strokeDasharray: "3 3" }} formatter={(value, name) => [`${value}%`, name]} />
              {Object.keys(palette).map((tipo) => (
                <Scatter
                  key={tipo}
                  name={tipo}
                  data={data.filter((d) => d.tipo === tipo)}
                  fill={palette[tipo]}
                  onClick={(d) => onSelect(d.payload)}
                />
              ))}
              </ScatterChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-wrap gap-3 mt-3 text-xs">
            {Object.entries(palette).map(([tipo, color]) => (
              <span key={tipo} className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100">
                <span className="w-3 h-3 rounded-full" style={{ background: color }} />
                {tipo}
              </span>
            ))}
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow border border-emerald-50 p-4 sm:p-5">
          <h3 className="text-lg font-bold text-emerald-700 mb-2">Detalle del riesgo</h3>
          {selection ? (
            <div className="space-y-2 text-sm text-slate-700">
              <div className="font-bold text-xl">{selection.nombre}</div>
              <p>{selection.desc}</p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700">
                  Tipo: {selection.tipo}
                </span>
                <span className="px-3 py-1 rounded-full bg-sky-100 text-sky-700">
                  Prob: {selection.prob}%
                </span>
                <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-700">
                  Impacto: {selection.impacto}%
                </span>
              </div>
              <div className="mt-3 text-sm bg-emerald-50 p-3 rounded-xl">
                Controles sugeridos: reforzar monitoreo, automatizar alertas, capacitar equipos y establecer planes de contingencia.
              </div>
            </div>
          ) : (
            <p className="text-slate-500 text-sm">Selecciona un riesgo para ver recomendaciones.</p>
          )}
        </div>
      </div>
    </section>
  );
}
