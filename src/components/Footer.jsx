import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-mentadark text-white py-12">
      <div className="container mx-auto px-4">
        {/* Contenido Principal del Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Columna del Logo */}
          <div className="flex flex-col">
            <img
              src="/images/logo.svg"
              alt="MentaPixel Logo"
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-300 max-w-md">
              Transformamos ideas en soluciones digitales innovadoras. 
              Nuestro compromiso es crear experiencias tecnológicas 
              que impulsen el éxito de tu negocio.
            </p>
          </div>

          {/* Columna de Contacto */}
          <div className="flex flex-col md:items-end">
            <h3 className="text-xl font-semibold mb-4 text-mentagreen">
              Información de Contacto
            </h3>
            <div className="space-y-3 md:text-right">
              <p className="flex items-center md:justify-end gap-2">
                <span className="text-mentagreen">📍</span>
                <span>
                  Av. Principal 123, Torre Empresarial,
                  <br />
                  Piso 15, Oficina 1502
                  <br />
                  Ciudad de México, México
                </span>
              </p>
              <p className="flex items-center md:justify-end gap-2">
                <span className="text-mentagreen">📞</span>
                <span>+52 (55) 1234-5678</span>
              </p>
              <p className="flex items-center md:justify-end gap-2">
                <span className="text-mentagreen">✉️</span>
                <a 
                  href="mailto:contacto@mentapixel.com"
                  className="hover:text-mentagreen transition-colors"
                >
                  contacto@mentapixel.com
                </a>
              </p>
              <p className="flex items-center md:justify-end gap-2">
                <span className="text-mentagreen">⏰</span>
                <span>
                  Lunes a Viernes: 9:00 AM - 6:00 PM
                  <br />
                  Sábado: 9:00 AM - 1:00 PM
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Línea Divisoria */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Derechos Reservados */}
        <div className="text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} MentaPixel. Todos los derechos reservados.
            <br />
            <span className="text-sm">
              Innovación digital para el crecimiento de tu empresa.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 