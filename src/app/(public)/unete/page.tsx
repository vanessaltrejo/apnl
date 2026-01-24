import { Button } from "@/components/ui/button";
import { CheckCircle2, Award, Users, BookOpen, Calendar, ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function JoinNetworkPage() {
    const benefits = [
        {
            title: "Formación Continua",
            description: "Acceso exclusivo a cursos, talleres y diplomados con precios preferenciales.",
            icon: BookOpen
        },
        {
            title: "Networking Profesional",
            description: "Conecta con colegas, comparte casos y expande tu red de referencias.",
            icon: Users
        },
        {
            title: "Eventos y Conferencias",
            description: "Entrada gratuita o con descuento a congresos organizados por la asociación.",
            icon: Calendar
        },
        {
            title: "Respaldo Institucional",
            description: "Pertenecer a una asociación reconocida brinda confianza a tus pacientes.",
            icon: Award
        }
    ];

    return (
        <div className="min-h-screen bg-white font-sans">

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-slate-50">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-1 translate-x-1/2 -translate-y-1/2" />

                <div className="container px-6 pt-20 pb-32 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-bold mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <Users className="h-4 w-4" />
                        <span>Red de Profesionales 2026</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold text-secondary tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-6 duration-1000 leading-[1.1]">
                        Impulsa tu carrera,<br />
                        <span className="text-primary transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">conecta con los mejores.</span>
                    </h1>

                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
                        Únete a la Asociación de Psicólogos de Nuevo León y forma parte de una comunidad comprometida con la excelencia clínica y el crecimiento profesional.
                    </p>
                </div>
            </section>

            {/* Benefits Grid */}
            <section className="py-24 bg-secondary relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-primary/5 -z-1" />
                <div className="container px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, i) => {
                            const Icon = benefit.icon;
                            return (
                                <div key={i} className="group p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                    <div className="h-14 w-14 rounded-2xl bg-slate-50 flex items-center justify-center text-secondary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                        <Icon className="h-7 w-7" />
                                    </div>
                                    <h3 className="text-xl font-bold text-secondary mb-3">{benefit.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed text-sm">
                                        {benefit.description}
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Membership Details Section */}
            <section className="py-24 bg-white text-secondary relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-1 -translate-x-1/2 translate-y-1/2" />

                <div className="container px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2 space-y-8">
                            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Tu Membresía Anual</h2>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                Al ser parte de nuestra red, no solo obtienes beneficios tangibles, sino que te unes a un movimiento que busca dignificar y elevar la práctica de la psicología en nuestra región.
                            </p>

                            <div className="space-y-6 pt-4">
                                <div className="p-6 rounded-3xl bg-slate-50 border border-slate-100 shadow-sm">
                                    <div className="flex items-end gap-2 mb-2">
                                        <span className="text-4xl font-black text-primary">$1,200</span>
                                        <span className="text-lg font-medium text-slate-500 mb-1">MXN / inscripción</span>
                                    </div>
                                    <p className="text-sm text-muted-foreground">Pago único al registrarte por primera vez.</p>
                                </div>
                                <div className="p-6 rounded-3xl bg-slate-50 border border-slate-100 shadow-sm">
                                    <div className="flex items-end gap-2 mb-2">
                                        <span className="text-4xl font-black text-secondary">$450</span>
                                        <span className="text-lg font-medium text-slate-500 mb-1">MXN / mensualidad</span>
                                    </div>
                                    <p className="text-sm text-muted-foreground">Inversión mensual para mantener tu estatus activo y beneficios.</p>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-1/2 w-full">
                            <div className="bg-secondary text-white p-8 md:p-12 rounded-[3.5rem] shadow-2xl relative overflow-hidden border border-white/5">
                                <div className="absolute top-0 right-0 w-full h-full bg-primary/5 -z-1" />
                                <div className="absolute top-8 right-8 text-primary opacity-20">
                                    <Award className="h-24 w-24" />
                                </div>

                                <h3 className="text-2xl font-bold mb-6">Requisitos de Afiliación</h3>
                                <ul className="space-y-4 relative z-10">
                                    {[
                                        "Título y Cédula Profesional (Indispensable)",
                                        "Curriculum Vitae actualizado",
                                        "Entrevista con el comité de admisión",
                                        "Carta de motivos para unirse a la asociación"
                                    ].map((req, i) => (
                                        <li key={i} className="flex items-start gap-4">
                                            <div className="h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                                                <CheckCircle2 className="h-4 w-4" />
                                            </div>
                                            <span className="font-medium text-lg text-slate-100">{req}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-10 relative z-10">
                                    <Button size="lg" className="w-full h-14 bg-primary text-white font-bold rounded-2xl text-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 hover:-translate-y-1" asChild>
                                        <a href="https://wa.me/528183455334?text=Hola,%20me%20interesa%20afiliarme%20a%20la%20asociación" target="_blank" rel="noopener noreferrer">
                                            Iniciar Proceso de Afiliación
                                        </a>
                                    </Button>
                                    <p className="text-center text-xs text-slate-400 mt-4">
                                        Te redirigiremos a WhatsApp para agendar tu entrevista.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
