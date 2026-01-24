import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, MoreHorizontal, FileText, Calendar, Phone, Mail } from "lucide-react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function PacientesPage() {
    const patients = [
        { id: 1, name: "Mariana López", email: "mariana.l@gmail.com", phone: "81 1111 2222", lastVisit: "24 Ene 2026", therapist: "Lic. Clara M.", status: "Activo", source: "Instagram" },
        { id: 2, name: "Jorge Garza", email: "jorge.g@hotmail.com", phone: "81 3333 4444", lastVisit: "20 Ene 2026", therapist: "Dr. Roberto Casas", status: "Activo", source: "Recomendación" },
        { id: 3, name: "Familia Ruiz", email: "carlos.ruiz@yahoo.com", phone: "81 5555 6666", lastVisit: "15 Ene 2026", therapist: "Lic. Sofia Garza", status: "Pausado", source: "Google" },
        { id: 4, name: "Sofia Mendez", email: "sofi.m@outlook.com", phone: "81 7777 8888", lastVisit: "10 Ene 2026", therapist: "Lic. Clara M.", status: "Inactivo", source: "Sitio Web" },
        { id: 5, name: "Luis & Ana", email: "luis.ana@gmail.com", phone: "81 9999 0000", lastVisit: "05 Ene 2026", therapist: "Dr. Alejandro R.", status: "Activo", source: "Google" },
    ];

    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-extrabold text-secondary tracking-tight">Directorio de Pacientes</h1>
                    <p className="text-muted-foreground mt-1">Historial y gestión de usuarios que han solicitado servicios.</p>
                </div>
                <div className="flex gap-3">
                    <Button variant="outline" className="rounded-xl border-slate-200">
                        <Filter className="mr-2 h-4 w-4" /> Filtros
                    </Button>
                    <Button className="rounded-xl bg-primary hover:bg-primary/90 text-white font-bold shadow-md shadow-primary/20">
                        <FileText className="mr-2 h-4 w-4" /> Exportar CSV
                    </Button>
                </div>
            </div>

            <Card className="rounded-3xl border-slate-100 shadow-sm overflow-hidden">
                <CardHeader className="bg-white border-b border-slate-100 px-6 py-4">
                    <div className="flex items-center justify-between">
                        <CardTitle className="text-lg font-bold text-secondary">Pacientes Registrados (142)</CardTitle>
                        <div className="relative w-64">
                            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input placeholder="Buscar por nombre, correo..." className="pl-9 h-10 rounded-xl bg-slate-50 border-slate-200" />
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-0">
                    <Table>
                        <TableHeader className="bg-slate-50/50">
                            <TableRow>
                                <TableHead className="w-[300px] pl-6">Paciente</TableHead>
                                <TableHead>Terapeuta Asignado</TableHead>
                                <TableHead>Última Visita</TableHead>
                                <TableHead>Origen</TableHead>
                                <TableHead>Estado</TableHead>
                                <TableHead className="text-right pr-6">Acciones</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {patients.map((p) => (
                                <TableRow key={p.id} className="hover:bg-slate-50/50 transition-colors">
                                    <TableCell className="font-medium pl-6">
                                        <div className="flex items-center gap-3">
                                            <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-sm">
                                                {p.name.charAt(0)}
                                            </div>
                                            <div>
                                                <div className="font-bold text-secondary">{p.name}</div>
                                                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                                    <span className="flex items-center gap-1"><Mail className="h-3 w-3" /> {p.email}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell className="text-slate-600">{p.therapist}</TableCell>
                                    <TableCell className="text-slate-500 text-sm">{p.lastVisit}</TableCell>
                                    <TableCell>
                                        <Badge variant="secondary" className="bg-slate-100 text-slate-500 hover:bg-slate-200 border-transparent font-normal">
                                            {p.source}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${p.status === "Activo" ? "bg-emerald-100 text-emerald-800" :
                                                p.status === "Pausado" ? "bg-yellow-100 text-yellow-800" :
                                                    "bg-slate-100 text-slate-600"
                                            }`}>
                                            {p.status}
                                        </span>
                                    </TableCell>
                                    <TableCell className="text-right pr-6">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="ghost" className="h-8 w-8 p-0 text-slate-400 hover:text-secondary">
                                                    <span className="sr-only">Abrir menú</span>
                                                    <MoreHorizontal className="h-4 w-4" />
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                                                <DropdownMenuItem className="cursor-pointer">Ver Expediente</DropdownMenuItem>
                                                <DropdownMenuItem className="cursor-pointer">Historial de Citas</DropdownMenuItem>
                                                <DropdownMenuItem className="cursor-pointer text-slate-500">Contactar</DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}
