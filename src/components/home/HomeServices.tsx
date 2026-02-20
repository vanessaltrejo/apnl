"use client";

import Link from "next/link";
import { ArrowRight, Heart, Users, User, Baby, Brain, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { specialties } from "@/lib/mock-data";
import { FadeInUp } from "@/components/shared/FadeInUp";

export function HomeServices() {
    const serviceIcons: Record<string, React.ElementType> = {
        "individual": User,
        "pareja": Heart,
        "familiar": Users,
        "infantil": Baby,
        "evaluacion": Brain,
        "peritaje": Scale,
    };

    return (
        <section className="py-24 bg-white">
            <div className="container px-4 md:px-6">
                <FadeInUp className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-secondary">Nuestros Servicios</h2>
                    <p className="text-lg text-muted-foreground">Especialidades clínicas desarrolladas para tu bienestar integral.</p>
                </FadeInUp>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {specialties.map((service, i) => {
                        const Icon = serviceIcons[service.slug] || Heart;
                        return (
                            <FadeInUp key={service.id} delay={i * 0.1}>
                                <div className="group p-6 bg-slate-50 rounded-[2.5rem] border border-transparent hover:border-primary/20 hover:bg-white hover:shadow-xl transition-all duration-300 h-full flex flex-col items-center text-center space-y-4">
                                    <div className="h-16 w-16 rounded-2xl bg-white shadow-md flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:scale-110">
                                        <Icon className="h-8 w-8" />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-xl font-bold text-secondary">{service.name}</h3>
                                        <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                                    </div>
                                </div>
                            </FadeInUp>
                        );
                    })}
                </div>

                <FadeInUp className="flex justify-center" delay={0.4}>
                    <Button size="lg" className="rounded-2xl bg-secondary hover:bg-secondary/90 text-white font-bold h-16 px-12 text-lg shadow-xl shadow-secondary/10 hover:-translate-y-1 transition-all" asChild>
                        <Link href="/servicios">
                            Ver detalles de servicios
                            <ArrowRight className="ml-3 h-5 w-5" />
                        </Link>
                    </Button>
                </FadeInUp>
            </div>
        </section>
    );
}
