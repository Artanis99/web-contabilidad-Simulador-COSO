import FrameworkContent from "../components/FrameworkContent";

export default function CosoErm2017Page() {
  return (
    <div className="pt-20 pb-24">
      <div className="max-w-6xl mx-auto px-4">
        <a
          href="#/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur border border-slate-200 text-sm font-bold text-slate-700 hover:border-indigo-200"
        >
          <span aria-hidden="true">←</span> Volver al inicio
        </a>

        <div className="mt-6 rounded-3xl overflow-hidden border border-indigo-200/40 shadow-sm">
          <div className="bg-gradient-to-br from-indigo-700 via-violet-600 to-sky-600 text-white px-6 py-8 sm:px-10 sm:py-10">
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-white/90">
              <span className="px-3 py-1 rounded-full bg-white/15 border border-white/20">ERM</span>
              <span className="px-3 py-1 rounded-full bg-white/15 border border-white/20">Estrategia y Desempeño</span>
              <span className="px-3 py-1 rounded-full bg-white/15 border border-white/20">5 Componentes · 20 Principios</span>
            </div>
            <h1 className="mt-4 text-3xl sm:text-4xl font-black leading-tight">
              COSO ERM 2017: integra riesgo, estrategia y desempeño
            </h1>
            <p className="mt-3 text-sm sm:text-base text-white/90 max-w-2xl">
              Explora gobernanza y cultura, objetivos, desempeño, revisión y comunicación para tomar decisiones con una visión integral del riesgo.
            </p>
          </div>
          <div className="bg-white px-6 py-5 sm:px-10">
            <div className="grid sm:grid-cols-3 gap-3 text-sm">
              <div className="rounded-2xl border border-indigo-100 bg-indigo-50 p-4">
                <div className="font-extrabold text-indigo-900">Gobernanza</div>
                <div className="text-slate-700 text-xs mt-1">Cultura y conducta</div>
              </div>
              <div className="rounded-2xl border border-indigo-100 bg-indigo-50 p-4">
                <div className="font-extrabold text-indigo-900">Estrategia</div>
                <div className="text-slate-700 text-xs mt-1">Objetivos y apetito</div>
              </div>
              <div className="rounded-2xl border border-indigo-100 bg-indigo-50 p-4">
                <div className="font-extrabold text-indigo-900">Desempeño</div>
                <div className="text-slate-700 text-xs mt-1">Identificar y responder</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <FrameworkContent
          frameworkId="cosoErm2017"
          accent={{
            primaryText: "text-indigo-700",
            primaryTextStrong: "text-indigo-900",
            dot: "bg-indigo-500",
            chipBg: "bg-indigo-50",
            chipBorder: "border-indigo-100",
            buttonBorderHover: "hover:border-indigo-200",
            panelBorder: "border-indigo-100",
            rangeAccent: "accent-indigo-600",
            chartActualStroke: "#6366f1",
            chartActualFill: "#6366f1",
            chartBaseStroke: "#94a3b8",
            chartBaseFill: "#94a3b8",
          }}
        />
      </div>
    </div>
  );
}
