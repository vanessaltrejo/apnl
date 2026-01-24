"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck, Lock, Mail, Users } from "lucide-react";
import Link from "next/link";

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
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">

      <div className="w-full max-w-[500px] space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-primary text-white shadow-xl shadow-primary/20 mb-4">
            <Lock className="h-8 w-8" />
          </div>
          <h1 className="text-3xl font-extrabold text-secondary tracking-tight">Bienvenido de nuevo</h1>
          <p className="text-muted-foreground">Accede a tu panel personalizado según tu perfil.</p>
        </div>

        <Tabs defaultValue="terapeuta" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8 bg-slate-100/50 p-1 rounded-xl border border-slate-200">
            <TabsTrigger value="terapeuta" className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm">
              <Users className="h-4 w-4 mr-2 hidden sm:block" /> Terapeuta
            </TabsTrigger>
            <TabsTrigger value="admin" className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm">
              <ShieldCheck className="h-4 w-4 mr-2 hidden sm:block" /> Admin
            </TabsTrigger>
          </TabsList>

          {["terapeuta", "admin"].map((role) => (
            <TabsContent key={role} value={role}>
              <Card className="border-none shadow-2xl shadow-slate-200/50 rounded-3xl">
                <CardHeader>
                  <CardTitle className="capitalize text-xl font-bold text-secondary">
                    Acceso {role === "admin" ? "Administrador" : "de Profesionales"}
                  </CardTitle>
                  <CardDescription>
                    {role === "admin"
                      ? "Gestión global de la red y validaciones."
                      : "Gestiona tus citas, pacientes y perfil profesional."}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor={`email-${role}`}>Correo Electrónico</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                      <Input id={`email-${role}`} placeholder="nombre@ejemplo.com" className="pl-10 h-11 rounded-xl" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor={`pass-${role}`}>Contraseña</Label>
                      <Button variant="link" className="px-0 h-auto text-xs text-primary font-medium">
                        ¿Olvidaste tu contraseña?
                      </Button>
                    </div>
                    <div className="relative">
                      <Lock className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                      <Input id={`pass-${role}`} type="password" placeholder="••••••••" className="pl-10 h-11 rounded-xl" />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-4">
                  <Button className="w-full h-11 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl" onClick={handleLogin} disabled={isLoading}>
                    {isLoading ? "Iniciando..." : "Ingresar al Panel"}
                  </Button>


                  {role === "terapeuta" && (
                    <p className="text-sm text-center text-muted-foreground">
                      ¿Quieres unirte a la red?{" "}
                      <Link href="/unete" className="text-secondary font-bold hover:underline">
                        Más información
                      </Link>
                    </p>
                  )}
                </CardFooter>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        <div className="text-center text-xs text-muted-foreground opacity-60">
          &copy; {new Date().getFullYear()} Asociación de Psicólogos de Nuevo León A.C.
        </div>
      </div>
    </div>
  );
}
