import React, { FC, useId } from 'react'
import { GoMarkGithub } from "react-icons/go";
import { LINKS } from '../../data/links';
import StyledIcon from '../../components/Icon/Icon';
import styled from 'styled-components';
import { motion, Variants } from 'framer-motion';

const GithubIcon : FC<{fillColor?:string,variants?:Variants}> = ({fillColor,variants}) => {
  const id = useId();
  const githubId = `githubLink-${id}`;
  return (
    <motion.div variants={variants}>
      <StyledGithubIcon 
        fillColor={fillColor} 
        as="a" 
        target="_blank"
        aria-label="Link to my github"
        id={githubId}
        href={LINKS.get("github")}>
        <GoMarkGithub />
      </StyledGithubIcon>
    </motion.div>
  )
}

export const StyledGithubIcon = styled(StyledIcon)`
    z-index: 51;
`;

export default GithubIcon