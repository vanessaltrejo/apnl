import Image from "next/image";
import ServiceCard from "@/components/ServiceCard";
import LocationCard from "@/components/LocationCard";
import TherapyOfferingCard from "@/components/TherapyOfferingCard";
import HeroSection from "@/components/HeroSection";

const serviceDetailsData = {

  pareja: {

    question: "¿Qué es?",

    answer: "La terapia de pareja es un tratamiento psicológico que ayuda a las parejas a mejorar su relación. También se le conoce como psicoterapia de pareja, consejería matrimonial o consejería de relaciones.",

    sections: [

      {

        heading: "Objetivos",

        points: [

          "Identificar y tratar los conflictos.",

          "Mejorar la comunicación.",

          "Reconocer y respetar las diferencias.",

          "Aprender a interpretar las emociones del otro.",

          "Expresar sentimientos de manera clara.",

          "Modificar actitudes.",

          "Establecer acuerdos para renovar la relación.",

        ],

      },

      {

        heading: "Proceso",

        points: [

          "El terapeuta evalúa los aspectos que deterioran la relación.",

          "Adapta el tratamiento y la frecuencia de las sesiones.",

          "Crea un espacio seguro para que las parejas expresen sus sentimientos.",

          "Ayuda a las parejas a desarrollar habilidades de comunicación.",

        ],

      },

      {

        heading: "Beneficios",

        points: [

          "Fortalece el vínculo emocional.",

          "Mejora la calidad de la relación.",

          "Ayuda a resolver diferencias de manera constructiva.",

          "Ayuda a terminar la relación de manera tranquila y saludable.",

        ],

      },

    ],

  },

  familiar: {

    question: "¿Qué es?",

    answer: "La terapia familiar es un tipo de psicoterapia que ayuda a las familias a mejorar sus relaciones y dinámicas. Se enfoca en la familia como un sistema en el que todos los miembros se influyen entre sí.",

    sections: [

      {

        heading: "Objetivos",

        points: [

          "Restablecer el equilibrio familiar.",

          "Identificar y modificar patrones de conducta disfuncionales.",

          "Crear patrones de conducta saludables.",

          "Mejorar la comunicación y la participación emocional.",

        ],

      },

      {

        heading: "¿Cuándo es útil?",

        points: [

          "Cuando hay conflictos, tensiones o problemas de comunicación.",

          "Cuando uno de los miembros tiene problemas que afectan a la convivencia.",

          "Cuando las relaciones y las dinámicas del núcleo causan malestar o angustia.",

        ],

      },

      {

        heading: "Sesiones",

        points: [

          "La duración de las sesiones puede variar según las necesidades de la familia.",

          "Los intervalos entre sesiones pueden ser de una a varias semanas.",

        ],

      },

      {

        heading: "¿Quién la realiza?",

        points: [

          "Un psicólogo o psiquiatra con formación específica en terapia familiar.",

        ],

      },

      {

        heading: "¿Cómo se trabaja?",

        points: [

          "Se estudian las dinámicas que se producen en la convivencia.",

          "Se escuchan las demandas de todos los miembros de la familia.",

          "Se les enseña a cambiar patrones de comunicación y de conducta disfuncionales.",

        ],

      },

    ],

  },

  individual: {

    question: "¿Qué es?",

    answer: "La terapia individual, también conocida como psicoterapia, es un proceso en el que un psicólogo ayuda a una persona a resolver problemas personales. Es un espacio seguro y confidencial donde se pueden explorar sentimientos, pensamientos y comportamientos.",

    sections: [

      {

        heading: "Objetivo",

        points: [

          "Mejorar la calidad de vida y el bienestar.",

        ],

      },

      {

        heading: "Beneficios",

        points: [

          "Aumentar la autoestima.",

          "Mejorar la resolución de conflictos.",

          "Aprender a gestionar las emociones.",

        ],

      },

      {

        heading: "Temas tratados",

        points: [

          "Depresión.",

          "Trastornos de la alimentación.",

          "Ansiedad.",

          "Duelo.",

          "Y más.",

        ],

      },

      {

        heading: "¿Cómo funciona?",

        points: [

          "El terapeuta ayuda al paciente a identificar patrones de comportamiento y pensamientos que afectan su bienestar. La terapia individual puede ser una opción para personas que buscan ayuda con problemas que son difíciles de enfrentar solos. La terapia individual puede ayudar a:",

          "Identificar y comprender los problemas que generan malestar.",

          "Mejorar la capacidad para tomar decisiones.",

          "Desarrollar herramientas para enfrentar desafíos.",

          "Mejorar las relaciones personales y familiares.",

          "Aumentar la confianza y el autoconcepto.",

          "Promover el crecimiento personal.",

        ],

      },

    ],

  },

  infantil: {

    question: "¿Qué es?",

    answer: "La terapia infantil es un tratamiento psicológico que ayuda a los niños a mejorar su bienestar emocional y social. Se enfoca en ayudar a los niños a resolver problemas emocionales, conductuales y de relación.",

    sections: [

      {

        heading: "Objetivo",

        points: [

          "Mejorar la autoestima, las habilidades sociales y la comunicación.",

        ],

      },

      {

        heading: "Técnicas",

        points: [

          "Juegos.",

          "Actividades.",

          "Técnicas adaptadas a la edad del niño.",

        ],

      },

      {

        heading: "Beneficio",

        points: [

          "Ayuda a los niños a manejar sus emociones y a fortalecer su confianza.",

        ],

      },

      {

        heading: "¿Cuándo buscar ayuda?",

        points: [

          "Cuando los niños experimentan dificultades emocionales o psicológicas.",

        ],

      },

      {

        heading: "La terapia infantil puede ayudar con:",

        points: [

          "Problemas de comportamiento.",

          "Ansiedad.",

          "Baja autoestima.",

          "Dificultades escolares.",

          "Conflictos familiares.",

          "Situaciones traumáticas, como divorcios, disputas familiares, acoso escolar o procesos de duelo.",

        ],

      },

      {

        heading: "La terapia infantil puede incluir:",

        points: [

          "Hablar sobre sentimientos y resolver problemas.",

          "Desarrollar habilidades para enfrentar los desafíos de su desarrollo.",

          "Aprender a manejar sus emociones.",

          "Fortalecer su confianza.",

          "Mejorar la manera en que expresa sus emociones.",

        ],

      },

    ],

  },

  neuropsicologica: {

    question: "¿Qué es?",

    answer: "Una evaluación neuropsicológica es un examen que evalúa el funcionamiento del cerebro, el comportamiento y las emociones. Se realiza a través de pruebas y cuestionarios.",

    sections: [

      {

        heading: "Objetivos",

        points: [

          "Identificar alteraciones cognitivas, conductuales y socioemocionales.",

          "Determinar el impacto de lesiones o disfunciones cerebrales en la vida cotidiana.",

          "Establecer un diagnóstico preciso.",

          "Monitorizar la evolución del paciente.",

          "Planificar el tratamiento y la rehabilitación.",

        ],

      },

      {

        heading: "¿Cuándo se realiza?",

        points: [

          "Cuando se sospecha una alteración cognitiva.",

          "Tras una lesión o enfermedad del sistema nervioso central.",

          "Como parte del seguimiento en un proceso de rehabilitación cerebral.",

        ],

      },

      {

        heading: "¿Qué se evalúa?",

        points: [

          "Memoria.",

          "Atención.",

          "Lenguaje.",

          "Funciones espaciales.",

          "Habilidades de pensamiento.",

          "Inteligencia.",

          "Habilidades motoras.",

          "Habilidades socioemocionales.",

        ],

      },

      {

        heading: "¿Quién la realiza?",

        points: [

          "Un neuropsicólogo o un psicólogo clínico especializado en neuropsicología.",

        ],

      },

      {

        heading: "¿Qué incluye?",

        points: [

          "Entrevistas.",

          "Cuestionarios.",

          "Test.",

          "Observación de la conducta.",

        ],

      },

      {

        heading: "Resultados",

        points: [

          "Un informe que incluye datos personales, historial clínico, resultados de las pruebas, interpretación de resultados, conclusiones y diagnóstico.",

        ],

      },

    ],

  },

  peritajes: {

    question: "¿Qué es?",

    answer: "Un peritaje psicológico es una evaluación psicológica que se realiza en el contexto de un juicio. El objetivo es aportar pruebas objetivas sobre el estado mental de las personas involucradas en el caso.",

    sections: [

      {

        heading: "¿Quién lo realiza?",

        points: [

          "Un psicólogo especialista en psicología forense.",

        ],

      },

      {

        heading: "¿Quién lo solicita?",

        points: [

          "El juez, los abogados de parte o cualquiera de las partes involucradas en el proceso judicial.",

        ],

      },

      {

        heading: "¿Para qué sirve?",

        points: [

          "Evaluar el estado mental de las personas implicadas en un juicio.",

          "Aportar información técnica y objetiva para tomar decisiones legales.",

        ],

      },

      {

        heading: "¿Qué se evalúa?",

        points: [

          "Salud psicofísica.",

          "Relaciones vinculares.",

          "Capacidades cognitivas y emocionales.",

          "Características de personalidad.",

        ],

      },

      {

        heading: "¿Qué se obtiene?",

        points: [

          "Un informe pericial psicológico que se adjunta al resto de pruebas y testimonios del caso.",

        ],

      },

      {

        heading: "Importancia",

        points: [

          "El peritaje psicológico es una herramienta técnica al servicio de la justicia. El informe pericial psicológico tiene validez legal y se utiliza para:",

          "Probar la justificación verídica de un hecho en un proceso judicial.",

          "Considerar la salud mental y el comportamiento de las personas.",

          "Determinar si alguien es responsable penalmente.",

        ],

      },

      {

        heading: "Ética profesional",

        points: [

          "El perito psicólogo debe:",

          "Ser imparcial.",

          "Utilizar información contrastada y respaldada científicamente.",

          "No emitir opiniones personales sin base científica.",

        ],

      },

    ],

  },

  default: {

    question: "¿En qué consiste este servicio?",

    answer: "Este servicio está diseñado para ayudarte a abordar desafíos específicos y mejorar tu bienestar emocional. Nuestro equipo de profesionales utiliza enfoques basados en evidencia para apoyarte en tu proceso.",

    sections: [

      {

        heading: "Objetivos Generales",

        points: [

          "Proporcionar un espacio seguro y confidencial.",

          "Desarrollar herramientas para la gestión emocional.",

          "Fomentar el autoconocimiento y crecimiento personal.",

          "Mejorar la calidad de tus relaciones interpersonales.",

        ],

      },

      {

        heading: "Beneficios",

        points: [

          "Mayor claridad mental y emocional.",

          "Reducción de síntomas de estrés, ansiedad o depresión.",

          "Mejora en la comunicación y resolución de conflictos.",

        ],

      },

    ],

  },

};





