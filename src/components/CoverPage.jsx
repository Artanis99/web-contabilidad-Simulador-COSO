const members = [
  "Ayme Percca Dany Javier",
  "Bocangelino Ccante Rony Aldair",
  "Garcia Cuba Carlos",
  "Huamán Huallpayunca Ruth Ángela",
  "Lechuga Morveli Willy Augusto",
  "Minaya Saca Maibely Yubisa",
  "Olaya Medina Jhazziely Karito",
  "Pauccar Paucar Jackeline",
  "Peña Ocon Ruth Ester",
  "Vargas Avalos Frank Jesus",
  "Vargas Quispe Judith Miluska",
];

export default function CoverPage({ innerRef }) {
  return (
    <section
      id="inicio"
      ref={innerRef}
      className="relative overflow-hidden pt-28 pb-16 px-4 text-white bg-gradient-to-br from-[#0b1d3b] via-[#1f6b4a] to-[#b11e2c] scroll-mt-24"
    >
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -top-24 -left-16 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-black/20 blur-3xl" />
        <div className="absolute inset-y-0 left-1/2 w-px bg-white/20 hidden lg:block" />
      </div>

      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
        <div className="space-y-6">
          <div className="text-xs uppercase tracking-[0.35em] text-white/70 font-semibold">Carátula</div>
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl font-black leading-tight">
              Universidad Nacional de San Antonio Abad del Cusco
            </h1>
            <p className="text-lg sm:text-xl font-semibold text-white/90">
              Facultad de Ciencias Contables y Financieras
            </p>
            <p className="text-base sm:text-lg font-semibold">
              Curso: <span className="text-white/90">Control Interno</span>
            </p>
          </div>

          <div className="bg-white/10 border border-white/20 rounded-3xl p-5 sm:p-6 shadow-lg">
            <div className="text-sm uppercase tracking-[0.3em] text-white/70 font-semibold">Integrantes</div>
            <div className="mt-4 grid sm:grid-cols-2 gap-2 text-sm sm:text-base">
              {members.map((member) => (
                <div key={member} className="rounded-xl bg-white/10 border border-white/15 px-3 py-2">
                  {member}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="bg-white/12 border border-white/25 rounded-[2.5rem] p-6 sm:p-8 shadow-2xl">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <img
                src="/imagenes/Escudo_UNSAAC.png"
                alt="Escudo de la UNSAAC"
                className="h-56 w-auto sm:h-64 lg:h-72 drop-shadow-[0_20px_35px_rgba(0,0,0,0.35)]"
              />
              <img
                src="/imagenes/descarga.png"
                alt="Logo de la Facultad de Ciencias Contables y Financieras"
                className="h-28 w-auto sm:h-32 lg:h-36 drop-shadow-[0_12px_24px_rgba(0,0,0,0.25)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
