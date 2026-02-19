"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import {
    LayoutDashboard,
    Users,
    UserPlus,
    Calendar,
    CalendarDays,
    Heart,
    CreditCard,
    GraduationCap,
    PenTool,
    Settings,
    LogOut,
    ChevronRight,
    Stethoscope,
    ShieldCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function AdminSidebar() {
    const pathname = usePathname();
    const router = useRouter();

    const menuItems = [
        { title: "Dashboard", href: "/admin", icon: LayoutDashboard },
        { title: "Gestión de Citas", href: "/admin/citas", icon: Calendar, badge: 3 },
        { title: "Calendario", href: "/admin/calendario", icon: CalendarDays },
        { title: "Terapeutas", href: "/admin/terapeutas", icon: Stethoscope },
        { title: "Miembros", href: "/admin/miembros", icon: Users },
        { title: "Pacientes", href: "/admin/pacientes", icon: Heart },
        { title: "Pagos y Finanzas", href: "/admin/finanzas", icon: CreditCard },
        { title: "Formación", href: "/admin/formacion", icon: GraduationCap },
        { title: "Contenido", href: "/admin/contenido", icon: PenTool },
    ];

    return (
        <aside className="fixed left-0 top-0 z-40 h-screen w-64 bg-slate-50 border-r border-slate-200 flex flex-col">
            {/* Header */}
            <div className="h-16 flex items-center px-6 border-b border-slate-200/60 bg-white/50 backdrop-blur-sm">
                <Link href="/admin" className="flex items-center gap-3">
                    <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center text-white shadow-sm shadow-primary/20">
                        <ShieldCheck className="h-5 w-5" />
                    </div>
                    <span className="font-bold text-lg text-secondary tracking-tight">
                        APNL <span className="text-primary">Admin</span>
                    </span>
                </Link>
            </div>

            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1 custom-scrollbar">
                <div className="mb-2 px-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Gestión General
                </div>
                {menuItems.map((item) => {
                    const isActive = pathname === item.href;
                    const Icon = item.icon;

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "group flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200",
                                isActive
                                    ? "bg-white text-primary shadow-sm border border-slate-100"
                                    : "text-slate-500 hover:text-secondary hover:bg-slate-100"
                            )}
                        >
                            <div className="flex items-center gap-3">
                                <Icon className={cn("h-5 w-5", isActive ? "text-primary" : "text-slate-400 group-hover:text-secondary")} />
                                {item.title}
                            </div>
                            {item.badge && (
                                <span className="bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full shadow-sm">
                                    {item.badge}
                                </span>
                            )}
                        </Link>
                    );
                })}
            </nav>

            {/* Role Switcher & User Profile */}
            <div className="p-4 border-t border-slate-200 bg-white/50 space-y-4">
                {/* Role Switcher - Interactive Look */}
                <div className="flex bg-slate-100 p-1 rounded-xl cursor-not-allowed opacity-80 group">
                    <button className="flex-1 px-2 py-1.5 text-[10px] font-black uppercase tracking-tighter rounded-lg bg-white text-primary shadow-sm transition-all">
                        Admin
                    </button>
                    <button className="flex-1 px-2 py-1.5 text-[10px] font-bold uppercase tracking-tighter text-slate-500 hover:text-secondary transition-all">
                        Terapeuta
                    </button>
                </div>

                <div
                    onClick={() => router.push("/admin/configuracion")}
                    className="w-full flex items-center gap-3 p-2 rounded-xl hover:bg-white transition-all cursor-pointer border border-transparent hover:border-slate-100 shadow-none hover:shadow-sm group text-left"
                >
                    <div className="h-9 w-9 rounded-full bg-secondary flex items-center justify-center text-white font-bold text-xs">
                        AD
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold text-secondary truncate">Administrador</p>
                        <p className="text-[10px] text-slate-500 truncate">Editar mi perfil</p>
                    </div>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="h-7 w-7 text-slate-400 hover:text-red-500 z-10"
                        onClick={(e) => {
                            e.stopPropagation();
                            router.push("/iniciar-sesion");
                        }}
                    >
                        <LogOut className="h-3.5 w-3.5" />
                    </Button>
                </div>
            </div>
        </aside >
    );
}
