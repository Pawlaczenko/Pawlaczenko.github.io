import { motion } from 'framer-motion';
import React, { FC } from 'react'
import styled from 'styled-components';
import { ITechnology } from '../../data/technologies';
import { flexCenter } from '../../styles/mixins';
import { shadeColor } from '../../helpers/shadeColor.helper';

const getLettersCount = (word:string) : number => {
	return Math.max(...(word.split(" ").map(el => el.length)));
}

const TechBubble : FC<ITechnology> = ({name,color,icon,variants}) => {
  const noOfLetters : number = getLettersCount(name || "");
  return (
    <StyledTechBubble variants={variants} color={color} noOfLetters={noOfLetters}>
        {name}
        {icon}
    </StyledTechBubble>
  )
}

const StyledTechBubble = styled(motion.li)<{color?: string,noOfLetters: number}>`
	--item-size: 16rem;
	width: min(40vw, var(--item-size));
	height: min(40vw, var(--item-size));

	text-align: center;
	font-weight: var(--fw-black);
	font-size: calc((var(--item-size) / ${props=>props.noOfLetters}));
  	color: black;

	border: 1.6rem solid ${(props) => props.color};
	border-radius: 50%;

	${flexCenter};
  	flex-shrink: 1;
	position: relative;
	z-index: 1;
	background-color: white;

	box-shadow: inset 0 5px 0 var(--color-light),
				0 5px 0 ${({color}) => shadeColor(color || "ffffff", -20)};

  & > svg {
    position: absolute;
    fill: var(--color-light);
    width: 50%;
    height: 50%;
	z-index: -1;
  }
`;

export default TechBubble