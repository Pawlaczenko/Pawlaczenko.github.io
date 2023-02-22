import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ThemeProvider } from "styled-components";
import Footer from "./layout/Footer/Footer"
import Header from "./layout/Header/Header"
import HomePage from "./pages/HomePage"
import GlobalStyles from "./styles/globalStyles";
import { useTheme } from './hooks/useTheme';
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const [theme, themeName, toggleTheme] = useTheme("light");
  
  return (
    <ThemeProvider theme={theme}>
      <ThemeContext.Provider value={{themeName, toggleTheme}}>
        <div className="App">
          <GlobalStyles />
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </div>
      </ThemeContext.Provider>
    </ThemeProvider>
  )
}

export default App
