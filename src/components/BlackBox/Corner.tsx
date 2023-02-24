import { FC } from 'react'
import styled from 'styled-components';
import { motion } from 'framer-motion';
import useMediaQuery from '../../hooks/useMediaQuery';
import { BREAKPOINTS } from '../../styles/variables';

export enum CornerPositions {
    TopLeft = "0deg",
    TopRight = "90deg",
    BottomRight = "180deg",
    BottomLeft = "270deg",
}

interface ICornerProps {
  position: CornerPositions,
  big?: boolean,
  isBelowRemToggle: boolean
}

const bigPath : string = "M30 150V37C30 33.134 33.134 30 37 30H150";
const smallPath: string = "M16 66V23C16 19.134 19.134 16 23 16H66";

const Corner : FC<ICornerProps> = ({position,big,isBelowRemToggle}) => {  
  const strokeWidth = big ? 60 : 32;
  const cornerSize = big ? 180 : 82;
  const dPath = big ? bigPath : smallPath;
  const strokeDivider = isBelowRemToggle ? 3 : 2;

  return (
    <StyledCorner offset={strokeWidth/strokeDivider} rotate={position} width={cornerSize} height={cornerSize} viewBox={`0 0 ${cornerSize} ${cornerSize}`} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d={dPath} stroke="url(#paint0_linear_1_6)" strokeOpacity="0.9" strokeWidth={strokeWidth} strokeLinecap="round"/>
        <defs>
            <linearGradient id="paint0_linear_1_6" x1="90" y1="30" x2="90" y2="150" gradientUnits="userSpaceOnUse">
                <stop stopColor="#F85A3E"/>
                <stop offset="1" stop-color="#FF7733"/>
            </linearGradient>
        </defs>
    </StyledCorner>
  )
}

interface IStyledCornerProps {
    rotate: string,
    offset: number
}

const StyledCorner = styled(motion.svg)<IStyledCornerProps>`
    --corner-size: 35%;
    --corner-offset: ${(props) => (-1 * props.offset) + "px"};
    
    transform: rotate(${(props) => props.rotate});
    width: var(--corner-size); 
    height: var(--corner-size);

    position: absolute;
    ${(props) => {
        switch(props.rotate){
            case CornerPositions.TopRight:
                return "right: var(--corner-offset); top: var(--corner-offset);";
            case CornerPositions.BottomRight:
                return "right: var(--corner-offset); bottom: var(--corner-offset);";
            case CornerPositions.BottomLeft:
                return "left: var(--corner-offset); bottom: var(--corner-offset);";
            case CornerPositions.BottomLeft:            
            default:
                return "left: var(--corner-offset); top: var(--corner-offset)";
        }
    }}
`;

export default Corner