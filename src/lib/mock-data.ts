import { addDays, format, startOfToday } from "date-fns";

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

export const mockLocations = [
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
            name: "Dra. Elena Garza",
            title: "Psicóloga Clínica",
            specialties: ["s1", "s5"],
            bio: "Especialista en evaluación neuropsicológica e intervención individual.",
            imageUrl: stockImages[0],
            cedula: "12345678",
            priceRange: "1ª Sesión: $350 MXN",
            modality: ["Online", "Presencial"],
            location: mockLocations[0].address,
            branch: "loc1",
            availability: [addDays(today, 1).toISOString(), addDays(today, 2).toISOString()],
        },
        {
            id: "t2",
            name: "Mtro. Ricardo Méndez",
            title: "Terapeuta Familiar",
            specialties: ["s3", "s2"],
            bio: "Ayudo a fortalecer los vínculos afectivos dentro del núcleo familiar.",
            imageUrl: stockImages[1],
            cedula: "23456789",
            priceRange: "1ª Sesión: $350 MXN",
            modality: ["Online", "Presencial"],
            location: mockLocations[1].address,
            branch: "loc2",
            availability: [addDays(today, 1).toISOString(), addDays(today, 3).toISOString()],
        },
        {
            id: "t3",
            name: "Lic. Andrea Treviño",
            title: "Psicóloga Infantil",
            specialties: ["s4"],
            bio: "Terapia de juego y apoyo emocional para niños y adolescentes.",
            imageUrl: stockImages[2],
            cedula: "34567890",
            priceRange: "1ª Sesión: $350 MXN",
            modality: ["Online", "Presencial"],
            location: mockLocations[0].address,
            branch: "loc1",
            availability: [addDays(today, 0).toISOString()],
        },
        {
            id: "t4",
            name: "Dra. Sofía Villarreal",
            title: "Especialista en Parejas",
            specialties: ["s2", "s1"],
            bio: "Enfoque clínico en resolución de conflictos y comunicación asertiva.",
            imageUrl: stockImages[3],
            cedula: "45678901",
            priceRange: "1ª Sesión: $350 MXN",
            modality: ["Online", "Presencial"],
            location: mockLocations[1].address,
            branch: "loc2",
            availability: [addDays(today, 2).toISOString()],
        },
        {
            id: "t5",
            name: "Lic. Roberto González",
            title: "Psicólogo Cognitivo Conductual",
            specialties: ["s1", "s5"],
            bio: "Intervención basada en evidencia para trastornos de ansiedad y depresión.",
            imageUrl: stockImages[4],
            cedula: "56789012",
            priceRange: "1ª Sesión: $350 MXN",
            modality: ["Online", "Presencial"],
            location: mockLocations[0].address,
            branch: "loc1",
            availability: [addDays(today, 1).toISOString()],
        },
        {
            id: "t6",
            name: "Mtra. Carmen Luna",
            title: "Psicoterapeuta Infantil",
            specialties: ["s4", "s3"],
            bio: "Especialista en desarrollo infantil y dinámicas familiares complejas.",
            imageUrl: stockImages[5],
            cedula: "67890123",
            priceRange: "$650 MXN",
            modality: ["Online", "Presencial"],
            location: mockLocations[1].address,
            branch: "loc2",
            availability: [addDays(today, 4).toISOString()],
        },
        {
            id: "t7",
            name: "Dr. Daniel Portillo",
            title: "Neuropsicólogo Clínico",
            specialties: ["s5", "s6"],
            bio: "Evaluaciones integrales y procesos de peritaje psicológico forense.",
            imageUrl: stockImages[6],
            cedula: "78901234",
            priceRange: "1ª Sesión: $350 MXN",
            modality: ["Online", "Presencial"],
            location: mockLocations[0].address,
            branch: "loc1",
            availability: [addDays(today, 3).toISOString()],
        },
        {
            id: "t8",
            name: "Lic. Martha Solís",
            title: "Terapeuta Individual",
            specialties: ["s1"],
            bio: "Acompañamiento en procesos de duelo y manejo de crisis.",
            imageUrl: stockImages[7],
            cedula: "89012345",
            priceRange: "1ª Sesión: $350 MXN",
            modality: ["Online", "Presencial"],
            location: mockLocations[1].address,
            branch: "loc2",
            availability: [addDays(today, 2).toISOString()],
        },
        {
            id: "t9",
            name: "Mtro. Javier Reyes",
            title: "Terapeuta de Familia y Pareja",
            specialties: ["s2", "s3"],
            bio: "Facilitador de diálogos constructivos en entornos familiares.",
            imageUrl: stockImages[0],
            cedula: "90123456",
            priceRange: "1ª Sesión: $350 MXN",
            modality: ["Online", "Presencial"],
            location: mockLocations[0].address,
            branch: "loc1",
            availability: [addDays(today, 1).toISOString()],
        },
        {
            id: "t10",
            name: "Dra. Isabela Blanco",
            title: "Especialista en Adolescentes",
            specialties: ["s4", "s1"],
            bio: "Apoyo emocional enfocado en la etapa de transición a la adultez.",
            imageUrl: stockImages[1],
            cedula: "01234567",
            priceRange: "$600 MXN",
            modality: ["Online", "Presencial"],
            location: mockLocations[1].address,
            branch: "loc2",
            availability: [addDays(today, 5).toISOString()],
        },
        {
            id: "t11",
            name: "Lic. Hugo Miranda",
            title: "Psicólogo Humanista",
            specialties: ["s1"],
            bio: "Enfoque centrado en la persona para el crecimiento y bienestar integral.",
            imageUrl: stockImages[2],
            cedula: "11223344",
            priceRange: "$600 MXN",
            modality: ["Online", "Presencial"],
            location: mockLocations[0].address,
            branch: "loc1",
            availability: [addDays(today, 1).toISOString()],
        },
        {
            id: "t12",
            name: "Mtra. Silvia Ruiz",
            title: "Evaluadora Clínica",
            specialties: ["s5", "s4"],
            bio: "Detección temprana de problemas de aprendizaje y neurodesarrollo.",
            imageUrl: stockImages[3],
            cedula: "22334455",
            priceRange: "$700 MXN",
            modality: ["Online", "Presencial"],
            location: mockLocations[1].address,
            branch: "loc2",
            availability: [addDays(today, 2).toISOString()],
        },
        {
            id: "t13",
            name: "Dr. Alberto Santos",
            title: "Psicosomatista",
            specialties: ["s1", "s6"],
            bio: "Atención a la relación mente-cuerpo y peritajes especializados.",
            imageUrl: stockImages[4],
            cedula: "33445566",
            priceRange: "1ª Sesión: $350 MXN",
            modality: ["Online", "Presencial"],
            location: mockLocations[0].address,
            branch: "loc1",
            availability: [addDays(today, 4).toISOString()],
        },
        {
            id: "t14",
            name: "Lic. Paola Vega",
            title: "Terapeuta de Juego",
            specialties: ["s4"],
            bio: "Intervención infantil a través de dinámicas lúdicas y creativas.",
            imageUrl: stockImages[5],
            cedula: "44556677",
            priceRange: "$650 MXN",
            modality: ["Online", "Presencial"],
            location: mockLocations[1].address,
            branch: "loc2",
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
        author: "Dra. Elena Garza",
        date: "15 Ene 2026",
        readTime: "5 min",
        imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: "2",
        title: "La importancia de la terapia de pareja hoy",
        excerpt: "¿Cuándo es el momento adecuado para buscar ayuda profesional en la relación? Te lo explicamos.",
        category: "Relaciones",
        author: "Mtro. Ricardo Méndez",
        date: "10 Ene 2026",
        readTime: "8 min",
        imageUrl: "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: "3",
        title: "Cómo detectar problemas de aprendizaje en niños",
        excerpt: "Guía para padres sobre las señales de alerta y cómo intervenir de manera temprana.",
        category: "Infantil",
        author: "Lic. Andrea Treviño",
        date: "05 Ene 2026",
        readTime: "12 min",
        imageUrl: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: "4",
        title: "La importancia del sueño en la salud mental",
        excerpt: "Dormir bien es fundamental para el equilibrio emocional. Descubre cómo mejorar tu higiene del sueño.",
        category: "Bienestar",
        author: "Dra. Elena Garza",
        date: "01 Ene 2026",
        readTime: "6 min",
        imageUrl: "https://images.unsplash.com/photo-1511275539165-cc46b1ee8960?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: "5",
        title: "Gestión del duelo: un camino hacia la sanación",
        excerpt: "Entender las etapas del duelo puede ayudarnos a procesar la pérdida de una manera más saludable.",
        category: "Emociones",
        author: "Mtro. Ricardo Méndez",
        date: "28 Dic 2025",
        readTime: "10 min",
        imageUrl: "https://images.unsplash.com/photo-1516589174184-e67823db622d?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: "6",
        title: "Límites saludables en las relaciones familiares",
        excerpt: "Aprender a decir que no es esencial para mantener relaciones sanas y equilibradas.",
        category: "Relaciones",
        author: "Mtro. Ricardo Méndez",
        date: "20 Dic 2025",
        readTime: "7 min",
        imageUrl: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=800&auto=format&fit=crop"
    }
];
