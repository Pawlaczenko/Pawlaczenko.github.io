import React, { FC } from 'react'
import styled from 'styled-components';
import GithubIcon, { StyledGithubIcon } from '../../components/GithubIcon/GithubIcon';
import ThemeToggler, { StyledToggleButton } from '../../components/ThemeToggler/ThemeToggler';
import { flexSpaceBetween } from '../../styles/mixins';
import StyledSection from '../Section/Section';
import Navigation, { StyledNavigation } from './Navigation';
import { useState, useEffect } from 'react';
import Burger from '../../components/Burger/Burger';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const container = {
  show: {
    transition: {
      staggerChildren: 0.25
    }
  }
}

const item = {
  hidden: {
    y: -20,
    opacity: 0
  },
  show: {
    y: 0,
    opacity: 1
  }
}

const Header : FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const location = useLocation();

  useEffect(()=>{
    setIsOpen(false);
  },[location.pathname,location.hash])
  
  return (
    <Wrapper as={"header"}>
      <StyledHeader variants={container} animate="show" initial="hidden">
        <Navigation variants={item} isOpen={isOpen} />
        <ThemeToggler variants={item} />
        <GithubIcon variants={item} />
        <Burger isOpen={isOpen} handleClick={()=>setIsOpen(!isOpen)} />
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
    left: calc(45%);
  }

`;

export default Header