"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { specialties } from "@/lib/mock-data";
import { Heart, User, Users, Baby, Brain, Scale, ArrowRight, Sparkles, MessageSquare } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Step = 1 | 2 | 3;

export function GuidedMatch({
    customTriggerLabel,
    customTriggerClassName
}: {
    customTriggerLabel?: string,
    customTriggerClassName?: string
}) {
    const [step, setStep] = useState<Step>(1);
    const [selections, setSelections] = useState<{
        whom: string | null;
        concern: string | null;
    }>({ whom: null, concern: null });
    const [open, setOpen] = useState(false);

    const reset = () => {
        setStep(1);
        setSelections({ whom: null, concern: null });
    };

    const handleWhom = (val: string) => {
        setSelections({ ...selections, whom: val });
        setStep(2);
    };

    const handleConcern = (val: string) => {
        setSelections({ ...selections, concern: val });
        setStep(3);
    };

    const getRecommendation = () => {
        const { whom, concern } = selections;
        if (whom === "pareja") return specialties.find(s => s.id === "s2");
        if (whom === "familia") return specialties.find(s => s.id === "s3");
        if (whom === "hijo") {
            if (concern === "aprendizaje") return specialties.find(s => s.id === "s5");
            return specialties.find(s => s.id === "s4");
        }
        if (whom === "yo") {
            if (concern === "cognitivo") return specialties.find(s => s.id === "s5");
            if (concern === "legal") return specialties.find(s => s.id === "s6");
            return specialties.find(s => s.id === "s1");
        }
        return specialties[0];
    };

    const recommendation = getRecommendation();

    return (
        <Dialog open={open} onOpenChange={(v) => { setOpen(v); if (!v) reset(); }}>
            <DialogTrigger asChild>
                <Button
                    variant="outline"
                    className={customTriggerClassName || "rounded-xl border-primary/30 text-primary hover:bg-primary/5 font-bold gap-2"}
                >
                    <Sparkles className="h-4 w-4" /> {customTriggerLabel || "Aun no sé qué necesito"}
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px] border-none shadow-2xl rounded-[2.5rem] p-0 overflow-hidden">
                <DialogHeader className="sr-only">
                    <DialogTitle>Asistente de Orientación APNL</DialogTitle>
                    <DialogDescription>
                        Responde unas breves preguntas para sugerirte el tipo de especialista que necesitas.
                    </DialogDescription>
                </DialogHeader>

                <div className="bg-primary h-2 w-full shrink-0">
                    <div
                        className="bg-secondary h-full transition-all duration-500"
                        style={{ width: `${(step / 3) * 100}%` }}
                    />
                </div>

                <div className="p-8 space-y-8">
                    {step === 1 && (
                        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
                            <div className="space-y-2">
                                <h2 className="text-2xl font-bold text-secondary">¿Para quién es la consulta?</h2>
                                <p className="text-muted-foreground">Ayúdanos a orientarte hacia el especialista ideal.</p>
                            </div>
                            <div className="grid grid-cols-1 gap-3">
                                {[
                                    { id: "yo", label: "Para mí", icon: User },
                                    { id: "pareja", label: "Para mi pareja y para mí", icon: Heart },
                                    { id: "familia", label: "Para mi familia", icon: Users },
                                    { id: "hijo", label: "Para mi hijo o hija", icon: Baby },
                                ].map((opt) => (
                                    <button
                                        key={opt.id}
                                        onClick={() => handleWhom(opt.id)}
                                        className="flex items-center gap-4 p-4 rounded-2xl border border-slate-100 hover:border-primary/40 hover:bg-primary/5 transition-all text-left group"
                                    >
                                        <div className="h-12 w-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-white group-hover:text-primary transition-colors">
                                            <opt.icon className="h-6 w-6" />
                                        </div>
                                        <span className="font-bold text-secondary">{opt.label}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {step === 2 && (
                        <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
                            <div className="space-y-2">
                                <h2 className="text-2xl font-bold text-secondary">¿Qué está pasando?</h2>
                                <p className="text-muted-foreground">Cuéntanos un poco más sobre el motivo principal.</p>
                            </div>
                            <div className="grid grid-cols-1 gap-3">
                                {selections.whom === "yo" && [
                                    { id: "emociones", label: "Ansiedad, estrés o tristeza", icon: Sparkles },
                                    { id: "desarrollo", label: "Crecimiento personal", icon: Heart },
                                    { id: "cognitivo", label: "Problemas de memoria o atención", icon: Brain },
                                    { id: "legal", label: "Proceso legal o peritaje", icon: Scale },
                                ].map((opt) => (
                                    <button
                                        key={opt.id}
                                        onClick={() => handleConcern(opt.id)}
                                        className="flex items-center gap-4 p-4 rounded-2xl border border-slate-100 hover:border-primary/40 hover:bg-primary/5 transition-all text-left group"
                                    >
                                        <div className="h-10 w-10 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-white group-hover:text-primary shadow-sm">
                                            <opt.icon className="h-5 w-5" />
                                        </div>
                                        <span className="font-bold text-secondary">{opt.label}</span>
                                    </button>
                                ))}

                                {selections.whom === "hijo" && [
                                    { id: "conducta", label: "Conducta o berrinches", icon: Baby },
                                    { id: "emociones", label: "Timidez o miedos", icon: Heart },
                                    { id: "aprendizaje", label: "Problemas en la escuela", icon: Brain },
                                ].map((opt) => (
                                    <button
                                        key={opt.id}
                                        onClick={() => handleConcern(opt.id)}
                                        className="flex items-center gap-4 p-4 rounded-2xl border border-slate-100 hover:border-primary/40 hover:bg-primary/5 transition-all text-left group"
                                    >
                                        <div className="h-10 w-10 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-white group-hover:text-primary shadow-sm">
                                            <opt.icon className="h-5 w-5" />
                                        </div>
                                        <span className="font-bold text-secondary">{opt.label}</span>
                                    </button>
                                ))}

                                {(selections.whom === "pareja" || selections.whom === "familia") && (
                                    <div className="space-y-4">
                                        <p className="text-sm text-muted-foreground italic bg-slate-50 p-4 rounded-xl border border-slate-100">
                                            "Entendemos que las dinámicas de relación son complejas. Lo más importante es dar el primer paso juntos."
                                        </p>
                                        <Button className="w-full h-14 rounded-2xl font-bold text-lg" onClick={() => handleConcern("general")}>
                                            Siguiente <ArrowRight className="ml-2 h-5 w-5" />
                                        </Button>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {step === 3 && recommendation && (
                        <div className="space-y-8 animate-in zoom-in-95 duration-500 text-center">
                            <div className="space-y-2">
                                <div className="h-20 w-20 rounded-3xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                                    <Brain className="h-10 w-10" />
                                </div>
                                <h2 className="text-3xl font-bold text-secondary">Tu recomendación</h2>
                                <p className="text-muted-foreground">Basado en lo que nos contaste, te sugerimos:</p>
                            </div>

                            <div className="p-8 bg-secondary rounded-[2rem] text-white space-y-4 shadow-xl shadow-secondary/20">
                                <h3 className="text-2xl font-bold">{recommendation.name}</h3>
                                <p className="text-slate-300 text-sm">{recommendation.description}</p>
                                <div className="pt-4">
                                    <Button className="w-full h-12 rounded-xl bg-primary hover:bg-primary/90 text-white font-extrabold" asChild>
                                        <Link href={`/directorio?specialty=${recommendation.id}`}>
                                            Ver Terapeutas de esta área <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>

                            <div className="text-xs text-muted-foreground pt-4">
                                Esta es una sugerencia clínica orientativa. Un profesional validará esta necesidad en tu primera sesión.
                            </div>
                        </div>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    );
}
