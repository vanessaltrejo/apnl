import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getMockTherapists, specialties, getMockBlogPosts, mockLocations } from "@/lib/mock-data";
import { ArrowRight, Search, Sparkles, MapPin, Heart, Users, User, Baby, Brain, Scale, Calendar, BookOpen, Video } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { GuidedMatch } from "@/components/shared/GuidedMatch";

export default function Home() {
  const recentPosts = getMockBlogPosts();

  const serviceIcons: Record<string, React.ElementType> = {
    "individual": User,
    "pareja": Heart,
    "familiar": Users,
    "infantil": Baby,
    "evaluacion": Brain,
    "peritaje": Scale,
  };

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20">

      {/* Jumbotron Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop"
            alt="Consultorio Psicológico"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/68 to-transparent z-10 w-[110%]" />
        </div>

        <div className="container px-4 md:px-6 relative z-20 py-20">
          <div className="max-w-3xl space-y-8">
            <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary animate-in fade-in slide-in-from-left-4 duration-500">
              <Sparkles className="mr-2 h-4 w-4" />
              <span>Ética y Compañerismo desde 2004</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-secondary leading-[1] animate-in fade-in slide-in-from-left-6 duration-700">
              Cuidamos tu mente, <br />
              <span className="text-primary italic">transformamos tu vida.</span>
            </h1>

            <p className="text-xl md:text-2xl text-secondary/70 max-w-[600px] leading-relaxed animate-in fade-in slide-in-from-left-8 duration-900 font-medium">
              Encuentra el apoyo profesional que necesitas con la Red de Psicólogos más confiable de Nuevo León.
            </p>

            <div className="flex flex-wrap items-center gap-3 md:gap-4 text-sm font-bold text-secondary/80 pt-8 animate-in fade-in duration-1000 delay-300">
              <div className="flex items-center gap-2 bg-white/50 backdrop-blur-sm px-3 py-1 rounded-lg border border-slate-100">
                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                <span>Especialistas online y presencial</span>
              </div>
              <div className="flex items-center gap-2 bg-white/50 backdrop-blur-sm px-3 py-1 rounded-lg border border-slate-100">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span>2 Sedes en Nuevo León</span>
              </div>
              <div className="h-6 w-px bg-slate-200 mx-2 hidden sm:block" />
              <GuidedMatch />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-secondary">Nuestros Servicios</h2>
            <p className="text-lg text-muted-foreground">Especialidades clínicas desarrolladas para tu bienestar integral.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {specialties.map((service) => {
              const Icon = serviceIcons[service.slug] || Heart;
              return (
                <div key={service.id} className="group p-6 bg-slate-50 rounded-[2.5rem] border border-transparent hover:border-primary/20 hover:bg-white hover:shadow-xl transition-all duration-300 h-full flex flex-col items-center text-center space-y-4">
                  <div className="h-16 w-16 rounded-2xl bg-white shadow-md flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:scale-110">
                    <Icon className="h-8 w-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-secondary">{service.name}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center">
            <Button size="lg" className="rounded-2xl bg-secondary hover:bg-secondary/90 text-white font-bold h-16 px-12 text-lg shadow-xl shadow-secondary/10 hover:-translate-y-1 transition-all" asChild>
              <Link href="/servicios">
                Ver detalles de servicios
                <ArrowRight className="ml-3 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Locations Summary Section */}
      <section className="py-24 bg-slate-50 border-y border-slate-100 overflow-hidden">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-secondary">Nuestras Sucursales</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Encuéntranos en nuestras dos sedes en Nuevo León para tus sesiones presenciales.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {mockLocations.map((loc, i) => (
              <div key={i} className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden flex flex-col">
                <div className="h-48 bg-slate-200 relative">
                  <iframe
                    src={loc.mapUrl}
                    className="w-full h-full border-0 grayscale opacity-80"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
                <div className="p-8 space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-primary">
                      <MapPin className="h-6 w-6" />
                      <h3 className="text-2xl font-bold text-secondary">{loc.name}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{loc.address}</p>
                    <div className="space-y-2 text-sm text-secondary/70">
                      <p className="flex items-center gap-2 font-medium">
                        <span className="w-20 font-bold text-secondary">Teléfono:</span> {loc.phone}
                      </p>
                      <p className="flex items-start gap-2 font-medium">
                        <span className="w-20 font-bold text-secondary">Horario:</span> {loc.hours}
                      </p>
                    </div>
                  </div>
                  <Button size="lg" className="w-full rounded-xl bg-secondary hover:bg-secondary/90 text-white font-bold h-12" asChild>
                    <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.address)}`} target="_blank" rel="noopener noreferrer">
                      Ver en Google Maps
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Online Callout - Friendly */}
          <div className="bg-blue-50/50 border border-blue-100 p-8 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-primary">
                <Video className="h-8 w-8" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xl font-bold text-secondary">¿Buscas una forma más flexible?</h4>
                <p className="text-muted-foreground">Todos nuestros especialistas también ofrecen sesiones 100% Online.</p>
              </div>
            </div>
            <Button size="lg" className="rounded-xl bg-primary hover:bg-primary/90 text-white font-bold h-12 px-8" asChild>
              <Link href="/directorio?modality=Online">Explorar Online</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final Call to Action - Super Friendly */}
      <section className="py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="bg-secondary rounded-[3.5rem] p-12 md:p-20 text-white relative overflow-hidden text-center md:text-left">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />

            <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
              <div className="md:w-3/5 space-y-6">
                <span className="px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[10px] font-bold tracking-widest uppercase">Tu salud mental no puede esperar más.</span>
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">Estamos aquí para escucharte y acompañarte.</h2>
                <p className="text-lg text-slate-300 max-w-xl leading-relaxed">
                  Encuentra el psicólogo ideal y agenda tu cita en menos de 2 minutos. Atención personalizada y profesional.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="rounded-full px-10 bg-primary hover:bg-primary/90 text-white font-bold h-14 text-lg shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5" asChild>
                    <Link href="/directorio" className="flex items-center gap-2">
                      Agendar Cita Ahora
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="md:w-2/5 relative hidden md:block">
                <div className="relative w-full aspect-[4/3] rounded-[2.5rem] overflow-hidden border-8 border-white/10 shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop"
                    alt="Apoyo emocional"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
