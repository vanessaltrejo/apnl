import { addDays, format, startOfToday } from "date-fns";

export interface Location {
    id: string;
    name: string;
    address: string;
    phone: string;
    hours: string;
    mapUrl: string;
}

export interface Specialty {
    id: string;
    name: string;
    slug: string;
    description: string;
    fullDescription?: string;
    benefits?: string[];
    icon?: string;
    definition?: string;
    objective?: string;
    recommendedWhen?: string[];
    whatIsWorked?: string[]; // Or whatIsEvaluated for some
    whatIsWorkedLabel?: string; // To distinguish between "Que se trabaja" and "Que se evalua"
    methodology?: string[];
    deliverables?: string[];
}

export interface Therapist {
    id: string;
    name: string;
    title: string;
    specialties: string[]; // Specialty IDs
    bio: string;
    imageUrl: string;
    cedula: string;
    priceRange: string;
    modality: ("Online" | "Presencial")[];
    location: string;
    branch: string; // Branch ID (loc1, loc2)
    availability: string[];
}

export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    category: string;
    author: string;
    date: string;
    readTime: string;
    imageUrl: string;
}

export const specialties: Specialty[] = [
    {
        id: "s1",
        name: "Terapia Individual",
        slug: "individual",
        description: "Apoyo para tus retos emocionales.",
        fullDescription: "La terapia individual es un espacio psicológico confidencial orientado al autoconocimiento y al manejo de dificultades emocionales, conductuales o relacionales.",
        definition: "La terapia individual es un espacio psicológico confidencial orientado al autoconocimiento y al manejo de dificultades emocionales, conductuales o relacionales.",
        objective: "Promover el bienestar emocional y desarrollar herramientas personales para afrontar situaciones de vida.",
        recommendedWhen: [
            "Ansiedad, depresión o estrés",
            "Crisis personales",
            "Dificultades laborales o académicas",
            "Baja autoestima",
            "Duelo o eventos traumáticos"
        ],
        whatIsWorked: [
            "Regulación emocional",
            "Patrones de pensamiento y conducta",
            "Manejo del estrés",
            "Toma de decisiones",
            "Autoconcepto"
        ],
        whatIsWorkedLabel: "¿Qué se trabaja?",
        methodology: [
            "Entrevistas clínicas",
            "Técnicas cognitivo-conductuales y emocionales",
            "Intervención individual personalizada"
        ],
        benefits: ["Mayor claridad emocional", "Desarrollo de recursos personales", "Mejora en la calidad de vida"],
        deliverables: [
            "Plan de intervención",
            "Seguimiento terapéutico",
            "Recomendaciones prácticas"
        ],
        icon: "User"
    },
    {
        id: "s2",
        name: "Terapia de Pareja",
        slug: "pareja",
        description: "Fortalece tu vínculo y comunicación.",
        fullDescription: "La terapia de parejas es un espacio psicológico para trabajar conflictos, mejorar la comunicación y fortalecer la relación.",
        definition: "La terapia de parejas es un espacio psicológico para trabajar conflictos, mejorar la comunicación y fortalecer la relación.",
        objective: "Favorecer acuerdos saludables y mejorar la convivencia y el vínculo afectivo.",
        recommendedWhen: [
            "Problemas de comunicación",
            "Conflictos frecuentes",
            "Crisis de pareja",
            "Dificultades de convivencia",
            "Procesos de separación"
        ],
        whatIsWorked: [
            "Comunicación y escucha",
            "Manejo de conflictos",
            "Expectativas y acuerdos",
            "Vínculo emocional"
        ],
        whatIsWorkedLabel: "¿Qué se trabaja?",
        methodology: [
            "Sesiones conjuntas",
            "Técnicas de mediación",
            "Intervención enfocada en objetivos"
        ],
        benefits: ["Mejor entendimiento mutuo", "Reducción de conflictos", "Toma de decisiones más claras"],
        deliverables: [
            "Acuerdos y estrategias",
            "Seguimiento terapéutico",
            "Orientación para la pareja"
        ],
        icon: "Heart"
    },
    {
        id: "s3",
        name: "Terapia Familiar",
        slug: "familiar",
        description: "Mejora la convivencia en el hogar.",
        fullDescription: "La terapia familiar es un proceso psicológico que trabaja con la dinámica del sistema familiar para mejorar la comunicación y resolver conflictos.",
        definition: "La terapia familiar es un proceso psicológico que trabaja con la dinámica del sistema familiar para mejorar la comunicación y resolver conflictos.",
        objective: "Fortalecer las relaciones familiares y promover un funcionamiento saludable del sistema familiar.",
        recommendedWhen: [
            "Conflictos familiares recurrentes",
            "Problemas de comunicación",
            "Cambios importantes en la familia",
            "Dificultades en la crianza",
            "Situaciones de crisis o duelo"
        ],
        whatIsWorked: [
            "Dinámicas familiares",
            "Roles y límites",
            "Comunicación asertiva",
            "Resolución de conflictos"
        ],
        whatIsWorkedLabel: "¿Qué se trabaja?",
        methodology: [
            "Sesiones con la familia o subsistemas",
            "Técnicas sistémicas",
            "Análisis de interacciones familiares"
        ],
        benefits: ["Mejora en la comunicación", "Reducción de conflictos", "Relaciones más funcionales"],
        deliverables: [
            "Orientación familiar",
            "Estrategias prácticas",
            "Seguimiento del proceso"
        ],
        icon: "Users"
    },
    {
        id: "s4",
        name: "Terapia Infantil",
        slug: "infantil",
        description: "Apoyo emocional para los pequeños.",
        fullDescription: "La terapia infantil es un proceso psicológico dirigido a niñas y niños, enfocado en su desarrollo emocional, social y conductual.",
        definition: "La terapia infantil es un proceso psicológico dirigido a niñas y niños, enfocado en su desarrollo emocional, social y conductual, utilizando estrategias acordes a su edad.",
        objective: "Fortalecer el bienestar emocional, la autoestima y las habilidades de comunicación del niño.",
        recommendedWhen: [
            "Problemas de conducta",
            "Ansiedad o miedos persistentes",
            "Baja autoestima",
            "Dificultades escolares",
            "Conflictos familiares",
            "Situaciones traumáticas (duelo, divorcio, acoso escolar)"
        ],
        whatIsWorked: [
            "Identificación y expresión de emociones",
            "Regulación emocional",
            "Habilidades sociales",
            "Resolución de problemas",
            "Autoconfianza"
        ],
        whatIsWorkedLabel: "¿Qué se trabaja?",
        methodology: [
            "Juego terapéutico",
            "Actividades estructuradas",
            "Técnicas psicológicas adaptadas a la edad",
            "Acompañamiento familiar cuando es necesario"
        ],
        benefits: ["Mejor manejo emocional", "Mayor seguridad y confianza", "Mejora en la comunicación y conducta"],
        deliverables: [
            "Seguimiento del proceso",
            "Orientación a padres",
            "Recomendaciones personalizadas"
        ],
        icon: "Baby"
    },
    {
        id: "s5",
        name: "Evaluación Neuropsicológica",
        slug: "evaluacion",
        description: "Diagnóstico cognitivo especializado.",
        fullDescription: "La evaluación neuropsicológica es un proceso clínico que analiza el funcionamiento cognitivo, emocional y conductual mediante pruebas estandarizadas.",
        definition: "La evaluación neuropsicológica es un proceso clínico que analiza el funcionamiento cognitivo, emocional y conductual mediante pruebas estandarizadas.",
        objective: "Identificar alteraciones cognitivas y establecer un diagnóstico preciso que oriente la intervención.",
        recommendedWhen: [
            "Sospecha de dificultades cognitivas",
            "Lesión o enfermedad neurológica",
            "Dificultades de aprendizaje",
            "Seguimiento de procesos de rehabilitación"
        ],
        whatIsWorked: [
            "Memoria",
            "Atención",
            "Lenguaje",
            "Funciones ejecutivas",
            "Inteligencia",
            "Área socioemocional"
        ],
        whatIsWorkedLabel: "¿Qué se evalúa?",
        methodology: [
            "Entrevistas",
            "Pruebas neuropsicológicas",
            "Observación clínica"
        ],
        benefits: ["Diagnóstico claro", "Comprensión del funcionamiento cognitivo", "Base para el tratamiento"],
        deliverables: [
            "Informe neuropsicológico",
            "Resultados y conclusiones",
            "Recomendaciones clínicas"
        ],
        icon: "Brain"
    },
    {
        id: "s6",
        name: "Peritaje Psicológico",
        slug: "peritaje",
        description: "Evaluaciones para procesos legales.",
        fullDescription: "El peritaje psicológico es una evaluación especializada realizada en el contexto legal para aportar información psicológica objetiva a un proceso judicial.",
        definition: "El peritaje psicológico es una evaluación especializada realizada en el contexto legal para aportar información psicológica objetiva a un proceso judicial.",
        objective: "Brindar un análisis técnico y fundamentado que apoye la toma de decisiones legales.",
        recommendedWhen: [
            "Procesos judiciales",
            "Casos civiles, familiares o penales",
            "Solicitud de juez o abogados"
        ],
        whatIsWorked: [
            "Estado psicofísico",
            "Personalidad",
            "Capacidades cognitivas y emocionales",
            "Relaciones vinculares"
        ],
        whatIsWorkedLabel: "¿Qué se evalúa?",
        methodology: [
            "Entrevistas forenses",
            "Aplicación de pruebas psicológicas",
            "Análisis técnico del caso"
        ],
        benefits: ["Evaluación objetiva", "Información con validez legal", "Respaldo técnico al proceso judicial"],
        deliverables: [
            "Informe pericial psicológico",
            "Documento con validez legal"
        ],
        icon: "Scale"
    },
];

