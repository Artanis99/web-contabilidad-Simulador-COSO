const recursos = [
  {
    titulo: "COSO (2013) — Internal Control - Integrated Framework",
    link: "https://www.coso.org/Documents/2013-Internal-Control-Integrated-Framework.pdf",
    desc: "Committee of Sponsoring Organizations of the Treadway Commission. (2013). Internal Control - Integrated Framework. COSO.",
  },
  {
    titulo: "COSO (2017) — Enterprise Risk Management (Executive Summary)",
    link: "https://www.coso.org/Documents/2017-COSO-ERM-Integrating-with-Strategy-and-Performance-Executive-Summary.pdf",
    desc: "Committee of Sponsoring Organizations of the Treadway Commission. (2017). Enterprise Risk Management.",
  },
  {
    titulo: "D'Aquila (2016) — COSO’s updated Internal Control–Integrated Framework",
    link: "https://www.cpajournal.com/",
    desc: "D'Aquila. (2016). COSOs updated Internal ControlIntegrated Framework: Are you ready?",
  },
  {
    titulo: "Franco Payano et al. (2017) — Control interno basado en COSO",
    link: "https://repositorioacademico.upc.edu.pe/bitstream/handle/10757/621970/Franco_PK.pdf?sequence=5",
    desc: "Franco Payano, K., Roman Velarde, D., & Trisollini Vera, E. (2017). EL SISTEMA DE CONTROL INTERNO BASADO EN EL MODELO COSO Y SU INFLUENCIA EN LA PROFESIONALIZACION PARA LAS EMPRESAS DE BUSES PANORAMICOS EN LIMA METROPOLITANA.",
  },
  {
    titulo: "Lindao et al. (2019) — Planeación estratégica y creación de valor",
    link: "https://uees.edu.ec/descargas/libros/2019/planeacion-estrategica-de-las-organizaciones.pdf",
    desc: "Lindao, M., Pinoargote, J., & Holguín, J. (2019). Planeación Estratégica y la Creación de Valor en las Organizaciones.",
  },
  {
    titulo: "Miles et al. (2017) — Resumen ejecutivo COSO ERM (ES)",
    link: "https://iaiecuador.org/documentos/Resumen_ejecutivo_cosoERM.pdf",
    desc: "Miles, E., Chesley, D., & Martens, F. (2017). Gestión del Riesgo Empresarial Integrado Estrategia y Desempeño.",
  },
];

export default function ResourcesSection({ innerRef }) {
  return (
    <section id="recursos" ref={innerRef} className="max-w-6xl mx-auto px-4 scroll-mt-24">
      <div className="mb-6">
        <h2 className="text-3xl font-black text-emerald-700">Recursos y bibliografía</h2>
        <p className="text-slate-600 text-sm">Accede a marcos y guías esenciales para profundizar.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {recursos.map((r) => (
          <div key={r.titulo} className="bg-white rounded-2xl shadow border border-emerald-50 p-4 space-y-2">
            <div className="font-bold text-emerald-700">{r.titulo}</div>
            <p className="text-sm text-slate-700">{r.desc}</p>
            {r.link ? (
              <a
                href={r.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex px-4 py-2 text-sm rounded-full bg-emerald-600 text-white font-semibold"
              >
                Abrir enlace
              </a>
            ) : (
              <div className="text-xs text-slate-500">Sin enlace</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
