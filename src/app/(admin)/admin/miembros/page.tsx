import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, MoreHorizontal, Mail, Phone, MapPin, Edit, EyeOff, Ban, Users, UserPlus } from "lucide-react";
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
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function MiembrosGeneralPage() {
    const members = [
        { id: 1, name: "Juan Pérez", email: "juan.p@gmail.com", dateJoined: "12 Ene 2024", status: "Activo", type: "Afiliado", location: "Monterrey" },
        { id: 2, name: "Maria Garcia", email: "m.garcia@outlook.com", dateJoined: "05 Feb 2024", status: "Activo", type: "Estudiante", location: "San Pedro" },
        { id: 3, name: "Lucas Rodriguez", email: "lucas.r@yahoo.com", dateJoined: "20 Mar 2024", status: "Pendiente", type: "Afiliado", location: "Guadalupe" },
        { id: 4, name: "Elena Jimenez", email: "elena.j@apnl.com", dateJoined: "01 Abr 2024", status: "Inactivo", type: "Afiliado", location: "Online" },
        { id: 5, name: "Roberto Torres", email: "r.torres@gmail.com", dateJoined: "15 May 2024", status: "Activo", type: "Afiliado", location: "Monterrey" },
    ];

    const getStatusColor = (status: string) => {
        switch (status) {
            case "Activo": return "bg-emerald-100 text-emerald-700 border-emerald-200";
            case "Pendiente": return "bg-amber-100 text-amber-700 border-amber-200";
            case "Inactivo": return "bg-slate-100 text-slate-700 border-slate-200";
            default: return "bg-slate-100 text-slate-700";
        }
    };

    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-extrabold text-secondary tracking-tight">Directorio de Miembros</h1>
                    <p className="text-muted-foreground mt-1">Gestión general de afiliados, estudiantes y comunidad APNL.</p>
                </div>
                <div className="flex gap-3">
                    <Button variant="outline" className="rounded-xl border-slate-200">
                        <Filter className="mr-2 h-4 w-4" /> Filtrar Lista
                    </Button>
                    <Button className="rounded-xl bg-primary text-white font-bold shadow-md hover:bg-primary/90">
                        <UserPlus className="mr-2 h-4 w-4" /> Nuevo Miembro
                    </Button>
                </div>
            </div>

            <Card className="rounded-3xl border-slate-100 shadow-sm overflow-hidden">
                <CardHeader className="bg-white border-b border-slate-100 px-6 py-4">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="flex gap-2">
                            <Badge variant="secondary" className="bg-slate-100 text-slate-600">Todos (450)</Badge>
                            <Badge variant="outline">Nuevos este mes (12)</Badge>
                        </div>
                        <div className="relative w-full sm:w-72">
                            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input placeholder="Buscar por nombre o correo..." className="pl-9 h-10 rounded-xl bg-slate-50 border-slate-200" />
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-0">
                    <Table>
                        <TableHeader className="bg-slate-50/50">
                            <TableRow>
                                <TableHead className="w-[300px] pl-6">Nombre</TableHead>
                                <TableHead>Fecha de Ingreso</TableHead>
                                <TableHead>Tipo</TableHead>
                                <TableHead>Ubicación</TableHead>
                                <TableHead>Estado</TableHead>
                                <TableHead className="text-right pr-6"></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {members.map((member) => (
                                <TableRow key={member.id} className="hover:bg-slate-50/50 transition-colors">
                                    <TableCell className="font-medium pl-6">
                                        <div className="flex flex-col">
                                            <span className="font-bold text-secondary">{member.name}</span>
                                            <span className="text-xs text-muted-foreground">{member.email}</span>
                                        </div>
                                    </TableCell>
                                    <TableCell className="text-sm text-slate-600">{member.dateJoined}</TableCell>
                                    <TableCell>
                                        <Badge variant="secondary" className="bg-blue-50 text-blue-700 border-blue-100 text-[10px] font-bold">
                                            {member.type}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-2 text-sm text-slate-600">
                                            <MapPin className="h-3.5 w-3.5 text-slate-400" />
                                            {member.location}
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <Badge variant="outline" className={`font-bold border rounded-full px-3 py-1 text-[10px] ${getStatusColor(member.status)}`}>
                                            {member.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="text-right pr-6">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="ghost" className="h-8 w-8 p-0 text-slate-400 hover:text-secondary">
                                                    <MoreHorizontal className="h-4 w-4" />
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end" className="w-[180px] rounded-xl">
                                                <DropdownMenuItem className="cursor-pointer font-medium">Editar</DropdownMenuItem>
                                                <DropdownMenuItem className="cursor-pointer font-medium">Ver Historial</DropdownMenuItem>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuItem className="cursor-pointer text-red-600 font-bold">Dar de Baja</DropdownMenuItem>
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
