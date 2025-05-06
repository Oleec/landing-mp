import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const currentLanguage = i18n.language || 'es';

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setIsOpen(false);
  };

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

  const getFlag = (lang) => {
    switch (lang) {
      case 'en':
        return '🇬🇧';
      case 'de':
        return '🇩🇪';
      case 'es':
      default:
        return '🇪🇸';
    }
  };

  return (
      <div className="relative" ref={dropdownRef}>
        {/* Round button with flag only */}
        <button
            className="w-10 h-10 flex items-center justify-center bg-white/10 backdrop-blur-md text-xl rounded-full text-white hover:bg-white/20 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
        >
          {getFlag(currentLanguage)}
        </button>

        {/* Dropdown */}
        {isOpen && (
            <div className="absolute mt-2 right-0 bg-white rounded-md shadow-lg z-50 overflow-hidden">
              <div className="py-1 flex flex-col">
                <button
                    className={`px-4 py-2 text-lg hover:bg-gray-100 ${
                        currentLanguage.startsWith('es') ? 'bg-gray-100 font-semibold' : ''
                    }`}
                    onClick={() => changeLanguage('es')}
                >
                  🇪🇸
                </button>
                <button
                    className={`px-4 py-2 text-lg hover:bg-gray-100 ${
                        currentLanguage.startsWith('en') ? 'bg-gray-100 font-semibold' : ''
                    }`}
                    onClick={() => changeLanguage('en')}
                >
                  🇬🇧
                </button>
                <button
                    className={`px-4 py-2 text-lg hover:bg-gray-100 ${
                        currentLanguage.startsWith('de') ? 'bg-gray-100 font-semibold' : ''
                    }`}
                    onClick={() => changeLanguage('de')}
                >
                  🇩🇪
                </button>
              </div>
            </div>
        )}
      </div>
  );
};

export default LanguageSelector;
