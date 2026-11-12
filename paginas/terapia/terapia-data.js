// Cada párrafo de "descripcion" es un texto del array.
const TERAPIAS = {
    TE_SRC: {
        nombre: "Sesión Raíz Consciente",
        imagen: "/assets/img/terapias/raiz-consciente.png",
        detalles: ["Online", "60 minutos", "Acompañamiento terapéutico profundo"],
        descripcion: [
            "La Sesión Raíz Consciente es un acompañamiento terapéutico diseñado para ayudarte a comprender y liberar lo que hoy te está afectando emocional o energéticamente. Durante 60 minutos trabajamos juntas de manera online, en un espacio seguro y confidencial, donde puedes expresarte con libertad y recibir guía clara y profesional.",
            "En esta sesión identificamos el origen de tus emociones, patrones repetitivos, memorias guardadas y cargas familiares que influyen en tu presente. A través de un proceso profundo y consciente, ordenamos tu energía, liberamos bloqueos y abrimos espacio para que recuperes claridad, equilibrio y bienestar.",
            "Es una sesión ideal para quienes buscan un acompañamiento cercano, humano y transformador."
        ],
        secciones: [
            {
                titulo: "Beneficios de la Sesión Raíz Consciente",
                items: [
                    { titulo: "Alivio emocional inmediato", texto: "Sientes descanso interno al liberar lo que estaba acumulado o sin expresar." },
                    { titulo: "Claridad mental y energética", texto: "Comprendes el origen de lo que te ocurre y recuperas dirección." },
                    { titulo: "Liberación de bloqueos y patrones repetitivos", texto: "Ordenamos tu energía para que puedas avanzar sin cargas del pasado." },
                    { titulo: "Integración de memorias y experiencias", texto: "Lo que dolía deja de controlar tu presente y se transforma en aprendizaje." },
                    { titulo: "Reconexión contigo misma", texto: "Vuelves a tu raíz, a tu verdad y a tu centro emocional." },
                    { titulo: "Sensación de ligereza y bienestar", texto: "Te sientes más liviana, presente y en equilibrio." },
                    { titulo: "Acompañamiento seguro y profesional", texto: "Estás sostenida durante todo el proceso, con guía consciente y humana." }
                ]
            }
        ]
    },
    TE_SPL: {
        nombre: "Sanación Pleyadiana",
        imagen: "/assets/img/terapias/sanacion-pleyadiana.png",
        detalles: ["Online", "60 minutos", "Acompañamiento energético de alta vibración"],
        descripcion: [
            "La Sanación Pleyadiana es una técnica energética donde somos asistidos por los Pleyadianos, seres de luz de alta vibración que trabajan desde el amor más puro. Su energía llega para ayudarnos a recordar quiénes somos, liberar densidades y elevar nuestra frecuencia. Durante la sesión, los Pleyadianos actúan sobre tu campo energético para limpiar memorias físicas, emocionales y mentales, disolver energías densas y armonizar todo tu sistema.",
            "Alinean tus chakras, ordenan tu energía y te conectan con la frecuencia de la Fuente creadora, expansiva y amorosa.",
            "Es un proceso profundo, suave y transformador, ideal para quienes buscan una limpieza energética completa y una reconexión espiritual elevada."
        ],
        secciones: [
            {
                titulo: "Beneficios de la Sanación Pleyadiana",
                items: [
                    { titulo: "Limpieza energética profunda", texto: "Se liberan densidades, brujería emocional, cargas mentales y bloqueos antiguos." },
                    { titulo: "Alineación de chakras", texto: "Tu sistema energético se ordena y vuelve a su flujo natural." },
                    { titulo: "Armonización física, emocional y mental", texto: "Sientes equilibrio, claridad y descanso interno." },
                    { titulo: "Elevación vibracional", texto: "Te conectas con frecuencias de amor, expansión y luz." },
                    { titulo: "Reconexión con tu esencia", texto: "Recuerdas tu verdad, tu poder y tu naturaleza espiritual." },
                    { titulo: "Sensación de protección y guía", texto: "La energía Pleyadiana envuelve, sostiene y acompaña todo el proceso." },
                    { titulo: "Mayor claridad y bienestar", texto: "Tu campo energético queda limpio, ordenado y luminoso." }
                ]
            }
        ]
    },
    TE_TAM: {
        nombre: "Tameana",
        imagen: "/assets/img/terapias/tameana.png",
        detalles: ["Online", "60 minutos"],
        descripcion: [
            "Tameana es una terapia energética flexible y personalizada que ofrece diversas opciones de trabajo según lo que requiera cada consultante.",
            "Se recibe la asistencia de los Pleyadianos, Tameana no es Sanación Pleyadiana:",
            "Es un protocolo propio que integra distintas técnicas para limpiar, ordenar y elevar el campo energético. Durante la sesión se trabaja sobre el dolor acumulado y las energías estancadas para facilitar la liberación, la alineación de los centros energéticos y la reconexión con la propia esencia. "
        ],
        secciones: [
            {
                titulo: "Beneficios de la Sección Tameana",
                items: [
                    "Liberación de dolor acumulado que limita el bienestar",
                    "Disolución de energías estancadas y bloqueo emocional",
                    "Alineación y armonización de chakras que mejora el equilibrio físico y emocional",
                    "Mayor claridad mental y emocional para tomar decisiones más alineadas",
                    "Sensación de ligereza y bienestar tras la sesión",
                    "Reconexión con la propia esencia y recuerdo del estado de amor interior",
                    "Acompañamiento adaptado y seguro, respetando el ritmo del consultante"
                ]
            }
        ]
    },
    TE_AG: {
        nombre: "Árbol Genealógico",
        imagen: "/assets/img/terapias/arbol-genealogico.png",
        detalles: ["Online", "60 minutos"],
        descripcion: [
            "Sesión de Árbol Genealógico es un acompañamiento terapéutico focalizado en el linaje: identificamos de quiénes estamos repitiendo la historia y qué patrones heredados condicionan tu vida.",
            "A través de una lectura consciente del campo familiar y técnicas de liberación, exploramos lealtades invisibles, programas y conductas repetitivas que provienen de tus ancestros.",
            "El objetivo es reparar lo que necesita sanación y realizar cortes amorosos con aquello que ya no te sirve, para que puedas recuperar libertad, autenticidad y fluidez en tu camino."
        ],
        secciones: [
            {
                titulo: "Qué trabajamos",
                items: [
                    "Detección de patrones repetitivos y programas del linaje.",
                    "Identificación de lealtades invisibles y dinámicas familiares que condicionan.",
                    "Reparación de vínculos y reconocimiento de lo que fue rechazado.",
                    "Cortes energéticos y simbólicos con ancestros para liberar lealtades inconscientes.",
                    "Integración y reordenamiento del sistema familiar desde el amor y la responsabilidad personal."
                ]
            },
            {
                titulo: "Beneficios",
                items: [
                    "Claridad sobre por qué repites ciertos patrones y cómo transformarlos.",
                    "Liberación de lealtades inconscientes que limitan tu autonomía.",
                    "Reducción de cargas emocionales heredadas y alivio interior.",
                    "Mayor libertad para elegir y construir nuevas respuestas en tu vida.",
                    "Reparación y reconciliación interna con la historia familiar.",
                    "Alineamiento energético que facilita bienestar y coherencia personal.",
                    "Herramientas prácticas para sostener los cambios en el día a día."
                ]
            }
        ]
    },
    TE_LE: {
        nombre: "Liberación de Emociones con Imanes",
        imagen: "/assets/img/terapias/liberacion-emociones.png",
        detalles: ["Online", "60 minutos"],
        descripcion: [
            "Terapia energética profunda para liberar memorias emocionales atrapadas en el cuerpo.",
            "La Liberación de Emociones con Imanes es un método terapéutico que combina el biomagnetismo emocional con la lectura intuitiva del campo energético.",
            "Las emociones que no pudimos expresar —dolor, miedo, abandono, vergüenza, enojo, confusión— quedan registradas en órganos, tejidos y en el sistema nervioso. Con el tiempo, estas cargas generan tensión interna, reacciones automáticas, bloqueos y patrones que se repiten.",
            "A través de imanes terapéuticos, identificamos y liberamos esas emociones atrapadas para que tu energía vuelva a fluir con suavidad, claridad y equilibrio."
        ],
        secciones: [
            {
                titulo: "¿Qué trabajamos en esta sesión?",
                items: [
                    "Emociones atrapadas en órganos y tejidos",
                    "Memorias de infancia y heridas profundas",
                    "Cargas energéticas acumuladas",
                    "Bloqueos en el sistema nervioso",
                    "Patrones emocionales repetitivos",
                    "Sensación de peso, estancamiento o confusión",
                    "Reacciones automáticas que no puedes controlar"
                ]
            },
            {
                titulo: "¿Qué puedes sentir después?",
                items: [
                    "Ligereza emocional",
                    "Regulación del sistema nervioso",
                    "Claridad mental y emocional",
                    "Descanso profundo",
                    "Sensación de alivio y expansión",
                    "Mayor conexión contigo misma",
                    "Paz interna y estabilidad energética"
                ]
            }
        ]
    },
    TE_RA: {
        nombre: "Registros Akáshicos",
        imagen: "/assets/img/terapias/registros-akashicos.png",
        detalles: ["Online", "60 minutos"],
        descripcion: [
            "Lectura profunda del alma para comprender tu historia, tus patrones y tu propósito.",
            "Los Registros Akáshicos son el archivo energético donde se guarda toda la información de tu alma: experiencias, memorias, aprendizajes, contratos, heridas, dones y caminos posibles.",
            "Acceder a ellos es entrar en un espacio de verdad, guía y claridad, donde recibes información que te ayuda a comprender quién eres, qué estás viviendo y hacia dónde te estás moviendo.",
            "En esta sesión, abrimos tu campo akáshico con respeto y amor, para recibir mensajes que te permitan avanzar con mayor conciencia, liviandad y dirección."
        ],
        secciones: [
            {
                titulo: "¿Qué se trabaja en esta sesión?",
                items: [
                    "Patrones que se repiten y no logras comprender",
                    "Bloqueos emocionales, energéticos o espirituales",
                    "Heridas de infancia y memorias profundas",
                    "Relaciones importantes (pareja, familia, hijos)",
                    "Propósito del alma y dirección de vida",
                    "Cierres de ciclos y decisiones importantes",
                    "Dones, talentos y potenciales que están listos para despertar"
                ]
            },
            {
                titulo: "¿Qué recibes durante la lectura?",
                items: [
                    "Mensajes claros y directos desde tu campo akáshico",
                    "Comprensión profunda de lo que estás viviendo",
                    "Guía para tomar decisiones desde tu verdad interior",
                    "Liberación de cargas emocionales y energéticas",
                    "Alineación con tu propósito y tu camino",
                    "Sensación de claridad, alivio y expansión"
                ]
            }
        ]
    },
    TE_HE: {
        nombre: "Hipnosis Ericksoniana",
        imagen: "/assets/img/terapias/hipnosis-ericksoniana.png",
        detalles: ["Online", "60 minutos"],
        descripcion: [
            "Terapia suave, profunda y respetuosa que trabaja directamente con tu inconsciente para liberar patrones, creencias y emociones que influyen en tu vida.",
            "La Hipnosis Ericksoniana es una técnica terapéutica que utiliza lenguaje metafórico, relajación guiada y comunicación indirecta para acceder al inconsciente, donde viven memorias, aprendizajes, heridas y recursos internos que muchas veces no sabemos cómo activar.",
            "Es una terapia amorosa, segura y profundamente transformadora.",
            "No se trata de “perder el control”, sino de entrar en un estado de relajación consciente donde tu mente puede reorganizar, liberar y sanar aquello que te limita."
        ],
        secciones: [
            {
                titulo: "¿Qué se trabaja en esta sesión?",
                items: [
                    "Creencias limitantes que bloquean tu avance",
                    "Patrones repetitivos que no logras cambiar",
                    "Ansiedad, miedo, inseguridad o autosabotaje",
                    "Heridas de infancia y memorias profundas",
                    "Reacciones automáticas que no puedes controlar",
                    "Dificultad para tomar decisiones o avanzar",
                    "Cansancio emocional y mental"
                ]
            },
            {
                titulo: "¿Qué recibes durante la lectura?",
                items: [
                    "Relajación profunda del cuerpo y la mente",
                    "Sensación de seguridad y contención",
                    "Claridad emocional",
                    "Conexión con tu sabiduría interna",
                    "Acceso a recursos que ya existen en ti",
                    "Liberación de tensiones internas",
                    "Comprensión de patrones y emociones"
                ]
            },
            {
                titulo: "¿Qué puedes sentir después?",
                items: [
                    "Calma emocional",
                    "Mayor claridad y enfoque",
                    "Regulación del sistema nervioso",
                    "Sensación de liviandad y alivio",
                    "Cambios en patrones y reacciones",
                    "Apertura para tomar decisiones desde tu verdad"
                ]
            }
        ]
    },
    TE_CA: {
        nombre: "Cirugía Astral",
        imagen: "/assets/img/terapias/cirugia-astral.png",
        detalles: ["Online", "60 minutos"],
        descripcion: [
            "Sanación multidimensional para reparar, limpiar y armonizar tu campo energético en planos sutiles.",
            "La Cirugía Astral es una técnica de sanación profunda que trabaja en dimensiones superiores del campo energético. En estos planos se encuentran memorias, bloqueos, densidades y estructuras que no siempre pueden ser liberadas desde terapias tradicionales.",
            "Aquí intervenimos directamente en tu cuerpo energético, restaurando su orden natural, liberando cargas y reparando zonas que han sido afectadas por experiencias, emociones, vínculos o situaciones de vida.",
            "Es una terapia poderosa, amorosa y transformadora que actúa donde la palabra ya no llega."
        ],
        secciones: [
            {
                titulo: "¿Qué se trabaja en esta sesión?",
                items: [
                    "Bloqueos energéticos profundos",
                    "Densidades acumuladas en el campo áurico",
                    "Memorias antiguas que generan peso o confusión",
                    "Cansancio energético y sensación de estancamiento",
                    "Cortes, fisuras o debilitamiento del campo energético",
                    "Influencias externas que afectan tu claridad y bienestar",
                    "Cierre de ciclos y limpieza de residuos energéticos"
                ]
            },
            {
                titulo: "¿Qué ocurre durante la sesión?",
                parrafos: [
                    "A nivel astral, tu campo energético es revisado, limpiado y reparado.",
                    "Se liberan densidades, se armonizan centros energéticos, se cierran fisuras y se restaura la estructura luminosa del cuerpo sutil.",
                    "La energía vuelve a su orden natural, permitiendo que tu cuerpo físico, emocional y mental se alineen nuevamente.",
                    "Es una experiencia suave, profunda y silenciosa.",
                    "Tu alma reconoce el trabajo y responde con alivio."
                ]
            },
            {
                titulo: "¿Qué puedes sentir después?",
                items: [
                    "Ligereza y claridad mental",
                    "Descanso profundo",
                    "Sensación de alivio y expansión",
                    "Mayor energía y vitalidad",
                    "Paz interna y estabilidad emocional",
                    "Conexión con tu esencia y tu luz",
                    "Apertura para avanzar sin peso"
                ]
            }
        ]
    },
    TE_KI: {
        nombre: "Kepri de Isis",
        imagen: "/assets/img/terapias/kepri-de-isis.png",
        detalles: ["Online", "60 minutos"],
        descripcion: [
            "Limpieza, desbloqueo y manifestación energética. Terapia de purificación profunda para liberar densidades, abrir caminos y activar la energía de manifestación en tu vida.",
            "Khepri es una energía solar de renacimiento, movimiento y creación. La frecuencia de Isis actúa como una fuerza de limpieza, orden y apertura de caminos.",
            "Cuando trabajamos con ambas energías, se produce una purificación profunda del campo energético, liberando bloqueos, densidades y memorias que impiden que tu vida fluya con claridad.",
            "Esta terapia es ideal para momentos donde sientes peso, estancamiento, confusión o dificultad para avanzar. Khepri de Isis limpia, ordena y activa tu energía para que puedas manifestar desde un espacio más liviano, alineado y luminoso."
        ],
        secciones: [
            {
                titulo: "¿Qué se trabaja en esta terapia?",
                items: [
                    "Limpieza de bloqueos energéticos",
                    "Eliminación de densidades acumuladas",
                    "Purificación del campo áurico",
                    "Apertura de caminos y fluidez en la vida",
                    "Activación de la energía de manifestación",
                    "Liberación de memorias que generan estancamiento",
                    "Orden y claridad en el cuerpo energético"
                ]
            },
            {
                titulo: "¿Cómo funciona la terapia?",
                intro: ["La energía de Khepri (renacimiento y movimiento) y la frecuencia de Isis (sanación y orden) trabajan juntas para:"],
                items: [
                    { titulo: "Despejar tu campo energético" },
                    { titulo: "Quitar densidades que frenan tu avance" },
                    { titulo: "Restaurar la claridad y la dirección" },
                    { titulo: "Activar tu capacidad de manifestar" },
                    { titulo: "Alinear tu energía con tu propósito" },
                    { titulo: "Es una terapia suave, profunda y altamente transformadora."}
                ],
                cierre: ["Es una terapia suave, profunda y altamente transformadora."]
            },
            {
                titulo: "Duración del proceso",
                intro: ["Esta terapia puede realizarse en ciclos según lo que tu energía requiera:"],
                items: [
                    { titulo: "3 días", texto: "Limpieza inicial y apertura de caminos" },
                    { titulo: "7 días", texto: "Purificación profunda y desbloqueo energético" },
                    { titulo: "14 días", texto: "Reordenamiento completo del campo energético" },
                    { titulo: "21 días", texto: "Transformación, manifestación y alineación total" }
                ],
                cierre: ["Cada ciclo acompaña un nivel distinto de profundidad y movimiento energético."]
            },
            {
                titulo: "¿Qué puedes sentir después?",
                items: [
                    "Ligereza emocional y mental",
                    "Claridad en decisiones y dirección",
                    "Sensación de apertura y fluidez",
                    "Mayor energía y vitalidad",
                    "Manifestación más rápida y alineada",
                    "Paz interna y estabilidad energética",
                    "Liberación de peso, confusión o estancamiento"
                ]
            },
        ]
    },
    TE_LLA: {
        nombre: "Limpieza con Llave Ankh",
        imagen: "/assets/img/terapias/llave-ankh.png",
        detalles: ["Online", "60 minutos"],
        descripcion: [
            "Purificación de Magia Negra, Daño Energético y Trabajos Oscuros sanación profunda con la Llave Ankh y la asistencia de los Dioses Egipcios para liberar todo tipo de daño energético.",
            "La Llave Ankh es un símbolo de vida, protección y poder espiritual utilizado en las antiguas prácticas egipcias.",
            "En esta terapia, la Ankh se convierte en un canal de luz que corta, disuelve y purifica cualquier energía oscura que haya sido enviada hacia ti: magia negra, trabajos oscuros, brujería, envidias, maldiciones, entidades, implantes energéticos o cualquier forma de daño que afecte tu campo.",
            "Trabajamos directamente con los Dioses Egipcios, especialmente con Anubis, guardián de los portales y protector de los caminos espirituales.",
            "Su presencia guía la limpieza, elimina interferencias y restaura tu energía original"
        ],
        secciones: [
            {
                titulo: "¿Qué se limpia en esta terapia?",
                items: [
                    "Magia negra y trabajos oscuros",
                    "Brujería, maldiciones y rituales enviados",
                    "Daño energético intencional o no intencional",
                    "Entidades, larvas y densidades adheridas",
                    "Envidias, celos, pensamientos negativos dirigidos",
                    "Bloqueos puestos para frenar tu camino",
                    "Cansancio energético provocado por ataques psíquicos",
                    "Interferencias en tu aura, chakras y campo sutil"
                ] 
            },
            {
                titulo: "¿Cómo se realiza la limpieza?",
                intro: [ "La Llave Ankh actúa como un rayo de luz que:" ],
                items: [
                    { titulo:"Corta conexiones oscuras" },
                    { titulo:"Disuelve trabajos y rituales" },
                    { titulo:"Expulsa entidades y densidades" },
                    { titulo:"Sella tu campo energético" },
                    { titulo:"Restaura tu fuerza vital"},
                    { titulo:"Reordena tu energía para que vuelva a fluir" }
                ],
                cierre: [
                    "Durante la sesión, se invoca la presencia de Anubis, quien guía la eliminación de todo daño, protege tu campo y asegura que la limpieza sea completa y profunda.",
                    "Es una terapia ceremonial, poderosa y altamente transformadora."
                ]
            },
            {
                titulo: "¿Qué puedes sentir después?",
                items: [
                    "Ligereza inmediata",
                    "Sensación de alivio y liberación",
                    "Claridad mental y emocional",
                    "Corte de patrones negativos repetitivos",
                    "Paz interna y estabilidad energética",
                    "Recuperación de tu fuerza vital",
                    "Apertura de caminos y fluidez",
                    "Protección y sensación de seguridad"
                ]
            }
        ]
    },
    TE_RE: {
        nombre: "Reiki",
        imagen: "/assets/img/terapias/reiki.png",
        detalles: ["Online", "60 minutos"],
        descripcion: [
            "Sanación energética guiada por la asistencia de los ángeles para armonizar tu cuerpo, mente y espíritu.",
            "El Reiki Angelical es una terapia de luz que combina la energía universal con la presencia amorosa de los ángeles.",
            "Ellos actúan como guías, protectores y sanadores, ayudando a liberar bloqueos, equilibrar tus emociones y elevar tu vibración.",
            "Es una terapia suave, profunda y llena de paz, ideal para quienes buscan contención, claridad y alivio emocional.",
            "Durante la sesión, canalizo energía angelical que fluye hacia tus chakras, tu campo áurico y tu sistema nervioso, restaurando tu equilibrio interno y devolviéndote calma, luz y armonía."
        ],
        secciones: [
            {
                titulo: "¿Qué se trabaja en esta sesión?",
                items: [
                    "Bloqueos emocionales y energéticos",
                    "Ansiedad, tristeza, miedo o confusión",
                    "Cansancio mental y emocional",
                    "Falta de claridad o dirección",
                    "Desconexión espiritual",
                    "Densidades acumuladas en el campo áurico",
                    "Dolor emocional o memorias que necesitan suavidad"
                ]
            },
            {
                titulo: "¿Qué ocurre durante la sesión?",
                intro: [
                    "La energía angelical se dirige a las zonas que necesitan sanación.",
                    "Los ángeles trabajan en:"
                ],
                items: [
                    { titulo:"Tus chakras" },
                    { titulo:"Tu campo energético" },
                    { titulo:"Tu sistema nervioso" },
                    { titulo:"Tus emociones profundas" }
                ],
                cierre: [
                    "La energía se siente suave, cálida y protectora.",
                    "Es una experiencia de descanso, alivio y reconexión con tu luz."
                ]
            },
            {
                titulo: "¿Qué puedes sentir después?",
                items: [
                    "Paz interna y calma emocional",
                    "Ligereza y alivio",
                    "Claridad mental",
                    "Sensación de protección y contención",
                    "Elevación vibracional",
                    "Reconexión con tu espiritualidad",
                    "Descanso profundo y bienestar"
                ]
            }
        ]
    },
    TE_AC: {
        nombre: "Access Consciousness - Barras de Access",
        imagen: "/assets/img/terapias/access-consciousness.png",
        detalles: ["Presencial", "60 minutos"],
        descripcion: [
            "Terapia corporal que libera pensamientos, emociones y creencias limitantes para abrir espacio a más claridad, calma y posibilidades.",
            "Las Barras de Access son 32 puntos energéticos ubicados en la cabeza que almacenan pensamientos, emociones, creencias, juicios y memorias que hemos acumulado a lo largo de la vida.",
            "Cuando estos puntos se activan mediante un toque suave, el cuerpo libera cargas mentales y emocionales, permitiendo que tu energía se expanda y tu mente se relaje profundamente.",
            "Esta terapia es presencial, porque el contacto directo con los puntos energéticos potencia la liberación y genera una sensación de descanso, claridad y ligereza inmediata."
        ],
        secciones: [
            {
                titulo: "¿Qué se trabaja en esta sesión?",
                items: [
                    "Estrés, ansiedad y tensión mental",
                    "Pensamientos repetitivos o negativos",
                    "Cansancio emocional",
                    "Bloqueos para avanzar o tomar decisiones",
                    "Creencias limitantes sobre ti o tu vida",
                    "Sobrecarga mental y emocional",
                    "Sensación de estancamiento o confusión"
                ]
            },
            {
                titulo: "¿Qué ocurre durante la sesión?",
                parrafos: [
                    "Te recuestas cómodamente mientras activo los 32 puntos energéticos de tu cabeza.",
                    "Cada punto libera una categoría de energía: dinero, control, creatividad, cuerpo, relaciones, sanación, alegría, tristeza, entre muchas otras.",
                    "La mente entra en un estado de relajación profunda, similar a un sueño consciente.",
                    "El cuerpo suelta cargas que no necesita sostener y se abre espacio para nuevas posibilidades.",
                    "Es una experiencia suave, silenciosa y profundamente liberadora."
                ]
            },
            {
                titulo: "¿Qué puedes sentir después?",
                items: [
                    "Ligereza mental",
                    "Claridad y enfoque",
                    "Calma emocional",
                    "Sensación de expansión",
                    "Mayor facilidad para tomar decisiones",
                    "Descanso profundo",
                    "Apertura a nuevas ideas y posibilidades"
                ]
            },
            {
                titulo: "¿Para quién es esta terapia?",
                parrafos: [
                    "Para personas que sienten sobrecarga mental, estrés, pensamientos repetitivos o dificultad para avanzar.",
                    "También para quienes desean una terapia corporal suave que libere la mente y abra espacio a más claridad y bienestar."
                ]
            },
            {
                titulo: "Intención de la sesión",
                items: [
                    "Apagar el ruido mental.",
                    "Liberar lo que te limita.",
                    "Abrir espacio para más facilidad, calma y posibilidades en tu vida."
                ]
            }
        ]
    }
};

/*
===========  FORMATO  ============
  Cada sección ("secciones") puede combinar:
    titulo:   "Texto del título"
    intro:    ["párrafo", ...]               → texto antes de la lista
    parrafos: ["párrafo", ...]               → texto corrido en recuadro
    items:    ["frase", ...]                 → lista de frases
              [{titulo, texto}, ...]         → tarjetas
    cierre:   ["párrafo", ...]               → texto después de la lista
*/