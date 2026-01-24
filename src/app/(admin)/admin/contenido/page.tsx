import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Plus, Edit2, MoreHorizontal, Eye, FileText, Image as ImageIcon } from "lucide-react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function ContenidoPage() {
    const posts = [
        { id: 1, title: "La Importancia de la Terapia Infantil", author: "Lic. Ana Torres", date: "22 Ene 2026", category: "Infantil", status: "Publicado", views: 1240 },
        { id: 2, title: "Manejo del Estrés Laboral", author: "Mtro. Carlos Ruiz", date: "20 Ene 2026", category: "Adultos", status: "Borrador", views: 0 },
        { id: 3, title: "Duelo y Pérdida: Guía Práctica", author: "Dr. Roberto Casas", date: "15 Ene 2026", category: "Tanatología", status: "Publicado", views: 985 },
        { id: 4, title: "Neuropsicología en el Aula", author: "Dr. Alejandro M.", date: "10 Ene 2026", category: "Educativa", status: "Revisión", views: 0 },
    ];

    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-extrabold text-secondary tracking-tight">Gestión de Contenido</h1>
                    <p className="text-muted-foreground mt-1">Administra los artículos del blog y recursos educativos.</p>
                </div>
                <Button className="rounded-xl bg-primary hover:bg-primary/90 text-white font-bold shadow-md shadow-primary/20">
                    <Plus className="mr-2 h-4 w-4" /> Nuevo Artículo
                </Button>
            </div>

            <Card className="rounded-3xl border-slate-100 shadow-sm overflow-hidden">
                <CardHeader className="bg-white border-b border-slate-100 px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex gap-2">
                            <Button variant="ghost" className="rounded-lg text-primary bg-primary/10 font-bold hover:bg-primary/20">Todos</Button>
                            <Button variant="ghost" className="rounded-lg text-slate-500 hover:text-secondary hover:bg-slate-100">Publicados</Button>
                            <Button variant="ghost" className="rounded-lg text-slate-500 hover:text-secondary hover:bg-slate-100">Borradores</Button>
                        </div>
                        <div className="relative w-64">
                            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input placeholder="Buscar artículo..." className="pl-9 h-10 rounded-xl bg-slate-50 border-slate-200" />
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-0">
                    <Table>
                        <TableHeader className="bg-slate-50/50">
                            <TableRow>
                                <TableHead className="w-[400px] pl-6">Título</TableHead>
                                <TableHead>Categoría</TableHead>
                                <TableHead>Fecha</TableHead>
                                <TableHead>Estado</TableHead>
                                <TableHead>Vistas</TableHead>
                                <TableHead className="text-right pr-6">Acciones</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {posts.map((post) => (
                                <TableRow key={post.id} className="hover:bg-slate-50/50 transition-colors">
                                    <TableCell className="font-medium pl-6">
                                        <div className="flex items-center gap-3">
                                            <div className="h-10 w-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400">
                                                <ImageIcon className="h-5 w-5" />
                                            </div>
                                            <div>
                                                <div className="font-bold text-secondary text-base">{post.title}</div>
                                                <div className="text-xs text-muted-foreground">Por: {post.author}</div>
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <Badge variant="secondary" className="bg-slate-50 text-slate-600 border border-slate-200 font-normal">
                                            {post.category}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="text-sm text-slate-600">{post.date}</TableCell>
                                    <TableCell>
                                        <Badge variant="outline" className={`
                                            ${post.status === "Publicado" ? "bg-emerald-50 text-emerald-700 border-emerald-200" :
                                                post.status === "Borrador" ? "bg-slate-100 text-slate-600 border-slate-200" :
                                                    "bg-orange-50 text-orange-700 border-orange-200"
                                            }
                                        `}>
                                            {post.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="text-sm text-slate-600 font-mono">
                                        {post.views > 0 ? post.views.toLocaleString() : "-"}
                                    </TableCell>
                                    <TableCell className="text-right pr-6">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="ghost" className="h-8 w-8 p-0 text-slate-400 hover:text-secondary">
                                                    <span className="sr-only">Abrir menú</span>
                                                    <MoreHorizontal className="h-4 w-4" />
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuItem className="cursor-pointer">
                                                    <Edit2 className="mr-2 h-4 w-4" /> Editar
                                                </DropdownMenuItem>
                                                <DropdownMenuItem className="cursor-pointer">
                                                    <Eye className="mr-2 h-4 w-4" /> Vista Previa
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}
