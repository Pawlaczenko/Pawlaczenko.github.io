import { useEffect, useState } from "react";
import { darkTheme, lightTheme, ITheme } from '../styles/theme';

export const useTheme = (initialValue:string) : [ITheme,string,() => void] => {
    const [theme, setTheme] = useState(initialValue);
    const isDarkTheme = theme === "dark";
    const toggleTheme = () => {
      const updatedTheme = isDarkTheme ? "light" : "dark";
      setTheme(updatedTheme);
      localStorage.setItem("theme", updatedTheme);
    }
  
    useEffect(() => {
      const savedTheme = localStorage.getItem("theme");
      const prefersDark = window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (savedTheme && ["dark", "light"].includes(savedTheme)) {
        setTheme(savedTheme);
      } else if (prefersDark) {
        setTheme("dark");
      }
    }, []);

    const chosenTheme : ITheme = isDarkTheme ? darkTheme : lightTheme;
    return [chosenTheme, theme, toggleTheme];
}