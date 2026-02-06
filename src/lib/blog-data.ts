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
    imageUrl: '/images/image1.jpg',
    date: '18 Enero, 2026',
    author: 'Abigail Guadalupe Rodriguez de Leon',
    content: 'Contenido completo del post...',
  },
  {
    slug: 'ansiedad-en-tiempos-modernos',
    title: 'Ansiedad en Tiempos Modernos: Estrategias para Afrontarla',
    excerpt: 'La ansiedad es una respuesta natural, pero puede volverse abrumadora. Aprende a manejarla con técnicas efectivas.',
    imageUrl: '/images/image2.jpg',
    date: '15 Enero, 2026',
    author: 'Anibal Alejandro Cerda Garcia',
    content: 'Contenido completo del post...',
  },
  {
    slug: 'terapia-de-pareja-un-nuevo-comienzo',
    title: 'Terapia de Pareja: Un Nuevo Comienzo para tu Relación',
    excerpt: 'Descubre cómo la terapia de pareja puede fortalecer la comunicación y resolver conflictos para un futuro más feliz.',
    imageUrl: '/images/image3.jpg',
    date: '12 Enero, 2026',
    author: 'Fernanda Miroslava Muñoz Cordero',
    content: 'Contenido completo del post...',
  },
  {
    slug: 'el-poder-de-la-resiliencia',
    title: 'El Poder de la Resiliencia: Cómo Superar la Adversidad',
    excerpt: 'La resiliencia no es nacer fuerte, es aprender a serlo. Explora cómo cultivar esta habilidad vital.',
    imageUrl: '/images/image4.jpg',
    date: '10 Enero, 2026',
    author: 'Anibal Alejandro Cerda Garcia',
    content: 'Contenido completo del post...',
  },
  {
    slug: 'mindfulness-para-una-vida-plena',
    title: 'Mindfulness y Atención Plena para una Vida más Plena',
    excerpt: 'Aprende a vivir el momento presente y reduce el estrés con prácticas de mindfulness sencillas y efectivas.',
    imageUrl: '/images/image5.jpg',
    date: '08 Enero, 2026',
    author: 'Lilia Sarahi Olivo Gamboa',
    content: 'Contenido completo del post...',
  },
  {
    slug: 'psicologia-infantil-claves-para-padres',
    title: 'Psicología Infantil: Claves para Padres y Madres',
    excerpt: 'Entender la mente de tus hijos es fundamental. Te damos algunas claves para una crianza más consciente.',
    imageUrl: '/images/image6.jpg',
    date: '05 Enero, 2026',
    author: 'Rocio Elizabeth Contreras Sanchez',
    content: 'Contenido completo del post...',
  },
];
