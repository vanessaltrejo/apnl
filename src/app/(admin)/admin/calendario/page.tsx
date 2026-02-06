"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    ChevronLeft,
    ChevronRight,
    Video,
    MapPin,
    Plus,
    Calendar as CalendarIcon,
    Clock
} from "lucide-react";

export default function CalendarPage() {
    const view = "semana";

    // Horas de 8 AM a 8 PM
    const hours = Array.from({ length: 13 }, (_, i) => i + 8);

    // Días de la semana
    const weekDays = [
        { name: "Lun", date: "26" },
        { name: "Mar", date: "27" },
        { name: "Mié", date: "28" },
        { name: "Jue", date: "29" },
        { name: "Vie", date: "30" },
        { name: "Sáb", date: "31" },
        { name: "Dom", date: "01" },
    ];

    const appointments = [
        {
            id: 1,
            patient: "Ana María Lopez",
            therapist: "Lic. Roberto Casas",
            time: "10:00 AM",
            hour: 10,
            day: "Lun",
            type: "Online",
            color: "bg-purple-50 border-purple-200 text-purple-700"
        },
        {
            id: 2,
            patient: "Carlos Mendez",
            therapist: "Mtra. Sofia Q.",
            time: "12:00 PM",
            hour: 12,
            day: "Mar",
            type: "Presencial",
            color: "bg-blue-50 border-blue-200 text-blue-700"
        },
        {
            id: 3,
            patient: "Lucia Garza",
            therapist: "Dr. Alejandro M.",
            time: "4:00 PM",
            hour: 16,
            day: "Jue",
            type: "Online",
            color: "bg-amber-50 border-amber-200 text-amber-700"
        }
    ];

    return (
        <div className="space-y-6">
            {/* Header with Integrated Navigation */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-2">
                <div>
                    <h1 className="text-3xl font-extrabold text-secondary tracking-tight">Calendario de Citas</h1>
                    <p className="text-muted-foreground mt-1 text-sm font-medium">Visualiza la agenda semanal de todos los terapeutas.</p>
                </div>

                <div className="flex items-center gap-4 bg-white p-2 px-3 rounded-2xl border border-slate-100 shadow-sm">
                    <div className="flex items-center gap-1">
                        <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-slate-50">
                            <ChevronLeft className="h-4 w-4" />
                        </Button>
                        <span className="text-sm font-bold text-secondary min-w-[100px] text-center">Enero 2026</span>
                        <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-slate-50">
                            <ChevronRight className="h-4 w-4" />
                        </Button>
                    </div>
                    <div className="h-4 w-px bg-slate-200" />
                    <Button variant="ghost" size="sm" className="text-xs font-bold text-primary hover:bg-primary/5 h-8">
                        Hoy
                    </Button>
                </div>
            </div>

            {/* Calendar Grid - Re-engineered for reliability */}
            <Card className="rounded-[2.5rem] border-slate-100 shadow-sm overflow-hidden bg-white">
                <CardContent className="p-0">
                    {/* Header Row */}
                    <div className="flex border-b border-slate-100">
                        <div className="w-20 sm:w-24 bg-slate-50 border-r border-slate-100"></div>
                        <div className="flex-1 grid grid-cols-7">
                            {weekDays.map((day, i) => (
                                <div key={i} className="py-4 text-center border-r border-slate-100 last:border-0">
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{day.name}</p>
                                    <p className="text-xl font-black text-secondary">{day.date}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Scrollable Container */}
                    <div className="relative h-[700px] overflow-y-auto">
                        <div className="flex min-h-full">
                            {/* Hours Column */}
                            <div className="w-20 sm:w-24 border-r border-slate-100 bg-slate-50/50">
                                {hours.map((h) => (
                                    <div key={h} className="h-24 border-b border-slate-100/50 p-2 text-right">
                                        <span className="text-[11px] font-bold text-slate-400">
                                            {h > 12 ? `${h - 12}:00 PM` : `${h}:00 ${h === 12 ? 'PM' : 'AM'}`}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* Days Columns */}
                            <div className="flex-1 grid grid-cols-7 relative">
                                {weekDays.map((day, dayIdx) => (
                                    <div key={dayIdx} className="border-r border-slate-100 last:border-0 relative">
                                        {/* Row lines */}
                                        {hours.map((h) => (
                                            <div key={h} className="h-24 border-b border-slate-100/50"></div>
                                        ))}

                                        {/* Appointments for this specific day */}
                                        {appointments.filter(a => a.day === day.name).map((appt) => {
                                            const topOffset = (appt.hour - 8) * 96 + 10;
                                            return (
                                                <div
                                                    key={appt.id}
                                                    className={`absolute left-1 right-1 rounded-2xl p-3 border-l-4 shadow-sm hover:shadow-md transition-all cursor-pointer ${appt.color}`}
                                                    style={{ top: `${topOffset}px`, height: '80px' }}
                                                >
                                                    <div className="flex flex-col h-full justify-between overflow-hidden">
                                                        <div>
                                                            <div className="flex items-center gap-1 text-[9px] font-black uppercase opacity-70 mb-0.5">
                                                                <Clock className="h-2.5 w-2.5" /> {appt.time}
                                                            </div>
                                                            <div className="text-[11px] font-bold leading-tight truncate">{appt.patient}</div>
                                                        </div>
                                                        <div className="flex items-center justify-between mt-auto">
                                                            <div className="text-[9px] font-medium opacity-80 truncate">{appt.therapist}</div>
                                                            {appt.type === "Online" ? <Video className="h-3 w-3" /> : <MapPin className="h-3 w-3" />}
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Sync Alert */}
            <div className="p-6 bg-slate-900 rounded-[2.5rem] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
                <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-2xl bg-primary/20 flex items-center justify-center text-primary border border-primary/20">
                        <CalendarIcon className="h-6 w-6" />
                    </div>
                    <div>
                        <h3 className="font-bold text-lg">Sincronización con Google Calendar</h3>
                        <p className="text-sm text-slate-400">Pronto podrás conectar tu agenda personal para una gestión automatizada.</p>
                    </div>
                </div>
                <Button className="rounded-xl bg-white/10 text-white hover:bg-white/20 border border-white/10 font-bold opacity-60 cursor-not-allowed">
                    Próximamente
                </Button>
            </div>
        </div>
    );
}
