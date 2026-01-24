import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Calendar as CalendarIcon, Clock, MapPin, Video, Search, Filter, MoreHorizontal, User, Smartphone, CheckCircle2 } from "lucide-react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export default function CitasPage() {
    const appointments = [
        { id: 1, patient: "Mariana López", therapist: "Lic. Clara M.", date: "Hoy, 24 Ene", time: "4:00 PM", type: "Presencial", location: "Sede Valle", status: "Confirmada", price: "$850" },
        { id: 2, patient: "Jorge Garza", therapist: "Dr. Roberto Casas", date: "Hoy, 24 Ene", time: "5:30 PM", type: "Online", location: "-", status: "Pendiente", price: "$850" },
        { id: 3, patient: "Familia Ruiz", therapist: "Lic. Sofia Garza", date: "Mañana, 25 Ene", time: "11:00 AM", type: "Presencial", location: "Sede Centro", status: "Confirmada", price: "$1,200" },
        { id: 4, patient: "Sofia Mendez", therapist: "Lic. Clara M.", date: "26 Ene", time: "10:00 AM", type: "Online", location: "-", status: "Cancelada", price: "$850" },
        { id: 5, patient: "Luis & Ana", therapist: "Dr. Alejandro R.", date: "27 Ene", time: "6:00 PM", type: "Presencial", location: "Sede Centro", status: "Confirmada", price: "$1,200" },
    ];

    const getStatusStyle = (status: string) => {
        switch (status) {
            case "Confirmada": return "bg-emerald-100 text-emerald-700 border-emerald-200";
            case "Pendiente": return "bg-yellow-100 text-yellow-700 border-yellow-200";
            case "Cancelada": return "bg-red-50 text-red-500 border-red-100 line-through decoration-red-500/50";
            default: return "bg-slate-100 text-slate-700";
        }
    };

    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-extrabold text-secondary tracking-tight">Gestión de Citas</h1>
                    <p className="text-muted-foreground mt-1">Vista global de la agenda de consultas de la asociación.</p>
                </div>
                <div className="flex gap-3">
                    <Select defaultValue="hoy">
                        <SelectTrigger className="w-[180px] rounded-xl border-slate-200 bg-white">
                            <CalendarIcon className="mr-2 h-4 w-4 text-slate-500" />
                            <SelectValue placeholder="Periodo" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="hoy">Hoy</SelectItem>
                            <SelectItem value="semana">Esta Semana</SelectItem>
                            <SelectItem value="mes">Este Mes</SelectItem>
                        </SelectContent>
                    </Select>
                    <Button className="rounded-xl bg-primary hover:bg-primary/90 text-white font-bold shadow-md shadow-primary/20">
                        <CalendarIcon className="mr-2 h-4 w-4" /> Nueva Cita Manual
                    </Button>
                </div>
            </div>

            <div className="flex gap-4 overflow-x-auto pb-2">
                <Card className="min-w-[200px] flex-1 rounded-2xl border-slate-100 bg-white shadow-sm p-4 flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                        <CalendarIcon className="h-6 w-6" />
                    </div>
                    <div>
                        <p className="text-2xl font-black text-secondary">45</p>
                        <p className="text-xs font-bold text-muted-foreground">Citas esta semana</p>
                    </div>
                </Card>
                <Card className="min-w-[200px] flex-1 rounded-2xl border-slate-100 bg-white shadow-sm p-4 flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                        <CheckCircle2 className="h-6 w-6" />
                    </div>
                    <div>
                        <p className="text-2xl font-black text-secondary">92%</p>
                        <p className="text-xs font-bold text-muted-foreground">Tasa de Asistencia</p>
                    </div>
                </Card>
                <Card className="min-w-[200px] flex-1 rounded-2xl border-slate-100 bg-white shadow-sm p-4 flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                        <Video className="h-6 w-6" />
                    </div>
                    <div>
                        <p className="text-2xl font-black text-secondary">30%</p>
                        <p className="text-xs font-bold text-muted-foreground">Modalidad Online</p>
                    </div>
                </Card>
            </div>

            <Card className="rounded-3xl border-slate-100 shadow-sm overflow-hidden">
                <CardHeader className="bg-white border-b border-slate-100 px-6 py-4">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="flex gap-2">
                            <Button variant="ghost" className="rounded-lg text-primary bg-primary/10 font-bold hover:bg-primary/20">Próximas</Button>
                            <Button variant="ghost" className="rounded-lg text-slate-500 hover:text-secondary hover:bg-slate-100">Pasadas</Button>
                        </div>
                        <div className="relative w-full sm:w-72">
                            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input placeholder="Buscar paciente o terapeuta..." className="pl-9 h-10 rounded-xl bg-slate-50 border-slate-200" />
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-0">
                    <Table>
                        <TableHeader className="bg-slate-50/50">
                            <TableRow>
                                <TableHead className="w-[250px] pl-6">Paciente</TableHead>
                                <TableHead>Especialista</TableHead>
                                <TableHead>Fecha y Hora</TableHead>
                                <TableHead>Modalidad</TableHead>
                                <TableHead>Estado</TableHead>
                                <TableHead className="text-right pr-6">Acciones</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {appointments.map((appt) => (
                                <TableRow key={appt.id} className="hover:bg-slate-50/50 transition-colors">
                                    <TableCell className="font-medium pl-6">
                                        <div className="flex items-center gap-3">
                                            <div className="h-9 w-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                                                <User className="h-4 w-4" />
                                            </div>
                                            <span className="font-bold text-secondary">{appt.patient}</span>
                                        </div>
                                    </TableCell>
                                    <TableCell className="text-slate-600 font-medium">{appt.therapist}</TableCell>
                                    <TableCell>
                                        <div className="flex flex-col">
                                            <span className="font-bold text-secondary text-sm flex items-center gap-1">
                                                <CalendarIcon className="h-3 w-3 text-slate-400" /> {appt.date}
                                            </span>
                                            <span className="text-xs text-muted-foreground ml-4">{appt.time}</span>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        {appt.type === "Online" ? (
                                            <Badge variant="secondary" className="bg-purple-50 text-purple-700 border-purple-100 hover:bg-purple-100">
                                                <Video className="mr-1 h-3 w-3" /> Online
                                            </Badge>
                                        ) : (
                                            <div className="flex flex-col gap-1">
                                                <Badge variant="outline" className="w-fit bg-slate-50 text-slate-700 border-slate-200">
                                                    <MapPin className="mr-1 h-3 w-3" /> Presencial
                                                </Badge>
                                                <span className="text-[10px] text-muted-foreground ml-1">{appt.location}</span>
                                            </div>
                                        )}
                                    </TableCell>
                                    <TableCell>
                                        <Badge variant="outline" className={`font-bold border rounded-full px-2.5 py-0.5 ${getStatusStyle(appt.status)}`}>
                                            {appt.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="text-right pr-6">
                                        <Button variant="ghost" className="h-8 w-8 p-0 text-slate-400 hover:text-secondary">
                                            <MoreHorizontal className="h-4 w-4" />
                                        </Button>
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
