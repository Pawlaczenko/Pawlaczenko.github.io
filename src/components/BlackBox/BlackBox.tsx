import { FC } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { flexCenter } from '../../styles/mixins';
import Corner from './Corner';
import { CornerPositions } from './Corner';

interface IBlackBoxProps {
    big?: boolean,
    corners: Array<CornerPositions>,
    children: React.ReactNode
}

const BlackBox : FC<IBlackBoxProps> = ({big, corners,children}) => {
  return (
    <StyledBox big={big}>
        {
          corners.map(corner => <Corner big={big} position={corner} />)
        }
        {children}
    </StyledBox>
  )
}

const StyledBox = styled(motion.figure)<{big?: boolean}>`
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
`;

export default BlackBox