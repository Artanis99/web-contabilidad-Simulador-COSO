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

          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-3 text-white/90">
              <button type="button" className="h-8 w-8 rounded-full border border-white/30 grid place-items-center hover:bg-white/10" aria-label="Facebook">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M13 9h3V6h-3c-2 0-4 2-4 4v2H6v3h3v6h3v-6h3l1-3h-4v-2c0-.6.4-1 1-1z" />
                </svg>
              </button>
              <button type="button" className="h-8 w-8 rounded-full border border-white/30 grid place-items-center hover:bg-white/10" aria-label="Youtube">
                <svg width="16" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M23 7.5a3 3 0 0 0-2.1-2.1C19.1 5 12 5 12 5s-7.1 0-8.9.4A3 3 0 0 0 1 7.5 31.7 31.7 0 0 0 .6 12a31.7 31.7 0 0 0 .4 4.5 3 3 0 0 0 2.1 2.1C4.9 19 12 19 12 19s7.1 0 8.9-.4a3 3 0 0 0 2.1-2.1 31.7 31.7 0 0 0 .4-4.5 31.7 31.7 0 0 0-.4-4.5zM10 15V9l5 3-5 3z" />
                </svg>
              </button>
              <button type="button" className="h-8 w-8 rounded-full border border-white/30 grid place-items-center hover:bg-white/10" aria-label="Correo">
                <svg width="16" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zm8 6 8-5H4l8 5zm-8 5h16V9l-8 5-8-5v8z" />
                </svg>
              </button>
              <button type="button" className="h-8 w-8 rounded-full border border-white/30 grid place-items-center hover:bg-white/10" aria-label="Teléfono">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.2 1 .3 2.1.5 3.2.5.7 0 1.2.5 1.2 1.2V20c0 .7-.5 1.2-1.2 1.2C9.4 21.2 2.8 14.6 2.8 6c0-.7.5-1.2 1.2-1.2h2.3c.7 0 1.2.5 1.2 1.2 0 1.1.2 2.2.5 3.2.1.4 0 .9-.3 1.2l-2.3 2.2z" />
                </svg>
              </button>
            </div>
            <button
              type="button"
              className="hidden sm:inline-flex items-center px-4 py-2 rounded-full bg-[#d7b162] text-[#6c141f] font-bold text-xs uppercase tracking-[0.2em] shadow"
            >
              Trámites
            </button>
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
