import { FC } from 'react';
import styled from 'styled-components';
import { motion, Variants } from 'framer-motion';
import { flexCenter } from '../../styles/mixins';
import Corner from './Corner';
import { CornerPositions } from './Corner';

interface IBlackBoxProps {
    big?: boolean,
    corners: Array<CornerPositions>,
    children: React.ReactNode,
    variants?: Variants
}

//initial={{scale: 0, opacity:0}} animate={{scale: 1,opacity:1, transition:{ease:"easeInOut",duration:1.6}}}

const BlackBox : FC<IBlackBoxProps> = ({big, corners,children,variants}) => {
  return (
    <StyledBox big={big} variants={variants}>
        {
          corners.map((corner,index) => <Corner big={big} position={corner} key={index} />)
        }
        {children}
    </StyledBox>
  )
}

export const StyledBox = styled(motion.figure)<{big?: boolean}>`
    --box-size: ${(props) => props.big ? "50rem" : "20.8rem"};
    --min-box-size: 50vw;
    
    background-color: ${({theme}) => theme.box};
    color: ${({theme}) => theme.accents};
    border-radius: ${(props) => props.big ? "3.6rem" : "1.8rem"};

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
`;

export default BlackBox