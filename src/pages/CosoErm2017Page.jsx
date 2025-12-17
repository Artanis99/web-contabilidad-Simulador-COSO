import FrameworkContent from "../components/FrameworkContent";
import ErmSimulator from "../components/ErmSimulator";

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

        <div className="mt-6 grid lg:grid-cols-3 gap-3">
          <div className="lg:col-span-2 rounded-3xl border border-slate-200 bg-white p-5 sm:p-6">
            <div className="text-sm font-extrabold text-slate-900">Qué encontrarás aquí</div>
            <div className="mt-3 grid sm:grid-cols-3 gap-3 text-sm">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="text-xs font-bold text-slate-500">Bloque 1</div>
                <div className="font-extrabold text-indigo-900 mt-1">Marco ERM</div>
                <div className="text-xs text-slate-600 mt-1">Cultura, estrategia, desempeño y revisión.</div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="text-xs font-bold text-slate-500">Bloque 2</div>
                <div className="font-extrabold text-indigo-900 mt-1">Componentes</div>
                <div className="text-xs text-slate-600 mt-1">Principios con evidencias típicas.</div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="text-xs font-bold text-slate-500">Bloque 3</div>
                <div className="font-extrabold text-indigo-900 mt-1">Simuladores</div>
                <div className="text-xs text-slate-600 mt-1">Caso práctico + radar ERM.</div>
              </div>
            </div>
          </div>

          <a
            href="#/coso-2013"
            className="rounded-3xl border border-emerald-200/60 bg-gradient-to-br from-emerald-50 via-white to-cyan-50 p-5 sm:p-6 hover:border-emerald-200 transition"
          >
            <div className="text-xs font-bold text-slate-600">Base de control interno</div>
            <div className="mt-1 text-lg font-black text-emerald-900">COSO 2013</div>
            <div className="mt-2 text-sm text-slate-700">
              Ideal para diseñar y monitorear controles por procesos: 5 componentes y 17 principios.
            </div>
            <div className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-emerald-700">
              Ir a COSO 2013 <span aria-hidden="true">→</span>
            </div>
          </a>
        </div>
      </div>

      <div className="mt-10">
        <FrameworkContent
          frameworkId="cosoErm2017"
          idPrefix="cosoErm2017"
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

      <div className="mt-10">
        <ErmSimulator
          accent={{
            titleText: "text-indigo-700",
            rangeAccent: "accent-indigo-600",
            buttonGradient: "from-indigo-600 to-sky-600",
            panelBorder: "border-indigo-100",
            selectedButton: "bg-indigo-600 text-white border-indigo-700",
            unselectedButton: "bg-slate-50 border-slate-200 text-slate-800 hover:border-indigo-200",
            tableHeadText: "text-indigo-700",
          }}
        />
      </div>
    </div>
  );
}
