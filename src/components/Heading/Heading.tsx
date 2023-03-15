import { motion, useInView, Variants } from 'framer-motion';
import React, { useRef } from 'react'
import { FC } from 'react';
import styled, { css } from 'styled-components';
import { BREAKPOINTS } from '../../styles/variables';

interface IHeadingProps {
    children: React.ReactNode
    primary?: boolean
    withDecoration?: boolean,
    variants?: Variants
}

const secAnimation = {
  hidden: {
    opacity: 0,
    y: 15
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeIn",
      duration: 1
    }
  }
}

const Heading : FC<IHeadingProps> = ({children, primary,withDecoration,variants}) => {
  const tag = primary ? motion.h1 : motion.h2;
  const animation = primary ? variants : secAnimation;
  const ref = useRef(null);
  const isInView = useInView(ref,{once:true});

  return (
    <StyledHeading 
      variants={animation} 
      as={tag} 
      primary={primary} 
      withDecoration={withDecoration}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      ref={ref}
      isInView={isInView} >
        {children}
    </StyledHeading>
  )
}

const HeadingDecoration = css<{isInView:boolean}>`
  @keyframes swingIn {
    0% {
      width: 0%;
    }
    100%{
      width: 100%;
    }
  }
  
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
      ${(props) => props.isInView && "animation: swingIn 1.5s ease-in-out both" };
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

export const StyledHeading = styled(motion.h1)<{primary?: boolean,withDecoration?:boolean,isInView: boolean}>`
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