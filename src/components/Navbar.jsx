import { useId, useState } from "react";

export default function Navbar({ currentRoute, onNavigate, isHome }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();
  const isHomeTheme = Boolean(isHome);

  const links = [
    { id: "home", label: "Inicio", kind: "route" },
    { id: "coso2013", label: "COSO 2013", kind: "route", prominent: true },
    { id: "cosoErm2017", label: "COSO ERM 2017", kind: "route", prominent: true },
    { id: "casos", label: "Casos", kind: "section" },
    { id: "evaluacion", label: "Evaluación", kind: "section" },
    { id: "recursos", label: "Recursos", kind: "section" },
    { id: "videos", label: "Videos", kind: "section" },
  ];

  const handleNavigate = (link) => {
    const target = link.target ?? link.id;
    onNavigate(link.kind === "route" ? target : `section:${target}`);
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-30 bg-white/80 backdrop-blur shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-2 sm:py-3 flex items-center justify-between gap-3">
        <div className={`font-black text-base sm:text-lg leading-tight ${isHomeTheme ? "text-[#0b1d3b]" : "text-emerald-700"}`}>
          COSO
        </div>
        <nav className="hidden md:flex gap-2 text-sm font-semibold">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavigate(link)}
              className={[
                "px-3 py-2 rounded-full transition border",
                link.prominent
                  ? isHomeTheme
                    ? "bg-gradient-to-r from-[#0b1d3b] to-[#1f6b4a] text-white shadow-lg border-white/0 hover:brightness-110"
                    : "bg-gradient-to-r from-emerald-600 to-sky-600 text-white shadow-lg border-white/0 hover:brightness-110"
                  : isHomeTheme
                    ? "bg-white text-[#0b1d3b] border-transparent hover:bg-[#f3ecd7]"
                    : "bg-white text-slate-700 border-transparent hover:bg-emerald-50",
                currentRoute === link.id && link.kind === "route"
                  ? isHomeTheme
                    ? "ring-2 ring-[#c7a04a]/50"
                    : "ring-2 ring-emerald-200"
                  : "",
              ].join(" ")}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <button
          type="button"
          className={`md:hidden inline-flex items-center justify-center rounded-xl border px-3 py-2 text-sm font-semibold ${
            isHomeTheme ? "border-[#ead9b2] bg-white text-[#0b1d3b]" : "border-slate-200 bg-white text-slate-700"
          }`}
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

      <div
        id={menuId}
        className={[
          `md:hidden border-t ${isHomeTheme ? "border-[#ead9b2]" : "border-slate-100"} bg-white/90 backdrop-blur`,
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
                "w-full text-left px-4 py-3 rounded-xl transition border text-sm font-semibold",
                link.prominent
                  ? isHomeTheme
                    ? "bg-gradient-to-r from-[#0b1d3b] to-[#1f6b4a] text-white shadow border-white/0"
                    : "bg-gradient-to-r from-emerald-600 to-sky-600 text-white shadow border-white/0"
                  : isHomeTheme
                    ? "bg-white text-[#0b1d3b] border-[#ead9b2] hover:border-[#c7a04a]"
                    : "bg-white text-slate-700 border-slate-200 hover:border-emerald-200",
                currentRoute === link.id && link.kind === "route"
                  ? isHomeTheme
                    ? "ring-2 ring-[#c7a04a]/50"
                    : "ring-2 ring-emerald-200"
                  : "",
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
