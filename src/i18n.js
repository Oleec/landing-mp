import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Importación de recursos de traducción
import translationES from './locales/es/translation.json';
import translationEN from './locales/en/translation.json';
import translationDE from './locales/de/translation.json';

// Recursos de traducción
const resources = {
  es: {
    translation: translationES
  },
  en: {
    translation: translationEN
  },
  de: {
    translation: translationDE
  }
};

i18n
  // Detectar automáticamente el idioma del navegador
  .use(LanguageDetector)
  // Integración con React
  .use(initReactI18next)
  // Inicializar i18next
  .init({
    resources,
    fallbackLng: 'es', // Idioma de respaldo si no se detecta ninguno
    debug: process.env.NODE_ENV === 'development', // Solo modo debug en desarrollo
    
    interpolation: {
      escapeValue: false, // React ya escapa por defecto
    },

    // Opciones del detector de idioma
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage', 'cookie'], // Almacenar en cookies y localStorage
      lookupQuerystring: 'lng', // Parámetro URL para cambiar el idioma manualmente
      lookupCookie: 'i18next', // Nombre de la cookie
      lookupLocalStorage: 'i18nextLng', // Nombre en localStorage
      
      // Duración de la cookie en días
      cookieExpirationDate: new Date(Date.now() + 30 * 86400000), // 30 días
      cookieDomain: window.location.hostname,
    }
  });

export default i18n; 