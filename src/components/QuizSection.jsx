import { useState } from "react";

const preguntas = [
  {
    enunciado: "¿Cuál es el propósito central del control interno según COSO 2013?",
    opciones: [
      "Eliminar todos los riesgos",
      "Proveer seguridad razonable en operaciones, información y cumplimiento",
      "Solo cumplir con impuestos",
      "Incrementar ventas a cualquier costo",
    ],
    correcta: 1,
    feedback: "El control interno busca seguridad razonable en las tres categorías de objetivos.",
  },
  {
    enunciado: "¿Qué componente se transforma en Gobernanza y Cultura en COSO ERM 2017?",
    opciones: ["Actividades de Control", "Monitoreo", "Ambiente de Control", "Información y Comunicación"],
    correcta: 2,
    feedback: "El ambiente de control evoluciona a gobernanza y cultura en ERM 2017.",
  },
  {
    enunciado: "Un ejemplo de control preventivo es:",
    opciones: ["Conciliación bancaria", "Revisión posterior a un cierre", "Autorización previa y segregación", "Informe a reguladores"],
    correcta: 2,
    feedback: "Preventivo evita la ocurrencia: autorizaciones y segregación de funciones.",
  },
  {
    enunciado: "¿Qué visual ayuda a priorizar riesgos por probabilidad e impacto?",
    opciones: ["Gráfico de radar", "Mapa de calor de riesgos", "Tabla comparativa", "Lista de políticas"],
    correcta: 1,
    feedback: "El mapa de calor posiciona riesgos según probabilidad e impacto.",
  },
  {
    enunciado: "En el simulador, aumentar inversión en ERM tiende a:",
    opciones: ["Reducir los niveles objetivo", "Mejorar actividades de control e información", "Eliminar la necesidad de monitoreo", "Bajar el apetito al riesgo"],
    correcta: 1,
    feedback: "Más inversión eleva madurez en control, información y monitoreo.",
  },
];

export default function QuizSection({ innerRef }) {
  const [respuestas, setRespuestas] = useState({});
  const [resultado, setResultado] = useState(null);

  const enviar = () => {
    let aciertos = 0;
    const detalle = preguntas.map((p, idx) => {
      const correcta = respuestas[idx] === p.correcta;
      if (correcta) aciertos += 1;
      return { correcta, feedback: p.feedback };
    });
    setResultado({ puntaje: Math.round((aciertos / preguntas.length) * 100), detalle });
  };

  return (
    <section id="evaluacion" ref={innerRef} className="max-w-6xl mx-auto px-4 scroll-mt-24">
      <div className="mb-6">
        <h2 className="text-3xl font-black text-emerald-700">Evaluación rápida</h2>
        <p className="text-slate-600 text-sm">Responde y recibe retroalimentación inmediata.</p>
      </div>
      <div className="space-y-4 bg-white rounded-2xl shadow border border-emerald-50 p-4 sm:p-5">
        {preguntas.map((p, idx) => (
          <div key={idx} className="border border-slate-100 rounded-xl p-4">
            <div className="font-semibold text-slate-800 mb-2">
              {idx + 1}. {p.enunciado}
            </div>
            <div className="grid sm:grid-cols-2 gap-2 text-sm">
              {p.opciones.map((op, opIdx) => (
                <label
                  key={opIdx}
                  className={`flex items-center gap-2 p-3 rounded-lg border cursor-pointer ${
                    respuestas[idx] === opIdx
                      ? "border-emerald-500 bg-emerald-50"
                      : "border-slate-200 hover:border-emerald-200"
                  }`}
                >
                  <input
                    type="radio"
                    name={`preg-${idx}`}
                    checked={respuestas[idx] === opIdx}
                    onChange={() => setRespuestas({ ...respuestas, [idx]: opIdx })}
                  />
                  <span>{op}</span>
                </label>
              ))}
            </div>
            {resultado && (
              <div
                className={`mt-2 text-xs font-semibold ${
                  resultado.detalle[idx].correcta ? "text-emerald-700" : "text-orange-600"
                }`}
              >
                {resultado.detalle[idx].correcta ? "Correcto. " : "Revisa: "}
                {resultado.detalle[idx].feedback}
              </div>
            )}
          </div>
        ))}
        <button
          onClick={enviar}
          className="w-full md:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-sky-500 text-white font-bold shadow-lg"
        >
          Enviar respuestas
        </button>
        {resultado && (
          <div className="mt-4 p-4 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-800 font-semibold">
            Puntaje: {resultado.puntaje}% ¡Sigue practicando para dominar COSO!
          </div>
        )}
      </div>
    </section>
  );
}
