export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  date: string;
  author: string;
  content: string; // Full content for the blog post page (not used in card)
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'la-importancia-de-la-salud-mental',
    title: 'La Importancia de la Salud Mental en el Siglo XXI',
    excerpt: 'En un mundo acelerado, cuidar nuestra mente es más crucial que nunca. Descubre por qué y cómo empezar.',
    imageUrl: '/images/image1.jpg', // Placeholder
    date: '18 Enero, 2026',
    author: 'Lic. Ana Fernández',
    content: 'Contenido completo del post...',
  },
  {
    slug: 'ansiedad-en-tiempos-modernos',
    title: 'Ansiedad en Tiempos Modernos: Estrategias para Afrontarla',
    excerpt: 'La ansiedad es una respuesta natural, pero puede volverse abrumadora. Aprende a manejarla con técnicas efectivas.',
    imageUrl: '/images/image2.jpg', // Placeholder
    date: '15 Enero, 2026',
    author: 'Lic. Carlos García',
    content: 'Contenido completo del post...',
  },
  {
    slug: 'terapia-de-pareja-un-nuevo-comienzo',
    title: 'Terapia de Pareja: Un Nuevo Comienzo para tu Relación',
    excerpt: 'Descubre cómo la terapia de pareja puede fortalecer la comunicación y resolver conflictos para un futuro más feliz.',
    imageUrl: '/images/image3.jpg', // Placeholder
    date: '12 Enero, 2026',
    author: 'Lic. Sofía Martínez',
    content: 'Contenido completo del post...',
  },
  {
    slug: 'el-poder-de-la-resiliencia',
    title: 'El Poder de la Resiliencia: Cómo Superar la Adversidad',
    excerpt: 'La resiliencia no es nacer fuerte, es aprender a serlo. Explora cómo cultivar esta habilidad vital.',
    imageUrl: '/images/image4.jpg', // Placeholder
    date: '10 Enero, 2026',
    author: 'Lic. Javier Rodríguez',
    content: 'Contenido completo del post...',
  },
  {
    slug: 'mindfulness-para-una-vida-plena',
    title: 'Mindfulness y Atención Plena para una Vida más Plena',
    excerpt: 'Aprende a vivir el momento presente y reduce el estrés con prácticas de mindfulness sencillas y efectivas.',
    imageUrl: '/images/image5.jpg', // Placeholder
    date: '08 Enero, 2026',
    author: 'Lic. Laura Pérez',
    content: 'Contenido completo del post...',
  },
  {
    slug: 'psicologia-infantil-claves-para-padres',
    title: 'Psicología Infantil: Claves para Padres y Madres',
    excerpt: 'Entender la mente de tus hijos es fundamental. Te damos algunas claves para una crianza más consciente.',
    imageUrl: '/images/image6.jpg', // Placeholder
    date: '05 Enero, 2026',
    author: 'Lic. David Gómez',
    content: 'Contenido completo del post...',
  },
  {
    slug: 'superando-la-depresion',
    title: 'Superando la Depresión: Pasos hacia la Recuperación',
    excerpt: 'La depresión es tratable. Conoce los pasos y herramientas que pueden guiarte hacia la luz.',
    imageUrl: '/images/terapiaindividual.jpg', // Placeholder
    date: '02 Enero, 2026',
    author: 'Lic. Ana Fernández',
    content: 'Contenido completo del post...',
  },
  {
    slug: 'autoestima-y-bienestar',
    title: 'El Vínculo entre Autoestima y Bienestar Emocional',
    excerpt: 'Una autoestima sana es la base de una vida feliz. Aprende a construir y proteger la tuya.',
    imageUrl: '/images/terapiapareja.jpg', // Placeholder
    date: '30 Diciembre, 2025',
    author: 'Lic. Carlos García',
    content: 'Contenido completo del post...',
  },
  {
    slug: 'gestion-del-estres-laboral',
    title: 'Cómo Gestionar el Estrés en el Entorno Laboral',
    excerpt: 'El trabajo puede ser una fuente de estrés, pero hay formas de manejarlo. Descubre estrategias prácticas.',
    imageUrl: '/images/terapiafamiliar.jpg', // Placeholder
    date: '28 Diciembre, 2025',
    author: 'Lic. Sofía Martínez',
    content: 'Contenido completo del post...',
  },
  {
    slug: 'el-duelo-y-sus-etapas',
    title: 'Entendiendo el Duelo y sus Etapas',
    excerpt: 'El proceso de duelo es único para cada persona. Conoce sus etapas para navegarlo de una forma más compasiva.',
    imageUrl: '/images/terapiainfantil.png', // Placeholder
    date: '25 Diciembre, 2025',
    author: 'Lic. Javier Rodríguez',
    content: 'Contenido completo del post...',
  },
  {
    slug: 'habilidades-sociales-para-el-exito',
    title: 'Desarrollando Habilidades Sociales para el Éxito',
    excerpt: 'La forma en que nos relacionamos con los demás impacta todas las áreas de nuestra vida. Mejora tus habilidades sociales.',
    imageUrl: '/images/terapiaonline.jpg', // Placeholder
    date: '22 Diciembre, 2025',
    author: 'Lic. Laura Pérez',
    content: 'Contenido completo del post...',
  },
];
