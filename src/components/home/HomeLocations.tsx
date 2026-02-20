import Link from "next/link";
import { MapPin, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { mockLocations } from "@/lib/mock-data";
import { FadeInUp } from "@/components/shared/FadeInUp";

export function HomeLocations() {
    return (
        <section className="py-24 bg-slate-50 border-y border-slate-100 overflow-hidden">
            <div className="container px-4 md:px-6">
                <FadeInUp className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-secondary">Nuestras Sucursales</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Encuéntranos en nuestras dos sedes en Nuevo León para tus sesiones presenciales.
                    </p>
                </FadeInUp>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                    {mockLocations.map((loc, i) => (
                        <FadeInUp key={i} delay={i * 0.1}>
                            <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden flex flex-col">
                                <div className="h-48 bg-slate-200 relative">
                                    <iframe
                                        src={loc.mapUrl}
                                        className="w-full h-full border-0 grayscale opacity-80"
                                        allowFullScreen
                                        loading="lazy"
                                        title={`Mapa de ${loc.name}`}
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
                        </FadeInUp>
                    ))}
                </div>

                <FadeInUp className="bg-blue-50/50 border border-blue-100 p-8 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-6" delay={0.3}>
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
                </FadeInUp>
            </div>
        </section>
    );
}
