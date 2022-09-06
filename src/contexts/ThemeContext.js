import React, { useContext, useState } from "react";
const ThemeContext = React.createContext();

export function useThemeContext() {
  return useContext(ThemeContext);
}
export default function Theme({ children }) {
  const [themeColor, setInvert] = useState("black");

  const toggleTheme = (colors) => {
    setInvert(colors);
  };

  return (
    <ThemeContext.Provider value={{ theme: themeColor,  toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
