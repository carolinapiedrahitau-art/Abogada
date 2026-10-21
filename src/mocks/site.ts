export const siteInfo = {
  name: "Carolina González",
  role: "Abogada",
  tagline: "Abogada en Dosquebradas, Risaralda",
  license: "441177",
  city: "Dosquebradas, Risaralda, Colombia",
  experienceYears: "7",
  phoneDisplay: "310 463 3110",
  // Datos editables: completar solo cuando estén confirmados.
  email: "",
  address: "",
};

export const navigationLinks = [
  { label: "Inicio", href: "/" },
  { label: "Perfil", href: "/#perfil" },
  { label: "Servicios", href: "/servicios" },
  { label: "Preguntas frecuentes", href: "/#faq" },
  { label: "Contacto", href: "/contacto" },
];

export const trustValues = [
  {
    icon: "ri-user-heart-line",
    title: "Atención personalizada",
    text: "Cada caso se escucha y analiza con dedicación, según sus circunstancias particulares.",
  },
  {
    icon: "ri-chat-check-line",
    title: "Comunicación clara",
    text: "Orientación en un lenguaje sencillo, para que comprenda sus opciones y requisitos.",
  },
  {
    icon: "ri-shield-check-line",
    title: "Responsabilidad profesional",
    text: "Acompañamiento ético, discreto y comprometido con cada persona.",
  },
];

// Áreas de práctica (nivel principal)
export const practiceAreas = [
  {
    id: "civil",
    icon: "ri-scales-3-line",
    title: "Derecho Civil",
    text: "Divorcios, sucesiones, uniones maritales y asuntos patrimoniales.",
  },
  {
    id: "familia",
    icon: "ri-home-heart-line",
    title: "Derecho de Familia",
    text: "Acompañamiento en asuntos familiares y patrimoniales relacionados.",
  },
  {
    id: "inmobiliario",
    icon: "ri-building-4-line",
    title: "Derecho Inmobiliario",
    text: "Compraventa de inmuebles, hipotecas y escrituras públicas.",
  },
  {
    id: "notarial",
    icon: "ri-file-paper-2-line",
    title: "Trámites Notariales",
    text: "Preparación y revisión de documentos para trámites notariales.",
  },
  {
    id: "penal",
    icon: "ri-government-line",
    title: "Derecho Penal",
    text: "Asesoría, defensa técnica y acompañamiento en procesos penales.",
  },
];

// Portafolio de servicios por categorías
export const serviceCategories = [
  {
    id: "civil",
    title: "Derecho Civil",
    icon: "ri-scales-3-line",
    intro:
      "Orientación y acompañamiento en asuntos civiles, de familia, inmobiliarios y notariales.",
    services: [
      {
        name: "Divorcios",
        description:
          "Orientación y acompañamiento en los trámites de divorcio, revisión de documentos y explicación de las alternativas legales según las circunstancias del caso.",
      },
      {
        name: "Sucesiones",
        description:
          "Asesoría en trámites sucesorales, identificación de requisitos, revisión documental y acompañamiento en la distribución de bienes hereditarios conforme a la ley.",
      },
      {
        name: "Declaración de unión marital de hecho",
        description:
          "Orientación sobre los requisitos, documentos y procedimientos para formalizar la declaración de una unión marital de hecho y, cuando corresponda, los asuntos patrimoniales relacionados.",
      },
      {
        name: "Escrituras públicas de compraventa",
        description:
          "Asesoría en la preparación y revisión de documentos para la compraventa de bienes inmuebles y su formalización mediante escritura pública.",
      },
      {
        name: "Hipotecas",
        description:
          "Acompañamiento jurídico en asuntos relacionados con la constitución y cancelación de hipotecas, de acuerdo con los requisitos aplicables.",
      },
      {
        name: "Patrimonio de familia",
        description:
          "Orientación sobre la constitución y cancelación del patrimonio de familia, según la situación del inmueble y las condiciones legales.",
      },
      {
        name: "Afectación a vivienda familiar",
        description:
          "Asesoría en la constitución y cancelación de la afectación a vivienda familiar, diferenciándola claramente del patrimonio de familia.",
      },
      {
        name: "Trámites notariales",
        description:
          "Orientación, preparación y revisión de documentos para trámites notariales y escrituras públicas, de acuerdo con la naturaleza del asunto.",
      },
      {
        name: "Asuntos patrimoniales familiares",
        description:
          "Orientación en asuntos relacionados con la sociedad conyugal o patrimonial, cuando corresponda legalmente.",
      },
    ],
  },
  {
    id: "penal",
    title: "Derecho Penal",
    icon: "ri-government-line",
    intro:
      "Orientación y acompañamiento responsable en asuntos penales, sin promesas de resultados.",
    services: [
      {
        name: "Asesoría jurídica penal",
        description:
          "Orientación inicial sobre situaciones que pueden tener implicaciones penales, los derechos involucrados y las alternativas legales disponibles.",
      },
      {
        name: "Defensa penal",
        description:
          "Acompañamiento y defensa técnica en asuntos penales, sujeto a la competencia profesional, las condiciones del caso y la aceptación del encargo.",
      },
      {
        name: "Acompañamiento en procesos penales",
        description:
          "Orientación sobre las etapas del procedimiento penal y preparación para las actuaciones correspondientes.",
      },
      {
        name: "Representación de víctimas",
        description:
          "Orientación y representación jurídica de víctimas, cuando proceda, para conocer sus derechos y las opciones legales disponibles.",
      },
      {
        name: "Denuncias y querellas",
        description:
          "Orientación sobre los requisitos, documentación y canales pertinentes para presentar denuncias o querellas, según el asunto.",
      },
      {
        name: "Audiencias y diligencias",
        description:
          "Preparación y acompañamiento jurídico en las actuaciones que correspondan conforme al procedimiento y al alcance del servicio contratado.",
      },
      {
        name: "Consultas sobre situaciones penales",
        description:
          "Espacio para describir de manera general una situación y solicitar información sobre la posibilidad de una consulta jurídica.",
      },
    ],
  },
];

