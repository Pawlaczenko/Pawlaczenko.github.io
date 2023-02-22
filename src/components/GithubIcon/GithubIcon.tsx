import React, { FC } from 'react'
import { GoMarkGithub } from "react-icons/go";
import { LINKS } from '../../data/links';
import StyledIcon from '../../components/Icon/Icon';
import styled from 'styled-components';

const GithubIcon : FC = () => {
  return (
    <StyledGithubIcon as="a" target="_blank" href={LINKS.get("github")}>
        <GoMarkGithub />
    </StyledGithubIcon>
  )
}

export const StyledGithubIcon = styled(StyledIcon)`
    
`;

export default GithubIcon