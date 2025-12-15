const recursos = [
  {
    titulo: "COSO 2013 - Marco Integrado de Control Interno",
    link: "https://www.coso.org/Pages/ic.aspx",
    desc: "Documento base con 5 componentes y 17 principios.",
  },
  {
    titulo: "Resumen COSO ERM 2017",
    link: "https://www.coso.org/Pages/erm.aspx",
    desc: "Visión estratégica del riesgo alineada a desempeño y valor.",
  },
  {
    titulo: "Guía de auditoría interna (IIA)",
    link: "https://www.theiia.org/en/standards/",
    desc: "Buenas prácticas para supervisión y monitoreo continuo.",
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
            <a
              href={r.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex px-4 py-2 text-sm rounded-full bg-emerald-600 text-white font-semibold"
            >
              Abrir enlace
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
