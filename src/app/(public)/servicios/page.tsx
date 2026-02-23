import { specialties } from "@/lib/mock-data";
import { ArrowLeft, CheckCircle2, User, Heart, Users, Baby, Brain, Scale, Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GuidedMatch } from "@/components/shared/GuidedMatch";
import { FadeInUp } from "@/components/shared/FadeInUp";

export default function ServicesPage() {
    const serviceIcons: Record<string, React.ElementType> = {
        "individual": User,
        "pareja": Heart,
        "familiar": Users,
        "infantil": Baby,
        "evaluacion": Brain,
        "peritaje": Scale,
    };

    return (
        <div className="min-h-screen bg-white">

            {/* Premium Hero Section */}
            <section className="relative py-20 overflow-hidden bg-slate-50">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-1 translate-x-1/3 -translate-y-1/3" />
                <FadeInUp className="container px-6 relative z-10 text-center space-y-6">
                    <h1 className="text-5xl md:text-7xl font-extrabold text-secondary tracking-tight">Especialidades Clínicas</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-medium">
                        Conoce a detalle cada una de las terapias y servicios que ofrecemos para acompañar tu proceso de sanación y crecimiento.
                    </p>
                </FadeInUp>
            </section>

            <main className="container px-6 py-24 space-y-32">
                {specialties.map((service, index) => {
                    const Icon = serviceIcons[service.slug] || Heart;

                    return (
                        <section key={service.id} className="scroll-mt-24" id={service.slug}>
                            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
                                {/* Left/Top Side: Main Info & CTA */}
                                <FadeInUp className="lg:w-1/3 space-y-8 lg:sticky lg:top-24">
                                    <div className="space-y-4">
                                        <div className="inline-flex items-center gap-3 px-4 py-2 bg-slate-50 rounded-2xl border border-slate-100 text-primary w-fit">
                                            <Icon className="h-6 w-6" />
                                            <span className="font-bold text-sm tracking-wider uppercase">Servicio Especializado</span>
                                        </div>
                                        <h2 className="text-4xl font-extrabold text-secondary tracking-tight">
                                            {service.name}
                                        </h2>
                                        <div className="h-1.5 w-16 bg-primary rounded-full" />
                                    </div>

                                    <div className="prose prose-slate prose-lg text-muted-foreground leading-relaxed">
                                        <p className="font-medium text-secondary">{service.definition || service.fullDescription}</p>
                                        <p>{service.objective}</p>
                                    </div>

                                    <div className="p-6 bg-slate-50 rounded-[2rem] border border-slate-100 space-y-4 shadow-sm">
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Inversión Inicial</span>
                                            <span className="text-2xl font-black text-primary">$350 MXN</span>
                                        </div>
                                        <div className="h-px bg-slate-200" />
                                        <Button size="lg" className="w-full rounded-xl bg-primary hover:bg-primary/90 text-white font-bold h-12 shadow-md shadow-primary/10" asChild>
                                            <Link href={`/directorio?specialty=${service.id}`}>
                                                Agendar Cita
                                                <ArrowRight className="ml-2 h-4 w-4" />
                                            </Link>
                                        </Button>
                                    </div>
                                </FadeInUp>

                                {/* Right/Bottom Side: Detailed Breakdown */}
                                <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">

                                    {/* Column 1 */}
                                    <div className="space-y-10">
                                        <FadeInUp className="space-y-4">
                                            <h3 className="text-xl font-bold text-secondary flex items-center gap-2">
                                                <CheckCircle2 className="h-5 w-5 text-primary" />
                                                ¿Cuándo es recomendable?
                                            </h3>
                                            <ul className="space-y-3">
                                                {service.recommendedWhen?.map((item, i) => (
                                                    <li key={i} className="flex gap-3 text-muted-foreground items-start text-sm leading-relaxed">
                                                        <span className="h-1.5 w-1.5 rounded-full bg-slate-300 mt-2 shrink-0" />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </FadeInUp>

                                        <FadeInUp className="space-y-4" delay={0.1}>
                                            <h3 className="text-xl font-bold text-secondary flex items-center gap-2">
                                                <Brain className="h-5 w-5 text-primary" />
                                                {service.whatIsWorkedLabel || "¿Qué se trabaja?"}
                                            </h3>
                                            <ul className="space-y-3">
                                                {service.whatIsWorked?.map((item, i) => (
                                                    <li key={i} className="flex gap-3 text-muted-foreground items-start text-sm leading-relaxed">
                                                        <span className="h-1.5 w-1.5 rounded-full bg-slate-300 mt-2 shrink-0" />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </FadeInUp>
                                    </div>

                                    {/* Column 2 */}
                                    <div className="space-y-10">
                                        <FadeInUp className="space-y-4">
                                            <h3 className="text-xl font-bold text-secondary flex items-center gap-2">
                                                <Users className="h-5 w-5 text-primary" />
                                                Metodología
                                            </h3>
                                            <ul className="space-y-3">
                                                {service.methodology?.map((item, i) => (
                                                    <li key={i} className="flex gap-3 text-muted-foreground items-start text-sm leading-relaxed">
                                                        <span className="h-1.5 w-1.5 rounded-full bg-slate-300 mt-2 shrink-0" />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </FadeInUp>

                                        <FadeInUp className="space-y-4" delay={0.1}>
                                            <h3 className="text-xl font-bold text-secondary flex items-center gap-2">
                                                <CheckCircle2 className="h-5 w-5 text-primary" />
                                                ¿Qué se entrega?
                                            </h3>
                                            <ul className="space-y-3">
                                                {service.deliverables?.map((item, i) => (
                                                    <li key={i} className="flex gap-3 text-muted-foreground items-start text-sm leading-relaxed">
                                                        <span className="h-1.5 w-1.5 rounded-full bg-slate-300 mt-2 shrink-0" />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </FadeInUp>

                                        {/* Benefits / Extra */}
                                        <FadeInUp className="bg-primary/5 p-6 rounded-2xl border border-primary/10 space-y-3" delay={0.2}>
                                            <h3 className="font-bold text-secondary text-sm uppercase tracking-wider">Beneficios Clave</h3>
                                            <div className="flex flex-wrap gap-2">
                                                {service.benefits?.map((benefit, i) => (
                                                    <span key={i} className="bg-white px-3 py-1 rounded-full text-xs font-medium text-primary shadow-sm border border-primary/10">
                                                        {benefit}
                                                    </span>
                                                ))}
                                            </div>
                                        </FadeInUp>
                                    </div>

                                </div>
                            </div>
                            <div className="h-px w-full bg-slate-100 mt-20" />
                        </section>
                    );
                })}
            </main>

            {/* Final CTA */}
            <section className="py-24 bg-secondary text-white text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-primary/5 -z-1" />
                <div className="container px-6 space-y-12">
                    <FadeInUp className="space-y-6">
                        <h2 className="text-3xl md:text-5xl font-bold">¿Aún no sabes por dónde empezar?</h2>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                            Es normal tener dudas al iniciar un proceso terapéutico. Estamos aquí para orientarte y encontrar juntos la modalidad ideal para ti.
                        </p>
                    </FadeInUp>

                    <FadeInUp className="bg-white/10 backdrop-blur-md p-8 md:p-12 rounded-[2.5rem] border border-white/20 max-w-4xl mx-auto" delay={0.2}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div className="text-left space-y-6">
                                <h3 className="text-2xl font-bold">Citas en línea y presenciales</h3>
                                <p className="text-slate-300 leading-relaxed font-medium">Contamos con instalaciones de primer nivel en <strong>Nuevo León</strong> y atención <strong>100% online</strong> para mayor flexibilidad.</p>
                                <div className="flex flex-wrap gap-4">
                                    <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl text-xs font-bold border border-white/10">
                                        <div className="h-2 w-2 rounded-full bg-primary" />
                                        Sucursales Físicas
                                    </div>
                                    <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl text-xs font-bold border border-white/10">
                                        <div className="h-2 w-2 rounded-full bg-emerald-400" />
                                        Terapia Online
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4">
                                <GuidedMatch
                                    customTriggerLabel="Asistencia en 3 clics"
                                    customTriggerClassName="rounded-2xl bg-primary hover:bg-primary/90 text-white font-bold h-14 text-lg w-full"
                                />
                                <p className="text-xs text-slate-400 font-medium">
                                    Te ayudamos a elegir el servicio ideal para tus necesidades.
                                </p>
                            </div>
                        </div>
                    </FadeInUp>
                </div>
            </section>
        </div>
    );
}
