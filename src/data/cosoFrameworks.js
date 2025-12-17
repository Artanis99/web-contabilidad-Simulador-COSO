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
          detail: {
            explicacion:
              "Establece “reglas no negociables” y el tono desde la alta dirección para que la toma de decisiones sea consistente incluso bajo presión.",
            comoAplicarlo: [
              "Traducir valores en políticas claras (anticorrupción, regalos, conflictos de interés) y ejemplos prácticos.",
              "Formar y comunicar de manera continua (inducción + refrescos) con casos reales del negocio.",
              "Activar canales de denuncia y respuesta: investigar, documentar, sancionar y retroalimentar.",
            ],
            evidencias: [
              "Código de ética vigente, firmado y accesible.",
              "Canal de denuncias con trazabilidad, plazos y protección al denunciante.",
              "Capacitaciones y evaluaciones de comprensión (no solo asistencia).",
              "Registro de investigaciones, sanciones y acciones preventivas.",
            ],
            preguntas: [
              "¿La dirección “predica con el ejemplo” y aplica sanciones de forma consistente?",
              "¿Los colaboradores saben cómo reportar un dilema ético y confían en el proceso?",
            ],
          },
          examples: ["Código de ética vigente y difundido", "Canal de denuncias y protección al denunciante"],
        },
        {
          id: 2,
          title: "Ejerce supervisión independiente (consejo/directorio).",
          meaning: "El órgano de gobierno supervisa de forma objetiva la dirección y el sistema de control interno.",
          detail: {
            explicacion:
              "Asegura una mirada independiente que desafía decisiones, revisa riesgos y exige evidencias de que el control interno funciona.",
            comoAplicarlo: [
              "Definir comités (auditoría/riesgos) con agenda, atribuciones y calendario anual.",
              "Revisar periódicamente deficiencias, fraudes, temas contables y cumplimiento con planes de acción.",
              "Aprobar políticas críticas (ética, riesgos, auditoría interna) y evaluar a la alta dirección.",
            ],
            evidencias: [
              "Actas de comités con acuerdos, responsables y fechas.",
              "Matriz de hallazgos con seguimiento y cierres validados.",
              "Indicadores de control interno (madurez, incidentes, cumplimiento) revisados por el directorio.",
            ],
            preguntas: [
              "¿El directorio recibe información suficiente y a tiempo para tomar decisiones?",
              "¿Se da seguimiento real a hallazgos o solo se “presentan” reportes?",
            ],
          },
          examples: ["Comité de auditoría", "Revisión de hallazgos y planes de acción"],
        },
        {
          id: 3,
          title: "Define estructura, autoridad y responsabilidades.",
          meaning: "Alinea organigrama, roles, delegación de autoridad y segregación de funciones.",
          detail: {
            explicacion:
              "Reduce errores y fraudes aclarando quién decide, quién ejecuta, quién revisa y quién aprueba, evitando concentraciones de poder.",
            comoAplicarlo: [
              "Definir roles y responsabilidades por proceso (RACI) y mantenerlos actualizados.",
              "Establecer límites de autorización por monto/tipo de operación y revisarlos periódicamente.",
              "Aplicar segregación de funciones (crear/autorizar/pagar/registrar) y controles compensatorios cuando no sea posible.",
            ],
            evidencias: [
              "Organigrama vigente y descripciones de puesto.",
              "Matriz RACI por proceso y matriz de delegación de autoridad.",
              "Revisión de accesos y roles en sistemas (quién puede crear, aprobar, modificar).",
            ],
            preguntas: [
              "¿Existe alguna persona que pueda iniciar y cerrar una transacción completa sin revisión?",
              "¿Los cambios de roles y accesos se reflejan a tiempo en los sistemas?",
            ],
          },
          examples: ["Matrices RACI", "Segregación de funciones en compras/pagos"],
        },
        {
          id: 4,
          title: "Demuestra compromiso con la competencia.",
          meaning: "Asegura capacidades y formación acordes a la complejidad del proceso.",
          detail: {
            explicacion:
              "El control interno depende de personas competentes: sin habilidades, el mejor diseño de control se ejecuta mal o se omite.",
            comoAplicarlo: [
              "Definir competencias por rol crítico (contable, tesorería, TI, compras) y brechas actuales.",
              "Capacitar en procesos y controles, incluyendo cambios normativos y de sistemas.",
              "Asegurar continuidad (planes de reemplazo) y evitar dependencias de “una sola persona”.",
            ],
            evidencias: [
              "Perfiles de puesto con competencias y certificaciones requeridas.",
              "Plan anual de capacitación y evidencia de evaluación.",
              "Rotación/cobertura de vacaciones en puestos críticos y manuales operativos.",
            ],
            preguntas: [
              "¿Las personas que ejecutan controles conocen el “por qué” y el “qué evidencia” se requiere?",
              "¿Qué ocurre si el responsable clave no está disponible (vacaciones/incapacidad)?",
            ],
          },
          examples: ["Perfiles y evaluaciones de desempeño", "Capacitación anual por puesto crítico"],
        },
        {
          id: 5,
          title: "Exige rendición de cuentas por el control interno.",
          meaning: "Define métricas, consecuencias y seguimiento por cumplimiento de controles.",
          detail: {
            explicacion:
              "Aterriza el control interno en responsabilidades medibles: se asignan dueños, se monitorea desempeño y se actúa ante incumplimientos.",
            comoAplicarlo: [
              "Asignar responsables por control y por riesgo (dueños claros) con sustitutos definidos.",
              "Definir indicadores (cumplimiento de controles, hallazgos, KRIs) y revisarlos con dirección.",
              "Aplicar consecuencias y planes de mejora cuando un control no se ejecuta o falla repetidamente.",
            ],
            evidencias: [
              "KPIs/KRIs por proceso con metas y seguimiento.",
              "Registro de ejecución de controles (frecuencia, evidencia, excepciones).",
              "Planes de acción con responsables, fechas y validación de cierre.",
            ],
            preguntas: [
              "¿Quién es responsable cuando un control falla y cómo se corrige la causa raíz?",
              "¿Los indicadores se usan para gestionar o solo para reportar?",
            ],
          },
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
          detail: {
            explicacion:
              "Sin objetivos claros no hay forma consistente de identificar riesgos ni de priorizar controles; el riesgo se define en relación con un objetivo.",
            comoAplicarlo: [
              "Definir objetivos SMART por proceso/área (operaciones, información, cumplimiento).",
              "Alinear objetivos a la estrategia y traducirlos a indicadores medibles (KPIs) y límites.",
              "Documentar supuestos clave (volumen, tolerancias, normativa aplicable) que afectan el riesgo.",
            ],
            evidencias: [
              "Metas SMART y KPIs definidos por proceso.",
              "Cascada de objetivos por áreas y responsables.",
              "Políticas/criterios de calidad de información y cumplimiento aplicables al proceso.",
            ],
            preguntas: [
              "¿Los objetivos están claramente comunicados y medidos de forma consistente?",
              "¿Qué tolerancia a desviaciones existe y quién la aprueba?",
            ],
          },
          examples: ["Metas SMART", "Indicadores por línea de negocio"],
        },
        {
          id: 7,
          title: "Identifica y analiza riesgos para el logro de objetivos.",
          meaning: "Evalúa probabilidad/impacto y su relación con controles existentes.",
          detail: {
            explicacion:
              "Convierte objetivos en un mapa de riesgos: qué puede salir mal, por qué, con qué impacto, y qué controles lo mitigan.",
            comoAplicarlo: [
              "Levantar riesgos por proceso (eventos, causas y consecuencias) con talleres y revisión de datos históricos.",
              "Valorar impacto y probabilidad con criterios homogéneos y documentados.",
              "Evaluar controles existentes (diseño y efectividad) y estimar riesgo residual.",
            ],
            evidencias: [
              "Matriz de riesgos (inherente/residual) con criterios de evaluación.",
              "Mapa de procesos con riesgos por actividad y dueños asignados.",
              "Evaluaciones de controles (diseño/operación) y planes de tratamiento.",
            ],
            preguntas: [
              "¿La evaluación considera causas reales (no solo síntomas) y datos históricos?",
              "¿Se distingue claramente entre riesgo inherente y riesgo residual?",
            ],
          },
          examples: ["Matriz de riesgos", "Mapa de procesos con riesgos por actividad"],
        },
        {
          id: 8,
          title: "Evalúa el riesgo de fraude.",
          meaning: "Considera incentivos, oportunidades y racionalización; prioriza áreas sensibles.",
          detail: {
            explicacion:
              "Aborda fraude como un riesgo específico (interno/externo) considerando incentivos/presiones, oportunidades y racionalización (triángulo del fraude).",
            comoAplicarlo: [
              "Identificar escenarios de fraude por proceso (compras, pagos, ingresos, inventario, TI) y señales de alerta.",
              "Diseñar controles antifraude (segregación, monitoreo, analítica, revisiones independientes).",
              "Evaluar presiones e incentivos (bonos, metas) y ajustar para evitar comportamientos de riesgo.",
            ],
            evidencias: [
              "Mapa de fraude con escenarios, responsables y controles asociados.",
              "Monitoreo de transacciones inusuales (duplicados, proveedores relacionados, excepciones).",
              "Declaración y gestión de conflictos de interés y regalos/hospitalidad.",
            ],
            preguntas: [
              "¿Qué escenarios de fraude son más probables en este proceso y cómo se detectan?",
              "¿Los incentivos podrían promover atajos o manipulación?",
            ],
          },
          examples: ["Evaluación de fraude en compras/pagos", "Controles antifraude y monitoreo"],
        },
        {
          id: 9,
          title: "Identifica y analiza cambios significativos.",
          meaning: "Reevalúa riesgos ante cambios internos/externos (tecnología, regulación, mercado).",
          detail: {
            explicacion:
              "Mantiene vigente el control interno: cuando cambia el negocio (sistemas, regulación, estructura) cambian riesgos y controles necesarios.",
            comoAplicarlo: [
              "Activar un proceso de gestión del cambio con evaluación de impacto en riesgos y controles antes de implementar.",
              "Reevaluar riesgos ante cambios regulatorios, nuevos productos/canales, tercerización o crecimiento acelerado.",
              "Actualizar procedimientos, roles, accesos y capacitación cuando cambia un sistema o proceso.",
            ],
            evidencias: [
              "Gestión de cambios con aprobaciones, pruebas y controles compensatorios.",
              "Reevaluaciones de riesgos ante proyectos y cambios normativos.",
              "Actualización de manuales/procedimientos y comunicaciones internas.",
            ],
            preguntas: [
              "¿Cómo se asegura que un cambio en sistemas/procesos no deje “controles huérfanos”?",
              "¿Se revisan riesgos después del cambio (post-implementación) y se ajusta lo necesario?",
            ],
          },
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
          detail: {
            explicacion:
              "Traduce riesgos priorizados en controles concretos (qué se hace, quién lo hace, con qué frecuencia y qué evidencia queda).",
            comoAplicarlo: [
              "Elegir controles por riesgo: preventivos (evitar), detectivos (detectar), correctivos (corregir).",
              "Definir diseño del control: responsable, frecuencia, criterio de revisión, evidencia y escalamiento de excepciones.",
              "Evitar controles “de papel”: probar que funcionan en la práctica y ajustar cuando no mitiguen el riesgo.",
            ],
            evidencias: [
              "Controles definidos por riesgo con responsable, frecuencia y evidencia.",
              "Autorizaciones y aprobaciones con trazabilidad.",
              "Conciliaciones/revisiones con firma o registro de revisión y resolución de diferencias.",
            ],
            preguntas: [
              "¿El control reduce el riesgo o solo “cumple” con un requisito documental?",
              "¿Qué pasa cuando el control detecta una excepción (quién decide y en cuánto tiempo)?",
            ],
          },
          examples: ["Autorizaciones y aprobaciones", "Conciliaciones y revisiones periódicas"],
        },
        {
          id: 11,
          title: "Selecciona y desarrolla controles generales sobre tecnología.",
          meaning:
            "Controles de TI que soportan aplicaciones y datos: accesos, cambios, operaciones, continuidad.",
          detail: {
            explicacion:
              "Asegura que los sistemas y datos sean confiables; sin controles generales de TI, los controles automatizados pierden validez.",
            comoAplicarlo: [
              "Gestionar accesos con privilegio mínimo, segregación y revisiones periódicas de roles.",
              "Controlar cambios (desarrollo/pruebas/producción) con aprobaciones, pruebas y trazabilidad.",
              "Asegurar operación y continuidad: backups, parches, monitoreo de incidentes y DRP probado.",
            ],
            evidencias: [
              "Altas/bajas y recertificación de accesos con evidencia.",
              "Registro de cambios (tickets) con pruebas y aprobaciones.",
              "Backups verificados, monitoreo de incidentes y pruebas de continuidad/DRP.",
            ],
            preguntas: [
              "¿Quién puede cambiar datos críticos o configurar reglas en el sistema sin revisión?",
              "¿Hay evidencia de que backups y planes de continuidad funcionan (no solo existen)?",
            ],
          },
          examples: ["Gestión de usuarios y privilegios", "Control de cambios en sistemas"],
        },
        {
          id: 12,
          title: "Implementa controles mediante políticas y procedimientos.",
          meaning: "Documenta, comunica y ejecuta políticas; asegura consistencia y evidencia del control.",
          detail: {
            explicacion:
              "Estandariza la ejecución del control: define el “cómo” y asegura que se aplique igual en distintas personas, turnos y sedes.",
            comoAplicarlo: [
              "Documentar procedimientos con pasos, criterios de aceptación, evidencias y responsables.",
              "Controlar versiones: aprobar cambios, comunicar, capacitar y retirar versiones obsoletas.",
              "Automatizar donde sea posible (workflows) para reducir variabilidad y mejorar trazabilidad.",
            ],
            evidencias: [
              "Manual de procedimientos vigente con control de versiones.",
              "Checklists o registros de ejecución (digital o físico) con evidencia adjunta.",
              "Evidencia de comunicación/capacitación cuando se actualiza un procedimiento.",
            ],
            preguntas: [
              "¿El procedimiento define claramente qué evidencia es aceptable y dónde se almacena?",
              "¿Se revisan y actualizan procedimientos cuando cambian sistemas o roles?",
            ],
          },
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
          detail: {
            explicacion:
              "La calidad de la decisión y del control depende de la calidad del dato: si el dato es incompleto o tardío, el control falla.",
            comoAplicarlo: [
              "Definir datos críticos por proceso (maestros y transaccionales) y criterios de calidad (exactitud, integridad, oportunidad).",
              "Implementar validaciones y conciliaciones entre fuentes/sistemas para detectar inconsistencias.",
              "Asegurar trazabilidad: quién generó el dato, cuándo, con qué fuente y qué cambios se hicieron.",
            ],
            evidencias: [
              "Controles de datos maestros (altas/cambios con aprobación).",
              "Conciliaciones entre sistemas (ERP, nómina, inventario) y resolución de diferencias.",
              "Registros de cambios (logs) y controles de integridad de interfaces.",
            ],
            preguntas: [
              "¿Qué datos son “críticos” y cómo se mide su calidad?",
              "¿Se detectan y corrigen errores en la fuente o solo se corrigen “al final”?",
            ],
          },
          examples: ["Controles de datos maestros", "Reconciliación entre sistemas"],
        },
        {
          id: 14,
          title: "Comunica internamente (objetivos, roles y expectativas).",
          meaning: "La información clave fluye hacia quien debe actuar (operación, control y dirección).",
          detail: {
            explicacion:
              "Asegura que las personas conozcan objetivos, controles y cambios; sin comunicación, los controles se ejecutan de forma inconsistente.",
            comoAplicarlo: [
              "Definir qué se comunica, a quién, con qué frecuencia y por qué canal (reuniones, tableros, intranet).",
              "Comunicar cambios en políticas/procesos con ejemplos prácticos y criterios de decisión.",
              "Escalar alertas y excepciones con responsables claros y tiempos definidos.",
            ],
            evidencias: [
              "Tableros de control con responsables y periodicidad.",
              "Comunicados de cambios (políticas, sistemas) con confirmación de lectura y capacitación.",
              "Registros de escalamiento y resolución de excepciones/incidentes.",
            ],
            preguntas: [
              "¿Las personas saben qué hacer ante una excepción y a quién escalarla?",
              "¿Los mensajes llegan a la operación (no solo a la dirección) y se entienden?",
            ],
          },
          examples: ["Tableros de control", "Comunicación de políticas y cambios"],
        },
        {
          id: 15,
          title: "Comunica externamente asuntos relevantes.",
          meaning: "Intercambia información con partes externas (reguladores, clientes, proveedores, auditores).",
          detail: {
            explicacion:
              "Coordina información crítica con terceros para cumplir requerimientos, gestionar expectativas y sostener controles en la cadena de valor.",
            comoAplicarlo: [
              "Definir responsables y calendario para reportes regulatorios y compromisos contractuales.",
              "Gestionar comunicación con clientes/proveedores sobre cambios, incidentes y requerimientos de control.",
              "Mantener un proceso ordenado para auditorías externas: solicitud, entrega, evidencias y seguimiento.",
            ],
            evidencias: [
              "Reportes regulatorios con control de revisión y aprobación.",
              "Contratos con cláusulas de control/compliance y evidencias de cumplimiento.",
              "Gestión de requerimientos de auditoría externa con repositorio de evidencias.",
            ],
            preguntas: [
              "¿Qué información crítica depende de terceros y cómo se asegura su calidad y oportunidad?",
              "¿Se evalúa el riesgo de proveedores/terceros y se exige evidencia cuando corresponde?",
            ],
          },
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
          detail: {
            explicacion:
              "Verifica de forma constante si los controles siguen funcionando: combina monitoreo continuo con revisiones independientes para detectar fallas antes de que se materialicen pérdidas.",
            comoAplicarlo: [
              "Definir indicadores de monitoreo (alertas, excepciones, tendencias) y revisarlos con frecuencia.",
              "Realizar autoevaluaciones por proceso y auditorías internas con enfoque basado en riesgo.",
              "Usar analítica/automatización para detectar patrones anómalos (duplicados, outliers, accesos).",
            ],
            evidencias: [
              "Monitoreo continuo (analytics) con alertas y seguimiento de excepciones.",
              "Planes y reportes de auditoría interna con hallazgos y recomendaciones.",
              "Autoevaluaciones (CSA) con evidencia y validación de resultados.",
            ],
            preguntas: [
              "¿Qué controles se monitorean continuamente y cuáles solo de forma periódica?",
              "¿Cómo se demuestra que las revisiones son efectivas y no solo “checklists”?",
            ],
          },
          examples: ["Monitoreo continuo (analytics)", "Auditorías y autoevaluaciones"],
        },
        {
          id: 17,
          title: "Evalúa y comunica deficiencias de control interno.",
          meaning: "Clasifica deficiencias, define acciones correctivas y escala cuando corresponde.",
          detail: {
            explicacion:
              "Asegura cierre de brechas: una deficiencia sin evaluación, priorización y seguimiento termina repitiéndose y escalando en impacto.",
            comoAplicarlo: [
              "Clasificar deficiencias por severidad (impacto/probabilidad), causa raíz y alcance (proceso/sistema).",
              "Definir acciones correctivas con responsables, fechas y criterios de aceptación (qué significa “cerrado”).",
              "Escalar oportunamente a dirección/gobierno cuando la deficiencia sea material o recurrente.",
            ],
            evidencias: [
              "Matriz de hallazgos con severidad, causa raíz y estado.",
              "Planes de acción con responsables, fechas y evidencias de cierre.",
              "Comunicaciones de escalamiento y decisiones tomadas (aceptación/mitigación).",
            ],
            preguntas: [
              "¿Se corrige la causa raíz o solo el síntoma (p. ej., un ajuste manual)?",
              "¿Quién valida el cierre y cómo se evita la recurrencia?",
            ],
          },
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
          detail: {
            explicacion:
              "El directorio fija el estándar: define expectativas de riesgo, pide evidencia y desafía decisiones para proteger y crear valor.",
            comoAplicarlo: [
              "Aprobar apetito de riesgo y políticas clave (ERM, límites, reporte).",
              "Revisar portafolio de riesgos, incidentes relevantes y brechas de control con periodicidad definida.",
              "Exigir acciones correctivas y seguimiento, incluyendo responsables y fechas comprometidas.",
            ],
            evidencias: [
              "Actas de comités con revisión de riesgos, decisiones y acuerdos.",
              "Apetito de riesgo aprobado y revisado al menos anualmente.",
              "Seguimiento de planes de mitigación y cierres validados.",
            ],
            preguntas: [
              "¿El directorio recibe información de riesgo clara, comparable y oportuna?",
              "¿Se cuestionan supuestos y se exigen evidencias antes de decisiones relevantes?",
            ],
          },
          examples: ["Comités y reportes periódicos", "Aprobación del apetito de riesgo"],
        },
        {
          id: 2,
          title: "Establece estructuras operativas (líneas, comités, roles).",
          meaning: "Define responsabilidades claras para identificar, medir y responder al riesgo.",
          detail: {
            explicacion:
              "Organiza el ERM para que funcione: roles, comités y responsabilidades claras evitan vacíos, duplicidades y decisiones sin dueño.",
            comoAplicarlo: [
              "Definir roles (dueños de riesgos, compliance, seguridad, auditoría interna) y líneas de reporte.",
              "Establecer comités de riesgo con agenda, frecuencia y criterios de escalamiento.",
              "Asegurar coordinación entre primera, segunda y tercera línea (operación, riesgo/compliance, auditoría).",
            ],
            evidencias: [
              "Mapa de roles y responsabilidades (RACI) de ERM.",
              "Términos de referencia de comités y calendario anual.",
              "Flujos de escalamiento y aprobación para decisiones fuera del apetito.",
            ],
            preguntas: [
              "¿Quién es dueño del riesgo y quién valida la efectividad de la respuesta?",
              "¿Qué ocurre cuando hay conflicto entre áreas (quién arbitra)?",
            ],
          },
          examples: ["Tres líneas (operación, riesgo/compliance, auditoría)", "Dueños de riesgos"],
        },
        {
          id: 3,
          title: "Define la cultura deseada (comportamientos y normas).",
          meaning: "Promueve conductas alineadas al apetito de riesgo y a los objetivos.",
          detail: {
            explicacion:
              "La cultura de riesgo define cómo se decide y actúa: qué se tolera, qué se premia y cómo se habla del riesgo en la organización.",
            comoAplicarlo: [
              "Establecer conductas esperadas (p. ej., reportar incidentes, documentar decisiones, cuestionar supuestos).",
              "Alinear incentivos y metas para que no empujen a “atajos” o riesgo excesivo.",
              "Medir cultura (encuestas, indicadores de incidentes, rotación, denuncias) y actuar sobre hallazgos.",
            ],
            evidencias: [
              "Comunicación y formación continua sobre cultura de riesgo.",
              "Métricas de cultura (encuestas, incidentes, speak-up) y planes de mejora.",
              "Incentivos y evaluaciones de desempeño alineadas al apetito de riesgo.",
            ],
            preguntas: [
              "¿La gente reporta problemas temprano o se ocultan hasta que explotan?",
              "¿Los incentivos podrían estar premiando comportamientos riesgosos?",
            ],
          },
          examples: ["Incentivos alineados", "Comunicación y formación continua"],
        },
        {
          id: 4,
          title: "Demuestra compromiso con valores fundamentales.",
          meaning: "La ética guía la toma de decisiones bajo presión y reduce riesgos de integridad.",
          detail: {
            explicacion:
              "Los valores son el “freno” cuando hay presión por resultados: reducen riesgo de corrupción, fraude y decisiones que dañan reputación.",
            comoAplicarlo: [
              "Definir políticas de integridad (anticorrupción, regalos, conflictos, terceros) con casos prácticos.",
              "Evaluar integridad en terceros (proveedores, socios) y establecer cláusulas/controles contractuales.",
              "Investigar y sancionar con consistencia; comunicar aprendizajes sin exponer datos sensibles.",
            ],
            evidencias: [
              "Código de ética y políticas de integridad implementadas.",
              "Debida diligencia de terceros y gestión de conflictos de interés.",
              "Registro de denuncias/investigaciones y acciones correctivas.",
            ],
            preguntas: [
              "¿Se toman decisiones difíciles (renunciar a negocios) cuando violan valores?",
              "¿Cómo se controla el riesgo de integridad en terceros críticos?",
            ],
          },
          examples: ["Código de ética", "Política anticorrupción y conflictos de interés"],
        },
        {
          id: 5,
          title: "Atrae, desarrolla y retiene personas capaces.",
          meaning: "El ERM requiere capacidades analíticas, criterio y disciplina operativa.",
          detail: {
            explicacion:
              "Sin capacidades (datos, análisis, criterio) el ERM se vuelve un trámite; con talento se vuelve una herramienta de decisión.",
            comoAplicarlo: [
              "Definir competencias en riesgos por rol (análisis, modelamiento, negociación, cumplimiento).",
              "Capacitar en metodología ERM, KRIs, escenarios y respuesta al riesgo.",
              "Asegurar continuidad en roles críticos (sucesión, rotación controlada, documentación).",
            ],
            evidencias: [
              "Capacitación en riesgos y certificaciones relevantes.",
              "Roles críticos con reemplazo/continuidad y documentación de procesos.",
              "Evaluaciones de desempeño que incluyen gestión de riesgos.",
            ],
            preguntas: [
              "¿Quién interpreta y convierte datos de riesgo en decisiones accionables?",
              "¿Hay dependencia excesiva de una sola persona o consultor?",
            ],
          },
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
          detail: {
            explicacion:
              "El contexto define qué riesgos importan: al entender mercado, regulación y capacidades internas, las decisiones de estrategia se vuelven realistas.",
            comoAplicarlo: [
              "Analizar entorno externo (regulación, competencia, macroeconomía, tecnología) y tendencias.",
              "Evaluar capacidades internas (procesos, talento, sistemas, liquidez) y limitaciones.",
              "Identificar stakeholders y expectativas (clientes, reguladores, socios) que impactan la estrategia.",
            ],
            evidencias: [
              "PESTEL/FODA actualizado con implicancias de riesgo.",
              "Análisis de stakeholders y compromisos relevantes.",
              "Evaluación de capacidades y brechas para ejecutar la estrategia.",
            ],
            preguntas: [
              "¿Qué supuestos de contexto podrían cambiar y afectar la estrategia?",
              "¿Qué capacidades faltan para ejecutar la estrategia sin exceder el riesgo aceptable?",
            ],
          },
          examples: ["PESTEL/FODA", "Análisis de stakeholders"],
        },
        {
          id: 7,
          title: "Define el apetito de riesgo.",
          meaning: "Define límites y tolerancias para alinear crecimiento, rentabilidad y control.",
          detail: {
            explicacion:
              "El apetito de riesgo traduce la estrategia en límites operativos: cuánto riesgo se acepta (y dónde no) para alcanzar objetivos.",
            comoAplicarlo: [
              "Definir métricas por tipo de riesgo (financiero, operativo, cumplimiento, reputación) con límites y tolerancias.",
              "Conectar límites con decisiones (p. ej., crédito, inversión, proveedores, ciberseguridad).",
              "Establecer reglas de escalamiento cuando se exceda tolerancia (quién decide y en cuánto tiempo).",
            ],
            evidencias: [
              "Apetito de riesgo documentado con métricas y umbrales.",
              "Límites por tipo de riesgo integrados a procesos (workflows, aprobaciones).",
              "Alertas y reportes por exceder tolerancias con acciones registradas.",
            ],
            preguntas: [
              "¿Los límites influyen decisiones reales o solo existen en un documento?",
              "¿Qué pasa cuando se excede el apetito (quién autoriza continuar y por cuánto tiempo)?",
            ],
          },
          examples: ["Umbrales por indicador", "Límites por tipo de riesgo"],
        },
        {
          id: 8,
          title: "Evalúa estrategias alternativas.",
          meaning: "Compara opciones con escenarios y trade-offs riesgo–retorno.",
          detail: {
            explicacion:
              "Permite elegir entre rutas posibles midiendo impacto en valor y riesgo; no se trata de “cero riesgo”, sino de riesgo consciente.",
            comoAplicarlo: [
              "Evaluar alternativas con escenarios (optimista/base/pesimista) y sensibilidad (variables críticas).",
              "Comparar riesgo–retorno: inversión, margen, reputación, cumplimiento, resiliencia operativa.",
              "Definir mitigaciones por alternativa y decidir con base en apetito y capacidades.",
            ],
            evidencias: [
              "Análisis de escenarios y sensibilidad documentado.",
              "Comparación riesgo–retorno entre alternativas con supuestos claros.",
              "Mitigaciones propuestas y responsables antes de ejecutar la estrategia.",
            ],
            preguntas: [
              "¿Qué variable rompe el modelo (punto de quiebre) y cómo se monitorea?",
              "¿La alternativa elegida está dentro del apetito de riesgo y con mitigaciones reales?",
            ],
          },
          examples: ["Análisis de escenarios", "Simulación y sensibilidad"],
        },
        {
          id: 9,
          title: "Formula objetivos de negocio.",
          meaning: "Objetivos claros permiten medir desempeño y monitorear riesgo asociado.",
          detail: {
            explicacion:
              "Objetivos bien formulados habilitan medir desempeño y riesgo en el tiempo; objetivos ambiguos generan decisiones inconsistentes y control débil.",
            comoAplicarlo: [
              "Definir objetivos medibles (OKRs/KPIs) por unidad y proceso, con responsables y plazos.",
              "Alinear objetivos a apetito de riesgo y definir tolerancias (rangos aceptables).",
              "Cascadear objetivos y riesgos asociados para que cada área entienda su contribución.",
            ],
            evidencias: [
              "OKRs o KPIs con metas, responsables y frecuencia de revisión.",
              "Cascada de objetivos por áreas y portafolio de riesgos asociado.",
              "Definición de tolerancias y criterios de escalamiento por objetivo crítico.",
            ],
            preguntas: [
              "¿Los objetivos se pueden medir con datos disponibles y confiables?",
              "¿Qué riesgos clave podrían impedir el logro de cada objetivo y cómo se monitorean?",
            ],
          },
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
          detail: {
            explicacion:
              "Identificar riesgos significa describir eventos, causas y consecuencias, incluyendo oportunidades; es la base para priorizar y responder.",
            comoAplicarlo: [
              "Usar talleres por proceso, datos históricos e indicadores para levantar eventos y causas reales.",
              "Incluir riesgos emergentes (tecnología, regulación, clima, reputación) y oportunidades.",
              "Asignar dueño del riesgo y relacionarlo con objetivos específicos (no genéricos).",
            ],
            evidencias: [
              "Catálogo de riesgos con dueños, objetivos asociados y descripción de causas/impactos.",
              "Workshops documentados y evidencia de revisión de incidentes históricos.",
              "Riesgos emergentes revisados periódicamente (horizon scanning).",
            ],
            preguntas: [
              "¿El catálogo describe riesgos accionables (evento + causa) o solo “temas” generales?",
              "¿Qué oportunidades se están persiguiendo y qué riesgos habilitadores/controladores existen?",
            ],
          },
          examples: ["Catálogo de riesgos", "Workshops por proceso"],
        },
        {
          id: 11,
          title: "Evalúa la severidad del riesgo (impacto y probabilidad).",
          meaning: "Mide severidad considerando velocidad de ocurrencia y persistencia.",
          detail: {
            explicacion:
              "No todos los riesgos pesan igual: la severidad integra impacto, probabilidad, velocidad (qué tan rápido ocurre) y persistencia (cuánto dura).",
            comoAplicarlo: [
              "Definir escalas homogéneas (impacto, probabilidad, velocidad, persistencia) y criterios por tipo de riesgo.",
              "Cuantificar cuando sea posible (pérdidas esperadas, impacto en KPIs) y documentar supuestos.",
              "Evaluar controles existentes para estimar riesgo residual y su tendencia.",
            ],
            evidencias: [
              "Matriz de evaluación con escalas y criterios claros.",
              "Estimaciones cuantitativas/supuestos documentados (escenarios).",
              "Riesgo inherente vs residual y tendencia (mejora/empeora) por periodo.",
            ],
            preguntas: [
              "¿La severidad está basada en datos/supuestos claros o solo percepción?",
              "¿Se considera velocidad/persistencia para priorizar respuesta temprana?",
            ],
          },
          examples: ["Matriz de evaluación", "Escalas homogéneas por unidad"],
        },
        {
          id: 12,
          title: "Prioriza riesgos.",
          meaning: "Ordena por severidad y alineación con estrategia para asignar recursos.",
          detail: {
            explicacion:
              "La priorización enfoca recursos en lo que realmente amenaza (o habilita) la estrategia; evita dispersión en riesgos menores.",
            comoAplicarlo: [
              "Construir un ranking (top risks) por severidad residual y criticidad del objetivo.",
              "Considerar dependencias y concentración: riesgos que impactan varios objetivos a la vez.",
              "Asignar recursos y dueños de acciones según prioridad (no “para todos igual”).",
            ],
            evidencias: [
              "Listado de top risks con justificación y responsables.",
              "Priorización por objetivos críticos y riesgos transversales.",
              "Asignación presupuestaria/recursos vinculada a prioridades de riesgo.",
            ],
            preguntas: [
              "¿Los riesgos priorizados coinciden con los incidentes reales y con la estrategia?",
              "¿Qué riesgos se aceptan explícitamente y por qué?",
            ],
          },
          examples: ["Top risks", "Priorización por objetivos críticos"],
        },
        {
          id: 13,
          title: "Implementa respuestas al riesgo.",
          meaning: "Define acciones: aceptar, evitar, reducir, compartir o perseguir (oportunidades).",
          detail: {
            explicacion:
              "La respuesta convierte el diagnóstico en acción: define qué se hará, cuánto reducirá el riesgo, cuánto costará y quién lo ejecutará.",
            comoAplicarlo: [
              "Seleccionar respuesta (aceptar/reducir/compartir/evitar/perseguir) alineada a apetito y costo–beneficio.",
              "Diseñar planes con hitos, responsables, recursos y métricas (KRIs/KPIs) para medir efectividad.",
              "Integrar respuesta en procesos (políticas, tecnología, contratos) para que sea sostenible.",
            ],
            evidencias: [
              "Planes de mitigación con responsables, fechas y métricas.",
              "Transferencia vía seguros/contratos y evidencia de cobertura/revisión.",
              "Controles implementados y pruebas de efectividad (antes/después).",
            ],
            preguntas: [
              "¿Qué reducción esperada de riesgo produce la respuesta y cómo se medirá?",
              "¿La organización está aceptando riesgos fuera del apetito sin decisión explícita?",
            ],
          },
          examples: ["Planes de mitigación", "Transferencia vía seguros/contratos"],
        },
        {
          id: 14,
          title: "Desarrolla una visión de portafolio de riesgos.",
          meaning: "Evalúa interdependencias y acumulación de riesgos sobre el desempeño global.",
          detail: {
            explicacion:
              "El portafolio muestra cómo los riesgos se combinan: un riesgo moderado aislado puede ser crítico cuando se correlaciona con otros.",
            comoAplicarlo: [
              "Consolidar riesgos por objetivos y unidades para visualizar concentraciones y correlaciones.",
              "Analizar escenarios de estrés (cascadas) y vulnerabilidades comunes (proveedores, sistemas, liquidez).",
              "Definir límites de concentración y acciones para diversificar/mitigar riesgos acumulados.",
            ],
            evidencias: [
              "Mapa por objetivos/unidades y vista agregada del portafolio.",
              "Análisis de correlación o dependencias (cadena de suministro + reputación, etc.).",
              "Reportes ejecutivos de portafolio con decisiones y acciones resultantes.",
            ],
            preguntas: [
              "¿Qué riesgos se potencian entre sí y cuáles son los puntos únicos de falla?",
              "¿Cómo cambia el portafolio ante un escenario adverso (estrés) y qué haríamos?",
            ],
          },
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
          detail: {
            explicacion:
              "Los cambios (proyectos, adquisiciones, regulación, tecnología) alteran el perfil de riesgo; este principio mantiene el ERM actualizado y útil.",
            comoAplicarlo: [
              "Integrar evaluación de riesgo en gestión del cambio y en comités de proyectos.",
              "Revisar perfil de riesgo ante cambios relevantes (nuevos mercados, productos, tercerización).",
              "Definir acciones preventivas y controles compensatorios durante transiciones.",
            ],
            evidencias: [
              "Revisiones tras adquisiciones/proyectos con análisis de impacto en riesgos y controles.",
              "Cambios regulatorios evaluados con planes de cumplimiento.",
              "Post-implementación con lecciones aprendidas y ajustes.",
            ],
            preguntas: [
              "¿Qué cambios recientes alteraron el riesgo y qué se ajustó concretamente?",
              "¿Se evalúa el riesgo antes de ejecutar o solo después del incidente?",
            ],
          },
          examples: ["Revisión tras adquisiciones", "Cambios regulatorios"],
        },
        {
          id: 16,
          title: "Revisa riesgo y desempeño.",
          meaning: "Monitorea indicadores, KRIs y resultados para ajustar decisiones y respuestas.",
          detail: {
            explicacion:
              "Conecta riesgo con desempeño: monitorea KRIs/KPIs, identifica tendencias y ajusta estrategia y respuestas antes de que el riesgo se materialice.",
            comoAplicarlo: [
              "Definir tableros con KPIs/KRIs, umbrales y responsables por objetivo crítico.",
              "Revisar periódicamente (mensual/trimestral) con dirección, priorizando decisiones y acciones.",
              "Actualizar valoración de riesgos y efectividad de respuestas según resultados e incidentes.",
            ],
            evidencias: [
              "Tablero de riesgos con KRIs, umbrales y alertas.",
              "Revisiones trimestrales con dirección y acuerdos documentados.",
              "Actualización de valoración de riesgos y seguimiento de planes.",
            ],
            preguntas: [
              "¿Los indicadores anticipan problemas (leading) o solo reportan lo que ya pasó (lagging)?",
              "¿Qué decisiones se tomaron a partir del tablero de riesgos en el último periodo?",
            ],
          },
          examples: ["Tablero de riesgos", "Revisiones trimestrales con dirección"],
        },
        {
          id: 17,
          title: "Impulsa la mejora del ERM.",
          meaning: "Incorpora lecciones aprendidas y fortalece metodologías y cultura.",
          detail: {
            explicacion:
              "El ERM mejora con aprendizaje continuo: incidentes, casi-incidentes y cambios del entorno alimentan ajustes en metodología, controles y cultura.",
            comoAplicarlo: [
              "Realizar post-mortems y análisis de causa raíz para incidentes y proyectos relevantes.",
              "Actualizar políticas, apetito, metodología y herramientas con base en hallazgos.",
              "Medir madurez del ERM y ejecutar un plan de mejora anual (personas, procesos, tecnología).",
            ],
            evidencias: [
              "Post-mortems documentados con acciones preventivas.",
              "Actualización de políticas y apetito con aprobaciones.",
              "Evaluaciones de madurez y plan de mejora ejecutado.",
            ],
            preguntas: [
              "¿Qué cambió en el ERM por un incidente reciente (concretamente)?",
              "¿Cómo se asegura que las mejoras se mantengan en el tiempo (no solo el primer mes)?",
            ],
          },
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
          detail: {
            explicacion:
              "La información de riesgo debe ser confiable, integrada y oportuna; sin sistemas adecuados, el reporte llega tarde o incompleto.",
            comoAplicarlo: [
              "Definir fuentes de datos confiables y un modelo común (catálogo de riesgos, KRIs, incidentes).",
              "Automatizar captura/consolidación y asegurar calidad del dato (validaciones, reconciliaciones).",
              "Habilitar analítica para detectar tendencias, outliers y correlaciones del portafolio.",
            ],
            evidencias: [
              "Integración de datos entre sistemas (ERP, BI, GRC) y definiciones consistentes.",
              "Automatización de reportes con controles de calidad del dato.",
              "Dashboards con trazabilidad a fuente y control de accesos.",
            ],
            preguntas: [
              "¿Qué tan confiables son los datos del tablero (fuente, definiciones, actualización)?",
              "¿El reporte llega a tiempo para decidir o solo para “cumplir” con la reunión?",
            ],
          },
          examples: ["Integración de datos", "Automatización de reportes"],
        },
        {
          id: 19,
          title: "Comunica información de riesgos.",
          meaning: "Comunicación clara y oportuna a quienes toman decisiones.",
          detail: {
            explicacion:
              "La comunicación convierte información en acción: define mensajes claros, audiencia, urgencia y escalamiento para decisiones oportunas.",
            comoAplicarlo: [
              "Definir qué se comunica (KRIs, incidentes, cambios), a quién y con qué frecuencia.",
              "Establecer alertas por umbrales y rutas de escalamiento (incluye crisis).",
              "Asegurar comunicación bidireccional: retroalimentación desde operación hacia dirección.",
            ],
            evidencias: [
              "Alertas por umbrales y registro de respuesta/decisiones.",
              "Comités de riesgos con agenda y acuerdos.",
              "Protocolos de comunicación de incidentes y lecciones aprendidas.",
            ],
            preguntas: [
              "¿Las alertas generan acciones concretas o se normaliza la excepción?",
              "¿La información llega al nivel correcto (ni demasiado técnica ni demasiado genérica)?",
            ],
          },
          examples: ["Alertas por umbrales", "Comités de riesgos"],
        },
        {
          id: 20,
          title: "Reporta sobre riesgos, cultura y desempeño.",
          meaning: "Reportes para dirección y gobierno: situación, tendencias, acciones y resultados.",
          detail: {
            explicacion:
              "El reporte integra riesgo, cultura y desempeño en un formato que permite decidir: qué pasó, qué podría pasar, qué se está haciendo y qué falta.",
            comoAplicarlo: [
              "Estandarizar reportes: severidad, tendencia, exposición, acciones, responsables y fechas.",
              "Incluir cultura y comportamiento (speak-up, incidentes, cumplimiento) junto con KRIs/KPIs.",
              "Asegurar consistencia y comparabilidad entre unidades y periodos (mismo lenguaje y escalas).",
            ],
            evidencias: [
              "Reportes ejecutivos periódicos con tendencias y decisiones registradas.",
              "Seguimiento de planes de mitigación y evidencias de cierre.",
              "Indicadores de cultura incluidos en el reporte (no solo “riesgos duros”).",
            ],
            preguntas: [
              "¿El reporte permite decidir (prioridades y acciones) o solo describe información?",
              "¿Se reportan temas difíciles (fuera de apetito) con transparencia y sin maquillaje?",
            ],
          },
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
