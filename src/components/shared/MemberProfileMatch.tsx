"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CheckCircle2, UserPlus, ShieldCheck, Star, ArrowRight, Sparkles, GraduationCap, Award, History, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

type Step = 1 | 2 | 3 | 4;

export function MemberProfileMatch() {
    const [step, setStep] = useState<Step>(1);
    const [profile, setProfile] = useState<{
        isPsychologist: boolean | null;
        hasCedula: boolean | null;
        isOldMember: boolean | null;
    }>({ isPsychologist: null, hasCedula: null, isOldMember: null });
    const [open, setOpen] = useState(false);

    const reset = () => {
        setStep(1);
        setProfile({ isPsychologist: null, hasCedula: null, isOldMember: null });
    };

    const handleFirstStep = (val: boolean) => {
        if (!val) {
            setStep(4); // Non-psychologist terminal step
        } else {
            setProfile({ ...profile, isPsychologist: true });
            setStep(2);
        }
    };

    const handleCedula = (val: boolean) => {
        setProfile({ ...profile, hasCedula: val });
        if (!val) {
            setStep(3); // Recommendation: Interino
        } else {
            setStep(3);
        }
    };

    const handleOldMember = (val: boolean) => {
        setProfile({ ...profile, isOldMember: val });
        setStep(3);
    };

    const getRecommendation = () => {
        if (profile.isPsychologist === false) return null;
        if (profile.hasCedula === false) return {
            name: "Miembro Interino",
            icon: UserPlus,
            color: "text-blue-600",
            description: "Ideal para egresados que están en proceso de obtener su título y cédula, pero desean comenzar su vinculación profesional."
        };
        if (profile.isOldMember) return {
            name: "Miembro Oficial",
            icon: Star,
            color: "text-amber-500",
            description: "Nivel para profesionales con trayectoria en la asociación, participación activa en proyectos y asistencia constante."
        };
        return {
            name: "Miembro Adherente",
            icon: ShieldCheck,
            color: "text-primary",
            description: "Para psicólogos titulados y con cédula que buscan integrarse a la red y participar en la comunidad."
        };
    };

    const recommendation = getRecommendation();

    return (
        <Dialog open={open} onOpenChange={(v) => { setOpen(v); if (!v) reset(); }}>
            <DialogTrigger asChild>
                <Button
                    variant="outline"
                    className="h-14 rounded-2xl border-primary/30 text-primary hover:bg-primary/5 font-bold px-8 gap-3 group transition-all"
                >
                    <Sparkles className="h-5 w-5 animate-pulse" />
                    <span>Asistencia en 3 clics: Conoce tu perfil</span>
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px] border-none shadow-2xl rounded-[3rem] p-0 overflow-hidden bg-white">
                <DialogHeader className="sr-only">
                    <DialogTitle>Asistente de Perfil APNL</DialogTitle>
                    <DialogDescription>
                        Responde unas breves preguntas para conocer qué tipo de membresía te corresponde.
                    </DialogDescription>
                </DialogHeader>

                <div className="bg-slate-100 h-2 w-full shrink-0">
                    <div
                        className="bg-primary h-full transition-all duration-500"
                        style={{ width: `${(step / 3) * 100}%` }}
                    />
                </div>

                <div className="p-8 md:p-10 space-y-8">
                    {step === 1 && (
                        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
                            <div className="space-y-2">
                                <h2 className="text-2xl font-black text-secondary leading-tight">¿Eres profesional de la psicología?</h2>
                                <p className="text-muted-foreground font-medium">La red APNL es exclusiva para Licenciados en Psicología.</p>
                            </div>
                            <div className="grid grid-cols-1 gap-3">
                                <button
                                    onClick={() => handleFirstStep(true)}
                                    className="flex items-center gap-4 p-5 rounded-2xl border border-slate-100 hover:border-primary/40 hover:bg-primary/5 transition-all text-left group"
                                >
                                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                        <GraduationCap className="h-6 w-6" />
                                    </div>
                                    <span className="font-extrabold text-secondary">Sí, soy Lic. en Psicología</span>
                                </button>
                                <button
                                    onClick={() => handleFirstStep(false)}
                                    className="flex items-center gap-4 p-5 rounded-2xl border border-slate-100 hover:border-red-200 hover:bg-red-50 transition-all text-left group"
                                >
                                    <div className="h-12 w-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-red-100 group-hover:text-red-600 transition-colors">
                                        <XCircle className="h-6 w-6" />
                                    </div>
                                    <span className="font-extrabold text-secondary">No, tengo otra profesión</span>
                                </button>
                            </div>
                        </div>
                    )}

                    {step === 2 && (
                        <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
                            <div className="space-y-2">
                                <h2 className="text-2xl font-black text-secondary leading-tight">¿Cuentas con cédula profesional?</h2>
                                <p className="text-muted-foreground font-medium">Esto define tu capacidad legal para el ejercicio clínico en México.</p>
                            </div>
                            <div className="grid grid-cols-1 gap-3">
                                <button
                                    onClick={() => handleCedula(true)}
                                    className="flex items-center gap-4 p-5 rounded-2xl border border-slate-100 hover:border-primary/40 hover:bg-primary/5 transition-all text-left group"
                                >
                                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                        <Award className="h-6 w-6" />
                                    </div>
                                    <span className="font-extrabold text-secondary">Sí, cuento con título y cédula</span>
                                </button>
                                <button
                                    onClick={() => handleCedula(false)}
                                    className="flex items-center gap-4 p-5 rounded-2xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50 transition-all text-left group"
                                >
                                    <div className="h-12 w-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                        <History className="h-6 w-6" />
                                    </div>
                                    <span className="font-extrabold text-secondary">No, mi título está en trámite</span>
                                </button>
                            </div>
                        </div>
                    )}

                    {step === 3 && profile.hasCedula && profile.isOldMember === null && (
                        <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
                            <div className="space-y-2">
                                <h2 className="text-2xl font-black text-secondary leading-tight">¿Has sido miembro antes?</h2>
                                <p className="text-muted-foreground font-medium">Buscamos valorar tu compromiso previo con la asociación.</p>
                            </div>
                            <div className="grid grid-cols-1 gap-3">
                                <button
                                    onClick={() => handleOldMember(true)}
                                    className="flex items-center gap-4 p-5 rounded-2xl border border-slate-100 hover:border-primary/40 hover:bg-primary/5 transition-all text-left group"
                                >
                                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                        <History className="h-6 w-6" />
                                    </div>
                                    <span className="font-extrabold text-secondary">Sí, llevo más de un año activo</span>
                                </button>
                                <button
                                    onClick={() => handleOldMember(false)}
                                    className="flex items-center gap-4 p-5 rounded-2xl border border-slate-100 hover:border-primary/40 hover:bg-primary/5 transition-all text-left group"
                                >
                                    <div className="h-12 w-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-white group-hover:text-primary transition-colors">
                                        <UserPlus className="h-6 w-6" />
                                    </div>
                                    <span className="font-extrabold text-secondary">Soy nuevo en la red</span>
                                </button>
                            </div>
                        </div>
                    )}

                    {step === 3 && (profile.hasCedula === false || profile.isOldMember !== null) && recommendation && (
                        <div className="space-y-8 animate-in zoom-in-95 duration-500 text-center">
                            <div className="space-y-3">
                                <div className="h-20 w-20 rounded-[2rem] bg-slate-50 text-secondary flex items-center justify-center mx-auto mb-4 border border-slate-100">
                                    <recommendation.icon className={cn("h-10 w-10", recommendation.color)} />
                                </div>
                                <h2 className="text-3xl font-black text-secondary">Tu perfil sugerido</h2>
                                <p className="text-muted-foreground font-medium">Basado en tu situación profesional, te corresponde:</p>
                            </div>

                            <div className="p-8 bg-secondary rounded-[2.5rem] text-white space-y-4 shadow-2xl shadow-secondary/20 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                                <h3 className="text-2xl font-black">{recommendation.name}</h3>
                                <p className="text-slate-300 text-sm leading-relaxed font-medium">{recommendation.description}</p>
                                <div className="pt-4">
                                    <Button className="w-full h-14 rounded-2xl bg-primary hover:bg-primary/90 text-white font-black text-lg transition-all hover:-translate-y-1" asChild>
                                        <a href="https://wa.me/528183455334?text=Hola,%20asistente%20me%20recomendó%20el%20perfil%20de%20" target="_blank" rel="noopener noreferrer">
                                            Iniciar Afiliación <ArrowRight className="ml-2 h-5 w-5" />
                                        </a>
                                    </Button>
                                </div>
                            </div>

                            <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">
                                Sujeto a validación por el comité administrativo
                            </p>
                        </div>
                    )}

                    {step === 4 && (
                        <div className="space-y-8 animate-in zoom-in-95 duration-500 text-center py-6">
                            <div className="h-20 w-20 rounded-[2.5rem] bg-red-50 text-red-500 flex items-center justify-center mx-auto mb-4">
                                <XCircle className="h-10 w-10" />
                            </div>
                            <div className="space-y-4">
                                <h2 className="text-3xl font-black text-secondary">Lo sentimos</h2>
                                <p className="text-muted-foreground font-medium leading-relaxed">
                                    Por el momento, la Red APNL está destinada exclusivamente para profesionales de la psicología clínica y educativa.
                                </p>
                            </div>
                            <Button variant="outline" className="h-12 rounded-xl" onClick={reset}>
                                Volver a intentar
                            </Button>
                        </div>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    );
}
