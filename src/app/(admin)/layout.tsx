import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader, SheetDescription } from "@/components/ui/sheet";
import { Menu, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-slate-50/50 flex flex-col lg:flex-row font-sans relative">
            {/* Desktop Sidebar */}
            <div className="hidden lg:block shrink-0">
                <AdminSidebar />
            </div>

            {/* Mobile Header */}
            <header className="lg:hidden h-16 bg-white border-b border-slate-200 px-4 flex items-center justify-between sticky top-0 z-40">
                <Link href="/admin" className="flex items-center gap-3">
                    <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center text-white shadow-sm shadow-primary/20">
                        <ShieldCheck className="h-5 w-5" />
                    </div>
                    <span className="font-bold text-lg text-secondary tracking-tight">
                        APNL <span className="text-primary">Admin</span>
                    </span>
                </Link>

                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" className="text-secondary hover:bg-slate-100">
                            <Menu className="h-6 w-6" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="p-0 w-64 border-none">
                        <SheetHeader className="sr-only">
                            <SheetTitle>Menú Administrativo</SheetTitle>
                            <SheetDescription>Navegación del panel de administración</SheetDescription>
                        </SheetHeader>
                        <AdminSidebar className="relative h-full w-full border-none shadow-none" />
                    </SheetContent>
                </Sheet>
            </header>

            <main className="flex-1 lg:ml-64 p-4 md:p-8 overflow-y-auto">
                <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">
                    {children}
                </div>
            </main>
        </div>
    );
}
