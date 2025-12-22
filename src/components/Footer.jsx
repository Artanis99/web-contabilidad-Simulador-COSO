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

const memberColumns = [
  members.slice(0, 4),
  members.slice(4, 8),
  members.slice(8),
];

export default function Footer() {
  return (
    <footer className="mt-16 bg-[#7a1b27] text-white">
      <div className="max-w-6xl mx-auto px-4 py-10 grid gap-8 md:grid-cols-[1.1fr_2fr]">
        <div className="space-y-3">
          <div className="text-sm uppercase tracking-[0.3em] text-white/70 font-semibold">Integrantes</div>
          <div className="text-2xl font-black">Control Interno</div>
          <p className="text-sm text-white/80">
            Facultad de Ciencias Contables y Financieras · UNSAAC
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {memberColumns.map((column, idx) => (
            <div key={`column-${idx}`} className="space-y-2 text-sm text-white/90">
              {column.map((member) => (
                <div key={member} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#d7b162]" />
                  <span>{member}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="max-w-6xl mx-auto px-4 py-4 text-center text-xs text-white/80 font-semibold">
          © 2025 Universidad Nacional de San Antonio Abad del Cusco · Todos los derechos reservados
        </div>
      </div>
    </footer>
  );
}
