import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Obtener el idioma actual
  const currentLanguage = i18n.language || 'es';

  // Obtener el nombre del idioma actual
  const getCurrentLanguageName = () => {
    switch (currentLanguage.substring(0, 2)) {
      case 'en':
        return t('languageSelector.en');
      case 'de':
        return t('languageSelector.de');
      case 'es':
      default:
        return t('languageSelector.es');
    }
  };

  // Cambiar el idioma
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setIsOpen(false);
  };

  // Cerrar el menú cuando se hace clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="flex items-center space-x-2 bg-white/10 backdrop-blur-md py-2 px-4 rounded-lg text-white hover:bg-white/20 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>🌐</span>
        <span>{getCurrentLanguageName()}</span>
        <span className="text-xs">▼</span>
      </button>

      {isOpen && (
        <div className="absolute mt-2 right-0 w-48 bg-white rounded-md shadow-lg z-50 overflow-hidden">
          <div className="py-1">
            <button
              className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                currentLanguage.startsWith('es') ? 'bg-gray-100 font-semibold' : ''
              }`}
              onClick={() => changeLanguage('es')}
            >
              🇪🇸 {t('languageSelector.es')}
            </button>
            <button
              className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                currentLanguage.startsWith('en') ? 'bg-gray-100 font-semibold' : ''
              }`}
              onClick={() => changeLanguage('en')}
            >
              🇬🇧 {t('languageSelector.en')}
            </button>
            <button
              className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                currentLanguage.startsWith('de') ? 'bg-gray-100 font-semibold' : ''
              }`}
              onClick={() => changeLanguage('de')}
            >
              🇩🇪 {t('languageSelector.de')}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector; 