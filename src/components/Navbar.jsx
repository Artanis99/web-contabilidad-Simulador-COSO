export default function Navbar({ currentSection, onNavigate }) {
  const links = [
    { id: "inicio", label: "Inicio" },
    { id: "marco", label: "Marco" },
    { id: "coso", label: "Evolución" },
    { id: "riesgos", label: "Riesgos" },
    { id: "simulador", label: "Simulador" },
    { id: "casos", label: "Casos" },
    { id: "evaluacion", label: "Evaluación" },
    { id: "recursos", label: "Recursos" },
    { id: "videos", label: "Videos" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-30 bg-white/80 backdrop-blur shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="font-black text-lg text-emerald-700">Simulador COSO 2013</div>
        <nav className="hidden md:flex gap-2 text-sm font-semibold">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => onNavigate(link.id)}
              className={`px-3 py-2 rounded-full transition ${
                currentSection === link.id
                  ? "bg-emerald-600 text-white shadow"
                  : "text-slate-700 hover:bg-emerald-100"
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
