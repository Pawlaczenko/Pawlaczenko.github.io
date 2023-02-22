import React, { FC } from 'react'
import styled from 'styled-components';
import GithubIcon, { StyledGithubIcon } from '../../components/GithubIcon/GithubIcon';
import ThemeToggler, { StyledThemeToggler } from '../../components/ThemeToggler/ThemeToggler';
import { flexSpaceBetween } from '../../styles/mixins';
import StyledSection from '../Section/Section';
import Navigation, { StyledNavigation } from './Navigation';

const Header : FC = () => {
  return (
    <Wrapper as={"header"}>
      <StyledHeader>
        <Navigation />
        <ThemeToggler />
        <GithubIcon />
      </StyledHeader>
    </Wrapper>
  )
}

const Wrapper = styled(StyledSection)`
  padding: 4.5rem 0;
`;

const StyledHeader = styled.div`
  ${flexSpaceBetween};
  position: relative;

  & > ${StyledThemeToggler} {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

`;

export default Header