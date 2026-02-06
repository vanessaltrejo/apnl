"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Eye, CheckCircle2, XCircle, FileText, Calendar, MoreHorizontal, MessageCircle, Clock, Smartphone, User, Video, MapPin, DollarSign, Users, UserPlus, Plus, ArrowRight, TrendingUp } from "lucide-react";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function CitasPage() {
    const [activeTab, setActiveTab] = useState("todas");
    const [searchQuery, setSearchQuery] = useState("");

    // Mock Data reflecting the requested fields
    const appointments = [
        {
            id: 1,
            patient: "Ana María Lopez",
            age: 28,
            whatsapp: "81 1234 5678",
            therapist: "Abigail Guadalupe Rodriguez",
            date: "Hoy, 25 Ene",
            time: "4:00 PM",
            type: "Online",
            status: "Nueva",
            branch: "N/A"
        },
        {
            id: 2,
            patient: "Carlos Mendez",
            age: 35,
            whatsapp: "81 8765 4321",
            therapist: "Fernanda Miroslava Muñoz",
            date: "Hoy, 25 Ene",
            time: "5:30 PM",
            type: "Presencial",
            status: "Nueva",
            branch: "Chapultepec"
        },
        {
            id: 3,
            patient: "Lucia Garza",
            age: 22,
            whatsapp: "81 9988 7766",
            therapist: "Lilia Sarahi Olivo",
            date: "Hoy, 25 Ene",
            time: "6:00 PM",
            type: "Online",
            status: "Nueva",
            branch: "N/A"
        },
        {
            id: 4,
            patient: "Roberto Diaz",
            age: 42,
            whatsapp: "81 1122 3344",
            therapist: "Violeta Elizabeth Reyna",
            date: "Mañana, 26 Ene",
            time: "10:00 AM",
            type: "Presencial",
            status: "En Contacto",
            branch: "Barrio Antiguo"
        },
        {
            id: 5,
            patient: "Fernanda Ruiz",
            age: 29,
            whatsapp: "81 5544 3322",
            therapist: "Mario Alejandro Carvajal",
            date: "24 Ene",
            time: "11:00 AM",
            type: "Online",
            status: "Cancelada",
            branch: "N/A"
        },
        {
            id: 6,
            patient: "Miguel Angel",
            age: 33,
            whatsapp: "81 6677 8899",
            therapist: "Anibal Alejandro Cerda",
            date: "23 Ene",
            time: "4:00 PM",
            type: "Presencial",
            status: "Confirmada",
            branch: "Chapultepec"
        },
        {
            id: 7,
            patient: "Laura Torres",
            age: 25,
            whatsapp: "81 2233 4455",
            therapist: "Beatriz Chavarri Barajas",
            date: "26 Ene",
            time: "9:00 AM",
            type: "Presencial",
            status: "Nueva",
            branch: "Barrio Antiguo"
        },
    ];

    const getStatusColor = (status: string) => {
        switch (status) {
            case "Nueva": return "bg-yellow-100 text-yellow-700 hover:bg-yellow-200 border-yellow-200 animate-pulse";
            case "En Contacto": return "bg-blue-100 text-blue-700 hover:bg-blue-200 border-blue-200";
            case "Confirmada": return "bg-emerald-100 text-emerald-700 hover:bg-emerald-200 border-emerald-200";
            case "Cancelada": return "bg-red-50 text-red-600 hover:bg-red-100 border-red-200";
            default: return "bg-slate-100 text-slate-700";
        }
    };

    const filteredAppointments = appointments.filter(appt => {
        const matchesTab = activeTab === "todas" || appt.status.toLowerCase().replace(" ", "-") === activeTab;
        const matchesSearch = appt.patient.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesTab && matchesSearch;
    });

    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-extrabold text-secondary tracking-tight">Gestión de Citas</h1>
                    <p className="text-muted-foreground mt-1">Administra las solicitudes de citas y el seguimiento con los terapeutas.</p>
                </div>
                <div className="flex gap-3">
                    <Button className="rounded-xl bg-primary hover:bg-primary/90 text-white font-bold shadow-md shadow-primary/20">
                        <Plus className="mr-2 h-4 w-4" /> Nueva Cita
                    </Button>
                </div>
            </div>

            {/* Status Summary Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                    { label: "Nuevas", count: 4, color: "text-amber-600", bg: "bg-amber-50" },
                    { label: "En Contacto", count: 8, color: "text-blue-600", bg: "bg-blue-50" },
                    { label: "Confirmadas", count: 12, color: "text-emerald-600", bg: "bg-emerald-50" },
                    { label: "Canceladas", count: 2, color: "text-red-500", bg: "bg-red-50" },
                ].map((stat, i) => (
                    <Card key={i} className="rounded-2xl border-slate-100 shadow-sm transition-all hover:shadow-md">
                        <CardContent className="p-5 flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-muted-foreground mb-1">{stat.label}</p>
                                <p className="text-2xl font-black text-secondary">{stat.count}</p>
                            </div>
                            <div className={`h-10 w-10 rounded-xl ${stat.bg} ${stat.color} flex items-center justify-center font-bold`}>
                                {stat.count}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <Tabs defaultValue="todas" className="w-full" onValueChange={setActiveTab}>
                <div className="flex items-center justify-between mb-4">
                    <TabsList className="bg-slate-100 p-1 rounded-xl">
                        <TabsTrigger value="todas" className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm">Todas</TabsTrigger>
                        <TabsTrigger value="nueva" className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm flex gap-2">
                            Nuevas <span className="bg-yellow-100 text-yellow-700 text-[10px] px-1.5 py-0.5 rounded-full font-bold">4</span>
                        </TabsTrigger>
                        <TabsTrigger value="en-contacto" className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm">En Contacto</TabsTrigger>
                        <TabsTrigger value="confirmada" className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm">Confirmadas</TabsTrigger>
                        <TabsTrigger value="cancelada" className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm">Canceladas</TabsTrigger>
                    </TabsList>

                    <div className="relative w-64 hidden md:block">
                        <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                            placeholder="Buscar paciente..."
                            className="pl-9 h-10 rounded-xl bg-slate-50 border-slate-200"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>

                <Card className="rounded-3xl border-slate-100 shadow-sm overflow-hidden min-h-[500px]">
                    <CardContent className="p-0">
                        <Table>
                            <TableHeader className="bg-slate-50/50">
                                <TableRow>
                                    <TableHead className="w-[240px] pl-6">Paciente</TableHead>
                                    <TableHead>Terapeuta</TableHead>
                                    <TableHead>Fecha Solicitada</TableHead>
                                    <TableHead>Modalidad</TableHead>
                                    <TableHead>Sucursal</TableHead>
                                    <TableHead>Estado</TableHead>
                                    <TableHead className="text-right pr-6"></TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {filteredAppointments.length > 0 ? (
                                    filteredAppointments.map((appt) => (
                                        <TableRow key={appt.id} className="hover:bg-slate-50/50 transition-colors group">
                                            <TableCell className="pl-6">
                                                <div className="flex flex-col">
                                                    <span className="font-bold text-secondary text-base">{appt.patient}</span>
                                                    <div className="flex items-center gap-2 text-xs text-muted-foreground font-medium">
                                                        <span>{appt.age} años</span>
                                                        <span className="text-slate-300">•</span>
                                                        <span className="flex items-center gap-1">
                                                            <Smartphone className="h-3 w-3" /> {appt.whatsapp}
                                                        </span>
                                                    </div>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex items-center gap-2">
                                                    <div className="h-6 w-6 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center text-[10px] font-bold shrink-0">
                                                        {appt.therapist.charAt(0)}
                                                    </div>
                                                    <span className="text-sm font-medium text-slate-700">{appt.therapist}</span>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex flex-col">
                                                    <span className="text-sm font-bold text-slate-700 flex items-center gap-1">
                                                        <Calendar className="h-3 w-3 text-slate-400" /> {appt.date}
                                                    </span>
                                                    <span className="text-xs text-muted-foreground ml-4">{appt.time}</span>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                {appt.type === "Online" ? (
                                                    <Badge variant="secondary" className="bg-purple-50 text-purple-700 border-purple-100 font-bold text-[10px]">
                                                        <Video className="mr-1 h-2.5 w-2.5" /> Online
                                                    </Badge>
                                                ) : (
                                                    <Badge variant="outline" className="bg-slate-50 text-slate-700 border-slate-200 font-bold text-[10px]">
                                                        <MapPin className="mr-1 h-2.5 w-2.5" /> Presencial
                                                    </Badge>
                                                )}
                                            </TableCell>
                                            <TableCell>
                                                <span className="text-sm font-medium text-slate-600">{appt.branch}</span>
                                            </TableCell>
                                            <TableCell>
                                                <Badge variant="outline" className={`font-bold border rounded-full px-3 py-1 items-center flex gap-1 w-fit ${getStatusColor(appt.status)}`}>
                                                    {appt.status === "Nueva" && <span className="h-2 w-2 rounded-full bg-yellow-500 animate-pulse"></span>}
                                                    {appt.status}
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
                                                    <DropdownMenuContent align="end" className="w-[180px] rounded-xl shadow-lg border-slate-100">
                                                        <DropdownMenuItem className="cursor-pointer font-medium">
                                                            <Eye className="mr-2 h-4 w-4 text-slate-500" /> Ver Detalles
                                                        </DropdownMenuItem>
                                                        <DropdownMenuSeparator />
                                                        <DropdownMenuItem className="cursor-pointer font-medium text-blue-600">
                                                            <MessageCircle className="mr-2 h-4 w-4" /> Contactado
                                                        </DropdownMenuItem>
                                                        <DropdownMenuItem className="cursor-pointer font-medium text-emerald-600">
                                                            <CheckCircle2 className="mr-2 h-4 w-4" /> Confirmar Cita
                                                        </DropdownMenuItem>
                                                        <DropdownMenuItem className="cursor-pointer font-medium text-red-600">
                                                            <XCircle className="mr-2 h-4 w-4" /> Cancelar
                                                        </DropdownMenuItem>
                                                    </DropdownMenuContent>
                                                </DropdownMenu>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                ) : (
                                    <TableRow>
                                        <TableCell colSpan={7} className="h-32 text-center text-muted-foreground font-medium">
                                            No hay citas en esta categoría.
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </Tabs>
        </div>
    );
}
