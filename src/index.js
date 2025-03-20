import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Importar configuración de i18n (debe estar antes de cualquier componente que use traducciones)
import './i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); 