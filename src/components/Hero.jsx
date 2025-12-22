const learning = [
  "Cómo se conectan objetivos, riesgos, controles y evidencias.",
  "Diferencias clave entre COSO 2013 (Control Interno) y ERM 2017 (Riesgo + Estrategia).",
  "Cómo interpretar madurez y priorizar planes de acción.",
  "Cómo comunicar hallazgos a dirección (resumen ejecutivo y focos).",
];

const deliverables = [
  "Matriz de riesgos (inherente vs residual)",
  "Mapa de controles y evidencias",
  "Planes de mitigación (dueño, fecha, métrica)",
  "Tablero KPI/KRI y monitoreo",
];

export default function Hero({ innerRef, onStart }) {
  const scrollTo = (id) => {
    const node = document.getElementById(id);
    if (!node) return;
    node.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="inicio"
      ref={innerRef}
      className="pt-40 pb-16 px-4 bg-gradient-to-br from-[#0b1d3b] via-[#1f6b4a] to-[#c7a04a] text-white scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-5">
          <p className="text-xs uppercase tracking-[0.3em] text-white/70 font-semibold">
            Simulador Interactivo · COSO 2013 & COSO ERM 2017
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">
            Gestiona riesgos, visualiza brechas y prioriza acciones en minutos
          </h1>

          <div className="grid sm:grid-cols-2 gap-3">
            <div className="bg-white/10 border border-white/20 rounded-2xl p-4">
              <div className="text-xs font-bold text-white/80">Lo que aprenderás</div>
              <ul className="mt-3 space-y-2 text-sm">
                {learning.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-[6px] w-2 h-2 rounded-full bg-[#f3d37a]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-2xl p-4">
              <div className="text-xs font-bold text-white/80">Entregables típicos</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {deliverables.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-full text-xs bg-white/10 border border-white/20 text-white/90"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-3 text-xs text-white/70">
                Úsalos como checklist para auditoría interna, compliance o mejora de procesos.
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={onStart}
              className="px-6 py-3 rounded-full bg-[#f3d37a] text-[#0b1d3b] font-semibold shadow-lg hover:-translate-y-0.5 transition"
            >
              Ir al simulador
            </button>
            <a
              href="#/coso-2013"
              className="px-5 py-3 rounded-full border border-white/50 text-white font-semibold hover:bg-white/10 transition"
            >
              Ver COSO 2013
            </a>
            <a
              href="#/coso-erm-2017"
              className="px-5 py-3 rounded-full border border-white/50 text-white font-semibold hover:bg-white/10 transition"
            >
              Ver COSO ERM 2017
            </a>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => scrollTo("casos")}
              className="px-4 py-2 rounded-full bg-white/10 border border-white/25 text-sm font-semibold hover:bg-white/15 transition"
            >
              Ver casos
            </button>
            <button
              type="button"
              onClick={() => scrollTo("evaluacion")}
              className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-semibold hover:bg-white/15 transition"
            >
              Hacer evaluación
            </button>
            <button
              type="button"
              onClick={() => scrollTo("recursos")}
              className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-semibold hover:bg-white/15 transition"
            >
              Abrir recursos
            </button>
            <button
              type="button"
              onClick={() => scrollTo("videos")}
              className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-semibold hover:bg-white/15 transition"
            >
              Ver comparación
            </button>
          </div>
        </div>
        <div className="space-y-4">
          <div className="bg-white/15 border border-white/20 rounded-3xl p-4 sm:p-6 shadow-lg">
            <div className="text-sm text-white/90">
              Explora COSO 2013 (Control Interno) y COSO ERM 2017 (Riesgo + Estrategia + Desempeño) para entender
              cómo se conectan gobernanza, procesos, información, decisiones y monitoreo.
            </div>
            <div className="grid grid-cols-2 gap-4 mt-6 text-center text-sm">
              <div className="bg-white/10 rounded-2xl p-4">
                <div className="text-3xl font-black">5</div>
                Componentes COSO 2013
              </div>
              <div className="bg-white/10 rounded-2xl p-4">
                <div className="text-3xl font-black">17</div>
                Principios COSO 2013
              </div>
              <div className="bg-white/10 rounded-2xl p-4">
                <div className="text-3xl font-black">5</div>
                Componentes COSO ERM 2017
              </div>
              <div className="bg-white/10 rounded-2xl p-4">
                <div className="text-3xl font-black">20</div>
                Principios COSO ERM 2017
              </div>
            </div>
          </div>

          <div className="bg-white/15 border border-white/20 rounded-3xl p-4 sm:p-6 shadow-lg">
            <div className="text-sm font-extrabold text-white">¿Qué marco usar?</div>
            <div className="mt-3 grid sm:grid-cols-2 gap-3 text-sm">
              <a href="#/coso-2013" className="rounded-2xl bg-white/10 border border-white/20 p-4 hover:bg-white/15 transition">
                <div className="font-black">COSO 2013</div>
                <div className="text-white/80 text-xs mt-1">Cuando tu foco es procesos, controles y evidencia.</div>
                <ul className="mt-3 space-y-1 text-xs text-white/85">
                  <li>• Segregación, autorizaciones, conciliaciones</li>
                  <li>• Confiabilidad de información</li>
                  <li>• Cumplimiento y auditoría</li>
                </ul>
              </a>
              <a href="#/coso-erm-2017" className="rounded-2xl bg-white/10 border border-white/20 p-4 hover:bg-white/15 transition">
                <div className="font-black">COSO ERM 2017</div>
                <div className="text-white/80 text-xs mt-1">Cuando tu foco es estrategia, apetito y portafolio de riesgos.</div>
                <ul className="mt-3 space-y-1 text-xs text-white/85">
                  <li>• Decisiones bajo incertidumbre</li>
                  <li>• KRIs y desempeño</li>
                  <li>• Revisión y mejora continua</li>
                </ul>
              </a>
            </div>
            <div className="mt-3 text-xs text-white/70">
              Recomendación práctica: usa COSO 2013 para “aterrizar” controles y ERM 2017 para “alinear” riesgo con estrategia.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
