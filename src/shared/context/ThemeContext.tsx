import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { Themes } from "../types/Theme";


type ThemeContextType = {
  theme: Themes;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Themes>(Themes.LIGHT);

  useEffect(() => {
    const stored = localStorage.getItem("theme") as Themes | null;
    if (stored) {
      setTheme(stored);
      document.documentElement.classList.toggle(Themes.DARK, stored === Themes.DARK);
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle(Themes.DARK, theme === Themes.DARK);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === Themes.LIGHT ? Themes.DARK : Themes.LIGHT);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
  return ctx;
}
