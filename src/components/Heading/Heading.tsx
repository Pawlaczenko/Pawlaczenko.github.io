import { motion } from 'framer-motion';
import React from 'react'
import { FC } from 'react';
import styled, { css } from 'styled-components';
import { BREAKPOINTS } from '../../styles/variables';

interface IHeadingProps {
    children: React.ReactNode
    primary?: boolean
    withDecoration?: boolean
}

const Heading : FC<IHeadingProps> = ({children, primary,withDecoration}) => {
  const tag = primary ? motion.h1 : motion.h2;
  return (
    <StyledHeading as={tag} primary={primary} withDecoration={withDecoration}>{children}</StyledHeading>
  )
}

const HeadingDecoration = css`
  position: relative;

  &::before,
  &::after{
      content: "";
      position: absolute;
      height: 1rem;
      width: 100vw;

      background: var(--gradient-orange);
      border-radius: 5rem;

      --horizontal-offset: 35%;
      --vertical-offset: -2.5rem;

      box-shadow: -1rem .5rem 0 orange;
  }

  &:before {
      right: var(--horizontal-offset);
      top: var(--vertical-offset);
  }

  &:after {
      left: var(--horizontal-offset);
      bottom: var(--vertical-offset);
  }
`

export const StyledHeading = styled(motion.h1)<{primary?: boolean,withDecoration?:boolean}>`
    font-family: var(--ff-heading);
    font-size: ${(props) => props.primary ? "var(--fs-heading)" : "var(--fs-subheading)"};
    text-align: ${(props) => props.primary ? "unset" : "center"};
    letter-spacing: .1rem;
    
    & mark {
      background: var(--gradient-orange);
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
    }

    ${(props) => props.withDecoration && HeadingDecoration};

    @media only screen and (${BREAKPOINTS.large}) {
      text-align: center;
    }
`;

export default Heading