import React, { FC } from 'react'
import { FiSun, FiMoon } from "react-icons/fi";
import StyledIcon from '../Icon/Icon';
import { useThemeContext } from '../../context/ThemeContext';
import styled from 'styled-components';

const ThemeToggler : FC = () => {
  const {themeName, toggleTheme} = useThemeContext();
  const Icon = themeName === "light" ? <FiMoon /> : <FiSun />;
  return (
    <StyledThemeToggler onClick={toggleTheme}>
      {Icon}
    </StyledThemeToggler>
  )
}

export const StyledThemeToggler = styled(StyledIcon)`

`;

export default ThemeToggler