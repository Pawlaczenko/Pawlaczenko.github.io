import React, { FC } from 'react'
import styled from 'styled-components';
import GithubIcon, { StyledGithubIcon } from '../../components/GithubIcon/GithubIcon';
import ThemeToggler, { StyledToggleButton } from '../../components/ThemeToggler/ThemeToggler';
import { flexSpaceBetween } from '../../styles/mixins';
import StyledSection from '../Section/Section';
import Navigation from './Navigation';
import { useState, useEffect } from 'react';
import Burger from '../../components/Burger/Burger';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import useMediaQuery from '../../hooks/useMediaQuery';
import { BREAKPOINTS } from '../../styles/variables';
import BackIcon from '../../components/BackIcon/BackIcon';
import { fadeInDirecion, containerStagger } from '../../styles/animationVariants';

const Header : FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const location = useLocation();
  const isBurgerVisible = useMediaQuery(`(${BREAKPOINTS.navigation})`);
  
  const item = fadeInDirecion("y",-20);

  const showMobileControls = () => {
    if(location.pathname==="/"){
      return <Burger isOpen={isOpen} handleClick={()=>setIsOpen(!isOpen)} variants={item}/>
    } else if(isBurgerVisible) {
      return <BackIcon variants={item} />
    }
  }

  useEffect(()=>{
    setIsOpen(false);
  },[location.pathname,location.hash])
  
  return (
    <Wrapper as={"header"}>
      <StyledHeader variants={containerStagger} animate="show" initial="hidden">
        <Navigation variants={item} isOpen={isOpen} />
        <ThemeToggler variants={item} />
        <GithubIcon variants={item} />
        {showMobileControls()}
      </StyledHeader>
    </Wrapper>
  )
}

const Wrapper = styled(StyledSection)`
  padding: 4.5rem 0;
`;

const StyledHeader = styled(motion.div)`
  ${flexSpaceBetween};
  position: relative;

  & > ${StyledToggleButton} {
    position: absolute;
    left: calc(50% - var(--icon-size));
  }

`;

export default Header