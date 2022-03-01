import React, { createContext } from "react";

const ThemeContext = React.createContext("light");

export function ThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(true);

  return (
    <ThemeContext.Provider value={darkTheme}>{children}</ThemeContext.Provider>
  );
}
