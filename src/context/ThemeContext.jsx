import { createContext, useState } from "react";

export const contextProvider = createContext();

function ThemeContext({ children }) {
  const [isDark, setIsDark] = useState(true);
  return (
    <contextProvider.Provider value={{ isDark, setIsDark }}>
      <div className={isDark ? "dark" : ""}>{children}</div>
    </contextProvider.Provider>
  );
}

export default ThemeContext;
