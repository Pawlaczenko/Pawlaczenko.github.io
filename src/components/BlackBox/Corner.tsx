import { FC } from 'react'
import styled from 'styled-components';
import { motion } from 'framer-motion';

export enum CornerPositions {
    TopLeft = "0deg",
    TopRight = "90deg",
    BottomRight = "180deg",
    BottomLeft = "270deg",
}

interface ICornerProps {
  position: CornerPositions,
  big?: boolean
}

const bigPath : string = "M30 150V37C30 33.134 33.134 30 37 30H150";
const smallPath: string = "M16 66V23C16 19.134 19.134 16 23 16H66";

const cornerPath = {
    hidden: {
        pathLength: 0,
    },
    visible: {
        pathLength: 1,
    }
}

const Corner : FC<ICornerProps> = ({position,big}) => {  
  const strokeWidth = big ? 60 : 32;
  const cornerSize = big ? 180 : 82;
  const dPath = big ? bigPath : smallPath;

  return (
    <StyledCornerPositioner big={big} rotate={position}>
        <StyledCorner width={cornerSize} height={cornerSize} viewBox={`0 0 ${cornerSize} ${cornerSize}`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path 
                d={dPath} 
                stroke="url(#paint0_linear_1_6)" 
                strokeOpacity="0.9" 
                strokeWidth={strokeWidth} 
                strokeLinecap="round" 
                variants={cornerPath} 
                initial="hidden" 
                animate="visible"
                transition={{duration: 2,delay: .5, type: 'tween', ease: [0.6,0.01,-0.05,0.95]}}/>
            <defs>
                <linearGradient id="paint0_linear_1_6" x1="90" y1="30" x2="90" y2="150" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F85A3E"/>
                    <stop offset="1" stopColor="#FF7733"/>
                </linearGradient>
            </defs>
        </StyledCorner>
    </StyledCornerPositioner>
  )
}

interface IStyledCornerProps {
    rotate: string,
    big?: boolean
}

const StyledCornerPositioner = styled.div<IStyledCornerProps>`
    --corner-size: 35%;
    --corner-offset: ${(props) => props.big ? "-5%" : "-6%"};
    
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
            case CornerPositions.TopLeft:         
            default:
                return "left: var(--corner-offset); top: var(--corner-offset)";
        }
    }}
`;

const StyledCorner = styled(motion.svg)`
    width: 100%;
    height: 100%;
`;

export default Corner