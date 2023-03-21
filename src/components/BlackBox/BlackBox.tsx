import { FC } from 'react';
import styled, { css } from 'styled-components';
import { motion, Variants } from 'framer-motion';
import { flexCenter } from '../../styles/mixins';
import Corner from './Corner';
import { CornerPositions } from './Corner';
import { Link } from 'react-router-dom';

interface IBlackBoxProps {
    isPrimary?: boolean,
    corners: Array<CornerPositions>,
    children: React.ReactNode,
    variants?: Variants
}

const BlackBox : FC<IBlackBoxProps> = ({isPrimary, corners,children,variants}) => {
  return (
    <StyledBox isPrimary={isPrimary} variants={variants}>
        {
          corners.map((corner,index) => <Corner isPrimary={isPrimary} position={corner} key={index} />)
        }
        {children}
    </StyledBox>
  )
}

interface IBlackBoxLinkProps {
  corners: Array<CornerPositions>,
  children: React.ReactNode,
  variants?: Variants,
  id: string
}

export const BlackBoxLink : FC<IBlackBoxLinkProps> = ({corners,children,variants,id}) => {
  return (
    <StyledBox as={motion(Link)} to={"/project/"+id} variants={variants}>
      {
        corners.map((corner,index) => <Corner isPrimary={false} position={corner} key={index} />)
      }
      {children}
    </StyledBox>
  )
}

const LinkBoxHover = css`
  transition: background .4s ease-in-out;
  &:hover {
    background: var(--gradient-orange);
    color: var(--color-black);
  }
`;

export const StyledBox = styled(motion.figure)<{isPrimary?: boolean}>`
    --box-size: ${(props) => props.isPrimary ? "50rem" : "20.8rem"};
    --min-box-size: 50vw;
    
    background: ${({theme}) => theme.box};
    color: ${({theme}) => theme.accents};
    border-radius: ${(props) => props.isPrimary ? "3.6rem" : "1.8rem"};

    width: min(var(--min-box-size), var(--box-size));
    height: min(var(--min-box-size),var(--box-size));
    position: relative;
    
    ${flexCenter};

    & > svg {
      --icon-size: 75%;
      width: var(--icon-size);
      height: var(--icon-size);
    }

    font-size: var(--fs-subheading);
    ${(props) => !props.isPrimary && LinkBoxHover};
`;

export default BlackBox