import Image from "next/image";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Footer from "@/components/Footer"; // Import the Footer component

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Psicólogos de Nuevo León",
  description: "Bienestar emocional al alcance de todos.",
  icons: {
    icon: "/images/logoapnl.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${poppins.className} bg-white text-dark-blue`}>
        <header className="sticky top-0 z-50 w-full py-4 px-6 bg-white shadow-md">
          <nav className="flex justify-between items-center max-w-screen-xl mx-auto">
            <Link href="/" className="text-xl font-bold text-dark-blue flex items-center">
              <Image src="/images/logoapnl.png" alt="Logo APNL" width={40} height={40} className="mr-2 relative top-[-5px] transform scale-[1.25]" />
            </Link>
            <div className="flex items-center gap-6 text-sm font-semibold">
              <Link href="/" className="hover:text-primary-blue transition-colors">
                Inicio
              </Link>
              <Link href="/nosotros" className="hover:text-primary-blue transition-colors">
                Nosotros
              </Link>
              <Link href="/blog" className="hover:text-primary-blue transition-colors">
                Blog
              </Link>
              <Link
                href="/agendar-cita"
                className="px-4 py-2 bg-primary-blue text-white rounded-md hover:bg-opacity-80 transition-colors text-sm"
              >
                Agendar Cita
              </Link>
              <Link
                href="/iniciar-sesion"
                className="px-4 py-2 bg-light-gray text-dark-blue rounded-md hover:bg-opacity-80 transition-colors text-sm"
              >
                Iniciar Sesión
              </Link>
            </div>
          </nav>
        </header>
        <main className="flex flex-col items-center">
          {children}
        </main>
        <Footer /> {/* Add the Footer component here */}
      </body>
    </html>
  );
}