import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, ArrowDownRight, DollarSign, CreditCard, Download, TrendingUp } from "lucide-react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

export default function FinanzasPage() {
    const transactions = [
        { id: "TX-9821", date: "24 Ene 2026", type: "Cobro Cita", member: "Dr. Roberto Casas", amount: "+$850.00", status: "Completado" },
        { id: "TX-9820", date: "24 Ene 2026", type: "Membresía Mensual", member: "Lic. Clara M.", amount: "+$450.00", status: "Completado" },
        { id: "TX-9819", date: "23 Ene 2026", type: "Inscripción", member: "Mtra. Sofia Q.", amount: "+$1,200.00", status: "Pendiente" },
        { id: "TX-9818", date: "23 Ene 2026", type: "Pago Servicios Web", member: "-", amount: "-$120.00", status: "Completado" },
        { id: "TX-9817", date: "22 Ene 2026", type: "Cobro Cita", member: "Lic. Clara M.", amount: "+$850.00", status: "Completado" },
    ];

    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-extrabold text-secondary tracking-tight">Finanzas y Pagos</h1>
                    <p className="text-muted-foreground mt-1">Control de ingresos por membresías, inscripciones y citas.</p>
                </div>
                <div className="flex gap-3">
                    <Button variant="outline" className="rounded-xl border-slate-200">
                        <Download className="mr-2 h-4 w-4" /> Reporte Mensual
                    </Button>
                </div>
            </div>

            {/* Financial Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="rounded-2xl border-slate-100 shadow-sm bg-secondary text-white">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium text-slate-300 uppercase tracking-wider">Ingresos Totales (Mes)</CardTitle>
                        <DollarSign className="h-4 w-4 text-emerald-400" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-black">$45,231.89</div>
                        <p className="text-xs text-emerald-400 flex items-center mt-1">
                            <TrendingUp className="h-3 w-3 mr-1" /> +20.1% vs mes anterior
                        </p>
                    </CardContent>
                </Card>
                <Card className="rounded-2xl border-slate-100 shadow-sm">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Membresías Activas</CardTitle>
                        <CreditCard className="h-4 w-4 text-primary" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold text-secondary text-primary">145</div>
                        <p className="text-xs text-muted-foreground mt-1">Representa $65,250/mes de ingreso recurrente</p>
                    </CardContent>
                </Card>
                <Card className="rounded-2xl border-slate-100 shadow-sm">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Pagos Pendientes</CardTitle>
                        <DollarSign className="h-4 w-4 text-orange-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold text-orange-600">8</div>
                        <p className="text-xs text-muted-foreground mt-1">Pagos de membresía atrasados (+3 días)</p>
                    </CardContent>
                </Card>
            </div>

            {/* Transactions Table */}
            <Card className="rounded-3xl border-slate-100 shadow-sm overflow-hidden">
                <CardHeader className="bg-white border-b border-slate-100 px-6 py-4">
                    <CardTitle className="text-lg font-bold text-secondary">Transacciones Recientes</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                    <Table>
                        <TableHeader className="bg-slate-50/50">
                            <TableRow>
                                <TableHead className="w-[150px] pl-6">ID</TableHead>
                                <TableHead>Fecha</TableHead>
                                <TableHead>Concepto</TableHead>
                                <TableHead>Usuario Relacionado</TableHead>
                                <TableHead>Monto</TableHead>
                                <TableHead className="text-right pr-6">Estado</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {transactions.map((tx) => (
                                <TableRow key={tx.id} className="hover:bg-slate-50/50">
                                    <TableCell className="font-mono text-xs font-bold text-slate-500 pl-6">{tx.id}</TableCell>
                                    <TableCell className="text-sm text-slate-600">{tx.date}</TableCell>
                                    <TableCell className="font-medium text-secondary">{tx.type}</TableCell>
                                    <TableCell className="text-slate-600">{tx.member}</TableCell>
                                    <TableCell>
                                        <span className={`font-bold ${tx.amount.startsWith("+") ? "text-emerald-600" : "text-slate-600"}`}>
                                            {tx.amount}
                                        </span>
                                    </TableCell>
                                    <TableCell className="text-right pr-6">
                                        <Badge variant="outline" className={`
                                            ${tx.status === "Completado" ? "bg-emerald-50 text-emerald-700 border-emerald-100" : "bg-orange-50 text-orange-700 border-orange-100"}
                                        `}>
                                            {tx.status}
                                        </Badge>
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
