import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, MoreHorizontal, Mail, Phone, MapPin, Edit, EyeOff, Ban } from "lucide-react";
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

export default function MiembrosPage() {
    const members = [
        { id: 1, name: "Lic. Clara Mendez", email: "clara.m@consulta.com", phone: "81 8345 5334", status: "Activo", type: "Terapeuta", specialties: ["Individual", "Pareja"], location: "Chapultepec" },
        { id: 2, name: "Dr. Roberto Casas", email: "roberto@gmail.com", phone: "81 1234 5678", status: "Activo", type: "Terapeuta", specialties: ["Clínica"], location: "Online" },
        { id: 3, name: "Mtra. Ana Torres", email: "ana.t@hotmail.com", phone: "81 8765 4321", status: "Activo", type: "Terapeuta", specialties: ["Infantil", "Aprendizaje"], location: "Barrio Antiguo" },
        { id: 4, name: "Lic. Sofia Garza", email: "sofia.g@yahoo.com", phone: "81 2345 6789", status: "Activo", type: "Terapeuta", specialties: ["Individual"], location: "Chapultepec" },
        { id: 5, name: "Dr. Alejandro Ruiz", email: "alex.r@outlook.com", phone: "81 9876 5432", status: "Activo", type: "Terapeuta", specialties: ["Forense"], location: "Online" },
        { id: 6, name: "Lic. Elena Garza", email: "elena.g@apnl.com", phone: "81 2233 4455", status: "Activo", type: "Terapeuta", specialties: ["Ansiedad", "Depresión"], location: "Barrio Antiguo" },
        { id: 7, name: "Mtra. Laura Quiroga", email: "laura.q@apnl.com", phone: "81 3344 5566", status: "Activo", type: "Terapeuta", specialties: ["Adolescentes"], location: "Chapultepec" },
        { id: 8, name: "Dr. Miguel Angel", email: "miguel.a@apnl.com", phone: "81 4455 6677", status: "Activo", type: "Terapeuta", specialties: ["Neuropsicología"], location: "Barrio Antiguo" },
        { id: 9, name: "Lic. Ricardo Slim", email: "ricardo.s@apnl.com", phone: "81 5566 7788", status: "Activo", type: "Terapeuta", specialties: ["Pareja"], location: "Online" },
        { id: 10, name: "Mtra. Monica Diaz", email: "monica.d@apnl.com", phone: "81 6677 8899", status: "Activo", type: "Terapeuta", specialties: ["Tanatología"], location: "Chapultepec" },
        { id: 11, name: "Dr. Carlos Sanmiguel", email: "carlos.s@apnl.com", phone: "81 7788 9900", status: "Activo", type: "Terapeuta", specialties: ["Adicciones"], location: "Online" },
        { id: 12, name: "Lic. Beatriz Jasso", email: "beatriz.j@apnl.com", phone: "81 8899 0011", status: "Activo", type: "Terapeuta", specialties: ["Terapia Familiar"], location: "Barrio Antiguo" },
        { id: 13, name: "Mtra. Sandra Luna", email: "sandra.l@apnl.com", phone: "81 9900 1122", status: "Activo", type: "Terapeuta", specialties: ["Psicopedagogía"], location: "Chapultepec" },
        { id: 14, name: "Dr. Fernando Ortiz", email: "fernando.o@apnl.com", phone: "81 0011 2233", status: "Activo", type: "Terapeuta", specialties: ["EMDR"], location: "Online" },
    ];

    const getStatusColor = (status: string) => {
        switch (status) {
            case "Activo": return "bg-emerald-100 text-emerald-700 hover:bg-emerald-200 border-emerald-200";
            case "Pendiente Pago": return "bg-orange-100 text-orange-700 hover:bg-orange-200 border-orange-200";
            case "Inactivo Temporarily": return "bg-slate-100 text-slate-700 hover:bg-slate-200 border-slate-200";
            case "Suspendido": return "bg-red-100 text-red-700 hover:bg-red-200 border-red-200";
            default: return "bg-slate-100 text-slate-700";
        }
    };

    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-extrabold text-secondary tracking-tight">Gestión de Terapeutas</h1>
                    <p className="text-muted-foreground mt-1">Directorio de los 14 especialistas activos en la red APNL.</p>
                </div>
                <div className="flex gap-3">
                    <Button variant="outline" className="rounded-xl border-slate-200">
                        <Filter className="mr-2 h-4 w-4" /> Filtros Avanzados
                    </Button>
                    <Button className="rounded-xl bg-secondary text-white font-bold shadow-md hover:bg-secondary/90">
                        <Mail className="mr-2 h-4 w-4" /> Enviar Comunicado
                    </Button>
                </div>
            </div>

            <Card className="rounded-3xl border-slate-100 shadow-sm overflow-hidden">
                <CardHeader className="bg-white border-b border-slate-100 px-6 py-4">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="flex gap-2">
                            <Badge variant="secondary" className="bg-slate-100 text-slate-600 hover:bg-slate-200 cursor-pointer">Todos (14)</Badge>
                            <Badge variant="outline" className="cursor-pointer hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-200">Activos (14)</Badge>
                        </div>
                        <div className="relative w-full sm:w-72">
                            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input placeholder="Buscar terapeuta..." className="pl-9 h-10 rounded-xl bg-slate-50 border-slate-200" />
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-0">
                    <Table>
                        <TableHeader className="bg-slate-50/50">
                            <TableRow>
                                <TableHead className="w-[300px] pl-6">Terapeuta</TableHead>
                                <TableHead>Contacto</TableHead>
                                <TableHead>Ubicación</TableHead>
                                <TableHead>Especialidades</TableHead>
                                <TableHead>Estado</TableHead>
                                <TableHead className="text-right pr-6"></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {members.map((member) => (
                                <TableRow key={member.id} className="hover:bg-slate-50/50 transition-colors">
                                    <TableCell className="font-medium pl-6">
                                        <div className="flex items-center gap-3">
                                            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                                                {member.name.charAt(0)}
                                            </div>
                                            <div>
                                                <div className="font-bold text-secondary">{member.name}</div>
                                                <div className="text-xs text-muted-foreground">{member.type}</div>
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="space-y-1">
                                            <div className="flex items-center gap-2 text-xs text-slate-600">
                                                <Mail className="h-3 w-3" /> {member.email}
                                            </div>
                                            <div className="flex items-center gap-2 text-xs text-slate-600">
                                                <Phone className="h-3 w-3" /> {member.phone}
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                                            <MapPin className="h-4 w-4 text-slate-400" />
                                            {member.location}
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex flex-wrap gap-1">
                                            {member.specialties.map((s, i) => (
                                                <span key={i} className="px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-600 text-[10px] font-bold shadow-sm">
                                                    {s}
                                                </span>
                                            ))}
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <Badge variant="outline" className={`font-bold border rounded-full px-3 py-1 ${getStatusColor(member.status)}`}>
                                            {member.status}
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
                                            <DropdownMenuContent align="end" className="w-[180px] rounded-xl">
                                                <DropdownMenuItem className="cursor-pointer">
                                                    <Edit className="mr-2 h-4 w-4" /> Editar Perfil
                                                </DropdownMenuItem>
                                                <DropdownMenuItem className="cursor-pointer">
                                                    <EyeOff className="mr-2 h-4 w-4" /> Ocultar del Web
                                                </DropdownMenuItem>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuItem className="cursor-pointer text-red-600 font-bold">
                                                    <Ban className="mr-2 h-4 w-4" /> Suspender
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
