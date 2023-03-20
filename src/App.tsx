import { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { ThemeProvider } from "styled-components";
import Footer from "./layout/Footer/Footer"
import Header from "./layout/Header/Header"
import HomePage from "./pages/HomePage"
import GlobalStyles from "./styles/globalStyles";
import { useTheme } from './hooks/useTheme';
import { ThemeContext } from "./context/ThemeContext";
import styled from 'styled-components';
import orb from './assets/back-orb.svg';
import ProjectPage from './pages/ProjectPage';

function App() {
  const [theme, themeName, toggleTheme] = useTheme("light");
  
  return (
    <ThemeProvider theme={theme}>
      <ThemeContext.Provider value={{themeName, toggleTheme}}>
        <StyledAppWrapper>
          <GlobalStyles />
          <BrowserRouter>
            <Header />
            <Routes>
              <Route index element={<HomePage />} />
              <Route path="/project/:id" element={<ProjectPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </StyledAppWrapper>
      </ThemeContext.Provider>
    </ThemeProvider>
  )
}

const StyledAppWrapper = styled.div`
  overflow-x: hidden;
  background: 
    url(${orb}) top -20vw left -20vw / 60vw no-repeat,
    url(${orb}) top -20vw right -20vw / 50vw no-repeat;
  
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export default App