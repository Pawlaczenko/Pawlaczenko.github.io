import React, { FC } from 'react'
import styled from 'styled-components';
import { ITechnology } from '../../data/technologies';
import { flexCenter } from '../../styles/mixins';

const getLettersCount = (word:string) : number => {
	return Math.max(...(word.split(" ").map(el => el.length)));
}

const TechBubble : FC<ITechnology> = ({name,color,icon}) => {
  const noOfLetters : number = getLettersCount(name || "");
  return (
    <StyledTechBubble color={color} noOfLetters={noOfLetters}>
        <p>{name}</p>
        {icon}
    </StyledTechBubble>
  )
}

const StyledTechBubble = styled.li<{color?: string,noOfLetters: number}>`
	--item-size: 16rem;
	width: min(40vw, var(--item-size));
	height: min(40vw, var(--item-size));

	text-align: center;
	font-weight: var(--fw-black);
	font-size: calc((var(--item-size) / ${props=>props.noOfLetters}));
  	color: black;

	border: 1.6rem solid ${props=>props.color};
	border-radius: 50%;

	${flexCenter};
  	flex-shrink: 1;
	position: relative;
	background-color: white;

	box-shadow: inset 0 5px 0 var(--color-light);

  &::before {
		content: "";
		position: absolute;
		z-index: -1;
		top: 2rem;
		--shadow-size: calc(100% + 1.6rem);

		width: var(--shadow-size);
		height: 100%;
		border-radius: inherit;
		background-color: ${props => props.color};
		filter: brightness(85%);
	}

  & > p {
    position: absolute;
    z-index: 2;
  }

  & > svg {
    position: absolute;
    fill: var(--color-light);
    width: 50%;
    height: 50%;
  }
`;

export default TechBubble