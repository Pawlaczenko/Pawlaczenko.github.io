import React from 'react'
import { FC } from 'react';
import styled from 'styled-components';
import { TechnologyKey } from '../../data/technologies';
import TECHNOLOGIES from '../../data/technologies';
import TechBubble from '../TechBubble/TechBubble';

interface ITechBarProps {
	technologies: TechnologyKey[]
}

const TechBar : FC<ITechBarProps> = ({technologies}) => {
	const getTechItem = (key : TechnologyKey) : React.ReactNode => {
    const tech = TECHNOLOGIES.get(key);
    return <TechBubble name={tech?.name || ""} color={tech?.color} icon={tech?.icon} />;
  }
  return (
    <TechsList>
		{
			technologies.map(tech => getTechItem(tech))
		}
	</TechsList>
  )
}

const TechsList = styled.ul`
	list-style-type: none;
	padding: 4rem 0;

	display: flex;
	justify-content: space-evenly;
	align-items: center;
	position: relative;
	flex-wrap: wrap;
	z-index: 1;
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