const stockImages = [
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1559839734-2b71f1536785?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=600&auto=format&fit=crop",
];

// Specific images for Nosotros to fix broken ones
export const nosotrosImages = {
    sesion: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop",
    apoyo: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop",
    comunidad: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=800&auto=format&fit=crop",
    reunion: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
};

export const mockLocations: Location[] = [
    {
        id: "loc1",
        name: "Sucursal Barrio Antiguo",
        address: "Calle Ignacio Allende 1140, Centro, 64000 Monterrey, Mexico",
        phone: "(81) 1234 5678",
        hours: "Lunes a Viernes: 9:00 AM - 8:00 PM | Sábado: 9:00 AM - 2:00 PM",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596.248386!2d-100.31!3d25.66!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662be3655555555%3A0xe5a363d661e5f86b!2sCalle%20Ignacio%20Allende%201140!5e0!3m2!1ses!2smx!4v1705680000000"
    },
    {
        id: "loc2",
        name: "Sucursal Chapultepec",
        address: "Priv. A 2202, El Realito, 64820 Monterrey, N.L.",
        phone: "(81) 8765 4321",
        hours: "Lunes a Viernes: 8:00 AM - 9:00 PM | Sábado: 10:00 AM - 4:00 PM",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596.248!2d-100.27!3d25.65!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662be3!2sPriv.%20A%202202%2C%20El%20Realito!5e0!3m2!1ses!2smx!4v1705680000000"
    }
];

