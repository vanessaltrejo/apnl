
import { AppointmentScheduler } from "@/components/therapist/AppointmentScheduler";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getMockTherapists, specialties as allSpecialties } from "@/lib/mock-data";
import { Check, MapPin, School, Star, Video } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
    params: Promise<{ id: string }>;
}

export default async function TherapistProfile({ params }: PageProps) {
    const { id } = await params;
    const therapist = getMockTherapists().find(t => t.id === id);

    if (!therapist) {
        notFound();
    }

    const therapistSpecialties = allSpecialties.filter(s => therapist.specialties.includes(s.id));

    return (
        <div className="min-h-screen bg-background pb-20">


            <main className="container px-4 py-8 md:py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Content: Bio & Details */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Header Profile */}
                        <div className="flex flex-col sm:flex-row gap-6 items-start">
                            <Avatar className="h-32 w-32 border-4 border-white shadow-lg">
                                <AvatarImage src={therapist.imageUrl} className="object-cover" />
                                <AvatarFallback>{therapist.name[0]}</AvatarFallback>
                            </Avatar>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 flex-wrap">
                                    <h1 className="text-3xl font-bold text-secondary">{therapist.name}</h1>
                                </div>
                                <div className="flex flex-col text-lg text-muted-foreground font-bold tracking-tight">
                                    <span>{therapist.title}</span>
                                    <span className="text-sm opacity-80">Cédula Profesional: {therapist.cedula}</span>
                                </div>

                                <div className="flex flex-wrap gap-2 pt-2">
                                    {therapist.branch === "loc1" ? (
                                        <Badge className="bg-rose-100 text-rose-700 border-none font-bold px-3 py-1">
                                            Sucursal Barrio Antiguo
                                        </Badge>
                                    ) : (
                                        <Badge className="bg-cyan-100 text-cyan-700 border-none font-bold px-3 py-1">
                                            Sucursal Chapultepec
                                        </Badge>
                                    )}
                                    <Badge className="bg-emerald-100 text-emerald-700 border-none font-bold px-3 py-1">
                                        Presencial & Online
                                    </Badge>
                                </div>
                                <div className="flex flex-wrap gap-2 pt-2">
                                    {therapistSpecialties.map(s => (
                                        <Badge key={s.id} variant="secondary" className="px-2 py-1 text-[10px] font-bold bg-slate-100 text-secondary/70 border-none">
                                            {s.name}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* About Section */}
                        <div className="bg-white rounded-xl border p-8 shadow-sm space-y-6">
                            <section className="space-y-4">
                                <h2 className="text-xl font-bold text-secondary">Sobre mí</h2>
                                <p className="text-muted-foreground leading-relaxed text-lg">
                                    {therapist.bio}
                                </p>
                                <p className="text-muted-foreground leading-relaxed">
                                    Mi enfoque terapéutico se basa en la empatía y la evidencia científica.
                                    Creo firmemente en la capacidad de cada persona para sanar y crecer cuando se le proporcionan las herramientas adecuadas en un entorno seguro.
                                </p>
                            </section>

                            <hr className="border-slate-100" />

                            <section className="space-y-4">
                                <h2 className="text-xl font-bold text-secondary">Formación y Enfoque</h2>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3 text-muted-foreground">
                                        <School className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                        <span>Licenciatura en Psicología Clínica, UANL.</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-muted-foreground">
                                        <School className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                        <span>Maestría en Psicoterapia Cognitivo Conductual.</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-muted-foreground">
                                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                        <span>Certificación en Manejo de Trauma y Ansiedad.</span>
                                    </li>
                                </ul>
                            </section>
                        </div>
                    </div>

                    {/* Right Sidebar: Booking */}
                    <div className="space-y-6">
                        <AppointmentScheduler therapist={therapist} />

                        {/* Quick Info Card */}
                        <div className="bg-slate-50 rounded-xl p-6 border space-y-4 text-sm">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-white rounded-full shadow-sm">
                                    {therapist.branch === "loc1" ? <MapPin className="h-4 w-4 text-rose-500" /> : <MapPin className="h-4 w-4 text-cyan-500" />}
                                </div>
                                <div>
                                    <p className="font-bold text-secondary">Ubicación</p>
                                    <p className="text-muted-foreground font-medium">
                                        {therapist.branch === "loc1" ? "Sucursal Barrio Antiguo" : "Sucursal Chapultepec"}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-white rounded-full shadow-sm">
                                    <Video className="h-4 w-4 text-emerald-500" />
                                </div>
                                <div>
                                    <p className="font-bold text-secondary">Modalidad</p>
                                    <p className="text-muted-foreground font-medium">Presencial & Online</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-white rounded-full shadow-sm">
                                    <span className="font-bold text-primary px-1">$</span>
                                </div>
                                <div>
                                    <p className="font-semibold text-secondary">Costo por sesión</p>
                                    <p className="text-muted-foreground">{therapist.priceRange}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
