import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation resources
const resources = {
  en: {
    translation: {
      // Common
      "app.title": "Coffee Shop",
      "app.welcome": "Welcome, {{username}}!",
      
      // Login
      "login.title": "Login",
      "login.email": "Email",
      "login.password": "Password",
      "login.submit": "Sign In",
      "login.error": "Invalid email or password",
      
      // Navigation
      "nav.home": "Home",
      "nav.menu": "Menu",
      "nav.stores": "Stores",
      "nav.cart": "Cart",
      
      // Home
      "home.menu": "Menu",
      "home.stores": "Stores",
      "home.cart": "Cart",
      
      // Menu
      "menu.title": "MENU",
      
      // Stores
      "stores.title": "STORES",
      
      // Cart
      "cart.title": "CART",

      // Goods
      "goods.cheese": "Cheese",
      "goods.bread": "Bread",
      "goods.ham": "Ham",
      "goods.lettuce": "Lettuce",

    }
  },
  es: {
    translation: {
      // Common
      "app.title": "Cafetería",
      "app.welcome": "¡Bienvenido, {{username}}!",
      
      // Login
      "login.title": "Iniciar Sesión",
      "login.email": "Correo electrónico",
      "login.password": "Contraseña",
      "login.submit": "Entrar",
      "login.error": "Correo electrónico o contraseña inválidos",
      
      // Navigation
      "nav.home": "Inicio",
      "nav.menu": "Menú",
      "nav.stores": "Tiendas",
      "nav.cart": "Carrito",
      
      // Home
      "home.menu": "Menú",
      "home.stores": "Tiendas",
      "home.cart": "Carrito",
      
      // Menu
      "menu.title": "MENÚ",
      
      // Stores
      "stores.title": "TIENDAS",
      
      // Cart
      "cart.title": "CARRITO",

      // Goods
      "goods.cheese": "Queso",
      "goods.bread": "Pan",
      "goods.ham": "Jamón",
      "goods.lettuce": "Lechuga",
    }
  }
};

i18n
  // Detect user language
  .use(LanguageDetector)
  // Pass the i18n instance to react-i18next
  .use(initReactI18next)
  // Initialize i18next
  .init({
    resources,
    fallbackLng: 'en', // Default language
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    detection: {
      order: ['localStorage', 'navigator'], // First check localStorage, then browser settings
      caches: ['localStorage'], // Cache detected language
    }
  });

export default i18n;