export const getMockTherapists = (): Therapist[] => {
    const today = startOfToday();

    return [
        {
            id: "t1",
            name: "Abigail Guadalupe Rodriguez de Leon",
            title: "Psicólogo clínico",
            specialties: ["s1"],
            bio: "Especialista en psicoterapia clínica individual, brindando un espacio seguro para el autoconocimiento y bienestar emocional.",
            imageUrl: stockImages[0],
            cedula: "Pendiente",
            priceRange: "1ª Sesión: $350 MXN",
            modality: ["Online", "Presencial"],
            location: mockLocations[0].address,
            branch: "loc1",
            availability: [addDays(today, 1).toISOString(), addDays(today, 2).toISOString()],
        },
        {
            id: "t2",
            name: "Lilia Sarahi Olivo Gamboa",
            title: "Neuropsicóloga",
            specialties: ["s1", "s5"],
            bio: "Especialista en neuropsicología clínica, dedicada a la evaluación y rehabilitación cognitiva así como psicoterapia individual.",
            imageUrl: stockImages[1],
            cedula: "14899925",
            priceRange: "1ª Sesión: $350 MXN",
            modality: ["Online", "Presencial"],
            location: mockLocations[0].address,
            branch: "loc1",
            availability: [addDays(today, 1).toISOString(), addDays(today, 3).toISOString()],
        },
        {
            id: "t3",
            name: "Fernanda Miroslava Muñoz Cordero",
            title: "Psicólogo clínico",
            specialties: ["s1", "s2"],
            bio: "Especialista en psicoterapia individual y de pareja, enfocada en la resolución de conflictos y comunicación efectiva.",
            imageUrl: stockImages[2],
            cedula: "14930138",
            priceRange: "1ª Sesión: $350 MXN",
            modality: ["Online", "Presencial"],
            location: mockLocations[0].address,
            branch: "loc1",
            availability: [addDays(today, 0).toISOString()],
        },
        {
            id: "t4",
            name: "Violeta Elizabeth Reyna Salas",
            title: "Psicólogo clínico",
            specialties: ["s1"],
            bio: "Enfoque clínico en terapia individual para el manejo de emociones y crecimiento personal.",
            imageUrl: stockImages[3],
            cedula: "15277955",
            priceRange: "1ª Sesión: $350 MXN",
            modality: ["Online", "Presencial"],
            location: mockLocations[1].address,
            branch: "loc2",
            availability: [addDays(today, 2).toISOString()],
        },
        {
            id: "t5",
            name: "Pedro Cantu Ramirez",
            title: "Psicólogo clínico especialista",
            specialties: ["s1"],
            bio: "Amplia trayectoria en psicología clínica especializada, brindando atención personalizada y basada en evidencia.",
            imageUrl: stockImages[4],
            cedula: "8838750",
            priceRange: "1ª Sesión: $350 MXN",
            modality: ["Online", "Presencial"],
            location: mockLocations[0].address,
            branch: "loc1",
            availability: [addDays(today, 1).toISOString()],
        },
        {
            id: "t6",
            name: "Rocio Elizabeth Contreras Sanchez",
            title: "Psicólogo clínico especialista",
            specialties: ["s1", "s4"],
            bio: "Especialista en psicoterapia individual e infantil, acompañando el desarrollo emocional de niños y adultos.",
            imageUrl: stockImages[5],
            cedula: "8547175",
            priceRange: "1ª Sesión: $350 MXN",
            modality: ["Online", "Presencial"],
            location: mockLocations[0].address,
            branch: "loc1",
            availability: [addDays(today, 4).toISOString()],
        },
        {
            id: "t7",
            name: "Anibal Alejandro Cerda Garcia",
            title: "Psicólogo clínico especialista",
            specialties: ["s1", "s2"],
            bio: "Enfoque especializado en dinámicas de pareja y procesos de terapia individual profunda.",
            imageUrl: stockImages[6],
            cedula: "12502399",
            priceRange: "1ª Sesión: $350 MXN",
            modality: ["Online", "Presencial"],
            location: mockLocations[0].address,
            branch: "loc1",
            availability: [addDays(today, 3).toISOString()],
        },
        {
            id: "t8",
            name: "Mario Alejandro Carvajal Rivera",
            title: "Psicólogo clínico especialista",
            specialties: ["s1"],
            bio: "Experto en psicología clínica, dedicado a facilitar herramientas para el equilibrio mental y emocional.",
            imageUrl: stockImages[7],
            cedula: "9867705",
            priceRange: "1ª Sesión: $350 MXN",
            modality: ["Online", "Presencial"],
            location: mockLocations[0].address,
            branch: "loc1",
            availability: [addDays(today, 2).toISOString()],
        },
        {
            id: "t9",
            name: "Beatriz Chavarri Barajas",
            title: "Psicólogo clínico especialista",
            specialties: ["s1"],
            bio: "Acompañamiento profesional especializado en terapia individual para el fortalecimiento personal.",
            imageUrl: stockImages[0],
            cedula: "8878383",
            priceRange: "1ª Sesión: $350 MXN",
            modality: ["Online", "Presencial"],
            location: mockLocations[0].address,
            branch: "loc1",
            availability: [addDays(today, 1).toISOString()],
        },
    ];
};

