import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
    Search,
    Plus,
    GraduationCap,
    Users,
    Calendar,
    Clock,
    DollarSign,
    MoreHorizontal,
    Award,
    BookOpen
} from "lucide-react";
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

export default function FormacionPage() {
    const events = [
        {
            id: 1,
            title: "Diplomado en Terapia de Pareja",
            instructor: "Anibal Alejandro Cerda Garcia",
            date: "15 Feb 2026",
            type: "Diplomado",
            status: "Inscripciones Abiertas",
            attendees: 18,
            capacity: 25,
            price: "$4,500"
        },
        {
            id: 2,
            title: "Taller: Primeros Auxilios Psicológicos",
            instructor: "Mario Alejandro Carvajal Rivera",
            date: "02 Mar 2026",
            type: "Taller",
            status: "Cupo Lleno",
            attendees: 40,
            capacity: 40,
            price: "$850"
        },
        {
            id: 4,
            title: "Actualización en DSM-V-TR",
            instructor: "Pedro Cantu Ramirez",
            date: "20 May 2026",
            type: "Curso Corto",
            status: "Inscripciones Abiertas",
            attendees: 12,
            capacity: 30,
            price: "$600"
        },
    ];

    const getStatusStyle = (status: string) => {
        switch (status) {
            case "Inscripciones Abiertas": return "bg-emerald-100 text-emerald-700 border-emerald-200";
            case "Cupo Lleno": return "bg-orange-100 text-orange-700 border-orange-200";
            case "Próximamente": return "bg-blue-100 text-blue-700 border-blue-200";
            case "Finalizado": return "bg-slate-100 text-slate-700 border-slate-200";
            default: return "bg-slate-100 text-slate-700";
        }
    };

    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-extrabold text-secondary tracking-tight">Formación Profesional</h1>
                    <p className="text-muted-foreground mt-1">Sigue el crecimiento profesional de tus afiliados y gestiona la oferta educativa.</p>
                </div>
                <Button className="rounded-xl bg-primary hover:bg-primary/90 text-white font-bold shadow-md shadow-primary/20">
                    <Plus className="mr-2 h-4 w-4" /> Crear Evento
                </Button>
            </div>

            {/* Formación stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="rounded-2xl border-slate-100 shadow-sm overflow-hidden group hover:shadow-md transition-all">
                    <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                            <CardTitle className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Cursos Activos</CardTitle>
                            <BookOpen className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-black text-secondary">8</div>
                        <p className="text-xs text-muted-foreground mt-1">4 cerrando inscripciones pronto</p>
                    </CardContent>
                </Card>
                <Card className="rounded-2xl border-slate-100 shadow-sm overflow-hidden group hover:shadow-md transition-all">
                    <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                            <CardTitle className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Total Inscritos</CardTitle>
                            <Users className="h-5 w-5 text-indigo-500 group-hover:scale-110 transition-transform" />
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-black text-secondary">190</div>
                        <p className="text-xs text-muted-foreground mt-1">75% son miembros afiliados</p>
                    </CardContent>
                </Card>
                <Card className="rounded-2xl border-slate-100 shadow-sm overflow-hidden group hover:shadow-md transition-all">
                    <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                            <CardTitle className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Ingresos por Educación</CardTitle>
                            <DollarSign className="h-5 w-5 text-emerald-500 group-hover:scale-110 transition-transform" />
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-black text-secondary">$124,500</div>
                        <p className="text-xs text-emerald-600 font-medium mt-1">+12% respecto al semestre pasado</p>
                    </CardContent>
                </Card>
            </div>

            {/* Courses Table */}
            <Card className="rounded-3xl border-slate-100 shadow-sm overflow-hidden">
                <CardHeader className="bg-white border-b border-slate-100 px-6 py-4">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <CardTitle className="text-lg font-bold text-secondary">Próximos Eventos y Cursos</CardTitle>
                        <div className="relative w-full sm:w-72">
                            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input placeholder="Buscar por título o instructor..." className="pl-9 h-10 rounded-xl bg-slate-50 border-slate-200" />
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-0">
                    <Table>
                        <TableHeader className="bg-slate-50/50">
                            <TableRow>
                                <TableHead className="w-[350px] pl-6 text-xs uppercase font-bold tracking-wider text-slate-500">Curso / Evento</TableHead>
                                <TableHead className="text-xs uppercase font-bold tracking-wider text-slate-500">Fecha</TableHead>
                                <TableHead className="text-xs uppercase font-bold tracking-wider text-slate-500">Instructor</TableHead>
                                <TableHead className="text-xs uppercase font-bold tracking-wider text-slate-500">Cupo</TableHead>
                                <TableHead className="text-xs uppercase font-bold tracking-wider text-slate-500">Estado</TableHead>
                                <TableHead className="text-right pr-6 text-xs uppercase font-bold tracking-wider text-slate-500">Inversión</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {events.map((event) => (
                                <TableRow key={event.id} className="hover:bg-slate-50/50 transition-colors cursor-pointer group">
                                    <TableCell className="pl-6 py-4">
                                        <div className="flex items-center gap-4">
                                            <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                                                <GraduationCap className="h-5 w-5" />
                                            </div>
                                            <div>
                                                <div className="font-bold text-secondary text-sm group-hover:text-primary transition-colors">{event.title}</div>
                                                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{event.type}</div>
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex flex-col">
                                            <span className="text-sm font-bold text-slate-600 flex items-center gap-1.5">
                                                <Calendar className="h-3.5 w-3.5 text-slate-400" /> {event.date}
                                            </span>
                                        </div>
                                    </TableCell>
                                    <TableCell className="text-sm font-medium text-slate-600">{event.instructor}</TableCell>
                                    <TableCell>
                                        <div className="space-y-1.5 w-24">
                                            <div className="flex justify-between text-[10px] font-bold text-slate-500">
                                                <span>{event.attendees} / {event.capacity}</span>
                                                <span>{Math.round((event.attendees / event.capacity) * 100)}%</span>
                                            </div>
                                            <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                                                <div
                                                    className={`h-full rounded-full ${(event.attendees / event.capacity) > 0.9 ? 'bg-orange-500' : 'bg-primary'
                                                        }`}
                                                    style={{ width: `${(event.attendees / event.capacity) * 100}%` }}
                                                />
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <Badge variant="outline" className={`font-bold border rounded-full px-2.5 py-0.5 text-[10px] whitespace-nowrap ${getStatusStyle(event.status)}`}>
                                            {event.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="text-right pr-6">
                                        <div className="font-black text-secondary">{event.price}</div>
                                        <div className="text-[10px] text-slate-400">MXN</div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

            {/* Certification Management Placeholder */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="rounded-3xl border-slate-100 shadow-sm">
                    <CardHeader>
                        <CardTitle className="text-xl font-bold text-secondary flex items-center gap-2">
                            <Award className="h-5 w-5 text-indigo-500" /> Constancias Pendientes
                        </CardTitle>
                        <CardDescription>Eventos finalizados que requieren emisión de certificados.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {[
                            { name: "Mindfulness para Terapeutas", date: "Jan 10, 2026", count: 15 },
                            { name: "Ética en la Práctica Clínica", date: "Dec 15, 2025", count: 0 }
                        ].map((item, i) => (
                            <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-100">
                                <div>
                                    <p className="font-bold text-sm text-secondary">{item.name}</p>
                                    <p className="text-xs text-muted-foreground">Finalizado el {item.date}</p>
                                </div>
                                <Button
                                    size="sm"
                                    variant={item.count > 0 ? "default" : "outline"}
                                    disabled={item.count === 0}
                                    className="rounded-lg font-bold"
                                >
                                    {item.count > 0 ? `Emitir (${item.count})` : "Completado"}
                                </Button>
                            </div>
                        ))}
                    </CardContent>
                </Card>

                <Card className="rounded-3xl border-slate-100 shadow-sm bg-gradient-to-br from-indigo-50 to-transparent">
                    <CardHeader>
                        <CardTitle className="text-xl font-bold text-secondary">Aviso de Academia</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100/50">
                            <p className="text-sm text-slate-600 leading-relaxed font-medium">
                                Recuerda que los miembros con la anualidad pagada tienen un <span className="text-primary font-bold">20% de descuento automático</span> en todos los diplomados.
                            </p>
                        </div>
                        <Button variant="ghost" className="w-full justify-start text-secondary font-bold hover:bg-white/50 border border-transparent hover:border-slate-200">
                            Ver reportes de asistencia anual <Clock className="ml-2 h-4 w-4 text-slate-400" />
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
