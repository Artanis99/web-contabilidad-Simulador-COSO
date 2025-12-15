export const coso2013 = {
  id: "coso2013",
  label: "COSO 2013",
  title: "COSO 2013 — Control Interno (5 componentes, 17 principios)",
  overview: {
    what:
      "Marco integrado para diseñar, implementar y evaluar el control interno. Busca seguridad razonable (no absoluta) de que la organización logrará sus objetivos.",
    objectives: [
      {
        title: "Operaciones",
        detail: "Eficiencia, efectividad, protección de activos, continuidad y desempeño.",
      },
      {
        title: "Información",
        detail: "Calidad, integridad y oportunidad de la información financiera y no financiera.",
      },
      {
        title: "Cumplimiento",
        detail: "Adherencia a leyes, regulaciones, políticas internas y compromisos contractuales.",
      },
    ],
    keyIdeas: [
      "El control interno es un proceso: se vive en la operación diaria, no es solo documentación.",
      "Los 5 componentes deben estar presentes y funcionando, apoyados por 17 principios.",
      "Incluye controles manuales y tecnológicos (accesos, cambios, operaciones de TI).",
      "Se adapta a la realidad del negocio: tamaño, industria, procesos y riesgos.",
    ],
    limitations: [
      "Juicio humano y posibles errores.",
      "Colusión (acuerdo entre personas) y elusión por la alta dirección.",
      "Relación costo–beneficio: no todo control es viable o proporcional.",
      "Cambios del entorno pueden volver obsoletos controles existentes.",
    ],
  },
  components: [
    {
      key: "entorno",
      name: "Entorno de control",
      description:
        "Base ética y organizacional: cultura, tono de la alta dirección, estructura, responsabilidad y talento.",
      principles: [
        {
          id: 1,
          title: "Demuestra compromiso con integridad y valores éticos.",
          meaning:
            "Define y refuerza conductas esperadas (código de ética, tolerancia cero a fraudes, liderazgo ejemplar).",
          examples: ["Código de ética vigente y difundido", "Canal de denuncias y protección al denunciante"],
        },
        {
          id: 2,
          title: "Ejerce supervisión independiente (consejo/directorio).",
          meaning: "El órgano de gobierno supervisa de forma objetiva la dirección y el sistema de control interno.",
          examples: ["Comité de auditoría", "Revisión de hallazgos y planes de acción"],
        },
        {
          id: 3,
          title: "Define estructura, autoridad y responsabilidades.",
          meaning: "Alinea organigrama, roles, delegación de autoridad y segregación de funciones.",
          examples: ["Matrices RACI", "Segregación de funciones en compras/pagos"],
        },
        {
          id: 4,
          title: "Demuestra compromiso con la competencia.",
          meaning: "Asegura capacidades y formación acordes a la complejidad del proceso.",
          examples: ["Perfiles y evaluaciones de desempeño", "Capacitación anual por puesto crítico"],
        },
        {
          id: 5,
          title: "Exige rendición de cuentas por el control interno.",
          meaning: "Define métricas, consecuencias y seguimiento por cumplimiento de controles.",
          examples: ["KPIs/KRIs por proceso", "Responsables y plazos por deficiencia"],
        },
      ],
    },
    {
      key: "riesgos",
      name: "Evaluación de riesgos",
      description:
        "Identifica y analiza riesgos que afectan el logro de objetivos; considera fraude y cambios relevantes.",
      principles: [
        {
          id: 6,
          title: "Especifica objetivos adecuados.",
          meaning: "Define objetivos claros y medibles (operación, información y cumplimiento) para evaluar riesgos.",
          examples: ["Metas SMART", "Indicadores por línea de negocio"],
        },
        {
          id: 7,
          title: "Identifica y analiza riesgos para el logro de objetivos.",
          meaning: "Evalúa probabilidad/impacto y su relación con controles existentes.",
          examples: ["Matriz de riesgos", "Mapa de procesos con riesgos por actividad"],
        },
        {
          id: 8,
          title: "Evalúa el riesgo de fraude.",
          meaning: "Considera incentivos, oportunidades y racionalización; prioriza áreas sensibles.",
          examples: ["Evaluación de fraude en compras/pagos", "Controles antifraude y monitoreo"],
        },
        {
          id: 9,
          title: "Identifica y analiza cambios significativos.",
          meaning: "Reevalúa riesgos ante cambios internos/externos (tecnología, regulación, mercado).",
          examples: ["Gestión de cambios", "Revisión de riesgos ante nuevos sistemas"],
        },
      ],
    },
    {
      key: "actividades",
      name: "Actividades de control",
      description:
        "Diseña e implementa políticas, procedimientos y controles (incluida tecnología) para mitigar riesgos.",
      principles: [
        {
          id: 10,
          title: "Selecciona y desarrolla actividades de control.",
          meaning:
            "Define controles preventivos/detectivos (manuales o automatizados) para reducir riesgos a niveles aceptables.",
          examples: ["Autorizaciones y aprobaciones", "Conciliaciones y revisiones periódicas"],
        },
        {
          id: 11,
          title: "Selecciona y desarrolla controles generales sobre tecnología.",
          meaning:
            "Controles de TI que soportan aplicaciones y datos: accesos, cambios, operaciones, continuidad.",
          examples: ["Gestión de usuarios y privilegios", "Control de cambios en sistemas"],
        },
        {
          id: 12,
          title: "Implementa controles mediante políticas y procedimientos.",
          meaning: "Documenta, comunica y ejecuta políticas; asegura consistencia y evidencia del control.",
          examples: ["Manual de procedimientos", "Checklists y evidencias de ejecución"],
        },
      ],
    },
    {
      key: "info",
      name: "Información y comunicación",
      description:
        "Obtiene y usa información relevante; comunica internamente y con terceros para sostener el control interno.",
      principles: [
        {
          id: 13,
          title: "Obtiene/genera y usa información relevante y de calidad.",
          meaning: "Asegura datos completos, exactos y oportunos para operar y controlar.",
          examples: ["Controles de datos maestros", "Reconciliación entre sistemas"],
        },
        {
          id: 14,
          title: "Comunica internamente (objetivos, roles y expectativas).",
          meaning: "La información clave fluye hacia quien debe actuar (operación, control y dirección).",
          examples: ["Tableros de control", "Comunicación de políticas y cambios"],
        },
        {
          id: 15,
          title: "Comunica externamente asuntos relevantes.",
          meaning: "Intercambia información con partes externas (reguladores, clientes, proveedores, auditores).",
          examples: ["Reportes regulatorios", "Gestión de requerimientos de auditoría externa"],
        },
      ],
    },
    {
      key: "monitoreo",
      name: "Actividades de monitoreo",
      description:
        "Evalúa si los componentes y principios están presentes y funcionan; comunica deficiencias oportunamente.",
      principles: [
        {
          id: 16,
          title: "Realiza evaluaciones continuas y/o independientes.",
          meaning: "Monitorea en el día a día y realiza evaluaciones periódicas (p. ej., auditoría interna).",
          examples: ["Monitoreo continuo (analytics)", "Auditorías y autoevaluaciones"],
        },
        {
          id: 17,
          title: "Evalúa y comunica deficiencias de control interno.",
          meaning: "Clasifica deficiencias, define acciones correctivas y escala cuando corresponde.",
          examples: ["Matriz de hallazgos", "Seguimiento de planes de acción"],
        },
      ],
    },
  ],
  controlTypes: [
    {
      title: "Preventivos",
      detail:
        "Buscan evitar que el error o fraude ocurra. Son más eficientes cuando el costo de corregir es alto.",
      examples: ["Autorizaciones previas", "Segregación de funciones", "Validaciones en sistemas"],
    },
    {
      title: "Detectivos",
      detail:
        "Identifican desviaciones después de ocurridas para corregir y evitar recurrencia. Requieren seguimiento.",
      examples: ["Conciliaciones", "Revisiones de variaciones", "Auditorías y monitoreo"],
    },
  ],
  itControls: [
    {
      title: "Gestión de accesos",
      items: ["Altas/bajas de usuarios", "Privilegios mínimos", "Segregación de ambientes", "Registro y monitoreo"],
    },
    {
      title: "Adquisición, desarrollo y mantenimiento",
      items: ["Control de cambios", "Pruebas y aprobaciones", "Versionamiento", "Revisiones post-implementación"],
    },
    {
      title: "Operación y continuidad",
      items: ["Backups", "Plan de continuidad/DRP", "Monitoreo de incidentes", "Gestión de parches"],
    },
  ],
  policies: [
    "Las políticas y procedimientos deben revisarse periódicamente para mantenerse vigentes.",
    "La actualización debe responder a crecimiento, cambios legales/regulatorios y cambios del mercado.",
    "Los controles se ajustan para sostener su efectividad en entornos cambiantes.",
  ],
  cases: [
    {
      id: "retail-inventario",
      title: "Caso: Tienda minorista (inventario y caja)",
      situation:
        "Se detectan faltantes de inventario y diferencias recurrentes en caja, con ajustes manuales frecuentes.",
      signals: [
        "Arqueos con diferencias sin explicación documentada.",
        "Notas de crédito y anulaciones sin autorización formal.",
        "Inventarios físicos no conciliados con el kardex/sistema.",
      ],
      baseline: { entorno: 55, riesgos: 45, actividades: 50, info: 60, monitoreo: 40 },
    },
    {
      id: "servicios-facturacion",
      title: "Caso: Empresa de servicios (facturación y cobranza)",
      situation:
        "Hay reclamos por facturas duplicadas/incorrectas y la cobranza se retrasa; la información no coincide entre áreas.",
      signals: [
        "Contratos sin validación de tarifas vigentes.",
        "Cambios de datos maestros sin trazabilidad.",
        "Reportes tardíos para seguimiento de cuentas por cobrar.",
      ],
      baseline: { entorno: 60, riesgos: 55, actividades: 50, info: 45, monitoreo: 50 },
    },
    {
      id: "compras-proveedores",
      title: "Caso: Compras y proveedores (riesgo de fraude)",
      situation:
        "Se sospechan compras a proveedores no competitivos y posibles conflictos de interés; hay urgencias constantes.",
      signals: [
        "Órdenes de compra partidas para evitar topes de aprobación.",
        "Recepciones sin evidencia de conformidad.",
        "Proveedores sin evaluación y alta acelerada.",
      ],
      baseline: { entorno: 50, riesgos: 40, actividades: 45, info: 55, monitoreo: 45 },
    },
  ],
};

