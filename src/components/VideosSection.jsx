export default function VideosSection({ innerRef }) {
  return (
    <section id="videos" ref={innerRef} className="max-w-6xl mx-auto px-4 scroll-mt-24">
      <div className="mb-6">
        <h2 className="text-3xl font-black text-[#0b1d3b]">Videos</h2>
        <p className="text-slate-600 text-sm">Videos para reforzar similitudes, diferencias y aplicación práctica.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="aspect-video rounded-2xl overflow-hidden shadow-lg border border-[#f0e2c1]">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/28wBe_6BBEQ"
            title="Comparación COSO 2013 y COSO ERM 2017 (1)"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="aspect-video rounded-2xl overflow-hidden shadow-lg border border-[#f0e2c1]">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/a_n4uSWaZGM"
            title="Comparación COSO 2013 y COSO ERM 2017 (2)"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
