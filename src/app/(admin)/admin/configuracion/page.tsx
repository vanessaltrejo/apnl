import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Save, Globe, Mail, Shield, Bell } from "lucide-react";

export default function ConfiguracionPage() {
    return (
        <div className="space-y-8 max-w-5xl mx-auto">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-extrabold text-secondary tracking-tight">Configuración</h1>
                    <p className="text-muted-foreground mt-1">Ajustes generales de la plataforma y tu cuenta.</p>
                </div>
                <Button className="rounded-xl bg-primary hover:bg-primary/90 text-white font-bold shadow-md shadow-primary/20">
                    <Save className="mr-2 h-4 w-4" /> Guardar Cambios
                </Button>
            </div>

            <Tabs defaultValue="general" className="w-full">
                <TabsList className="bg-white border border-slate-200 p-1 rounded-xl h-auto mb-8">
                    <TabsTrigger value="general" className="rounded-lg data-[state=active]:bg-slate-100 data-[state=active]:text-secondary px-6 py-2">General</TabsTrigger>
                    <TabsTrigger value="perfil" className="rounded-lg data-[state=active]:bg-slate-100 data-[state=active]:text-secondary px-6 py-2">Mi Perfil</TabsTrigger>
                    <TabsTrigger value="notificaciones" className="rounded-lg data-[state=active]:bg-slate-100 data-[state=active]:text-secondary px-6 py-2">Notificaciones</TabsTrigger>
                    <TabsTrigger value="seguridad" className="rounded-lg data-[state=active]:bg-slate-100 data-[state=active]:text-secondary px-6 py-2">Seguridad</TabsTrigger>
                </TabsList>

                <TabsContent value="general" className="space-y-6">
                    <Card className="rounded-2xl border-slate-100 shadow-sm">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><Globe className="h-5 w-5 text-primary" /> Información del Sitio</CardTitle>
                            <CardDescription>Detalles públicos visibles en el sitio web.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="site-name">Nombre de la Asociación</Label>
                                    <Input id="site-name" defaultValue="Asociación de Psicólogos de Nuevo León A.C." className="bg-slate-50 border-slate-200" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="contact-email">Correo de Contacto</Label>
                                    <Input id="contact-email" defaultValue="contacto@apnl.com" className="bg-slate-50 border-slate-200" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="bio">Descripción Corta (SEO)</Label>
                                <Input id="bio" defaultValue="Red de profesionales de la salud mental comprometidos con el bienestar integral." className="bg-slate-50 border-slate-200" />
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="rounded-2xl border-slate-100 shadow-sm">
                        <CardHeader>
                            <CardTitle>Mantenimiento</CardTitle>
                            <CardDescription>Opciones avanzadas del sistema.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
                                <div>
                                    <p className="font-bold text-secondary">Modo Mantenimiento</p>
                                    <p className="text-sm text-muted-foreground">Desactiva el acceso público temporalmente.</p>
                                </div>
                                <Switch />
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>



                <TabsContent value="perfil" className="space-y-6">
                    <Card className="rounded-2xl border-slate-100 shadow-sm">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Shield className="h-5 w-5 text-primary" /> Información Personal
                            </CardTitle>
                            <CardDescription>Actualiza tus datos de acceso y perfil de administrador.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="flex items-center gap-6">
                                <Avatar className="h-24 w-24 border-4 border-slate-50 shadow-md">
                                    <AvatarImage src="/images/admin-avatar.png" alt="Admin" />
                                    <AvatarFallback className="bg-secondary text-white text-2xl font-bold">AD</AvatarFallback>
                                </Avatar>
                                <div className="space-y-2">
                                    <Button variant="outline" className="rounded-xl border-slate-200">Cambiar Foto</Button>
                                    <p className="text-xs text-muted-foreground">JPG, PNG o WEBP. Máx 2MB.</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="admin-name">Nombre Completo</Label>
                                    <Input id="admin-name" defaultValue="Administrador General" className="bg-slate-50 border-slate-200" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="admin-email">Correo Electrónico</Label>
                                    <Input id="admin-email" defaultValue="admin@apnl.com" className="bg-slate-50 border-slate-200" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="admin-role">Rol del Sistema</Label>
                                    <Input id="admin-role" defaultValue="Super Admin" disabled className="bg-slate-100 border-slate-200 text-muted-foreground" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="rounded-2xl border-slate-100 shadow-sm">
                        <CardHeader>
                            <CardTitle>Seguridad de la Cuenta</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="current-pass">Contraseña Actual</Label>
                                <Input id="current-pass" type="password" className="bg-slate-50 border-slate-200" />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="new-pass">Nueva Contraseña</Label>
                                    <Input id="new-pass" type="password" className="bg-slate-50 border-slate-200" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="confirm-pass">Confirmar Nueva Contraseña</Label>
                                    <Input id="confirm-pass" type="password" className="bg-slate-50 border-slate-200" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="notificaciones" className="space-y-6">
                    <Card className="rounded-2xl border-slate-100 shadow-sm">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><Bell className="h-5 w-5 text-primary" /> Preferencias de Correo</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            {[
                                { l: "Nuevas solicitudes de ingreso", d: "Recibir un correo cuando un terapeuta se registre." },
                                { l: "Reportes semanales", d: "Resumen de actividad cada lunes." },
                                { l: "Alertas de seguridad", d: "Intentos de inicio de sesión sospechosos." }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center justify-between">
                                    <div>
                                        <p className="font-bold text-secondary text-sm">{item.l}</p>
                                        <p className="text-xs text-muted-foreground">{item.d}</p>
                                    </div>
                                    <Switch defaultChecked={i === 0 || i === 2} />
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div >
    );
}
