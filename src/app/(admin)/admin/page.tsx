import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Users, UserPlus, Calendar, ArrowRight, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AdminDashboardPage() {
    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-extrabold text-secondary tracking-tight">Dashboard General</h1>
                    <p className="text-muted-foreground mt-1">Bienvenido de nuevo, aquí está el resumen de hoy.</p>
                </div>
                <div className="flex gap-3">
                    <Button variant="outline" className="rounded-xl border-slate-200">
                        Exportar Reporte
                    </Button>
                    <Button className="rounded-xl bg-primary hover:bg-primary/90 text-white font-bold shadow-md shadow-primary/20">
                        <UserPlus className="mr-2 h-4 w-4" /> Registrar Miembro
                    </Button>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { title: "Ingresos Totales", value: "$45,231.89", sub: "+20.1% vs mes anterior", icon: DollarSign, color: "text-emerald-600", bg: "bg-emerald-50" },
                    { title: "Miembros Activos", value: "2,350", sub: "+180 nuevos este mes", icon: Users, color: "text-primary", bg: "bg-blue-50" },
                    { title: "Solicitudes", value: "14", sub: "Requieren validación", icon: UserPlus, color: "text-orange-600", bg: "bg-orange-50" },
                    { title: "Citas Agendadas", value: "573", sub: "+201 desde la semana pasada", icon: Calendar, color: "text-purple-600", bg: "bg-purple-50" },
                ].map((stat, i) => (
                    <Card key={i} className="rounded-2xl border-slate-100 shadow-sm hover:shadow-md transition-all">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-bold text-muted-foreground uppercase tracking-wider">
                                {stat.title}
                            </CardTitle>
                            <div className={`h-8 w-8 rounded-lg ${stat.bg} ${stat.color} flex items-center justify-center`}>
                                <stat.icon className="h-4 w-4" />
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-black text-secondary">{stat.value}</div>
                            <p className="text-xs text-muted-foreground mt-1 font-medium flex items-center gap-1">
                                {stat.sub.includes("+") && <TrendingUp className="h-3 w-3 text-emerald-500" />}
                                {stat.sub}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Recent Activity Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="rounded-3xl border-slate-100 shadow-sm">
                    <CardHeader>
                        <CardTitle className="text-xl font-bold text-secondary">Solicitudes Recientes</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-6">
                            {[
                                { name: "Dr. Roberto Casas", email: "roberto@gmail.com", status: "Pendiente", time: "Hace 2 hrs" },
                                { name: "Lic. Ana Torres", email: "ana.torres@hotmail.com", status: "Revisión", time: "Hace 5 hrs" },
                                { name: "Mtra. Sofia Quintanilla", email: "sofiaq@outlook.com", status: "Pendiente", time: "Hace 1 día" },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center justify-between group">
                                    <div className="flex items-center gap-4">
                                        <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                                            {item.name.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-secondary">{item.name}</p>
                                            <p className="text-xs text-muted-foreground">{item.email}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-yellow-100 text-yellow-700 hover:bg-yellow-200">
                                            {item.status}
                                        </span>
                                        <p className="text-[10px] text-muted-foreground mt-1">{item.time}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-6 pt-4 border-t border-slate-100">
                            <Button variant="ghost" className="w-full text-primary font-bold hover:bg-primary/5" size="sm">
                                Ver todas las solicitudes <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                <Card className="rounded-3xl border-slate-100 shadow-sm bg-gradient-to-br from-primary/5 to-transparent border-primary/10">
                    <CardHeader>
                        <CardTitle className="text-xl font-bold text-secondary">Estado del Sistema</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex items-center gap-4">
                            <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                            <div>
                                <p className="font-bold text-sm text-secondary">Base de Datos Operativa</p>
                                <p className="text-xs text-muted-foreground">Última copia de seguridad: 3:00 AM</p>
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex items-center gap-4">
                            <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                            <div>
                                <p className="font-bold text-sm text-secondary">Servidor de Correos</p>
                                <p className="text-xs text-muted-foreground">Enviando notificaciones correctamente</p>
                            </div>
                        </div>

                        <div className="p-4 rounded-xl bg-blue-50 border border-blue-100">
                            <p className="text-sm font-bold text-blue-900 mb-1">Nota del Desarrollador</p>
                            <p className="text-xs text-blue-700 leading-relaxed">
                                Se ha programado un mantenimiento preventivo para el próximo domingo a las 2:00 AM. No afectará el servicio público.
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
