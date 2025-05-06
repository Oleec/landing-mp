import React from 'react';
import { useTranslation } from 'react-i18next';
import geoIcon from "../assets/images/Geo.svg";
import contactIcon from "../assets/images/contactIcon.svg";
import isoMp from "../assets/images/isoMpBlancoFooter.png";
import mpLogoBlancoFooter from "../assets/images/mpLogoFooterBlanco.png";
import emailIcon from "../assets/images/emailIcon.svg";
import workingHoursIcon from "../assets/images/workingHoursIcon.svg";

const Footer = () => {
  const { t } = useTranslation();
  
  return (
      <footer className="bg-zinc-900 text-white py-12 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start">

              {/* Left: Newsletter */}
              <div className="flex flex-col gap-4 max-w-[80%]">
                  <p className="text-sm leading-relaxed">
                      Transformamos ideas en soluciones digitales innovadoras.<br />
                      Nuestro compromiso es crear experiencias tecnológicas que impulsen el éxito de tu negocio.
                  </p>
                  <input
                      type="email"
                      placeholder="Email Address"
                      className="bg-zinc-700 text-white px-4 py-2 rounded-md w-full focus:outline-none"
                  />
                  <div className="flex items-center gap-3">
                      <button className="bg-[#99FF99] text-zinc-900 font-semibold px-4 py-2 rounded-md hover:bg-lime-300 transition">
                          CONTÁCTANOS
                      </button>
                      <img src={isoMp} alt="ISO Logo" className="w-10 h-10" />
                  </div>
              </div>

              {/* Center: Logo */}
              <div className="flex flex-col items-center justify-end">
                  <img src={mpLogoBlancoFooter} alt="Logo" className="mt-16" />
              </div>

              {/* Right: Contact Info */}
              <div className="text-sm text-right">
                  <h3 className="text-[#99FF99] font-semibold mb-3">Información de Contacto</h3>
                  <ul className="space-y-2">
                      <li className="flex gap-2 justify-end">
                          <img src={geoIcon} alt="Location Icon" className="w-5 h-5 mt-1 text-lime-400" />
                          <span>
            Av. Principal 123, Torre Empresarial,<br />
            Piso 15, Oficina 1502<br />
            Ciudad de México, México
          </span>
                      </li>
                      <li className="flex gap-2 justify-end">
                          <img src={contactIcon} alt="Contact Icon" className="w-5 h-5 mt-1 text-lime-400" />
                          <span>+52 (55) 1234-5678</span>
                      </li>
                      <li className="flex gap-2 justify-end">
                          <img src={emailIcon} alt="Email Icon" className="w-5 h-5 mt-1 text-lime-400" />
                          <span>contacto@mentapixel.com</span>
                      </li>
                      <li className="flex gap-2 justify-end">
                          <img src={workingHoursIcon} alt="Working Hours Icon" className="w-5 h-5 mt-1 text-lime-400" />
                          <span>
            Lunes a Viernes: 9:00 AM - 6:00 PM<br />
            Sábado: 9:00 AM - 1:00 PM
          </span>
                      </li>
                  </ul>
              </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-zinc-700 mt-10 pt-6 text-center text-xs text-zinc-400">
              <p>© 2025 MentaPixel. Todos los derechos reservados.</p>
              <p>Innovación digital para el crecimiento de tu empresa.</p>
          </div>
      </footer>


  );
};

export default Footer; 