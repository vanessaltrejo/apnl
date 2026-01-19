import Image from "next/image";
import TeamSection from "@/components/TeamSection";

export default function NosotrosPage() {
  return (
    <>
      <section className="w-full h-40 relative overflow-hidden">
        <Image
          src="/images/image6.jpg"
          alt="Banner Nosotros"
          layout="fill"
          objectFit="cover"
          quality={85}
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </section>

      {/* Main Content Section (Image Placeholders + Intro Text & Detailed About Us) */}
      <section className="w-full py-16 bg-white flex items-center justify-center">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-start gap-12 px-8">
          {/* Image Placeholders Column (Left) */}
          <div className="md:w-1/2 flex flex-col gap-8">
            <div className="relative w-full h-56 rounded-lg shadow-md overflow-hidden">
              <Image src="/images/image2.jpg" alt="Imagen 2" layout="fill" objectFit="cover" className="rounded-lg" />
            </div>
            <div className="relative w-full h-56 rounded-lg shadow-md overflow-hidden">
              <Image src="/images/image3.jpg" alt="Imagen 3" layout="fill" objectFit="cover" className="rounded-lg" />
            </div>
            <div className="relative w-full h-56 rounded-lg shadow-md overflow-hidden">
              <Image src="/images/image4.jpg" alt="Imagen 4" layout="fill" objectFit="cover" className="rounded-lg" />
            </div>
          </div>
          {/* Intro Title, Description and Detailed About Us Text Column (Right) */}
          <div className="md:w-1/2 text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-dark-blue text-center md:text-left">Conoce Nuestra Historia</h1>
            <p className="text-lg mt-2 text-dark-blue opacity-80 text-center md:text-left">Dedicados a la psicología en Nuevo León desde 2004.</p>
            
            <div className="text-base text-dark-blue opacity-80 space-y-4 mt-12">
              <p>
                La Asociación de Psicólogos y Psicólogas de Nuevo León A.C. nace en el 2004, uniendo esfuerzos por la psicología en Nuevo León.
              </p>
              <p>
                Somos una asociación comprometida con la promoción y el desarrollo profesional de la psicología.
              </p>
              <p>
                La Asociación de Psicólogos y Psicólogas de Nuevo León A.C. se fundó en el 2004, motivada por un grupo de psicólogos apasionados con el objetivo de unir esfuerzos para impulsar la promoción y preparación continua de nuestra profesión, tanto en el ámbito institucional como privado, desde lo académico hasta lo profesional.
              </p>
              <p>
                Nuestros objetivos se enfocan en el uso de plataformas de aprendizaje y herramientas de trabajo que apoyen a los psicólogos profesionales en Nuevo León, así como en la creación de una amplia red de contactos entre profesionales de la salud e instituciones que generen nuevas oportunidades de desarrollo.
              </p>
              <p>
                Nuestra misión está centrada en crear una cultura preventiva y de responsabilidad social en salud mental. Nuestra visión es ser una organización reconocida por su contribución y compromiso con el desarrollo de la psicología, siendo punto de encuentro y centro de referencia para compartir conocimientos y enriquecer la práctica profesional de cada psicólogo.
              </p>
              <p>
                Invitamos a todos los interesados a unirse a nuestra asociación para desarrollar nuevos proyectos basados en nuestros valores: compromiso, innovación, confidencialidad, honestidad, ética, perseverancia, solidaridad y responsabilidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      <TeamSection />
    </>
  );
}