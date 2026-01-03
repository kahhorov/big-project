import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      Login: "Login",
      "Sign up": "Sign up",
      "Full Name": "Full Name",
      "Email address": "Email address",
      "Login to your account": "Login to your account",
      "Don't have an account?": "Don't have an account?",
      Password: "Password",
      "Repeat password": "Repeat password",
      "Can't be empty": "Can't be empty",
      "Create an account": "Create an account",
      "Already have an account?": "Already have an account?",
      "Password did't match": "repeated password didn't match",
      "Account created successfully!": "Account created successfully!",
      "Password must contain letters": "Password must contain letters",
      "Password must contain a number": "Password must contain a number",
      "Password must be at least 6 characters long":
        "Password must be at least 6 characters long",
      "Account was not created": "Account was not created",
      "Logged in successfully!": "Logged in successfully!",
      "Email or password is incorrect. Please try again":
        "Email or password is incorrect. Please try again.",
      "Send verifed link email": "Send verifed link email",
      "Email not verified. Please check your email address":
        "Email not verified. Please check your email address",
      "Night Mode": "Night Mode",
      "Change language": "Change language",
      Language: "Language",
      Version: "Version",
      "Sign in with Google": "Sign in with Google",
      "A confirmation link has been sent to your email!":
        "A confirmation link has been sent to your email!",
    },
  },
  uz: {
    translation: {
      Login: "Kirish",
      "Sign up": "Ro'yxatdan O'tish",
      "Full Name": "To'liq ism kriting",
      "Email address": "Elektron pochta manzil",
      "Login to your account": "Hisobingizga kiring",
      "Don't have an account?": "Hisobingiz yo'qmi?",
      Password: "Parol",
      "Repeat password": "Parolni takrorlang",
      "Can't be empty": "Maydon bo'sh bo'lmasin",
      "Create an account": "Hisob yaratish",
      "Already have an account?": "Allaqachon hisobingiz bormi?",
      "Password did't match": "Takrorlanuvchi parol mos kelmadi",
      "Account created successfully!": "Hisob yaratildi!",
      "Password must contain letters": "Parolda hariflar ishtork etsin",
      "Password must contain a number": "Parolda raqam ishtrok etsin",
      "Password must be at least 6 characters long":
        "Parol kamida 6 ta belgidan iborat bolsin",
      "Account was not created": "Hisob yaratilmadi",
      "Logged in successfully!": "Muvaffaqiyatli tizimga kirdingiz!",
      "Email or password is incorrect. Please try again":
        "Email yoki parol noto'g'ri. Iltimos, qayta urinib ko'ring.",
      "Send verifed link email": "Emailga tasdiqlash linki yuborildi",
      "Email not verified. Please check your email address":
        "Email tasdiqlanmagan. Iltimos, elektron pochta manzilingizni tekshiring",
      "Night Mode": "Tungi Rejim",
      "Change language": "Tilni o'zgartirish",
      Language: "Til",
      Version: "Tizim versiyasi",
      "Sign in with Google": "Google bilan kirish",
      "A confirmation link has been sent to your email!":
        "Elektron pochtangizga tasdiqlash havolasi yuborildi!",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("language") || "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
