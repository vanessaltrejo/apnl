"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Lock, Mail } from "lucide-react";
import Link from "next/link";
import { FadeInUp } from "@/components/shared/FadeInUp";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Mock Delay and Redirect
    setTimeout(() => {
      setIsLoading(false);
      router.push("/admin");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center py-12 px-4">

      <FadeInUp className="w-full max-w-[450px] space-y-8">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-primary text-white shadow-xl shadow-primary/20 mb-4">
            <Lock className="h-8 w-8" />
          </div>
          <h1 className="text-3xl font-extrabold text-secondary tracking-tight">Bienvenido de nuevo</h1>
          <p className="text-muted-foreground font-medium">Acceso exclusivo para miembros y administración.</p>
        </div>
        <Card className="border-none shadow-2xl shadow-slate-200/50 rounded-[2.5rem] overflow-hidden">
          <CardContent className="space-y-6 px-8 pt-10">
            <form onSubmit={handleLogin} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-secondary font-bold ml-1">Correo Electrónico</Label>
                <div className="relative">
                  <Mail className="absolute left-4 top-3.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="nombre@ejemplo.com"
                    className="pl-11 h-12 rounded-2xl border-slate-200 focus:ring-primary focus:border-primary"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between ml-1">
                  <Label htmlFor="password" className="text-secondary font-bold">Contraseña</Label>
                  <Button variant="link" className="px-0 h-auto text-xs text-primary font-bold hover:no-underline">
                    ¿Olvidaste tu contraseña?
                  </Button>
                </div>
                <div className="relative">
                  <Lock className="absolute left-4 top-3.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    className="pl-11 h-12 rounded-2xl border-slate-200 focus:ring-primary focus:border-primary"
                    required
                  />
                </div>
              </div>
              <Button
                type="submit"
                className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-bold rounded-2xl shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5"
                disabled={isLoading}
              >
                {isLoading ? "Iniciando sesión..." : "Ingresar al Panel"}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col gap-4 pb-10 px-8">
            <div className="h-px bg-slate-100 w-full mb-2" />
            <p className="text-sm text-center text-muted-foreground font-medium">
              ¿Quieres unirte a la red?{" "}
              <Link href="/unete" className="text-primary font-black hover:underline decoration-2">
                Conoce los beneficios
              </Link>
            </p>
          </CardFooter>
        </Card>

        <div className="text-center text-xs text-muted-foreground font-medium opacity-60">
          &copy; {new Date().getFullYear()} Asociación de Psicólogos de Nuevo León A.C.
        </div>
      </FadeInUp>
    </div>
  );
}
