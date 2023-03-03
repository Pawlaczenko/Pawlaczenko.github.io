import React, { FC } from 'react'
import { TechnologyKey } from '../../data/technologies';
import styled from 'styled-components';
import TECHNOLOGIES from '../../data/technologies';
import { BREAKPOINTS } from '../../styles/variables';

const TechnologiesList : FC<{technologies: TechnologyKey[], isLeft: boolean}> = ({technologies, isLeft}) => {

  const getTechItem = (key : TechnologyKey, isLeft: boolean) : React.ReactNode => {
    const tech = TECHNOLOGIES.get(key);
    return <TechListItem isLeft={isLeft} color={tech?.color} key={key}>{tech?.name}</TechListItem>
  }

  return (
    <StyledTechnologiesList isLeft={isLeft}>
        {
          technologies.map(tech => getTechItem(tech, isLeft))
        }
    </StyledTechnologiesList>
  )
}

const StyledTechnologiesList = styled.ul<{isLeft: boolean}>`
  list-style-type: none;
  padding: 1rem 0;

  text-align: ${(props) => props.isLeft ? "left" : "right"};
  ${(props) => props.isLeft ? "padding-left: 2rem" : "padding-right: 2rem"};

  @media only screen and (${BREAKPOINTS.projectItem}){
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      gap: 2rem;
      padding: 1.5rem 0;
      flex-wrap: wrap;
  }
`

const TechListItem = styled.li<{color?:string, isLeft: boolean}>`
  font-weight: 700;
  position: relative;

  @media only screen and (${BREAKPOINTS.projectItem}){
    color: ${(props) => props.color};
  }

  &:before {
    content: "";
    position: absolute;
    top: 30%;
    ${(props) => props.isLeft ? "left: -2rem" : "right: -2rem"};
    --list-type-size: 1rem;

    width: var(--list-type-size);
    height: var(--list-type-size);
    background-color: ${(props) => props.color || props.theme.text};

    @media only screen and (${BREAKPOINTS.projectItem}){
      display: none;
    }
  }
`;

export default TechnologiesList