export default function HomePage() {

  return (

    <>

      <HeroSection />



      {/* About Us Section */}

      <section className="w-full py-10 bg-[#d9e3f0] flex items-center justify-center">

        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center gap-12 px-8 py-6">

          {/* Text Column */}

          <div className="md:w-1/2">

            <h2 className="text-2xl md:text-3xl font-bold text-dark-blue mb-6">¿Quiénes Somos?</h2>

            <p className="text-base text-dark-blue opacity-80 mb-4">

              La Asociación de Psicólogos y Psicólogas de Nuevo León A.C. nace en el 2004, uniendo esfuerzos por la psicología en Nuevo León.

            </p>

            <p className="text-base text-dark-blue opacity-80 mb-4">

              Somos una asociación comprometida con la promoción y el desarrollo profesional de la psicología.

            </p>

            <p className="text-base text-dark-blue opacity-80 mb-4">

              Nuestra misión es crear una cultura de prevención y responsabilidad social en salud mental, fomentando el aprendizaje continuo y la colaboración entre profesionales e instituciones.

            </p>

            <p className="text-base text-dark-blue opacity-80 mb-4">

              Con más de 70 especialistas, brindamos servicios en depresión, ansiedad, violencia y salud mental para niños, adolescentes, adultos y parejas.

            </p>

            <p className="text-base text-dark-blue opacity-80 font-semibold mb-8">

              ¡Únete a nosotros y juntos transformemos la salud mental en México!

            </p>

            <div className="flex justify-center md:justify-start">

              <a

                href="#"

                className="px-8 py-3 bg-dark-blue text-white font-semibold rounded-lg shadow-lg hover:bg-opacity-80 transition-transform transform hover:scale-105 text-base"

              >

                Conoce al equipo

              </a>

            </div>

          </div>

          {/* Image Placeholders Column */}

          <div className="md:w-1/2 flex flex-col gap-8">

            <div className="relative w-full h-56 rounded-lg shadow-md overflow-hidden">

              <Image src="/images/image5.jpg" alt="Imagen 1" layout="fill" objectFit="cover" className="rounded-lg" />

            </div>

            <div className="relative w-full h-56 rounded-lg shadow-md overflow-hidden">

              <Image src="/images/image6.jpg" alt="Imagen 2" layout="fill" objectFit="cover" className="rounded-lg" />

            </div>

          </div>

        </div>

      </section>



      {/* Services Section */}

      <section className="w-full py-12 bg-white">

        <div className="max-w-screen-xl mx-auto px-8">

          <h2 className="text-2xl md:text-3xl font-bold text-dark-blue text-center mb-12">Contamos con:</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            <ServiceCard title="Terapia de Pareja" description="Fortalecimiento de la relación." image="/images/terapiapareja.jpg" details={serviceDetailsData.pareja} />

            <ServiceCard title="Terapia Familiar" description="Armonía y comunicación familiar." image="/images/terapiafamiliar.jpg" details={serviceDetailsData.familiar} />

            <ServiceCard title="Terapia Individual" description="Crecimiento personal y bienestar." image="/images/terapiaindividual.jpg" details={serviceDetailsData.individual} />

            <ServiceCard title="Terapia Infantil" description="Apoyo emocional para niños." image="/images/terapiainfantil.png" details={serviceDetailsData.infantil} />

            <ServiceCard title="Evaluación Neuropsicológica" description="Diagnóstico y plan de acción." image="/images/evaluacionneuropsicologica.jpg" details={serviceDetailsData.neuropsicologica} />

            <ServiceCard title="Peritajes Psicológicos" description="Reportes especializados." image="/images/peritajespsicologicos.jpg" details={serviceDetailsData.peritajes} />

          </div>

        </div>

      </section>



      {/* Therapy Offerings Section */}

      <section className="w-full py-12 bg-[#d9e3f0]">

        <div className="max-w-screen-xl mx-auto px-8">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            <TherapyOfferingCard

              title="Terapia psicológica en Nuevo León"

              price="Desde $650 MXN/sesión"

              description="Disponemos de consultorios en diferentes zonas de Monterrey y área metropolitana para poder realizar tu psicoterapia en Nuevo León."

              image="/images/terapiapresencial.jpg"

            />

            <TherapyOfferingCard

              title="Psicólogos Online"

              price="$600 MXN/sesión"

              description="Si estás en otro municipio de Nuevo León o dispones de poco tiempo, puedes hacer terapia online con nuestros especialistas."

              image="/images/terapiaonline.jpg"

            />

          </div>

        </div>

      </section>



      {/* Locations Section */}

      <section className="w-full py-16 bg-white">

        <div className="max-w-screen-xl mx-auto px-8">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            <LocationCard

              title="Sucursal Monterrey"

              mapSrc="https://maps.google.com/maps?q=Ignacio%20Allende%201140%2C%20Centro%2C%2064000%20Monterrey%2C%20N.L.&t=&z=15&ie=UTF8&iwloc=&output=embed"

            />

            <LocationCard

              title="Sucursal Chapultepec"

              mapSrc="https://maps.google.com/maps?q=Asociaci%C3%B3n+de+Psic%C3%B3logos+de+Nuevo+Leon+-+Chapultepec+Priv.+A+2202+El+Realito+64820+Monterrey,+N.L.&t=&z=18&ie=UTF8&iwloc=&output=embed"

            />

          </div>

        </div>

      </section>

    </>

  );

}
