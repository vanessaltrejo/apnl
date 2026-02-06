import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Users, UserPlus, Calendar, ArrowRight, TrendingUp, Video, MapPin, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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
                    <Button className="rounded-xl bg-primary hover:bg-primary/90 text-white font-bold shadow-md shadow-primary/20">
                        <FileText className="mr-2 h-4 w-4" /> Reporte Semanal
                    </Button>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { title: "Ingresos Totales", value: "$45,231", sub: "+20% vs mes anterior", icon: DollarSign, color: "text-emerald-600", bg: "bg-emerald-50" },
                    { title: "Citas este Mes", value: "192", sub: "+12% vs mes pasado", icon: TrendingUp, color: "text-purple-600", bg: "bg-purple-50" },
                    { title: "Terapeutas", value: "14", sub: "Especialistas activos", icon: Users, color: "text-blue-600", bg: "bg-blue-50" },
                    { title: "Nuevos Miembros", value: "32", sub: "Afiliados este mes", icon: UserPlus, color: "text-orange-600", bg: "bg-orange-50" },
                    { title: "Citas Chapultepec", value: "24", sub: "Semana actual", icon: MapPin, color: "text-slate-600", bg: "bg-slate-50" },
                    { title: "Barrio Antiguo", value: "18", sub: "Semana actual", icon: MapPin, color: "text-slate-600", bg: "bg-slate-50" },
                    { title: "Solicitudes", value: "7", sub: "Pendientes revisión", icon: UserPlus, color: "text-blue-600", bg: "bg-blue-50" },
                    { title: "Sesiones Online", value: "65%", sub: "Preferencia", icon: Video, color: "text-cyan-600", bg: "bg-cyan-50" },
                ].map((stat, i) => (
                    <Card key={i} className="rounded-2xl border-none bg-white shadow-sm hover:shadow-md transition-all">
                        <CardContent className="p-5 flex items-center justify-between">
                            <div className="space-y-0.5">
                                <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                                <div className="text-2xl font-black text-secondary leading-tight">{stat.value}</div>
                                <p className="text-[10px] text-muted-foreground font-medium">
                                    {stat.sub}
                                </p>
                            </div>
                            <div className={`h-10 w-10 rounded-xl ${stat.bg} ${stat.color} flex items-center justify-center shrink-0`}>
                                <stat.icon className="h-5 w-5" />
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Recent Activity Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="rounded-[2.5rem] border-slate-100 shadow-sm bg-white overflow-hidden">
                    <CardHeader className="bg-slate-50/50 border-b border-slate-100 px-8 py-6">
                        <div className="flex items-center justify-between">
                            <CardTitle className="text-xl font-bold text-secondary">Solicitudes Recientes</CardTitle>
                            <Badge variant="outline" className="bg-white font-bold">14 Pendientes</Badge>
                        </div>
                    </CardHeader>
                    <CardContent className="px-8 py-6">
                        <div className="space-y-6">
                            {[
                                { name: "Abigail Guadalupe Rodriguez de Leon", email: "abigail@apnl.org", status: "Pendiente", time: "Hace 2 hrs" },
                                { name: "Anibal Alejandro Cerda Garcia", email: "anibal.cerda@apnl.org", status: "Revisión", time: "Hace 5 hrs" },
                                { name: "Violeta Elizabeth Reyna Salas", email: "violeta.reyna@apnl.org", status: "Pendiente", time: "Hace 1 día" },
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
                                        <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors border-transparent bg-yellow-100 text-yellow-700">
                                            {item.status}
                                        </span>
                                        <p className="text-[10px] text-muted-foreground mt-1">{item.time}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 pt-4 border-t border-slate-100">
                            <Button variant="ghost" className="w-full text-primary font-bold hover:bg-primary/5 rounded-xl" size="sm">
                                Ver todas las solicitudes <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                <Card className="rounded-[3.5rem] border-slate-100 shadow-sm bg-white overflow-hidden">
                    <CardHeader className="bg-slate-50/50 border-b border-slate-100 px-8 py-6">
                        <div className="flex items-center justify-between">
                            <CardTitle className="text-xl font-bold text-secondary">Próximas Citas</CardTitle>
                            <Calendar className="h-5 w-5 text-slate-400" />
                        </div>
                    </CardHeader>
                    <CardContent className="px-8 py-6">
                        <div className="space-y-6">
                            {[
                                { patient: "Ana María Lopez", time: "4:00 PM", therapist: "Abigail Guadalupe Rodriguez", type: "Online" },
                                { patient: "Carlos Mendez", time: "5:30 PM", therapist: "Anibal Alejandro Cerda", type: "Presencial" },
                                { patient: "Lucia Garza", time: "6:00 PM", therapist: "Lilia Sarahi Olivo", type: "Online" },
                            ].map((appt, i) => (
                                <div key={i} className="flex items-center justify-between group">
                                    <div className="flex items-center gap-4">
                                        <div className={`h-10 w-10 rounded-xl flex items-center justify-center font-bold ${appt.type === 'Online' ? 'bg-purple-50 text-purple-600' : 'bg-blue-50 text-blue-600'}`}>
                                            {appt.type === 'Online' ? <Video className="h-5 w-5" /> : <MapPin className="h-5 w-5" />}
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-secondary">{appt.patient}</p>
                                            <p className="text-[11px] text-muted-foreground">con {appt.therapist}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm font-black text-primary">{appt.time}</p>
                                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">Hoy</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 pt-4 border-t border-slate-100">
                            <Button variant="ghost" className="w-full text-primary font-bold hover:bg-primary/5 rounded-xl" size="sm">
                                Ver calendario completo <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
