import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    resources: {
      en: {
        // translation: require("../src/locales/en/translation.json"),
        translation: {
          greeting: "Hello in english",
        },
      },
      hi: {
        // translation: require("../src/locales/hi/translation.json"),
        translation: {
          greeting: "Hello in hindi",
        },
      },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
