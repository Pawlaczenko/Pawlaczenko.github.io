import React, { FC } from 'react'
import { FiSun, FiMoon } from "react-icons/fi";
import StyledIcon from '../Icon/Icon';
import { useThemeContext } from '../../context/ThemeContext';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ThemeToggler : FC = () => {
  const {themeName, toggleTheme} = useThemeContext();
  const Icon = themeName === "light" ? FiMoon : FiSun;
  return (
    <StyledToggleButton onClick={toggleTheme}>
      <StyledThemeToggler 
        whileTap={{y:"80%"}}
      >
        <Icon />
      </StyledThemeToggler>
    </StyledToggleButton>
  )
}

export const StyledToggleButton = styled.button`
    background: unset;
    color: unset;
    border: none;
    cursor: pointer;
    overflow-y: hidden;
    padding: 0;
    z-index: 51;
`;

const StyledThemeToggler = styled(motion(StyledIcon))`

`;

export default ThemeToggler