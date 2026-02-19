"use client";

import Image from "next/image";
import { Sparkles } from "lucide-react";
import { GuidedMatch } from "@/components/shared/GuidedMatch";

export function HomeHero() {
    return (
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
    );
}
