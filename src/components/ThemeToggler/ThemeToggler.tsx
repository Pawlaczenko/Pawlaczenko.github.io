import { FC } from 'react'
import { FiSun, FiMoon } from "react-icons/fi";
import StyledIcon from '../Icon/Icon';
import { useThemeContext } from '../../context/ThemeContext';
import styled from 'styled-components';
import { motion, Variants } from 'framer-motion';

const ThemeToggler : FC<{variants?:Variants}> = ({variants}) => {
  const {themeName, toggleTheme} = useThemeContext();
  const Icon = themeName === "light" ? FiMoon : FiSun;
  return (
    <StyledToggleButton id="theme-button" variants={variants} onClick={toggleTheme} aria-label="Toggle Theme Button">
      <StyledThemeToggler whileTap={{y:"80%"}}>
        <Icon />
      </StyledThemeToggler>
    </StyledToggleButton>
  )
}

export const StyledToggleButton = styled(motion.button)`
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