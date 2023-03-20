import React from 'react'
import { FC } from 'react';
import styled from 'styled-components';
import { TechnologyKey } from '../../data/technologies';
import TECHNOLOGIES from '../../data/technologies';
import TechBubble from '../TechBubble/TechBubble';
import { motion } from 'framer-motion';
import { containerStagger } from '../../styles/animationVariants';

interface ITechBarProps {
	technologies: TechnologyKey[]
}
  
const item = {
	hidden:{
	  x: -25,
	  rotate: 180,
	  opacity: 0,
	},
	show:{
	  x: 0,
	  rotate: 0,
	  opacity: 1,
	}
  }

const TechBar : FC<ITechBarProps> = ({technologies}) => {
	const getTechItem = (key : TechnologyKey,index:number) : React.ReactNode => {
    const tech = TECHNOLOGIES.get(key);
    return <TechBubble name={tech?.name || ""} color={tech?.color} icon={tech?.icon} variants={item} key={index} />;
  }
  return (
    <TechsList variants={containerStagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
		{
			technologies.map((tech,index) => getTechItem(tech,index))
		}
	</TechsList>
  )
}

const TechsList = styled(motion.ul)`
	list-style-type: none;
	padding: 4rem 0;

	display: flex;
	justify-content: space-evenly;
	align-items: center;
	position: relative;
	z-index: 1;
	flex-wrap: wrap;
	gap: 1.5rem;

	&::before {
		content: "";
		position: absolute;
		width: 200%;
		height: 5rem;
		left: -50%;
		z-index: -2;

		background-color: var(--color-light);
	}
`;

export default TechBar