import { useContext } from "react";
import { contextProvider } from "../../context/ThemeContext";

function Navbar() {
  const { isDark, setIsDark } = useContext(contextProvider);
  return (
    <nav>
      <button
        onClick={() => setIsDark(!isDark)}
        className="border py-1 px-3 rounded-md"
      >
        {isDark ? "light" : "dark"}
      </button>
    </nav>
  );
}

export default Navbar;