export const getMockBlogPosts = (): BlogPost[] => [
    {
        id: "1",
        title: "5 consejos para manejar la ansiedad en el trabajo",
        excerpt: "La ansiedad laboral es cada vez más común. Aprende algunas técnicas sencillas para mantener la calma.",
        category: "Bienestar",
        author: "Abigail Guadalupe Rodriguez de Leon",
        date: "15 Ene 2026",
        readTime: "5 min",
        imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: "2",
        title: "La importancia de la terapia de pareja hoy",
        excerpt: "¿Cuándo es el momento adecuado para buscar ayuda profesional en la relación? Te lo explicamos.",
        category: "Relaciones",
        author: "Anibal Alejandro Cerda Garcia",
        date: "10 Ene 2026",
        readTime: "8 min",
        imageUrl: "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: "3",
        title: "Cómo detectar problemas de aprendizaje en niños",
        excerpt: "Guía para padres sobre las señales de alerta y cómo intervenir de manera temprana.",
        category: "Infantil",
        author: "Rocio Elizabeth Contreras Sanchez",
        date: "05 Ene 2026",
        readTime: "12 min",
        imageUrl: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: "4",
        title: "La importancia del sueño en la salud mental",
        excerpt: "Dormir bien es fundamental para el equilibrio emocional. Descubre cómo mejorar tu higiene del sueño.",
        category: "Bienestar",
        author: "Lilia Sarahi Olivo Gamboa",
        date: "01 Ene 2026",
        readTime: "6 min",
        imageUrl: "https://images.unsplash.com/photo-1511275539165-cc46b1ee8960?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: "5",
        title: "Gestión del duelo: un camino hacia la sanación",
        excerpt: "Entender las etapas del duelo puede ayudarnos a procesar la pérdida de una manera más saludable.",
        category: "Emociones",
        author: "Mario Alejandro Carvajal Rivera",
        date: "28 Dic 2025",
        readTime: "10 min",
        imageUrl: "https://images.unsplash.com/photo-1516589174184-e67823db622d?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: "6",
        title: "Límites saludables en las relaciones familiares",
        excerpt: "Aprender a decir que no es esencial para mantener relaciones sanas y equilibradas.",
        category: "Relaciones",
        author: "Beatriz Chavarri Barajas",
        date: "20 Dic 2025",
        readTime: "7 min",
        imageUrl: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=800&auto=format&fit=crop"
    }
];
