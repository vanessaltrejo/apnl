import Image from "next/image";
import { Facebook, Instagram, Mail, MapPin, Phone, Linkedin, Music2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-secondary text-secondary-foreground pt-12 pb-6">
      <div className="container px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        {/* Logo and Branding */}
        <div className="col-span-1 md:col-span-2 space-y-4">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="APNL Logo" className="h-12 w-auto" />
            <span className="text-xl font-bold tracking-tight">Psicólogos NL</span>
          </div>
          <p className="text-sm font-medium text-secondary-foreground/90 leading-relaxed">
            Asociación de Psicólogos de Nuevo León A.C.
          </p>
        </div>

        {/* Contact Information */}
        <div className="space-y-4">
          <h4 className="font-bold text-lg">Contacto</h4>
          <ul className="text-sm space-y-3 opacity-90">
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-primary shrink-0" />
              <span>(81) 1234 5678</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-primary shrink-0" />
              <span>contacto@apnl.org</span>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="space-y-4">
          <h4 className="font-bold text-lg">Síguenos</h4>
          <div className="flex gap-4">
            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-primary hover:text-white transition-all" aria-label="Facebook">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-primary hover:text-white transition-all" aria-label="Instagram">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-primary hover:text-white transition-all" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-primary hover:text-white transition-all" aria-label="TikTok">
              <Music2 className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="container px-6 border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center text-xs opacity-60 gap-4">
        <p>&copy; {new Date().getFullYear()} APNL A.C. Todos los derechos reservados.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-primary">Aviso de Privacidad</a>
          <a href="#" className="hover:text-primary">Términos y Condiciones</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;