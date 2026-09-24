// Textos de la página. Fuente: docs/base-informativa.md y publicaciones de ASOHER.
// Las cifras citan la entrevista de origen hasta validarlas con el informe original.

export type VideoKind = "Entrevista en TV" | "Entrevista en radio" | "Podcast";

// Metadatos tomados de las publicaciones de ASOHER en Facebook.
export const videos = [
  {
    id: "24857055060562672",
    kind: "Entrevista en TV",
    title: "Infancias marcadas por la hemofilia",
    guest: "Diego Gavidia con Chema Salcedo, PBO",
    description:
      "Los resultados de la encuesta nacional «Infancias que no se detengan»: el juego, el colegio, el daño articular y el diagnóstico tardío.",
    date: "24 de julio de 2025",
    duration: "12:44",
    thumbnail: "pboInfancias",
  },
  {
    id: "3897797340486393",
    kind: "Podcast",
    title: "Hablemos de Hemofilia, episodio 2",
    guest: "Diego Gavidia con Roger Huauya",
    description: "El segundo capítulo de nuestro podcast, una conversación sin apuro sobre la vida con hemofilia.",
    date: "6 de junio de 2025",
    duration: "16:27",
    thumbnail: "podcastEpisodio2",
  },
  {
    id: "2112981979217491",
    kind: "Entrevista en radio",
    title: "Falta factor VIII en EsSalud",
    guest: "Diego Gavidia en radio Exitosa",
    description: "La escasez de concentrado de factor VIII a nivel nacional y la preocupación por la compra de Hemorel\u2011A.",
    date: "16 de enero de 2025",
    duration: "9:04",
    thumbnail: "exitosaFactorVIII",
  },
  {
    id: "533283499510000",
    kind: "Podcast",
    title: "Hablemos de Hemofilia, episodio 1",
    guest: "Diego Gavidia con Josef Alcarrás",
    description: "Autoinfusión, deporte, mitos y lo que cambia cuando conoces a otras personas con hemofilia.",
    date: "14 de noviembre de 2024",
    duration: "19:21",
    thumbnail: "podcastEpisodio1",
  },
] as const satisfies ReadonlyArray<{ kind: VideoKind; [key: string]: string }>;

export const commitments = [
  {
    title: "Escuchamos",
    text: "Hablar con alguien que ya pasó por lo mismo ayuda a ordenar las primeras dudas.",
  },
  {
    title: "Explicamos",
    text: "Contamos la hemofilia con palabras simples, para que puedas conversar mejor con tu equipo de salud.",
  },
  {
    title: "Recogemos experiencias",
    text: "Las historias de los pacientes muestran dónde se atrasa el diagnóstico o se corta el tratamiento.",
  },
  {
    title: "Representamos",
    text: "Llevamos esas necesidades a las autoridades y pedimos medicamentos disponibles y atención a tiempo.",
  },
] as const;

export const surveyStats = [
  {
    value: 97,
    prefix: "",
    text: "dice que de niño no pudo jugar con libertad. El miedo a un sangrado pesaba más.",
  },
  {
    value: 69,
    prefix: "",
    text: "no pudo ir al colegio con regularidad, por las secuelas o por no recibir tratamiento a tiempo.",
  },
  {
    value: 70,
    prefix: "Cerca del ",
    text: "de quienes tenían tratamiento preventivo reporta daño articular o algún grado de discapacidad.",
  },
] as const;

export const advocacyMilestones = [
  {
    date: "25 de febrero",
    place: "Congreso de la República",
    title: "Mesa de diálogo sobre la Ley N.°\u00a031738",
    text: "La ley trata la atención de personas con enfermedades raras y huérfanas. Diego Gavidia asistió en representación de Los Pacientes Importan y explicó lo que hoy vive la comunidad de hemofilia.",
    photo: "diegoMesaDialogo",
  },
  {
    date: "26 de junio",
    place: "MINSA, DIGEMID",
    title: "Reunión sobre el acceso a Emicizumab",
    text: "Con la Dra. Lida Hildebrandt, directora general de la DIGEMID, y el equipo que evalúa este medicamento, pedimos que cada paciente reciba su tratamiento sin importar a qué sistema de salud pertenece.",
    photo: "reunionDigemid",
  },
  {
    date: "Todos los lunes",
    place: "Los Pacientes Importan",
    title: "Un colectivo que no se toma descanso",
    text: "Nos reunimos con organizaciones de enfermedades raras, crónicas, autoinmunes, pulmonares y de cáncer para empujar políticas públicas más justas.",
    photo: "rareDiseaseDay",
  },
] as const;

export const hemophiliaTopics = [
  {
    title: "Hemofilia A y B",
    text: "El tipo depende del factor de coagulación que falta. La severidad cambia de una persona a otra, y por eso el tratamiento se define caso por caso.",
  },
  {
    title: "Por qué importa el diagnóstico temprano",
    text: "Mientras no hay diagnóstico, los sangrados se repiten y pueden dañar las articulaciones. Detectarla a tiempo permite empezar el seguimiento médico.",
  },
  {
    title: "Tratamiento en casa",
    text: "Algunas terapias se aplican en el hogar. Aprender a hacerlo requiere indicación médica y el entrenamiento de tu equipo de salud.",
  },
  {
    title: "Una vida activa",
    text: "Muchas personas con hemofilia estudian, trabajan y hacen deporte. Qué actividad te conviene lo decide tu equipo de salud, según tus articulaciones y tu tratamiento.",
  },
] as const;

export const activities = [
  { photo: "carpaMinsa", caption: "Campaña de salud con el MINSA en Lima Norte." },
  { photo: "grupalColegioQuimicos", caption: "Charla en el Colegio Químico Departamental." },
  { photo: "marchaEnfermedadesRaras", caption: "Marcha por las enfermedades raras en el centro de Lima." },
  { photo: "certificadosFeper", caption: "Entrega de certificados con FEPER." },
  { photo: "reunionDireccion", caption: "Reunión con la dirección del hospital." },
  { photo: "reunionZeballos", caption: "Reunión con el congresista Carlos Zeballos." },
] as const;
