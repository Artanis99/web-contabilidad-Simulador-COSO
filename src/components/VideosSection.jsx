export default function VideosSection({ innerRef }) {
  return (
    <section id="videos" ref={innerRef} className="max-w-6xl mx-auto px-4">
      <div className="mb-6">
        <h2 className="text-3xl font-black text-emerald-700">Videos recomendados</h2>
        <p className="text-slate-600 text-sm">Complementa con explicaciones visuales de COSO y ERM.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="aspect-video rounded-2xl overflow-hidden shadow-lg border border-emerald-50">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="COSO 2013"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="aspect-video rounded-2xl overflow-hidden shadow-lg border border-emerald-50">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/oHg5SJYRHA0"
            title="ERM y estrategia"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
