import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Eye, CheckCircle2, XCircle, FileText, Calendar, MoreHorizontal } from "lucide-react";
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
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function SolicitudesPage() {
    const applicants = [
        { id: 1, name: "Fernanda Miroslava Muñoz Cordero", email: "fernanda.m@gmail.com", date: "23 Ene 2026", status: "Documentación", specialties: ["Individual", "Pareja"] },
        { id: 2, name: "Lilia Sarahi Olivo Gamboa", email: "lilia.o@outlook.com", date: "22 Ene 2026", status: "Entrevista", specialties: ["Neuropsicología"] },
        { id: 3, name: "Violeta Elizabeth Reyna Salas", email: "violeta.r@yahoo.com", date: "20 Ene 2026", status: "Revisión Final", specialties: ["Clínica"] },
        { id: 4, name: "Abigail Guadalupe Rodriguez de Leon", email: "abigail@gmail.com", date: "18 Ene 2026", status: "Nuevo", specialties: ["Clínica"] },
        { id: 5, name: "Anibal Alejandro Cerda Garcia", email: "anibal.c@gmail.com", date: "15 Ene 2026", status: "Rechazado", specialties: ["Pareja"] },
    ];

    const getStatusColor = (status: string) => {
        switch (status) {
            case "Nuevo": return "bg-blue-100 text-blue-700 hover:bg-blue-200 border-blue-200";
            case "Documentación": return "bg-orange-100 text-orange-700 hover:bg-orange-200 border-orange-200";
            case "Entrevista": return "bg-purple-100 text-purple-700 hover:bg-purple-200 border-purple-200";
            case "Revisión Final": return "bg-yellow-100 text-yellow-700 hover:bg-yellow-200 border-yellow-200";
            case "Aprobado": return "bg-emerald-100 text-emerald-700 hover:bg-emerald-200 border-emerald-200";
            case "Rechazado": return "bg-slate-100 text-slate-700 hover:bg-slate-200 border-slate-200";
            default: return "bg-slate-100 text-slate-700";
        }
    };

    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-extrabold text-secondary tracking-tight">Solicitudes de Ingreso</h1>
                    <p className="text-muted-foreground mt-1">Gestiona el proceso de admisión de nuevos profesionistas a la red.</p>
                </div>
                <div className="flex gap-3">
                    <Button variant="outline" className="rounded-xl border-slate-200">
                        <Filter className="mr-2 h-4 w-4" /> Filtros
                    </Button>
                    <Button className="rounded-xl bg-primary hover:bg-primary/90 text-white font-bold shadow-md shadow-primary/20">
                        <FileText className="mr-2 h-4 w-4" /> Exportar Lista
                    </Button>
                </div>
            </div>

            {/* Pipeline Summary Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                    { label: "Nuevas", count: 4, color: "text-blue-600", bg: "bg-blue-50" },
                    { label: "En Revisión", count: 8, color: "text-orange-600", bg: "bg-orange-50" },
                    { label: "Entrevistas", count: 2, color: "text-purple-600", bg: "bg-purple-50" },
                    { label: "Por Aprobar", count: 1, color: "text-emerald-600", bg: "bg-emerald-50" },
                ].map((stat, i) => (
                    <Card key={i} className="rounded-2xl border-slate-100 shadow-sm">
                        <CardContent className="p-6 flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                                <p className="text-2xl font-bold text-secondary">{stat.count}</p>
                            </div>
                            <div className={`h-10 w-10 rounded-xl ${stat.bg} ${stat.color} flex items-center justify-center font-bold`}>
                                {stat.count}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <Card className="rounded-3xl border-slate-100 shadow-sm overflow-hidden">
                <CardHeader className="bg-white border-b border-slate-100 px-6 py-4">
                    <div className="flex items-center justify-between">
                        <CardTitle className="text-lg font-bold text-secondary">Postulantes Recientes</CardTitle>
                        <div className="relative w-64">
                            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input placeholder="Buscar por nombre..." className="pl-9 h-10 rounded-xl bg-slate-50 border-slate-200" />
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-0">
                    <Table>
                        <TableHeader className="bg-slate-50/50">
                            <TableRow>
                                <TableHead className="w-[300px] pl-6">Profesional</TableHead>
                                <TableHead>Fecha Solicitud</TableHead>
                                <TableHead>Especialidad</TableHead>
                                <TableHead>Estado Actual</TableHead>
                                <TableHead className="text-right pr-6">Acciones</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {applicants.map((app) => (
                                <TableRow key={app.id} className="hover:bg-slate-50/50 transition-colors">
                                    <TableCell className="font-medium pl-6">
                                        <div className="flex items-center gap-3">
                                            <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold text-sm">
                                                {app.name.charAt(0)}
                                            </div>
                                            <div>
                                                <div className="font-bold text-secondary">{app.name}</div>
                                                <div className="text-xs text-muted-foreground">{app.email}</div>
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell className="text-muted-foreground">{app.date}</TableCell>
                                    <TableCell>
                                        <div className="flex flex-wrap gap-1">
                                            {app.specialties.map((s, i) => (
                                                <span key={i} className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[10px] font-bold border border-slate-200">
                                                    {s}
                                                </span>
                                            ))}
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <Badge variant="outline" className={`font-bold border rounded-full px-3 py-1 ${getStatusColor(app.status)}`}>
                                            {app.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="text-right pr-6">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="ghost" className="h-8 w-8 p-0 text-slate-400 hover:text-secondary">
                                                    <span className="sr-only">Abrir menú</span>
                                                    <MoreHorizontal className="h-4 w-4" />
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end" className="w-[160px] rounded-xl">
                                                <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                                                <DropdownMenuItem className="cursor-pointer">
                                                    <Eye className="mr-2 h-4 w-4 text-blue-500" /> Ver Perfil
                                                </DropdownMenuItem>
                                                <DropdownMenuItem className="cursor-pointer">
                                                    <FileText className="mr-2 h-4 w-4 text-orange-500" /> Documentos
                                                </DropdownMenuItem>
                                                <DropdownMenuItem className="cursor-pointer">
                                                    <Calendar className="mr-2 h-4 w-4 text-purple-500" /> Agendar Entrevista
                                                </DropdownMenuItem>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuItem className="cursor-pointer text-emerald-600 font-bold">
                                                    <CheckCircle2 className="mr-2 h-4 w-4" /> Aprobar
                                                </DropdownMenuItem>
                                                <DropdownMenuItem className="cursor-pointer text-red-600 font-bold">
                                                    <XCircle className="mr-2 h-4 w-4" /> Rechazar
                                                </DropdownMenuItem>
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