export const consultationSteps = [
  {
    step: "01",
    icon: "ri-whatsapp-line",
    title: "Contacto inicial",
    text: "Seleccione el servicio de su interés y escríbame por WhatsApp para iniciar la conversación.",
  },
  {
    step: "02",
    icon: "ri-file-search-line",
    title: "Evaluación del caso",
    text: "Determinamos qué información y documentación se necesita para orientar su consulta.",
  },
  {
    step: "03",
    icon: "ri-scales-2-line",
    title: "Orientación jurídica",
    text: "Le explico las alternativas, los requisitos, los posibles pasos y el alcance del servicio que se acuerde.",
  },
];

export const faqs = [
  {
    question: "¿Cómo puedo solicitar una consulta jurídica?",
    answer:
      "Puede escribirme directamente por WhatsApp seleccionando el servicio de su interés. Allí coordinamos los siguientes pasos y la información necesaria para orientar su consulta.",
  },
  {
    question: "¿Qué documentos debo presentar para un trámite de divorcio?",
    answer:
      "Los documentos dependen de las circunstancias particulares del caso. En la consulta inicial revisamos su situación e identificamos la documentación aplicable.",
  },
  {
    question: "¿Qué información se necesita para iniciar una sucesión?",
    answer:
      "Varía según el caso. Generalmente se revisan documentos del causante, de los herederos y de los bienes. En la consulta precisamos los requisitos concretos para su situación.",
  },
  {
    question: "¿Cómo se realiza una escritura de compraventa?",
    answer:
      "Se preparan y revisan los documentos del inmueble y de las partes para su formalización mediante escritura pública. Los requisitos exactos dependen de cada caso.",
  },
  {
    question:
      "¿Cuál es la diferencia entre patrimonio de familia y afectación a vivienda familiar?",
    answer:
      "Son figuras distintas con efectos y requisitos diferentes. En la consulta le explico cuál aplica según la situación del inmueble y sus condiciones legales.",
  },
  {
    question: "¿Qué debo hacer si necesito orientación sobre un asunto penal?",
    answer:
      "Puede describir de manera general su situación por WhatsApp para solicitar información sobre la posibilidad de una consulta jurídica, sin enviar datos sensibles por canales públicos.",
  },
  {
    question: "¿Puedo solicitar información por WhatsApp?",
    answer:
      "Sí. WhatsApp es el medio más directo para solicitar información y coordinar la posibilidad de agendar una consulta.",
  },
  {
    question: "¿La consulta inicial tiene algún costo?",
    answer:
      "El valor y las condiciones de la consulta deben confirmarse directamente con la abogada. No se publican tarifas en este sitio.",
  },
];

export const legalSections = [
  {
    id: "politica-privacidad",
    title: "Política de Privacidad",
    paragraphs: [
      "Este es un texto editable de ejemplo. Debe revisarse y ajustarse antes de publicar para que refleje las prácticas reales de tratamiento de datos.",
      "La información que usted comparta a través de este sitio se utilizará únicamente para atender su solicitud de orientación jurídica y coordinar una posible consulta.",
      "No comparta contraseñas, datos bancarios, documentos de identidad completos ni información confidencial del proceso a través de formularios públicos.",
    ],
  },
  {
    id: "tratamiento-datos",
    title: "Tratamiento de Datos Personales",
    paragraphs: [
      "Texto editable de ejemplo pendiente de revisión. Debe ajustarse conforme a la normativa aplicable de protección de datos personales.",
      "Se recogen únicamente los datos estrictamente necesarios para responder su solicitud. Usted puede solicitar la actualización o eliminación de sus datos en cualquier momento.",
      "El tratamiento de sus datos se realiza previa autorización expresa cuando corresponda.",
    ],
  },
  {
    id: "aviso-legal",
    title: "Aviso Legal",
    paragraphs: [
      "Texto editable de ejemplo. Debe revisarse antes de publicar.",
      "La información de este sitio tiene carácter orientativo y no constituye asesoría jurídica particular ni genera por sí misma una relación profesional.",
      "El contacto inicial no constituye por sí mismo aceptación formal de representación legal.",
    ],
  },
];