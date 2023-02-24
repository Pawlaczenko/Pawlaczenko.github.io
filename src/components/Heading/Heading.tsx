import { motion } from 'framer-motion';
import React from 'react'
import { FC } from 'react';
import styled from 'styled-components';

interface IHeadingProps {
    children: React.ReactNode
    primary?: boolean
}

const Heading : FC<IHeadingProps> = ({children, primary}) => {
  const tag = primary ? motion.h1 : motion.h2;
  return (
    <StyledHeading as={tag} primary={primary}>{children}</StyledHeading>
  )
}

export const StyledHeading = styled(motion.h1)<{primary?: boolean}>`
    font-family: var(--ff-heading);
    font-size: ${(props) => props.primary ? "var(--fs-heading)" : "var(--fs-subheading)"};
    letter-spacing: .1rem;
    
    & mark {
      background: var(--gradient-orange);
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
    }
`;

export default Heading