import { Users, Target, ShieldCheck, Heart, Award, Clock } from "lucide-react";
import { nosotrosImages } from "@/lib/mock-data";
import Image from "next/image";
import { FadeInUp } from "@/components/shared/FadeInUp";

export default function NosotrosPage() {
  const values = [
    { icon: <Heart className="h-6 w-6" />, title: "Compromiso", desc: "Dedicación total a la salud mental de nuestra comunidad." },
    { icon: <ShieldCheck className="h-6 w-6" />, title: "Ética", desc: "Practicamos con los más altos estándares de confidencialidad." },
    { icon: <Target className="h-6 w-6" />, title: "Innovación", desc: "Uso de nuevas plataformas y técnicas terapéuticas." },
    { icon: <Award className="h-6 w-6" />, title: "Excelencia", desc: "Profesionales certificados y en constante formación." },
  ];

  const stats = [
    { label: "Años de Experiencia", value: "20+" },
    { label: "Terapeutas Afiliados", value: "150+" },
    { label: "Vidas Impactadas", value: "10k+" },
    { label: "Centros en NL", value: "2" },
  ];

  return (
    <div className="bg-background">
      {/* Professional Page Header */}
      <section className="bg-secondary py-24 text-white">
        <div className="container px-6">
          <FadeInUp className="max-w-3xl space-y-4">
            <span className="text-primary font-bold uppercase tracking-widest text-sm flex items-center gap-2">
              <Clock className="h-4 w-4" /> Desde 2004
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Nuestra Misión y Visión</h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Uniendo esfuerzos para transformar la promoción y práctica de la psicología en Nuevo León.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Stats Bar */}
      <FadeInUp className="bg-primary py-12 -mt-10 relative z-20 mx-4 md:mx-auto max-w-5xl rounded-2xl shadow-xl">
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center text-white space-y-1">
              <p className="text-3xl md:text-4xl font-extrabold">{stat.value}</p>
              <p className="text-xs uppercase tracking-widest opacity-80">{stat.label}</p>
            </div>
          ))}
        </div>
      </FadeInUp>

      {/* Main Content Section */}
      <section className="py-24">
        <div className="container px-6 flex flex-col lg:flex-row items-center gap-16">
          <FadeInUp className="lg:w-1/2 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="relative h-64 rounded-3xl overflow-hidden shadow-lg border-4 border-white">
                  <Image src={nosotrosImages.sesion} fill className="object-cover" alt="Sesión terapéutica" />
                </div>
                <div className="relative h-48 rounded-3xl overflow-hidden shadow-lg border-4 border-white">
                  <Image src={nosotrosImages.apoyo} fill className="object-cover" alt="Apoyo clínico" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="relative h-48 rounded-3xl overflow-hidden shadow-lg border-4 border-white">
                  <Image src={nosotrosImages.comunidad} fill className="object-cover" alt="Comunidad psicológica" />
                </div>
                <div className="relative h-64 rounded-3xl overflow-hidden shadow-lg border-4 border-white">
                  <Image src={nosotrosImages.reunion} fill className="object-cover" alt="Reunión de especialistas" />
                </div>
              </div>
            </div>
          </FadeInUp>

          <div className="lg:w-1/2 space-y-8">
            <FadeInUp>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary">
                Impulsando la psicología institucional y privada
              </h2>
            </FadeInUp>

            <FadeInUp delay={0.1} className="text-muted-foreground space-y-6 text-lg leading-relaxed">
              <p>
                La Asociación de Psicólogos y Psicólogas de Nuevo León A.C. se fundó en el 2004, motivada por un grupo de profesionales apasionados con el objetivo de elevar la práctica psicológica.
              </p>
              <p>
                Nuestra misión está centrada en crear una cultura preventiva y de responsabilidad social en salud mental, apoyándonos en herramientas tecnológicas modernas.
              </p>
            </FadeInUp>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {values.map((v, i) => (
                <FadeInUp key={i} delay={0.2 + (i * 0.1)} className="flex gap-4">
                  <div className="h-12 w-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-primary shrink-0">
                    {v.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary">{v.title}</h4>
                    <p className="text-sm text-muted-foreground">{v.desc}</p>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision CTA */}
      <section className="py-24 bg-slate-50">
        <div className="container px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          <FadeInUp className="p-10 bg-white rounded-[2.5rem] border border-slate-200 shadow-sm space-y-4" distance={30}>
            <Target className="h-12 w-12 text-primary" />
            <h3 className="text-2xl font-bold text-secondary">Nuestra Misión</h3>
            <p className="text-muted-foreground leading-relaxed">
              Crear una cultura preventiva y de responsabilidad social en salud mental a través del fortalecimiento de la red de profesionales y el acceso simplificado para la sociedad.
            </p>
          </FadeInUp>
          <FadeInUp className="p-10 bg-white rounded-[2.5rem] border border-slate-200 shadow-sm space-y-4" delay={0.1}>
            <Users className="h-12 w-12 text-secondary" />
            <h3 className="text-2xl font-bold text-secondary">Nuestra Visión</h3>
            <p className="text-muted-foreground leading-relaxed">
              Ser la organización líder y referente en Nuevo León por nuestro compromiso con el desarrollo científico y ético de la psicología moderna.
            </p>
          </FadeInUp>
        </div>
      </section>
    </div>
  );
}