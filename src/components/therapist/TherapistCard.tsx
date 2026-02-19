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

    // Name formatting logic: First Name + First Surname
    const formatName = (fullName: string) => {
        const parts = fullName.split(' ').filter(p => p.length > 0);
        if (parts.length <= 2) return fullName;

        // Revised heuristic for Hispanic names:
        // N1 [N2] S1 [S2]
        // If 4+ parts: Assume [N1] [N2] [S1] [S2...] -> N1 + S1 (index 0 + index 2)
        // If 3 parts: Assume [N1] [S1] [S2] -> N1 + S1 (index 0 + index 1)

        const firstName = parts[0];
        const firstSurname = parts.length >= 4 ? parts[2] : parts[1];

        return `${firstName} ${firstSurname}`;
    };

    const displayName = formatName(therapist.name);

    return (
        <Card className="overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 bg-white flex flex-col h-full rounded-2xl">
            <div className="p-4 flex gap-4 items-start">
                <Avatar className="h-16 w-16 border-2 border-slate-50 shadow-sm shrink-0">
                    <AvatarImage src={therapist.imageUrl} alt={therapist.name} className="object-cover" />
                    <AvatarFallback>{displayName[0]}</AvatarFallback>
                </Avatar>

                <div className="flex-1 min-w-0 space-y-1">
                    <h3 className="text-lg font-bold text-secondary leading-tight truncate">
                        <Link href={`/terapeuta/${therapist.id}`} className="hover:text-primary transition-colors">
                            {displayName}
                        </Link>
                    </h3>
                    <div className="flex flex-col text-xs text-muted-foreground font-medium">
                        <span className="truncate">{therapist.title}</span>
                        <span className="opacity-70">Cédula: {therapist.cedula}</span>
                    </div>
                </div>
            </div>

            <CardContent className="px-4 pb-2 pt-0 space-y-3 flex-1">
                {/* Specialties */}
                <div className="flex flex-wrap gap-1.5">
                    {therapistSpecialties.slice(0, 2).map((spec) => (
                        <Badge key={spec.id} variant="secondary" className="px-2 py-0.5 text-[10px] font-bold bg-slate-50 text-slate-600 border border-slate-100 shrink-0">
                            {spec.name}
                        </Badge>
                    ))}
                    {therapistSpecialties.length > 2 && (
                        <Badge variant="secondary" className="px-2 py-0.5 text-[10px] bg-slate-50 text-slate-400 border border-slate-100">
                            +{therapistSpecialties.length - 2}
                        </Badge>
                    )}
                </div>

                {/* Locations/Modality */}
                <div className="flex flex-wrap gap-2 text-[10px] font-bold">
                    {therapist.branch === "loc1" ? (
                        <div className="flex items-center gap-1 bg-rose-100 text-rose-700 px-2 py-1 rounded-md">
                            <MapPin className="h-3 w-3" />
                            <span className="truncate max-w-[120px]">Barrio Antiguo</span>
                        </div>
                    ) : (
                        <div className="flex items-center gap-1 bg-cyan-100 text-cyan-700 px-2 py-1 rounded-md">
                            <MapPin className="h-3 w-3" />
                            <span className="truncate max-w-[120px]">Chapultepec</span>
                        </div>
                    )}
                    <div className="flex items-center gap-1 bg-emerald-100 text-emerald-700 px-2 py-1 rounded-md">
                        <Video className="h-3 w-3" />
                        <span>Online / Presencial</span>
                    </div>
                </div>
            </CardContent>

            <CardFooter className="p-3 bg-slate-50/50 border-t border-slate-100 mt-auto flex items-center justify-between gap-3">
                {nextAvailable ? (
                    <div className="flex flex-col text-xs">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Próxima</span>
                        <div className="flex items-center gap-1.5 font-bold text-secondary">
                            <CalendarDays className="h-3.5 w-3.5 text-primary" />
                            {format(new Date(nextAvailable), "d MMM", { locale: es })}
                        </div>
                    </div>
                ) : (
                    <span className="text-[10px] text-slate-400 italic">Sin citas</span>
                )}

                <Button size="sm" className="h-9 px-6 rounded-xl bg-primary hover:bg-primary/90 text-white font-bold shadow-sm text-xs" asChild>
                    <Link href={`/terapeuta/${therapist.id}`}>
                        Ver Horarios
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    );
}
