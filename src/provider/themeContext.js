import React, { createContext } from "react";

const ThemeContext = React.createContext("light");

export function ThemeProvider({ children }) {
  return <ThemeContext.Provider>{children}</ThemeContext.Provider>;
}
