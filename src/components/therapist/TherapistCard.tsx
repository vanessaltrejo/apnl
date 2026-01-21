import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { CalendarDays, MapPin, Star, Video } from "lucide-react";
import { Therapist, specialties as allSpecialties } from "@/lib/mock-data";
import { format } from "date-fns";
import { es } from "date-fns/locale";

interface TherapistCardProps {
    therapist: Therapist;
}

export function TherapistCard({ therapist }: TherapistCardProps) {
    // Resolve specialty names
    const therapistSpecialties = allSpecialties.filter((s) =>
        therapist.specialties.includes(s.id)
    );

    const nextAvailable = therapist.availability[0];

    return (
        <Card className="overflow-hidden border-none shadow-sm hover:shadow-md transition-all duration-300 bg-white flex flex-col h-full">
            <CardHeader className="p-0">
                <div className="h-20 bg-gradient-to-r from-secondary/10 to-primary/10" />
            </CardHeader>
            <CardContent className="pt-0 px-6 -mt-10">
                <div className="flex justify-between items-start">
                    <Avatar className="h-24 w-24 border-4 border-background shadow-md">
                        <AvatarImage src={therapist.imageUrl} alt={therapist.name} className="object-cover" />
                        <AvatarFallback>{therapist.name[0]}</AvatarFallback>
                    </Avatar>
                </div>

                <div className="mt-3 flex flex-col flex-1 gap-1">
                    <div className="space-y-0.5">
                        <h3 className="text-lg font-bold text-secondary group-hover:text-primary transition-colors leading-tight">
                            <Link href={`/terapeuta/${therapist.id}`} className="hover:underline">
                                {therapist.name}
                            </Link>
                        </h3>
                        <div className="flex flex-col text-[11px] font-bold text-muted-foreground/80 mt-1 tracking-tight">
                            <span>{therapist.title}</span>
                            <span>Cédula: {therapist.cedula}</span>
                        </div>
                    </div>

                    <div className="py-1 flex flex-wrap gap-1.5">
                        {therapistSpecialties.slice(0, 3).map((spec) => (
                            <Badge key={spec.id} variant="secondary" className="px-2 py-1 text-[10px] font-bold bg-slate-100/80 text-secondary/70 border-none shrink-0">
                                {spec.name}
                            </Badge>
                        ))}
                    </div>

                    <div className="flex flex-col gap-2 pt-1">
                        <div className="flex flex-wrap gap-2">
                            {therapist.branch === "loc1" ? (
                                <Badge className="bg-rose-100 text-rose-700 border-none hover:bg-rose-200 font-bold px-2 py-1 text-[10px] shrink-0">
                                    Sucursal Barrio Antiguo
                                </Badge>
                            ) : (
                                <Badge className="bg-cyan-100 text-cyan-700 border-none hover:bg-cyan-200 font-bold px-2 py-1 text-[10px] shrink-0">
                                    Sucursal Chapultepec
                                </Badge>
                            )}
                            <Badge className="bg-emerald-100 text-emerald-700 border-none hover:bg-emerald-200 font-bold px-2 py-1 text-[10px] flex items-center gap-1 shrink-0">
                                <Video className="h-3 w-3" /> Presencial & Online
                            </Badge>
                        </div>
                    </div>
                </div>
            </CardContent>

            <CardFooter className="px-6 pb-6 pt-0 mt-auto flex flex-col gap-3 shrink-0">
                <div className="h-px w-full bg-slate-50 mb-2" />
                {nextAvailable ? (
                    <div className="w-full flex items-center justify-between text-xs bg-green-50 text-green-700 px-3 py-2.5 rounded-xl border border-green-100/50">
                        <div className="flex items-center gap-2">
                            <CalendarDays className="h-4 w-4" />
                            <span className="font-semibold text-[10px] uppercase tracking-wider">Próxima cita</span>
                        </div>
                        <span className="font-bold">
                            {format(new Date(nextAvailable), "EEE d MMM", { locale: es })}
                        </span>
                    </div>
                ) : (
                    <div className="w-full text-xs text-center py-2.5 text-muted-foreground bg-slate-50 rounded-xl">
                        Sin disponibilidad inmediata
                    </div>
                )}

                <Button className="w-full bg-primary hover:bg-primary/90 font-bold rounded-xl h-12 shadow-lg shadow-primary/10 transition-all active:scale-95" asChild>
                    <Link href={`/terapeuta/${therapist.id}`}>
                        Ver Disponibilidad
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    );
}
