import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      Login: "Login",
      "Sign up": "Sign up",
      "Email address": "Email address",
      "Login to your account": "Login to your account",
      "Don't have an account?": "Don't have an account?",
      Password: "Password",
      "Repeat password": "Repeat password",
      "Can't be empty": "Can't be empty",
      "Create an account": "Create an account",
      "Already have an account?": "Already have an account?",
      "Password did't match": "Password did't match",
    },
  },
  uz: {
    translation: {
      Login: "Kirish",
      "Sign up": "Ro'yxatdan O'tish",
      "Email address": "Elektron pochta manzil",
      "Login to your account": "Hisobingizga kiring",
      "Don't have an account?": "Hisobingiz yo'qmi?",
      Password: "Parol",
      "Repeat password": "Parolni takrorlang",
      "Can't be empty": "Bo'sh bo'lishi mumkin emas",
      "Create an account": "Hisob yaratish",
      "Already have an account?": "Allaqachon hisobingiz bormi?",
      "Password did't match": "Parol mos kelmadi",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
