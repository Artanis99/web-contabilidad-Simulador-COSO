import { Suspense, lazy, useEffect, useMemo, useRef, useState, createRef } from "react";
import Navbar from "./components/Navbar";
import BackToTopButton from "./components/BackToTopButton";
import CoverPage from "./components/CoverPage";
import Hero from "./components/Hero";
import CasesSection from "./components/CasesSection";
import QuizSection from "./components/QuizSection";
import ResourcesSection from "./components/ResourcesSection";
import VideosSection from "./components/VideosSection";

const Coso2013Page = lazy(() => import("./pages/Coso2013Page"));
const CosoErm2017Page = lazy(() => import("./pages/CosoErm2017Page"));

const homeSectionIds = ["inicio", "casos", "evaluacion", "recursos", "videos"];

function parseRouteFromHash(hash) {
  const raw = (hash ?? "").replace(/^#/, "");
  if (raw === "" || raw === "/" || raw === "/inicio") return "home";
  if (raw === "/coso-2013") return "coso2013";
  if (raw === "/coso-erm-2017") return "cosoErm2017";
  return "home";
}

function hashForRoute(route) {
  if (route === "coso2013") return "#/coso-2013";
  if (route === "cosoErm2017") return "#/coso-erm-2017";
  return "#/";
}

export default function App() {
  const [currentRoute, setCurrentRoute] = useState(parseRouteFromHash(window.location.hash));
  const pendingHomeScrollRef = useRef(null);
  const isHome = currentRoute === "home";

  // refs creados una sola vez sin violar reglas de hooks
  const sectionsRef = useMemo(() => {
    const map = {};
    homeSectionIds.forEach((id) => {
      map[id] = { id, ref: createRef() };
    });
    return map;
  }, []);

  useEffect(() => {
    const onHashChange = () => setCurrentRoute(parseRouteFromHash(window.location.hash));
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, [sectionsRef]);

  useEffect(() => {
    if (currentRoute !== "home") return;
    const pendingId = pendingHomeScrollRef.current;
    if (!pendingId) return;

    pendingHomeScrollRef.current = null;
    requestAnimationFrame(() => {
      const node = sectionsRef[pendingId]?.ref?.current;
      if (node) node.scrollIntoView({ behavior: "smooth", block: "start" });
      else window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }, [currentRoute, sectionsRef]);

  const scrollTo = (id) => {
    const node = sectionsRef[id]?.ref?.current;
    if (node) node.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const navigate = (target) => {
    if (target.startsWith("section:")) {
      const id = target.replace("section:", "");
      if (currentRoute !== "home") {
        pendingHomeScrollRef.current = id;
        window.location.hash = hashForRoute("home");
        return;
      }
      scrollTo(id);
      return;
    }
    if (target === "home") {
      pendingHomeScrollRef.current = "inicio";
      window.location.hash = hashForRoute("home");
      if (currentRoute === "home") {
        requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: "smooth" }));
      }
      return;
    }
    window.location.hash = hashForRoute(target);
  };

  return (
    <div
      className={[
        "min-h-screen text-slate-900",
        isHome ? "bg-gradient-to-br from-[#fff7e3] via-white to-[#e9f3ee]" : "bg-gradient-to-br from-slate-50 via-white to-emerald-50",
      ].join(" ")}
    >
      <Navbar currentRoute={currentRoute} onNavigate={navigate} isHome={isHome} />
      <BackToTopButton isHome={isHome} />
      {currentRoute === "coso2013" ? (
        <Suspense fallback={<div className="pt-28 px-4 max-w-6xl mx-auto text-slate-600">Cargando…</div>}>
          <Coso2013Page />
        </Suspense>
      ) : currentRoute === "cosoErm2017" ? (
        <Suspense fallback={<div className="pt-28 px-4 max-w-6xl mx-auto text-slate-600">Cargando…</div>}>
          <CosoErm2017Page />
        </Suspense>
      ) : (
        <>
          <CoverPage innerRef={sectionsRef.inicio.ref} />
          <Hero onStart={() => navigate("cosoErm2017")} />
          <main className="space-y-16 sm:space-y-20 pb-20 sm:pb-24">
            <CasesSection innerRef={sectionsRef.casos.ref} />
            <QuizSection innerRef={sectionsRef.evaluacion.ref} />
            <ResourcesSection innerRef={sectionsRef.recursos.ref} />
            <VideosSection innerRef={sectionsRef.videos.ref} />
          </main>
        </>
      )}
    </div>
  );
}
