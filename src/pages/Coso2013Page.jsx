import FrameworkContent from "../components/FrameworkContent";

export default function Coso2013Page() {
  return (
    <div className="pt-20 pb-24">
      <div className="max-w-6xl mx-auto px-4">
        <a
          href="#/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur border border-slate-200 text-sm font-bold text-slate-700 hover:border-emerald-200"
        >
          <span aria-hidden="true">←</span> Volver al inicio
        </a>

        <div className="mt-6 rounded-3xl overflow-hidden border border-emerald-200/40 shadow-sm">
          <div className="bg-gradient-to-br from-emerald-700 via-emerald-600 to-cyan-600 text-white px-6 py-8 sm:px-10 sm:py-10">
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-white/90">
              <span className="px-3 py-1 rounded-full bg-white/15 border border-white/20">Control Interno</span>
              <span className="px-3 py-1 rounded-full bg-white/15 border border-white/20">Marco Integrado</span>
              <span className="px-3 py-1 rounded-full bg-white/15 border border-white/20">5 Componentes · 17 Principios</span>
            </div>
            <h1 className="mt-4 text-3xl sm:text-4xl font-black leading-tight">
              COSO 2013: guía práctica para diseñar, operar y monitorear controles
            </h1>
            <p className="mt-3 text-sm sm:text-base text-white/90 max-w-2xl">
              Usa este resumen para entender cada componente, revisar principios y simular niveles de madurez por área.
            </p>
          </div>
          <div className="bg-white px-6 py-5 sm:px-10">
            <div className="grid sm:grid-cols-3 gap-3 text-sm">
              <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-4">
                <div className="font-extrabold text-emerald-900">Operaciones</div>
                <div className="text-slate-700 text-xs mt-1">Eficiencia y efectividad</div>
              </div>
              <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-4">
                <div className="font-extrabold text-emerald-900">Información</div>
                <div className="text-slate-700 text-xs mt-1">Confiabilidad y oportunidad</div>
              </div>
              <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-4">
                <div className="font-extrabold text-emerald-900">Cumplimiento</div>
                <div className="text-slate-700 text-xs mt-1">Normas y regulaciones</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <FrameworkContent
          frameworkId="coso2013"
          accent={{
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
          }}
        />
      </div>
    </div>
  );
}
