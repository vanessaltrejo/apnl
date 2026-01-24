import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Clock, ExternalLink, Navigation } from "lucide-react";
import { mockLocations } from "@/lib/mock-data";
import Link from "next/link";

export default function UbicacionesPage() {
    const centers = [
        {
            ...mockLocations[0],
            phone: "(81) 8345 5334",
            hours: "Lun - Vie: 9:00 - 20:00 | Sáb: 9:00 - 14:00",
            image: "https://images.unsplash.com/photo-1577412647305-991150c7d163?q=80&w=800&auto=format&fit=crop",
        },
        {
            ...mockLocations[1],
            phone: "(81) 1234 5678",
            hours: "Lun - Vie: 10:00 - 19:00 | Sáb: 10:00 - 13:00",
            image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
        }
    ];

    return (
        <div className="min-h-screen bg-[#FAFAF5]">
            <section className="bg-secondary text-white py-24 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent" />
                <div className="container relative z-10 space-y-4">
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Nuestras Sedes</h1>
                    <p className="text-xl text-white/70 max-w-2xl">
                        Cuidamos cada detalle para ofrecerte espacios de sanación cómodos, privados y de fácil acceso.
                    </p>
                </div>
            </section>

            <main className="container px-6 py-20 space-y-20">
                {centers.map((center, i) => (
                    <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
                        <div className="lg:w-1/2 w-full space-y-8">
                            <div className="space-y-4">
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold uppercase tracking-widest">
                                    <MapPin className="h-4 w-4" /> Centro Monterrey
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-secondary leading-tight">{center.name}</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed">{center.address}</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                                    <div className="h-10 w-10 bg-primary/5 rounded-xl flex items-center justify-center text-primary">
                                        <Phone className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-slate-400 uppercase">Teléfono</p>
                                        <p className="font-bold text-secondary">{center.phone}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                                    <div className="h-10 w-10 bg-primary/5 rounded-xl flex items-center justify-center text-primary">
                                        <Clock className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-slate-400 uppercase">Horarios</p>
                                        <p className="font-bold text-secondary text-xs">{center.hours}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <Button size="lg" className="rounded-xl px-8 bg-primary h-14 font-bold flex items-center gap-2 shadow-xl shadow-primary/20">
                                    <Navigation className="h-5 w-5" /> Ver en Google Maps
                                </Button>
                                <Button size="lg" variant="outline" className="rounded-xl px-8 h-14 border-2 font-bold" asChild>
                                    <Link href="/directorio">Terapeutas en esta sede</Link>
                                </Button>
                            </div>
                        </div>

                        <div className="lg:w-1/2 w-full">
                            <Card className="overflow-hidden border-8 border-white shadow-2xl rounded-[3rem] aspect-video lg:aspect-square">
                                <iframe
                                    src={center.mapUrl}
                                    className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
                                    allowFullScreen
                                    loading="lazy"
                                ></iframe>
                            </Card>
                        </div>
                    </div>
                ))}
            </main>

            <section className="bg-white py-24 border-t border-slate-100">
                <div className="container text-center space-y-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-secondary">¿Buscas algo más flexible?</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Nuestra red de terapeutas online está capacitada para brindarte el mismo nivel de atención y confidencialidad desde la comodidad de tu hogar.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Button size="lg" className="rounded-full bg-secondary text-white px-10 h-14 font-bold shadow-lg shadow-secondary/20" asChild>
                            <Link href="/directorio?type=Online">Ver Terapia Online</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
