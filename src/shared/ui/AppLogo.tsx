import React from "react";
import { Logo, DarkLogo } from "../../../public/Images";
import { useTheme } from "../context/ThemeContext";
import { Themes } from "../types/Theme";

const AppLogo = () => {
  const { theme } = useTheme();
  return theme === Themes.DARK ? <DarkLogo /> : <Logo />;
};

export default AppLogo;
