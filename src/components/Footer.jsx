import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  
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
              {t('footer.companyDescription')}
            </p>
          </div>

          {/* Columna de Contacto */}
          <div className="flex flex-col md:items-end">
            <h3 className="text-xl font-semibold mb-4 text-mentagreen">
              {t('footer.contactInfo')}
            </h3>
            <div className="space-y-3 md:text-right">
              <p className="flex items-center md:justify-end gap-2">
                <span className="text-mentagreen">📍</span>
                <span>
                  {t('footer.address.line1')}
                  <br />
                  {t('footer.address.line2')}
                  <br />
                  {t('footer.address.line3')}
                </span>
              </p>
              <p className="flex items-center md:justify-end gap-2">
                <span className="text-mentagreen">📞</span>
                <span>{t('footer.phone')}</span>
              </p>
              <p className="flex items-center md:justify-end gap-2">
                <span className="text-mentagreen">✉️</span>
                <a 
                  href={`mailto:${t('footer.email')}`}
                  className="hover:text-mentagreen transition-colors"
                >
                  {t('footer.email')}
                </a>
              </p>
              <p className="flex items-center md:justify-end gap-2">
                <span className="text-mentagreen">⏰</span>
                <span>
                  {t('footer.hours.weekdays')}
                  <br />
                  {t('footer.hours.weekend')}
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
            © {new Date().getFullYear()} MentaPixel. {t('footer.copyright')}
            <br />
            <span className="text-sm">
              {t('footer.slogan')}
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 