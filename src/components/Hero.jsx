const bullets = [
  "Control interno como columna vertebral de eficiencia, cumplimiento y transparencia.",
  "Alinea objetivos operacionales, de información y regulatorios con la estrategia.",
  "Integra a toda la organización: dirección, mandos medios y equipos operativos.",
  "COSO 2013 aporta 5 componentes y 17 principios como marco integrado.",
  "COSO ERM 2017 amplía la mirada al riesgo estratégico y desempeño.",
  "La gestión de riesgos es dinámica y se adapta a cambios del entorno.",
  "Evaluar, diseñar, implementar y monitorear: ciclo de mejora continua.",
  "Mapas de calor y radar ayudan a priorizar y comunicar brechas de control.",
  "Casos reales permiten aterrizar conceptos en decisiones prácticas.",
  "Tecnología y datos habilitan información y comunicación confiable.",
];

export default function Hero({ innerRef, onStart }) {
  return (
    <section
      id="inicio"
      ref={innerRef}
      className="pt-24 pb-16 px-4 bg-gradient-to-br from-emerald-600 via-cyan-600 to-sky-600 text-white"
    >
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-5">
          <p className="text-xs uppercase tracking-[0.3em] text-white/70 font-semibold">
            Simulador Interactivo de Control Interno y COSO 2013
          </p>
          <h1 className="text-4xl lg:text-5xl font-black leading-tight">
            Gestiona riesgos, visualiza brechas y prioriza acciones en minutos
          </h1>
          <ul className="grid sm:grid-cols-2 gap-2 text-sm bg-white/10 p-4 rounded-2xl shadow-inner">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-2">
                <span className="mt-[6px] w-2 h-2 rounded-full bg-emerald-200" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={onStart}
              className="px-6 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow-lg hover:-translate-y-0.5 transition"
            >
              Ir al simulador
            </button>
            <a
              href="#coso"
              className="px-5 py-3 rounded-full border border-white/50 text-white font-semibold hover:bg-white/10 transition"
            >
              Revisar evolución COSO
            </a>
          </div>
        </div>
        <div className="bg-white/15 border border-white/20 rounded-3xl p-6 shadow-lg">
          <div className="text-sm text-white/90">
            En esta SPA podrás navegar los componentes COSO 2013, comparar con COSO ERM 2017,
            simular apetito de riesgo y madurez, y ver resultados visuales en gráficos de calor y radar.
          </div>
          <div className="grid grid-cols-2 gap-4 mt-6 text-center text-sm">
            <div className="bg-white/10 rounded-2xl p-4">
              <div className="text-3xl font-black">5</div>
              Componentes COSO 2013
            </div>
            <div className="bg-white/10 rounded-2xl p-4">
              <div className="text-3xl font-black">17</div>
              Principios integrados
            </div>
            <div className="bg-white/10 rounded-2xl p-4">
              <div className="text-3xl font-black">2</div>
              Casos prácticos
            </div>
            <div className="bg-white/10 rounded-2xl p-4">
              <div className="text-3xl font-black">5</div>
              Preguntas de evaluación
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
