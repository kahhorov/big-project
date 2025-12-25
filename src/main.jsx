import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "./i18n/I18n";
// Supports only weight 400
import "@fontsource-variable/roboto-flex";
import ThemeContext from "./context/Context";
import { Toaster } from "react-hot-toast";
createRoot(document.getElementById("root")).render(
  <ThemeContext>
    <Toaster position="top-right" reverseOrder={false} />
    <App />
  </ThemeContext>
);
