import { useEffect, useMemo, useState } from "react";
import { frameworks } from "../data/cosoFrameworks";
import { Legend, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer } from "recharts";

const defaultAccent = {
  primaryText: "text-emerald-700",
  primaryTextStrong: "text-emerald-900",
  dot: "bg-emerald-500",
  chipBg: "bg-emerald-50",
  chipBorder: "border-emerald-100",
  buttonBorderHover: "hover:border-emerald-200",
  panelBorder: "border-emerald-100",
  rangeAccent: "accent-emerald-600",
  chartActualStroke: "#10b981",
  chartActualFill: "#10b981",
  chartBaseStroke: "#94a3b8",
  chartBaseFill: "#94a3b8",
};

function scoreLabel(score, accent) {
  if (score >= 75) return { label: "Robusto", color: `${accent.primaryText} ${accent.chipBg} ${accent.chipBorder}` };
  if (score >= 50) return { label: "En desarrollo", color: "text-sky-700 bg-sky-50 border-sky-100" };
  return { label: "Crítico", color: "text-orange-700 bg-orange-50 border-orange-100" };
}

function InfoCard({ title, children }) {
  return (
    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-2">
      <div className="font-extrabold text-slate-900">{title}</div>
      <div className="text-sm text-slate-700">{children}</div>
    </div>
  );
}

