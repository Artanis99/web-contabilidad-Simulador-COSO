import { useEffect, useState } from "react";

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Subir al inicio"
      className="fixed bottom-5 left-5 z-40 w-12 h-12 rounded-2xl bg-gradient-to-r from-emerald-600 to-sky-600 border border-white/30 shadow-lg text-white hover:brightness-110 transition"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="mx-auto">
        <path d="M12 5l7 7-1.4 1.4L13 8.8V20h-2V8.8L6.4 13.4 5 12l7-7z" fill="currentColor" />
      </svg>
    </button>
  );
}
