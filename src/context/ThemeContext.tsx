import React, { createContext, useContext } from "react"

export type GlobalTheme = {
  themeName: string,
  toggleTheme: () => void;
}

export const ThemeContext = React.createContext<GlobalTheme>({themeName:"light", toggleTheme:()=>{}});

export const useThemeContext = () => useContext(ThemeContext)