export default function FrameworkContent({ frameworkId, accent = defaultAccent }) {
  const selectedFramework = useMemo(
    () => frameworks.find((framework) => framework.id === frameworkId) ?? frameworks[0],
    [frameworkId]
  );

  const [openComponentKey, setOpenComponentKey] = useState(null);
  const [caseId, setCaseId] = useState(selectedFramework?.cases?.[0]?.id ?? "");

  const selectedCase = useMemo(
    () => selectedFramework.cases.find((oneCase) => oneCase.id === caseId) ?? selectedFramework.cases[0],
    [caseId, selectedFramework]
  );

  const [scoresByComponent, setScoresByComponent] = useState(selectedCase?.baseline ?? {});

  useEffect(() => {
    setCaseId(selectedFramework?.cases?.[0]?.id ?? "");
    setOpenComponentKey(null);
  }, [selectedFramework?.id]);

  useEffect(() => {
    setScoresByComponent(selectedCase?.baseline ?? {});
  }, [selectedCase?.id]);

  const componentScores = selectedFramework.components.map((component) => ({
    component,
    score: Number(scoresByComponent[component.key] ?? 0),
  }));

  const radarData = useMemo(() => {
    const baseline = selectedCase?.baseline ?? {};
    return selectedFramework.components.map((component) => ({
      subject: component.name,
      base: Number(baseline[component.key] ?? 0),
      actual: Number(scoresByComponent[component.key] ?? 0),
    }));
  }, [scoresByComponent, selectedCase?.baseline, selectedFramework.components]);

  const overallScore = Math.round(
    componentScores.reduce((sum, item) => sum + item.score, 0) / Math.max(1, componentScores.length)
  );

  const lowestComponents = [...componentScores]
    .sort((a, b) => a.score - b.score)
    .slice(0, 2)
    .map((item) => item.component);

  const overallBadge = scoreLabel(overallScore, accent);
  const overview = selectedFramework.overview;

  return (
    <section className="max-w-6xl mx-auto px-4">
      <div className={`bg-white rounded-2xl shadow border ${accent.panelBorder} p-4 sm:p-6 space-y-8`}>
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div className="space-y-1 min-w-0">
            <h2 className={`text-3xl font-black ${accent.primaryText}`}>{selectedFramework.title}</h2>
            <p className="text-sm text-slate-600">{selectedFramework.components.length} componentes agrupando principios.</p>
          </div>
          <div className={`px-3 py-2 rounded-xl border text-sm font-bold ${overallBadge.color}`}>
            Diagnóstico (simulador): {overallScore}% — {overallBadge.label}
          </div>
        </div>

        {overview && (
          <div className="grid md:grid-cols-2 gap-4">
            <InfoCard title="¿Qué es?">{overview.what}</InfoCard>
            <InfoCard title="Ideas clave">
              <ul className="space-y-1">
                {overview.keyIdeas?.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className={`mt-2 w-1.5 h-1.5 rounded-full ${accent.dot}`} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </InfoCard>
            {overview.objectives && (
              <InfoCard title="Objetivos">
                <div className="space-y-2">
                  {overview.objectives.map((o) => (
                    <div key={o.title} className="bg-white rounded-xl border border-slate-200 p-3">
                      <div className={`font-bold ${accent.primaryText}`}>{o.title}</div>
                      <div className="text-sm text-slate-700">{o.detail}</div>
                    </div>
                  ))}
                </div>
              </InfoCard>
            )}
            {overview.howItConnects && (
              <InfoCard title="Cómo se conecta">
                <div className="space-y-2">
                  {overview.howItConnects.map((o) => (
                    <div key={o.title} className="bg-white rounded-xl border border-slate-200 p-3">
                      <div className={`font-bold ${accent.primaryText}`}>{o.title}</div>
                      <div className="text-sm text-slate-700">{o.detail}</div>
                    </div>
                  ))}
                </div>
              </InfoCard>
            )}
            {overview.limitations && (
              <InfoCard title="Limitaciones (seguridad razonable)">
                <ul className="space-y-1">
                  {overview.limitations.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-slate-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </InfoCard>
            )}
          </div>
        )}

        <div className="space-y-3">
          <div className="flex items-end justify-between gap-2 flex-wrap">
            <div>
              <div className="text-lg font-extrabold text-slate-900">Componentes</div>
              <div className="text-xs text-slate-500">Qué cubre cada componente.</div>
            </div>
            <div className="text-xs text-slate-500">Tip: abre un componente para ver sus principios.</div>
          </div>
          <div className="grid md:grid-cols-2 gap-3">
            {selectedFramework.components.map((component) => (
              <button
                key={component.key}
                type="button"
                onClick={() => setOpenComponentKey((prev) => (prev === component.key ? null : component.key))}
                className={[
                  "text-left bg-slate-50 border border-slate-200 rounded-2xl p-4 transition",
                  accent.buttonBorderHover,
                ].join(" ")}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className={`font-bold ${accent.primaryText}`}>{component.name}</div>
                    <div className="text-sm text-slate-700 mt-1">{component.description}</div>
                  </div>
                  <div className="text-xs font-bold text-slate-600 whitespace-nowrap">
                    {component.principles.length} principios
                  </div>
                </div>
                {openComponentKey === component.key && (
                  <div className="mt-3 pt-3 border-t border-slate-200">
                    <div className="text-xs font-bold text-slate-700 mb-2">Principios</div>
                    <ul className="space-y-2 text-sm text-slate-700">
                      {component.principles.map((principle) => (
                        <li key={`${component.key}-${principle.id}`} className="flex items-start gap-2">
                          <span className={`mt-1 w-2 h-2 rounded-full ${accent.dot}`} />
                          <span>
                            <span className="font-semibold">P{principle.id}.</span> {principle.title}
                            {principle.meaning && (
                              <div className="mt-1 text-xs text-slate-600">{principle.meaning}</div>
                            )}
                            {principle.examples?.length ? (
                              <div className="mt-2 flex flex-wrap gap-2">
                                {principle.examples.slice(0, 3).map((ex) => (
                                  <span
                                    key={`${component.key}-${principle.id}-${ex}`}
                                    className="px-2 py-1 rounded-full text-[11px] bg-white border border-slate-200 text-slate-700"
                                  >
                                    {ex}
                                  </span>
                                ))}
                              </div>
                            ) : null}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <div className="text-lg font-extrabold text-slate-900">Simulador de caso práctico</div>
            <div className="text-sm text-slate-600">
              Selecciona un caso y ajusta el nivel (0–100) por componente para ver focos de mejora.
            </div>
          </div>

          {selectedFramework.riskResponses?.length ? (
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-4">
              <div className="text-sm font-extrabold text-slate-800 mb-2">Respuestas al riesgo (guía rápida)</div>
              <div className="grid md:grid-cols-5 gap-2">
                {selectedFramework.riskResponses.map((r) => (
                  <div key={r.title} className="bg-white rounded-xl border border-slate-200 p-3">
                    <div className={`font-bold ${accent.primaryText} text-sm`}>{r.title}</div>
                    <div className="text-xs text-slate-600 mt-1">{r.detail}</div>
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          <div className="grid lg:grid-cols-3 gap-4">
            <div className="lg:col-span-1 bg-slate-50 rounded-2xl border border-slate-200 p-4 space-y-3">
              <label className="text-sm font-bold text-slate-700">Caso</label>
              <select
                value={caseId}
                onChange={(event) => setCaseId(event.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-white text-sm"
              >
                {selectedFramework.cases.map((oneCase) => (
                  <option key={oneCase.id} value={oneCase.id}>
                    {oneCase.title}
                  </option>
                ))}
              </select>

              <div className="space-y-2">
                <div className={`text-sm font-bold ${accent.primaryText}`}>{selectedCase.title}</div>
                <p className="text-sm text-slate-700">{selectedCase.situation}</p>
                <div className="text-xs font-bold text-slate-600">Señales</div>
                <ul className="space-y-1 text-xs text-slate-700">
                  {selectedCase.signals.map((signal) => (
                    <li key={signal} className="flex items-start gap-2">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-slate-500" />
                      <span>{signal}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                type="button"
                onClick={() => setScoresByComponent(selectedCase.baseline)}
                className={[
                  "w-full px-4 py-2 rounded-xl bg-white border border-slate-200 text-sm font-bold text-slate-700",
                  accent.buttonBorderHover,
                ].join(" ")}
              >
                Restaurar valores del caso
              </button>
            </div>

            <div className={`lg:col-span-2 bg-white rounded-2xl border ${accent.panelBorder} p-4 space-y-4`}>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex items-start justify-between gap-3 flex-wrap">
                  <div>
                    <div className={`text-sm font-extrabold ${accent.primaryTextStrong}`}>Radar de madurez</div>
                    <div className="text-xs text-slate-600">Comparación entre línea base del caso y ajuste actual.</div>
                  </div>
                  <div className={`px-3 py-2 rounded-xl border text-sm font-bold ${overallBadge.color}`}>
                    {overallScore}% — {overallBadge.label}
                  </div>
                </div>

                <div className="mt-4 h-72 sm:h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart data={radarData}>
                      <PolarGrid />
                      <PolarAngleAxis dataKey="subject" tick={{ fontSize: 11, fill: "#334155" }} />
                      <PolarRadiusAxis angle={45} domain={[0, 100]} tick={{ fontSize: 10, fill: "#64748b" }} />
                      <Radar
                        name="Actual"
                        dataKey="actual"
                        stroke={accent.chartActualStroke}
                        fill={accent.chartActualFill}
                        fillOpacity={0.22}
                      />
                      <Radar
                        name="Base (caso)"
                        dataKey="base"
                        stroke={accent.chartBaseStroke}
                        fill={accent.chartBaseFill}
                        fillOpacity={0.12}
                      />
                      <Legend />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {selectedFramework.components.map((component) => {
                  const value = Number(scoresByComponent[component.key] ?? 0);
                  return (
                    <div key={component.key} className="bg-slate-50 rounded-2xl border border-slate-200 p-4">
                      <div className="flex items-start justify-between gap-3">
                        <div className="font-bold text-slate-800">{component.name}</div>
                        <div className="text-xs font-bold text-slate-700">{value}%</div>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={value}
                        onChange={(event) =>
                          setScoresByComponent((prev) => ({
                            ...prev,
                            [component.key]: Number(event.target.value),
                          }))
                        }
                        className={`w-full mt-3 ${accent.rangeAccent}`}
                      />
                      <div className="mt-2 text-xs text-slate-600">
                        {value >= 75 ? "Fuerte" : value >= 50 ? "Intermedio" : "Débil"}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 space-y-3">
                <div className="flex items-start justify-between gap-3 flex-wrap">
                  <div>
                    <div className="text-sm font-extrabold text-slate-800">Focos sugeridos</div>
                    <div className="text-xs text-slate-600">Basado en los 2 componentes con menor puntaje.</div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-3">
                  {lowestComponents.map((component) => (
                    <div key={`focus-${component.key}`} className="bg-white rounded-2xl border border-slate-200 p-4">
                      <div className={`font-bold ${accent.primaryText} mb-2`}>{component.name}</div>
                      <ul className="space-y-2 text-sm text-slate-700">
                        {component.principles.slice(0, 4).map((principle) => (
                          <li key={`focus-${component.key}-${principle.id}`} className="flex items-start gap-2">
                            <span className={`mt-1 w-2 h-2 rounded-full ${accent.dot}`} />
                            <span>
                              <span className="font-semibold">P{principle.id}.</span> {principle.title}
                            </span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-3 text-xs text-slate-500">
                        Revisa y define acciones concretas para evidenciar estos principios.
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
