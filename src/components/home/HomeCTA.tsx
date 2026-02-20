"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeInUp } from "@/components/shared/FadeInUp";

export function HomeCTA() {
    return (
        <section className="py-24 bg-white">
            <div className="container px-4 md:px-6">
                <FadeInUp className="bg-secondary rounded-[3.5rem] p-12 md:p-20 text-white relative overflow-hidden text-center md:text-left">
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
                </FadeInUp>
            </div>
        </section>
    );
}
