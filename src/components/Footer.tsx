import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full bg-dark-blue text-white">
      <div className="max-w-screen-xl mx-auto px-8 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Branding */}
        <div className="col-span-1 md:col-span-2">
          <Image src="/images/logoapnl.png" alt="Logo APNL" width={50} height={50} className="mb-4" />
          <p className="text-xs opacity-70 max-w-sm">
            Asociación de Psicólogos de Nuevo León A.C. Comprometidos con el bienestar emocional y la salud mental de nuestra comunidad.
          </p>
        </div>

        {/* Contact Information */}
        <div>
          <h4 className="font-semibold mb-4 text-sm">Contacto</h4>
          <ul className="text-xs space-y-3 opacity-70">
            <li className="flex items-start">
              <span className="mt-1 mr-2">📍</span>
              <span>Calle Ignacio Allende 1140, Monterrey, Mexico.</span>
            </li>
            <li className="flex items-center">
              <span className="mr-2">📞</span>
              <span>(81) 1234 5678</span>
            </li>
            <li className="flex items-center">
              <span className="mr-2">✉️</span>
              <span>contacto@apnl.org</span>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="font-semibold mb-4 text-sm">Redes Sociales</h4>
          <div className="flex space-x-4">
            <a href="#" className="opacity-70 hover:opacity-100 transition-opacity">
              {/* Facebook Icon SVG */}
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z"/></svg>
            </a>
            <a href="#" className="opacity-70 hover:opacity-100 transition-opacity">
              {/* Instagram Icon SVG */}
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.058 1.644-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.44-1.441-1.44z"/></svg>
            </a>
          </div>
        </div>
      </div>
      <div className="bg-black bg-opacity-20 text-center py-3">
        <p className="text-xs opacity-50">&copy; {new Date().getFullYear()} Asociación de Psicólogos de Nuevo León A.C. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;