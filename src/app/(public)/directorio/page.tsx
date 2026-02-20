"use client";

import { useState, Suspense } from "react";
import { TherapistCard } from "@/components/therapist/TherapistCard";
import { Button } from "@/components/ui/button";
import { getMockTherapists } from "@/lib/mock-data";
import { SlidersHorizontal, Compass } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useSearchParams } from "next/navigation";
import { GuidedMatch } from "@/components/shared/GuidedMatch";
import { DirectoryFilters } from "@/components/directory/DirectoryFilters";
import { FadeInUp } from "@/components/shared/FadeInUp";

function DirectoryContent() {
    const allTherapists = getMockTherapists();
    const searchParams = useSearchParams();
    const initialSpecialty = searchParams.get("specialty") || "all";

    // Filter States
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedSpecialty, setSelectedSpecialty] = useState<string>(initialSpecialty);
    const [selectedModality, setSelectedModality] = useState<string>("all");
    const [selectedBranch, setSelectedBranch] = useState<string>("all");

    const filteredTherapists = allTherapists.filter(therapist => {
        const matchesSearch = therapist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            therapist.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesSpecialty = selectedSpecialty === "all" || therapist.specialties.includes(selectedSpecialty);
        const matchesModality = selectedModality === "all" || therapist.modality.some(m => m === selectedModality);
        const matchesBranch = selectedBranch === "all" || therapist.branch === selectedBranch;

        return matchesSearch && matchesSpecialty && matchesModality && matchesBranch;
    });

    const filterProps = {
        searchTerm,
        setSearchTerm,
        selectedSpecialty,
        setSelectedSpecialty,
        selectedModality,
        setSelectedModality,
        selectedBranch,
        setSelectedBranch
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <div className="bg-secondary text-white py-12">
                <FadeInUp className="container px-4">
                    <h1 className="text-3xl font-bold mb-2">Encuentra a tu especialista</h1>
                    <p className="opacity-80">Explora nuestra red de profesionales certificados.</p>
                </FadeInUp>
            </div>

            <div className="container px-4 py-8 flex flex-col md:flex-row gap-8">
                {/* Mobile Filter Sheet */}
                <FadeInUp className="md:hidden mb-4">
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
                            <DirectoryFilters {...filterProps} />
                        </SheetContent>
                    </Sheet>
                </FadeInUp>

                {/* Desktop Sidebar */}
                <aside className="hidden md:block w-72 shrink-0 space-y-8">
                    {/* Guidance Tool */}
                    <FadeInUp className="p-6 bg-primary/5 rounded-[2rem] border border-primary/10 space-y-4">
                        <div className="flex items-center gap-2 text-primary font-bold">
                            <Compass className="h-5 w-5" />
                            <span>¿Necesitas orientación?</span>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                            Si aún no estás seguro de qué tipo de terapia necesitas, nuestro asistente puede ayudarte en 3 clics.
                        </p>
                        <GuidedMatch />
                    </FadeInUp>

                    <FadeInUp className="sticky top-24 p-6 bg-white rounded-[2rem] border border-slate-100 shadow-sm" delay={0.1}>
                        <h3 className="font-bold text-secondary mb-6 flex items-center gap-2 text-lg">
                            <SlidersHorizontal className="h-4 w-4" /> Filtros
                        </h3>
                        <DirectoryFilters {...filterProps} />
                    </FadeInUp>
                </aside>

                {/* Results Grid */}
                <div className="flex-1">
                    {filteredTherapists.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 items-stretch">
                            {filteredTherapists.map((t, i) => (
                                <FadeInUp key={t.id} delay={(i % 6) * 0.05} distance={15}>
                                    <TherapistCard therapist={t} />
                                </FadeInUp>
                            ))}
                        </div>
                    ) : (
                        <FadeInUp className="text-center py-20 bg-white rounded-lg border border-dashed">
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
                        </FadeInUp>
                    )}
                </div>
            </div>
        </div>
    );
}

export default function DirectoryPage() {
    return (
        <Suspense fallback={<div className="container py-20 text-center text-muted-foreground">Cargando directorio...</div>}>
            <DirectoryContent />
        </Suspense>
    );
}

