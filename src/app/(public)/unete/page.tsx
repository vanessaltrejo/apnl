"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle2, Award, Users, MapPin, Mic, Vote, Briefcase, FileText, Calendar, ArrowRight, ShieldCheck, UserPlus, Star, BookOpen, Wallet } from "lucide-react";
import { MemberProfileMatch } from "@/components/shared/MemberProfileMatch";
import { FadeInUp, StaggerFadeIn } from "@/components/shared/FadeInUp";


export default function JoinNetworkPage() {
    const mainBenefits = [
        {
            title: "Instalaciones Equipadas",
            description: "Uso de consultorios Aldivan en Barrio Antiguo y Chapultepec, sin renta obligada (bajo comisión).",
            icon: MapPin
        },
        {
            title: "Directorio Oficial",
            description: "Inclusión en el directorio de la APNL y ser considerado para la referencia de casos.",
            icon: Users
        },
        {
            title: "Proyección Profesional",
            description: "Oportunidad de participar como ponente en congresos, diplomados y capacitaciones.",
            icon: Mic
        },
        {
            title: "Voz y Voto",
            description: "Participación activa y toma de decisiones en las Asambleas de la asociación.",
            icon: Vote
        },
        {
            title: "Bolsa de Trabajo",
            description: "Acceso exclusivo a la cartera de vacantes propias y de organizaciones aliadas.",
            icon: Briefcase
        },
        {
            title: "Convenios Exclusivos",
            description: "Precios preferenciales en cursos, diplomados y servicios de instituciones aliadas.",
            icon: BookOpen
        }
    ];

    const membershipTiers = [
        {
            name: "Miembro Interino",
            icon: UserPlus,
            requirements: [
                "Constancia de título en trámite",
                "INE",
                "Curriculum Vitae (CV)",
                "Constancia de situación fiscal",
                "Comprobante de domicilio"
            ]
        },
        {
            name: "Miembro Adherente",
            icon: ShieldCheck,
            requirements: [
                "Título profesional y cédula",
                "INE",
                "Curriculum Vitae (CV)",
                "Constancia de situación fiscal",
                "Comprobante de domicilio"
            ]
        },
        {
            name: "Miembro Oficial",
            icon: Star,
            requirements: [
                "Más de 1 año de antigüedad en APNL",
                "Asistencia a asambleas (mínimo 80%)",
                "Participación activa en un proyecto formal anual"
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-white font-sans">
            {/* 1. Hero Section (Blanco/Light) */}
            <section className="relative overflow-hidden bg-slate-50 border-b border-slate-100">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-1 translate-x-1/2 -translate-y-1/2" />

                <div className="container px-6 pt-20 pb-32 relative z-10 text-center">
                    <FadeInUp>
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-bold mb-8">
                            <Users className="h-4 w-4" />
                            <span>Red de Profesionales 2026</span>
                        </div>
                    </FadeInUp>

                    <FadeInUp delay={0.1}>
                        <h1 className="text-5xl md:text-7xl font-extrabold text-secondary tracking-tight mb-6 leading-[1.1]">
                            Únete a la red,<br />
                            <span className="text-primary transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">crezcamos juntos.</span>
                        </h1>
                    </FadeInUp>

                    <FadeInUp delay={0.2}>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            Tu nivel de membresía se asigna según tu perfil profesional, uniendo esfuerzos para elevar la práctica de la psicología en Nuevo León.
                        </p>
                    </FadeInUp>

                    <FadeInUp delay={0.3}>
                        <div className="mt-10">
                            <MemberProfileMatch />
                        </div>
                    </FadeInUp>
                </div>
            </section>


            {/* 2. Impacto de ser Miembro (Azul) */}
            <section className="py-24 bg-secondary relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-primary/5 -z-1" />
                <div className="container px-6">
                    <FadeInUp className="text-center mb-16 space-y-4">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-white">Impacto de ser Miembro</h2>
                        <p className="text-slate-300 max-w-2xl mx-auto">Ventajas competitivas diseñadas para elevar tu nivel profesional institucional y privado.</p>
                    </FadeInUp>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {mainBenefits.map((benefit, i) => {
                            const Icon = benefit.icon;
                            return (
                                <FadeInUp key={i} delay={i * 0.1}>
                                    <div className="group p-8 h-full rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                        <div className="h-14 w-14 rounded-2xl bg-slate-50 flex items-center justify-center text-secondary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                            <Icon className="h-7 w-7" />
                                        </div>
                                        <h3 className="text-xl font-bold text-secondary mb-3">{benefit.title}</h3>
                                        <p className="text-muted-foreground leading-relaxed text-sm">
                                            {benefit.description}
                                        </p>
                                    </div>
                                </FadeInUp>
                            )
                        })}
                    </div>
                </div>
            </section>


            {/* 3. Inversión + Requisitos (Blanco) */}
            <section className="py-24 bg-white text-secondary relative">
                <div className="container px-6 mb-24">
                    <FadeInUp>
                        <div className="max-w-4xl mx-auto bg-slate-50 rounded-[3rem] border border-slate-100 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden relative">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                            <div className="space-y-4 relative z-10 text-center md:text-left">
                                <div className="flex items-center gap-3 text-primary font-bold justify-center md:justify-start">
                                    <Wallet className="h-6 w-6" />
                                    <span className="uppercase tracking-[3px] text-xs">Inversión Institucional</span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-extrabold text-secondary leading-tight">Mismo beneficio, <br /><span className="text-primary">misma inversión.</span></h2>
                                <p className="text-muted-foreground max-w-md font-medium text-sm">
                                    Los costos son estándar para todos los niveles de membresía. Tu categoría se define únicamente por tu trayectoria profesional.
                                </p>
                            </div>
                            <div className="flex gap-6 md:gap-10 relative z-10 bg-white px-8 py-6 rounded-[2rem] border border-slate-100 shadow-sm">
                                <div className="text-center">
                                    <p className="text-4xl font-black text-secondary">$500</p>
                                    <p className="text-[10px] font-bold uppercase tracking-wider text-primary mt-1">Inscripción</p>
                                </div>
                                <div className="w-px bg-slate-200 h-10 self-center" />
                                <div className="text-center">
                                    <p className="text-4xl font-black text-secondary">$300</p>
                                    <p className="text-[10px] font-bold uppercase tracking-wider text-primary mt-1">Mensualidad</p>
                                </div>
                            </div>
                        </div>
                    </FadeInUp>
                </div>

                <div className="container px-6">
                    <FadeInUp className="text-center mb-16 space-y-4">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-secondary">Tipos de Membresía</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">Tu nivel de membresía se asigna según tu perfil profesional, manteniendo el mismo costo para todos.</p>
                    </FadeInUp>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {membershipTiers.map((tier, i) => {
                            const Icon = tier.icon;
                            return (
                                <FadeInUp key={i} delay={i * 0.1}>
                                    <div
                                        className="group p-8 md:p-10 rounded-[3rem] border border-slate-100 bg-slate-50 flex flex-col h-full shadow-sm transition-all duration-500 hover:bg-secondary hover:border-secondary hover:shadow-2xl hover:shadow-secondary/20 hover:-translate-y-2 cursor-default"
                                    >
                                        <div className="h-16 w-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                                            <Icon className="h-8 w-8" />
                                        </div>
                                        <h3 className="text-2xl font-black mb-6 group-hover:text-white transition-colors">{tier.name}</h3>

                                        <div className="space-y-4 flex-1">
                                            <p className="text-xs font-bold uppercase tracking-[2px] mb-4 text-slate-400 group-hover:text-primary transition-colors">Requisitos:</p>
                                            {tier.requirements.map((req, j) => (
                                                <div key={j} className="flex items-start gap-4">
                                                    <div className="h-5 w-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                                                        <CheckCircle2 className="h-3.5 w-3.5" />
                                                    </div>
                                                    <span className="text-sm font-medium leading-relaxed text-slate-600 group-hover:text-slate-200 transition-colors">{req}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="mt-10 pt-8 border-t border-slate-200 group-hover:border-white/10 transition-colors empty:hidden" />
                                    </div>
                                </FadeInUp>
                            );
                        })}
                    </div>
                </div>
            </section>


            {/* 4. CTA Final (Azul) */}
            <section className="py-12 bg-secondary relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-1 translate-x-1/2 -translate-y-1/2" />
                <div className="container px-6">
                    <FadeInUp>
                        <div className="bg-white/5 border border-white/10 p-10 rounded-[3rem] shadow-2xl relative overflow-hidden text-center max-w-4xl mx-auto backdrop-blur-sm">
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">¿Deseas iniciar tu afiliación?</h3>
                            <p className="text-slate-400 mb-8 max-w-2xl mx-auto text-sm">
                                Comienza tu trayectoria con nosotros hoy mismo. Un miembro de nuestro comité evaluará tu perfil para asignarte la categoría correspondiente.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Button size="lg" className="h-14 bg-primary text-white font-bold rounded-2xl text-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 hover:-translate-y-1 px-12 w-full sm:w-auto" asChild>
                                    <a href="https://wa.me/528183455334?text=Hola,%20me%20interesa%20afiliarme%20a%20la%20asociación" target="_blank" rel="noopener noreferrer">
                                        Hablar con el Comité Administrativo
                                    </a>
                                </Button>
                                <MemberProfileMatch customTriggerClassName="!bg-transparent border-white/30 !text-white hover:!bg-white/10 hover:-translate-y-1" />
                            </div>
                        </div>
                    </FadeInUp>
                </div>
            </section>

        </div>
    );
}
