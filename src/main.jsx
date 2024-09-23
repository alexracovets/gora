
import { I18nextProvider } from 'react-i18next';
import ReactDOM from 'react-dom/client';


import App from './App.jsx';
import i18n from "./locales/i18n";

import './index.scss';
ReactDOM.createRoot(document.getElementById('root')).render(
  <I18nextProvider i18n={i18n}>
    <App />
  </I18nextProvider>
)
