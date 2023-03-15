import React from 'react'
import { IProject } from '../../data/projects';
import { FC } from 'react';
import styled from 'styled-components';
import BlackBox, { StyledBox } from '../BlackBox/BlackBox';
import { CornerPositions } from '../BlackBox/Corner';
import TechnologiesList from './TechnologiesList';
import Button from '../Button/Button';
import { BREAKPOINTS } from '../../styles/variables';
import { motion, Variants } from 'framer-motion';

interface IProjectItem {
    index: number,
    project: IProject,
    variants?: Variants
}

const ProjectItem : FC<IProjectItem> = ({index,project,variants}) => {
    const isLeft : boolean = index % 2 === 0;
    const cornerPosition : CornerPositions = isLeft ? CornerPositions.TopLeft : CornerPositions.TopRight;

    return (
    <StyledProjectItem variants={variants} isLeft={isLeft}>
        <BlackBox corners={[cornerPosition]}>{project.name}</BlackBox>
        <StyledProjectInfo>
            <StyledProjectDescription isLeft={isLeft}>
                {project.shortDescription}
            </StyledProjectDescription>
            <TechnologiesList isLeft={isLeft} technologies={project.technologies} />
            <StyledButtonsWrapper isLeft={isLeft}>
                <Button as="a" href={project.githubLink} target="_blank">github</Button>
                {project.liveLink && <Button as="a" href={project.liveLink} target="_blank">live</Button>}
            </StyledButtonsWrapper>
        </StyledProjectInfo>
    </StyledProjectItem>
  )
}

const StyledProjectItem = styled(motion.li)<{isLeft: boolean,variants?:Variants}>`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 2rem;

    flex-direction: ${(props) => props.isLeft ? "row" : "row-reverse"};

    & > ${StyledBox} {
        flex-shrink: 0;
    }

    @media only screen and (${BREAKPOINTS.projectItem}){
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
`;

const StyledProjectInfo = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`;

const StyledProjectDescription = styled.p<{isLeft: boolean}>`
    font-size: var(--fs-title);
    text-align: ${(props) => props.isLeft ? "left" : "right"};

    @media only screen and (${BREAKPOINTS.projectItem}){
        text-align: center;
    }
`;

const StyledButtonsWrapper = styled.div<{isLeft: boolean}>`
    display: flex;
    gap: 2rem;
    justify-content: ${(props) => props.isLeft ? "flex-start" : "flex-end"};
    
    @media only screen and (${BREAKPOINTS.projectItem}){
        justify-content: center;
    }
`;

export default ProjectItem