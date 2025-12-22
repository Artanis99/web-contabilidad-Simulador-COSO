import { useId, useState } from "react";
export default function Navbar({ currentRoute, onNavigate }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();

  const links = [
    { id: "home", label: "Inicio", kind: "route" },
    { id: "coso2013", label: "COSO 2013", kind: "route", prominent: true },
    { id: "cosoErm2017", label: "COSO ERM 2017", kind: "route", prominent: true },
    { id: "casos", label: "Casos", kind: "section" },
    { id: "evaluacion", label: "Evaluación", kind: "section" },
    { id: "recursos", label: "Recursos", kind: "section" },
    { id: "videos", label: "Videos", kind: "section" },
    { id: "integrantes", label: "Integrantes", kind: "section" },
  ];

  const handleNavigate = (link) => {
    const target = link.target ?? link.id;
    onNavigate(link.kind === "route" ? target : `section:${target}`);
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-30 shadow-sm">
      <div className="bg-[#8b1e2d] text-white">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src="/imagenes/Escudo_UNSAAC.png" alt="Escudo UNSAAC" className="h-12 w-auto" />
            <div className="leading-tight">
              <div className="text-xl font-black tracking-wide">UNSAAC</div>
              <div className="text-[11px] uppercase text-white/80">
                Universidad Nacional de San Antonio Abad del Cusco
              </div>
            </div>
            <div className="hidden sm:block text-[10px] uppercase tracking-[0.25em] text-white/70">
              332 años
            </div>
          </div>

          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-xl border border-white/40 bg-white/10 px-3 py-2 text-sm font-semibold"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
            aria-controls={menuId}
            onClick={() => setIsOpen((value) => !value)}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d={isOpen ? "M6 6l12 12M18 6L6 18" : "M4 7h16M4 12h16M4 17h16"}
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <span className="ml-2">{isOpen ? "Cerrar" : "Menú"}</span>
          </button>
        </div>
      </div>

      <div className="bg-[#7a1522] text-white/90">
        <div className="max-w-6xl mx-auto px-4 py-2 hidden md:flex flex-wrap gap-2 text-xs font-semibold">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavigate(link)}
              className={[
                "px-3 py-2 rounded-full transition border border-white/10",
                link.prominent ? "bg-white/15 text-white" : "bg-white/5 text-white/90 hover:bg-white/10",
                currentRoute === link.id && link.kind === "route" ? "ring-2 ring-[#d7b162]/70" : "",
              ].join(" ")}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>

      <div
        id={menuId}
        className={[
          "md:hidden border-t border-white/10 bg-[#7a1522] text-white/90",
          isOpen ? "block" : "hidden",
        ].join(" ")}
      >
        <div className="max-w-6xl mx-auto px-4 py-3 grid gap-2">
          {links.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => handleNavigate(link)}
              className={[
                "w-full text-left px-4 py-3 rounded-xl transition border border-white/10 text-sm font-semibold",
                link.prominent ? "bg-white/15 text-white" : "bg-white/5 text-white/90 hover:bg-white/10",
                currentRoute === link.id && link.kind === "route" ? "ring-2 ring-[#d7b162]/70" : "",
              ].join(" ")}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
