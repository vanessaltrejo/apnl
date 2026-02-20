"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Search, X } from "lucide-react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { specialties } from "@/lib/mock-data";

interface DirectoryFiltersProps {
    searchTerm: string;
    setSearchTerm: (v: string) => void;
    selectedSpecialty: string;
    setSelectedSpecialty: (v: string) => void;
    selectedModality: string;
    setSelectedModality: (v: string) => void;
    selectedBranch: string;
    setSelectedBranch: (v: string) => void;
}

export function DirectoryFilters({
    searchTerm,
    setSearchTerm,
    selectedSpecialty,
    setSelectedSpecialty,
    selectedModality,
    setSelectedModality,
    selectedBranch,
    setSelectedBranch,
}: DirectoryFiltersProps) {
    return (
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
                        {specialties.map((s) => (
                            <SelectItem key={s.id} value={s.id}>
                                {s.name}
                            </SelectItem>
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
                        <label htmlFor="mod-online" className="text-sm font-medium">
                            Online
                        </label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox
                            id="mod-presencial"
                            checked={selectedModality === "Presencial"}
                            onCheckedChange={(c) =>
                                setSelectedModality(c ? "Presencial" : "all")
                            }
                        />
                        <label htmlFor="mod-presencial" className="text-sm font-medium">
                            Presencial
                        </label>
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
                        <label htmlFor="br-barrio" className="text-sm font-medium">
                            Barrio Antiguo
                        </label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox
                            id="br-chapultepec"
                            checked={selectedBranch === "loc2"}
                            onCheckedChange={(c) => setSelectedBranch(c ? "loc2" : "all")}
                        />
                        <label htmlFor="br-chapultepec" className="text-sm font-medium">
                            Chapultepec
                        </label>
                    </div>
                </div>
            </div>

            {(searchTerm ||
                selectedSpecialty !== "all" ||
                selectedModality !== "all" ||
                selectedBranch !== "all") && (
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
}
