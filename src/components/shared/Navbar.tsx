import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Calendar } from "lucide-react";

export function Navbar() {
    const navLinks = [
        { name: "Inicio", href: "/" },
        { name: "Servicios", href: "/servicios" },
        { name: "Encontrar Terapeuta", href: "/directorio" },
        { name: "Nosotros", href: "/nosotros" },
        { name: "Blog", href: "/blog" },
        { name: "Únete a la Red", href: "/unete" },
    ];

    return (
        <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3">
                    <img src="/logo.png" alt="APNL Logo" className="h-10 w-auto" />
                    <span className="text-xl font-bold text-secondary tracking-tight hidden sm:block">
                        Psicólogos NL
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex gap-6 lg:gap-8 items-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary whitespace-nowrap"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                <div className="hidden md:flex gap-4 items-center">
                    <Button variant="ghost" className="text-secondary hover:bg-slate-100 hover:text-secondary font-bold transition-all" asChild>
                        <Link href="/iniciar-sesion">Iniciar Sesión</Link>
                    </Button>

                    <Button className="bg-primary hover:bg-primary/90 text-white shadow-md hover:shadow-lg transition-all rounded-full px-6 font-bold" asChild>
                        <Link href="/directorio" className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" /> Agendar
                        </Link>
                    </Button>
                </div>

                {/* Mobile Navigation */}
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu className="h-6 w-6 text-secondary" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right">
                            <SheetHeader className="text-left sr-only">
                                <SheetTitle>Menú de navegación</SheetTitle>
                                <SheetDescription>
                                    Accede a las diferentes secciones de nuestra página.
                                </SheetDescription>
                            </SheetHeader>
                            <div className="flex flex-col gap-6 mt-8">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className="text-lg font-medium text-secondary"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                                <div className="h-px bg-border my-2" />

                                <Button variant="outline" className="w-full justify-start rounded-xl" asChild>
                                    <Link href="/iniciar-sesion">Iniciar Sesión</Link>
                                </Button>

                                <Button className="w-full justify-start bg-primary text-white rounded-xl" asChild>
                                    <Link href="/directorio" className="flex items-center gap-2">
                                        <Calendar className="h-4 w-4" /> Agendar Cita
                                    </Link>
                                </Button>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    );
}
