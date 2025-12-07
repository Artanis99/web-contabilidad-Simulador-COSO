import { useMemo, useState } from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend } from "recharts";

const industrias = ["Tecnología", "Textil", "Servicios", "Sector Público"];
const enfoques = ["Conservador", "Equilibrado", "Agresivo"];

export default function ErmSimulator({ innerRef }) {
  const [apetito, setApetito] = useState(5);
  const [enfoque, setEnfoque] = useState("Equilibrado");
  const [industria, setIndustria] = useState(industrias[0]);
  const [inversion, setInversion] = useState(5);
  const [resultado, setResultado] = useState(null);

  const calcular = () => {
    const factorEnfoque = enfoque === "Conservador" ? 0.9 : enfoque === "Agresivo" ? 1.1 : 1;
    const base = {
      "Ambiente de Control": 55 + inversion * 4 - apetito * 1.5,
      "Evaluación de Riesgos": 50 + apetito * 5 * factorEnfoque,
      "Actividades de Control": 52 + inversion * 4 - (apetito > 7 ? 4 : 0),
      "Información y Comunicación": 50 + inversion * 3,
      Monitoreo: 48 + inversion * 3 + (enfoque === "Conservador" ? 6 : 0),
    };
    const datos = Object.entries(base).map(([comp, val]) => {
      const actual = Math.min(100, Math.max(25, Math.round(val)));
      const objetivo = Math.min(100, Math.max(actual + 12, actual + (10 - Math.min(apetito, 8))));
      return { comp, actual, objetivo };
    });
    setResultado({ datos });
  };

  const radarData = useMemo(() => {
    if (!resultado) return [];
    return resultado.datos.map((d) => ({ subject: d.comp, actual: d.actual, objetivo: d.objetivo }));
  }, [resultado]);

  return (
    <section id="simulador" ref={innerRef} className="max-w-6xl mx-auto px-4">
      <div className="mb-6 flex items-center justify-between flex-wrap gap-3">
        <div>
          <h2 className="text-3xl font-black text-emerald-700">Simulador ERM y componentes COSO</h2>
          <p className="text-slate-600 text-sm">Ajusta apetito al riesgo, enfoque estratégico e inversión para ver el radar de madurez.</p>
        </div>
      </div>
      <div className="grid lg:grid-cols-[1.1fr_1fr] gap-6">
        <div className="bg-white rounded-2xl shadow border border-emerald-50 p-5 space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">Apetito al Riesgo: {apetito}</label>
            <input
              type="range"
              min="1"
              max="10"
              value={apetito}
              onChange={(e) => setApetito(Number(e.target.value))}
              className="w-full accent-emerald-600"
            />
            <div className="flex justify-between text-xs text-slate-500"><span>Bajo</span><span>Alto</span></div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">Enfoque Estratégico</label>
            <div className="grid sm:grid-cols-3 gap-2">
              {enfoques.map((e) => (
                <button
                  key={e}
                  onClick={() => setEnfoque(e)}
                  className={`rounded-xl px-4 py-3 font-semibold border transition ${
                    enfoque === e ? "bg-emerald-600 text-white border-emerald-700" : "bg-slate-50 border-slate-200"
                  }`}
                >
                  {e}
                </button>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">Inversión en capacidades de ERM: {inversion}</label>
            <input
              type="range"
              min="1"
              max="10"
              value={inversion}
              onChange={(e) => setInversion(Number(e.target.value))}
              className="w-full accent-emerald-600"
            />
            <div className="flex justify-between text-xs text-slate-500"><span>Mínima</span><span>Máxima</span></div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">Industria</label>
            <select
              value={industria}
              onChange={(e) => setIndustria(e.target.value)}
              className="w-full border rounded-xl px-3 py-2 text-sm"
            >
              {industrias.map((i) => (
                <option key={i}>{i}</option>
              ))}
            </select>
          </div>
          <button
            onClick={calcular}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold shadow-lg hover:-translate-y-0.5 transition"
          >
            Calcular riesgos
          </button>
          <div className="text-xs text-slate-500">Industria: {industria}. Ajusta sliders y botones para ver el efecto en cada componente.</div>
        </div>
        <div className="bg-white rounded-2xl shadow border border-emerald-50 p-5">
          <h3 className="text-lg font-bold text-emerald-700 mb-3">Radar de madurez</h3>
          {resultado ? (
            <>
              <ResponsiveContainer width="100%" height={280}>
                <RadarChart data={radarData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="subject" />
                  <PolarRadiusAxis angle={45} domain={[0, 100]} />
                  <Radar name="Actual" dataKey="actual" stroke="#2563eb" fill="#2563eb" fillOpacity={0.3} />
                  <Radar name="Objetivo" dataKey="objetivo" stroke="#22c55e" fill="#22c55e" fillOpacity={0.2} />
                  <Legend />
                </RadarChart>
              </ResponsiveContainer>
              <div className="mt-4 overflow-x-auto">
                <table className="min-w-full text-sm">
                  <thead>
                    <tr className="text-left text-emerald-700">
                      <th className="py-2">Componente</th>
                      <th className="py-2">Actual %</th>
                      <th className="py-2">Objetivo %</th>
                      <th className="py-2">Acción sugerida</th>
                    </tr>
                  </thead>
                  <tbody>
                    {resultado.datos.map((row) => (
                      <tr key={row.comp} className="border-t">
                        <td className="py-2 font-semibold">{row.comp}</td>
                        <td className="py-2">{row.actual}%</td>
                        <td className="py-2">{row.objetivo}%</td>
                        <td className="py-2 text-slate-600">
                          {row.actual >= row.objetivo - 5
                            ? "Mantener controles y monitoreo."
                            : "Incrementar recursos, automatizar y reforzar capacitación."}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          ) : (
            <p className="text-slate-500 text-sm">Configura parámetros y presiona "Calcular riesgos".</p>
          )}
        </div>
      </div>
    </section>
  );
}
