"use client";

import { useState } from "react";

import { TherapistCard } from "@/components/therapist/TherapistCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { getMockTherapists, specialties } from "@/lib/mock-data";
import { Search, SlidersHorizontal, X, Compass } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useSearchParams } from "next/navigation";
import { GuidedMatch } from "@/components/shared/GuidedMatch";
import { useEffect } from "react";

export default function DirectoryPage() {
    const allTherapists = getMockTherapists();
    const searchParams = useSearchParams();
    const initialSpecialty = searchParams.get("specialty") || "all";

    // Filter States
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedSpecialty, setSelectedSpecialty] = useState<string>(initialSpecialty);
    const [selectedModality, setSelectedModality] = useState<string>("all");
    const [selectedBranch, setSelectedBranch] = useState<string>("all");

    // Update filter if param changes (e.g. from GuidedMatch)
    useEffect(() => {
        const specialtyParam = searchParams.get("specialty");
        if (specialtyParam) setSelectedSpecialty(specialtyParam);
    }, [searchParams]);

    const filteredTherapists = allTherapists.filter(therapist => {
        const matchesSearch = therapist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            therapist.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesSpecialty = selectedSpecialty === "all" || therapist.specialties.includes(selectedSpecialty);
        const matchesModality = selectedModality === "all" || therapist.modality.some(m => m === selectedModality);
        const matchesBranch = selectedBranch === "all" || therapist.branch === selectedBranch;

        return matchesSearch && matchesSpecialty && matchesModality && matchesBranch;
    });

    const FilterContent = () => (
        <div className="space-y-6">
            <div className="space-y-2">
                <Label>Buscar por Nombre</Label>
                <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        placeholder="Nombre del terapeuta..."
                        className="pl-9"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            <div className="space-y-2">
                <Label>Especialidad</Label>
                <Select value={selectedSpecialty} onValueChange={setSelectedSpecialty}>
                    <SelectTrigger>
                        <SelectValue placeholder="Todas las especialidades" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">Todas</SelectItem>
                        {specialties.map(s => (
                            <SelectItem key={s.id} value={s.id}>{s.name}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            <div className="space-y-2">
                <Label>Modalidad</Label>
                <div className="flex flex-col gap-2">
                    <div className="flex items-center space-x-2">
                        <Checkbox
                            id="mod-online"
                            checked={selectedModality === "Online"}
                            onCheckedChange={(c) => setSelectedModality(c ? "Online" : "all")}
                        />
                        <label htmlFor="mod-online" className="text-sm font-medium">Online</label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox
                            id="mod-presencial"
                            checked={selectedModality === "Presencial"}
                            onCheckedChange={(c) => setSelectedModality(c ? "Presencial" : "all")}
                        />
                        <label htmlFor="mod-presencial" className="text-sm font-medium">Presencial</label>
                    </div>
                </div>
            </div>

            <div className="space-y-2">
                <Label>Sucursal</Label>
                <div className="flex flex-col gap-2">
                    <div className="flex items-center space-x-2">
                        <Checkbox
                            id="br-barrio"
                            checked={selectedBranch === "loc1"}
                            onCheckedChange={(c) => setSelectedBranch(c ? "loc1" : "all")}
                        />
                        <label htmlFor="br-barrio" className="text-sm font-medium">Barrio Antiguo</label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox
                            id="br-chapultepec"
                            checked={selectedBranch === "loc2"}
                            onCheckedChange={(c) => setSelectedBranch(c ? "loc2" : "all")}
                        />
                        <label htmlFor="br-chapultepec" className="text-sm font-medium">Chapultepec</label>
                    </div>
                </div>
            </div>

            {(searchTerm || selectedSpecialty !== "all" || selectedModality !== "all") && (
                <Button
                    variant="outline"
                    className="w-full text-muted-foreground"
                    onClick={() => {
                        setSearchTerm("");
                        setSelectedSpecialty("all");
                        setSelectedModality("all");
                        setSelectedBranch("all");
                    }}
                >
                    <X className="mr-2 h-4 w-4" /> Limpiar filtros
                </Button>
            )}
        </div>
    );

    return (
        <div className="min-h-screen bg-background">


            <div className="bg-secondary text-white py-12">
                <div className="container px-4">
                    <h1 className="text-3xl font-bold mb-2">Encuentra a tu especialista</h1>
                    <p className="opacity-80">Explora nuestra red de profesionales certificados.</p>
                </div>
            </div>

            <div className="container px-4 py-8 flex flex-col md:flex-row gap-8">
                {/* Mobile Filter Sheet */}
                <div className="md:hidden mb-4">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="outline" className="w-full">
                                <SlidersHorizontal className="mr-2 h-4 w-4" />
                                Filtros
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left">
                            <SheetHeader className="mb-6">
                                <SheetTitle>Filtrar Búsqueda</SheetTitle>
                            </SheetHeader>
                            <FilterContent />
                        </SheetContent>
                    </Sheet>
                </div>

                {/* Desktop Sidebar */}
                <aside className="hidden md:block w-72 shrink-0 space-y-8">
                    {/* Guidance Tool */}
                    <div className="p-6 bg-primary/5 rounded-[2rem] border border-primary/10 space-y-4">
                        <div className="flex items-center gap-2 text-primary font-bold">
                            <Compass className="h-5 w-5" />
                            <span>¿Necesitas orientación?</span>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                            Si aún no estás seguro de qué tipo de terapia necesitas, nuestro asistente puede ayudarte en 3 clics.
                        </p>
                        <GuidedMatch />
                    </div>

                    <div className="sticky top-24 p-6 bg-white rounded-[2rem] border border-slate-100 shadow-sm">
                        <h3 className="font-bold text-secondary mb-6 flex items-center gap-2 text-lg">
                            <SlidersHorizontal className="h-4 w-4" /> Filtros
                        </h3>
                        <FilterContent />
                    </div>
                </aside>

                {/* Results Grid */}
                <div className="flex-1">
                    {filteredTherapists.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 items-stretch">
                            {filteredTherapists.map(t => (
                                <TherapistCard key={t.id} therapist={t} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 bg-white rounded-lg border border-dashed">
                            <div className="text-muted-foreground mb-4">No se encontraron terapeutas con estos criterios.</div>
                            <Button
                                variant="link"
                                onClick={() => {
                                    setSearchTerm("");
                                    setSelectedSpecialty("all");
                                    setSelectedModality("all");
                                    setSelectedBranch("all");
                                }}
                            >
                                Limpiar filtros
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