export const cosoErm2017 = {
  id: "cosoErm2017",
  label: "COSO ERM 2017",
  title: "COSO ERM 2017 — Gestión de Riesgos (5 componentes, 20 principios)",
  overview: {
    what:
      "Marco para integrar la gestión de riesgos con estrategia y desempeño. Busca proteger y crear valor al tomar mejores decisiones bajo incertidumbre.",
    keyIdeas: [
      "El riesgo es parte de la estrategia: se gestiona antes, durante y después de decidir.",
      "Apetito de riesgo orienta cuánto riesgo aceptar para crecer y competir.",
      "Se observa el riesgo en portafolio (cómo se acumula e interactúa entre objetivos).",
      "El ERM se revisa y mejora continuamente ante cambios del entorno.",
    ],
    howItConnects: [
      { title: "Estrategia", detail: "Riesgo considerado al evaluar alternativas y definir objetivos." },
      { title: "Desempeño", detail: "Riesgos priorizados y gestionados con respuestas y KRIs." },
      { title: "Reporte", detail: "Información oportuna para dirección y gobierno corporativo." },
    ],
  },
  components: [
    {
      key: "gobernanza",
      name: "Gobernanza y cultura",
      description:
        "Define supervisión, estructuras y cultura de riesgo para sostener la toma de decisiones y conducta.",
      principles: [
        {
          id: 1,
          title: "Ejerce supervisión del riesgo por el directorio/consejo.",
          meaning: "El gobierno corporativo monitorea cómo se gestiona el riesgo y exige transparencia.",
          examples: ["Comités y reportes periódicos", "Aprobación del apetito de riesgo"],
        },
        {
          id: 2,
          title: "Establece estructuras operativas (líneas, comités, roles).",
          meaning: "Define responsabilidades claras para identificar, medir y responder al riesgo.",
          examples: ["Tres líneas (operación, riesgo/compliance, auditoría)", "Dueños de riesgos"],
        },
        {
          id: 3,
          title: "Define la cultura deseada (comportamientos y normas).",
          meaning: "Promueve conductas alineadas al apetito de riesgo y a los objetivos.",
          examples: ["Incentivos alineados", "Comunicación y formación continua"],
        },
        {
          id: 4,
          title: "Demuestra compromiso con valores fundamentales.",
          meaning: "La ética guía la toma de decisiones bajo presión y reduce riesgos de integridad.",
          examples: ["Código de ética", "Política anticorrupción y conflictos de interés"],
        },
        {
          id: 5,
          title: "Atrae, desarrolla y retiene personas capaces.",
          meaning: "El ERM requiere capacidades analíticas, criterio y disciplina operativa.",
          examples: ["Capacitación en riesgos", "Roles críticos con reemplazo/continuidad"],
        },
      ],
    },
    {
      key: "estrategia",
      name: "Estrategia y establecimiento de objetivos",
      description:
        "Integra riesgo en estrategia: analiza contexto, define apetito y formula objetivos alineados.",
      principles: [
        {
          id: 6,
          title: "Analiza el contexto del negocio.",
          meaning: "Evalúa entorno interno/externo (competencia, regulación, tecnología, capacidades).",
          examples: ["PESTEL/FODA", "Análisis de stakeholders"],
        },
        {
          id: 7,
          title: "Define el apetito de riesgo.",
          meaning: "Define límites y tolerancias para alinear crecimiento, rentabilidad y control.",
          examples: ["Umbrales por indicador", "Límites por tipo de riesgo"],
        },
        {
          id: 8,
          title: "Evalúa estrategias alternativas.",
          meaning: "Compara opciones con escenarios y trade-offs riesgo–retorno.",
          examples: ["Análisis de escenarios", "Simulación y sensibilidad"],
        },
        {
          id: 9,
          title: "Formula objetivos de negocio.",
          meaning: "Objetivos claros permiten medir desempeño y monitorear riesgo asociado.",
          examples: ["OKRs", "Cascada de objetivos por áreas"],
        },
      ],
    },
    {
      key: "desempeno",
      name: "Desempeño",
      description:
        "Identifica, evalúa y prioriza riesgos; define respuestas y una visión de portafolio de riesgos.",
      principles: [
        {
          id: 10,
          title: "Identifica riesgos.",
          meaning: "Detecta eventos que pueden afectar objetivos: amenazas y oportunidades.",
          examples: ["Catálogo de riesgos", "Workshops por proceso"],
        },
        {
          id: 11,
          title: "Evalúa la severidad del riesgo (impacto y probabilidad).",
          meaning: "Mide severidad considerando velocidad de ocurrencia y persistencia.",
          examples: ["Matriz de evaluación", "Escalas homogéneas por unidad"],
        },
        {
          id: 12,
          title: "Prioriza riesgos.",
          meaning: "Ordena por severidad y alineación con estrategia para asignar recursos.",
          examples: ["Top risks", "Priorización por objetivos críticos"],
        },
        {
          id: 13,
          title: "Implementa respuestas al riesgo.",
          meaning: "Define acciones: aceptar, evitar, reducir, compartir o perseguir (oportunidades).",
          examples: ["Planes de mitigación", "Transferencia vía seguros/contratos"],
        },
        {
          id: 14,
          title: "Desarrolla una visión de portafolio de riesgos.",
          meaning: "Evalúa interdependencias y acumulación de riesgos sobre el desempeño global.",
          examples: ["Mapa por objetivos", "Riesgos correlacionados (cadena de suministro + reputación)"],
        },
      ],
    },
    {
      key: "revision",
      name: "Revisión y mejora",
      description:
        "Revisa cambios, desempeño y riesgo; impulsa mejoras en la gestión integral de riesgos.",
      principles: [
        {
          id: 15,
          title: "Evalúa cambios sustanciales.",
          meaning: "Revisa impacto de cambios internos/externos sobre el perfil de riesgo.",
          examples: ["Revisión tras adquisiciones", "Cambios regulatorios"],
        },
        {
          id: 16,
          title: "Revisa riesgo y desempeño.",
          meaning: "Monitorea indicadores, KRIs y resultados para ajustar decisiones y respuestas.",
          examples: ["Tablero de riesgos", "Revisiones trimestrales con dirección"],
        },
        {
          id: 17,
          title: "Impulsa la mejora del ERM.",
          meaning: "Incorpora lecciones aprendidas y fortalece metodologías y cultura.",
          examples: ["Post-mortems", "Actualización de políticas y apetito"],
        },
      ],
    },
    {
      key: "informacion",
      name: "Información, comunicación y reporte",
      description:
        "Usa sistemas de información; comunica y reporta riesgos, cultura y desempeño para decisiones oportunas.",
      principles: [
        {
          id: 18,
          title: "Aprovecha sistemas de información.",
          meaning: "Datos y tecnología para capturar, consolidar y analizar riesgos y desempeño.",
          examples: ["Integración de datos", "Automatización de reportes"],
        },
        {
          id: 19,
          title: "Comunica información de riesgos.",
          meaning: "Comunicación clara y oportuna a quienes toman decisiones.",
          examples: ["Alertas por umbrales", "Comités de riesgos"],
        },
        {
          id: 20,
          title: "Reporta sobre riesgos, cultura y desempeño.",
          meaning: "Reportes para dirección y gobierno: situación, tendencias, acciones y resultados.",
          examples: ["Reportes ejecutivos", "Seguimiento de planes de mitigación"],
        },
      ],
    },
  ],
  riskResponses: [
    { title: "Aceptar", detail: "Asumir el riesgo cuando está dentro del apetito y es costo-efectivo." },
    { title: "Reducir", detail: "Mitigar con controles, procesos, capacitación o tecnología." },
    { title: "Compartir", detail: "Transferir o compartir (seguros, contratos, alianzas)." },
    { title: "Evitar", detail: "Salir o no iniciar actividades con riesgo inaceptable." },
    { title: "Perseguir", detail: "Tomar riesgo para aprovechar oportunidades (con límites y monitoreo)." },
  ],
  cases: [
    {
      id: "expansion-mercado",
      title: "Caso: Expansión a un nuevo mercado",
      situation:
        "La empresa quiere expandirse a otra ciudad/país; hay presión por crecer rápido y se subestiman riesgos regulatorios y de cadena de suministro.",
      signals: [
        "Estrategia aprobada sin apetito de riesgo explícito.",
        "Dependencia de pocos proveedores críticos.",
        "Escasa visibilidad de riesgos por unidad/país.",
      ],
      baseline: { gobernanza: 60, estrategia: 45, desempeno: 50, revision: 40, informacion: 55 },
    },
    {
      id: "digital-ecommerce",
      title: "Caso: Implementación de e‑commerce",
      situation:
        "Se lanza un canal digital; aparecen riesgos de ciberseguridad, reputación y fraude, además de cambios operativos.",
      signals: [
        "Controles tecnológicos sin dueños definidos.",
        "Indicadores de riesgo (KRIs) inexistentes o tardíos.",
        "Incidentes no reportados de forma consistente.",
      ],
      baseline: { gobernanza: 55, estrategia: 50, desempeno: 45, revision: 50, informacion: 40 },
    },
    {
      id: "proveedor-critico",
      title: "Caso: Proveedor crítico y continuidad",
      situation:
        "Un proveedor esencial presenta atrasos; se afecta producción/servicio. Falta un plan de continuidad y evaluación de alternativas.",
      signals: [
        "Sin vista de portafolio de riesgos (impacto acumulado).",
        "Respuestas al riesgo reactivas (solo urgencias).",
        "Lecciones aprendidas no se incorporan.",
      ],
      baseline: { gobernanza: 50, estrategia: 55, desempeno: 40, revision: 45, informacion: 50 },
    },
  ],
};

export const frameworks = [coso2013, cosoErm2017];
