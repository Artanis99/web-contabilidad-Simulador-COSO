import { useEffect, useMemo, useRef, useState, createRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MarcoTabs from "./components/MarcoTabs";
import CosoTimeline from "./components/CosoTimeline";
import RiskHeatMap from "./components/RiskHeatMap";
import ErmSimulator from "./components/ErmSimulator";
import CasesSection from "./components/CasesSection";
import QuizSection from "./components/QuizSection";
import ResourcesSection from "./components/ResourcesSection";
import VideosSection from "./components/VideosSection";

const sectionIds = [
  "inicio",
  "marco",
  "coso",
  "riesgos",
  "simulador",
  "casos",
  "evaluacion",
  "recursos",
  "videos",
];

export default function App() {
  const [currentSection, setCurrentSection] = useState("inicio");
  const [selectedRisk, setSelectedRisk] = useState(null);

  // refs creados una sola vez sin violar reglas de hooks
  const sectionsRef = useMemo(() => {
    const map = {};
    sectionIds.forEach((id) => {
      map[id] = { id, ref: createRef() };
    });
    return map;
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setCurrentSection(visible[0].target.id);
      },
      { threshold: [0.35, 0.6] }
    );
    sectionIds.forEach((id) => {
      const node = sectionsRef[id]?.ref?.current;
      if (node) observer.observe(node);
    });
    return () => observer.disconnect();
  }, [sectionsRef]);

  const scrollTo = (id) => {
    const node = sectionsRef[id]?.ref?.current;
    if (node) node.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50 text-slate-900">
      <Navbar currentSection={currentSection} onNavigate={scrollTo} />
      <Hero innerRef={sectionsRef.inicio.ref} onStart={() => scrollTo("simulador")} />
      <main className="space-y-20 pb-24">
        <MarcoTabs innerRef={sectionsRef.marco.ref} />
        <CosoTimeline innerRef={sectionsRef.coso.ref} />
        <RiskHeatMap
          innerRef={sectionsRef.riesgos.ref}
          selection={selectedRisk}
          onSelect={setSelectedRisk}
        />
        <ErmSimulator innerRef={sectionsRef.simulador.ref} />
        <CasesSection innerRef={sectionsRef.casos.ref} />
        <QuizSection innerRef={sectionsRef.evaluacion.ref} />
        <ResourcesSection innerRef={sectionsRef.recursos.ref} />
        <VideosSection innerRef={sectionsRef.videos.ref} />
      </main>
    </div>
  );
}
