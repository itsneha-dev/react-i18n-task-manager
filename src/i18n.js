import Backend from "i18next-http-backend"
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from "react-i18next";
import i18next from "i18next";

i18next
.use(LanguageDetector) // use function is there to load additional plugin 
.use(Backend)
.use(initReactI18next)
.init({
    backend:{
        loadPath: 'locales/{{lng}}/{{ns}}.json',
    },
    debug: true,
    fallbacklng: "en",
    returnObjects: true,
})
