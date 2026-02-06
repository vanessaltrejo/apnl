"use client";

import { useState } from "react";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Calendar as CalendarIcon, MessageSquare, CheckCircle2, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Therapist } from "@/lib/mock-data";

interface AppointmentSchedulerProps {
    therapist: Therapist;
}

export function AppointmentScheduler({ therapist }: AppointmentSchedulerProps) {
    const [date, setDate] = useState<Date | undefined>(new Date());
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const [isSuccess, setIsSuccess] = useState(false);

    // Form fields
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        age: "",
        modality: "",
        reason: ""
    });

    // Mock slots
    const getSlotsForDate = (d: Date) => {
        const isEven = d.getDate() % 2 === 0;
        if (isEven) return ["09:00", "10:00", "11:00", "12:00"];
        return ["15:00", "16:00", "17:00", "18:00"];
    };

    const slots = date ? getSlotsForDate(date) : [];

    const handleSubmit = () => {
        setIsSuccess(true);
    };

    const isFormValid = formData.name && formData.phone && formData.age && formData.modality && formData.reason && date && selectedTime;

    if (isSuccess) {
        return (
            <div className="bg-white rounded-[2.5rem] border border-slate-100 p-10 shadow-xl text-center space-y-6 animate-in zoom-in-95 duration-500">
                <div className="h-20 w-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="h-10 w-10 text-emerald-600" />
                </div>
                <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-secondary">¡Solicitud recibida!</h3>
                    <p className="text-muted-foreground font-medium leading-relaxed">
                        Muchas gracias, <span className="text-secondary font-bold">{formData.name}</span>. <br />
                        Hemos recibido tu solicitud para el día <span className="text-secondary font-bold">{date ? format(date, "d 'de' MMMM", { locale: es }) : ""}</span> a las <span className="text-secondary font-bold">{selectedTime}</span>.
                    </p>
                    <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100/50 text-blue-800 text-sm font-medium">
                        Tu terapeuta se pondrá en contacto contigo muy pronto vía telefónica o WhatsApp para confirmar los detalles.
                    </div>
                </div>
                <Button variant="ghost" className="text-primary font-bold hover:bg-primary/5" onClick={() => {
                    setIsSuccess(false);
                    setSelectedTime(null);
                    setFormData({ name: "", phone: "", age: "", modality: "", reason: "" });
                }}>
                    Agendar otra cita
                </Button>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-[2.5rem] border border-slate-100 p-8 shadow-2xl space-y-8">
            <div className="space-y-2 text-center md:text-left">
                <h3 className="text-2xl font-bold text-secondary flex items-center justify-center md:justify-start gap-3">
                    <CalendarIcon className="h-6 w-6 text-primary" />
                    Agendar Cita
                </h3>
                <p className="text-muted-foreground text-sm font-medium">Completa tus datos y nosotros te llamamos.</p>
            </div>

            <div className="flex items-center justify-between p-4 bg-[#FAFAF5] rounded-2xl border border-primary/10">
                <span className="text-sm font-bold text-secondary/70">Primera Sesión</span>
                <span className="text-xl font-black text-primary">$350 MXN</span>
            </div>

            <div className="space-y-8">
                {/* Step 1: Date & Time */}
                <div className="space-y-6">
                    <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest">
                        <span className="h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center text-[10px]">1</span>
                        Fecha y Hora
                    </div>

                    <div className="space-y-6">
                        {/* Calendar Container */}
                        <div className="border rounded-3xl p-4 bg-slate-50 shadow-inner flex justify-center">
                            <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                disabled={(date) => date < new Date() || date.getDay() === 0}
                                locale={es}
                                className="w-full max-w-[320px]"
                            />
                        </div>

                        {/* Times Container */}
                        <div className="space-y-3 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                            <div className="flex items-center justify-between">
                                <Label className="text-secondary font-bold text-base">Horarios Disponibles</Label>
                                {date && (
                                    <span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full font-bold">
                                        {format(date, "d MMM", { locale: es })}
                                    </span>
                                )}
                            </div>
                            <div className="grid grid-cols-3 gap-2">
                                {slots.map(time => (
                                    <Button
                                        key={time}
                                        variant={selectedTime === time ? "default" : "outline"}
                                        size="sm"
                                        onClick={() => setSelectedTime(time)}
                                        className={cn(
                                            "rounded-xl border-slate-200 h-11 transition-all font-bold text-sm",
                                            selectedTime === time ? "bg-primary text-white shadow-md shadow-primary/20 scale-105" : "hover:border-primary/40 bg-slate-50/50"
                                        )}
                                    >
                                        {time}
                                    </Button>
                                ))}
                            </div>
                            <p className="text-[10px] text-muted-foreground pt-2 text-center">
                                * Horarios sujetos a confirmación vía WhatsApp.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Step 2: Information Form */}
                <div className={cn(
                    "space-y-4 transition-all duration-500",
                    (!date || !selectedTime) ? "opacity-30 pointer-events-none grayscale" : "opacity-100"
                )}>
                    <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest">
                        <span className="h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center text-[10px]">2</span>
                        Tus Datos
                    </div>

                    <div className="space-y-4 bg-slate-50/50 p-6 rounded-[2rem] border border-slate-100 shadow-sm">
                        <div className="space-y-2">
                            <Label htmlFor="name" className="text-secondary font-bold ml-1 text-sm">Nombre Completo</Label>
                            <Input
                                id="name"
                                placeholder="Ej. Juan Pérez"
                                className="rounded-2xl border-slate-200 h-11 bg-white px-4 focus-visible:ring-primary shadow-sm transition-all text-sm"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="phone" className="text-secondary font-bold ml-1 text-sm">WhatsApp</Label>
                                <Input
                                    id="phone"
                                    placeholder="81 1234 5678"
                                    className="rounded-2xl border-slate-200 h-11 bg-white px-4 focus-visible:ring-primary shadow-sm transition-all text-sm"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="age" className="text-secondary font-bold ml-1 text-sm">Edad</Label>
                                <Input
                                    id="age"
                                    type="number"
                                    placeholder="Ej. 25"
                                    className="rounded-2xl border-slate-200 h-11 bg-white px-4 focus-visible:ring-primary shadow-sm transition-all text-sm"
                                    value={formData.age}
                                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="modality" className="text-secondary font-bold ml-1 text-sm">Modalidad de sesión</Label>
                            <select
                                id="modality"
                                className="flex w-full rounded-2xl border border-slate-200 h-11 bg-white px-4 text-sm shadow-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none transition-all cursor-pointer font-medium text-slate-700"
                                value={formData.modality}
                                onChange={(e) => setFormData({ ...formData, modality: e.target.value })}
                            >
                                <option value="" disabled className="text-muted-foreground italic">Selecciona modalidad...</option>
                                <option value="online">Sesión Online (Video llamada)</option>
                                <option value="presencial">Sesión Presencial (En consultorio)</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="reason" className="text-secondary font-bold ml-1 text-sm">¿Qué te trae a consulta?</Label>
                            <Textarea
                                id="reason"
                                placeholder="Platícanos brevemente el motivo..."
                                className="rounded-2xl border-slate-200 min-h-[80px] bg-white p-4 focus-visible:ring-primary shadow-sm transition-all text-sm resize-none"
                                value={formData.reason}
                                onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                            />
                        </div>
                    </div>
                </div>

                <Button
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-white rounded-2xl h-16 text-lg font-bold shadow-xl shadow-primary/20 flex items-center justify-center gap-3 transition-all active:scale-95"
                    disabled={!isFormValid}
                    onClick={handleSubmit}
                >
                    Confirmar Solicitud
                    <ArrowRight className="h-5 w-5" />
                </Button>

                <p className="text-center text-[11px] text-muted-foreground px-6 leading-relaxed">
                    Al confirmar, un especialista revisará tu solicitud y se pondrá en contacto contigo para los detalles finales.
                </p>
            </div>
        </div>
    );
}
