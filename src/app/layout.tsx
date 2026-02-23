import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-sans", // Use variable for Tailwind integration
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Psicólogos de Nuevo León",
  description: "Bienestar emocional al alcance de todos.",
  icons: {
    icon: "/images/logoapnl.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${poppins.variable} font-sans bg-background text-foreground antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}