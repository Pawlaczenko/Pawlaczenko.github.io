import React, { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components'
import StyledSection from '../layout/Section/Section'
import { IProject, IProjectArticle, PROJECTS_ARTICLES } from '../data/projects';
import PROJECTS from '../data/projects';
import parse from 'html-react-parser';
import Heading from '../components/Heading/Heading';
import Paragraph from '../components/Paragraph/Paragraph';
import Button from '../components/Button/Button';
import { flexCenter } from '../styles/mixins';
import TECHNOLOGIES from '../data/technologies';
import { TechnologyKey } from '../data/technologies';
import { BREAKPOINTS } from '../styles/variables';
import Loader from '../components/Loader/Loader';
import { motion } from 'framer-motion';
import { containerStagger, fadeInDirecion } from '../styles/animationVariants';
import { BleedOptions } from '../layout/Section/Section';

interface IProjectPage {
  projectInfo: IProject,
  article: IProjectArticle
}

const ProjectPage : FC = () => {
  const projectId = useParams().id;
  const [projectData, setProjectData] = useState<IProjectPage>();

  useEffect(() => {
    const projectInfo = PROJECTS.find(project => project.id === projectId);
    const projectArticle = PROJECTS_ARTICLES.get(projectId || "");

    if(projectInfo && projectArticle){
      const project : IProjectPage = {
        projectInfo: projectInfo,
        article: projectArticle
      }
      setProjectData(project);
    }
  },[projectId]);

  const displayTechnology = (key : TechnologyKey) : string => {
    const tech = TECHNOLOGIES.get(key);
    return tech ? tech.name : "";
  }

  const item = fadeInDirecion("y",25,1);

  return (
    <Wrapper>
      {
        projectData && 
        <StyledProjectPage variants={containerStagger} animate="show" initial="hidden">
          <Heading variants={item} primary={true}>
            <mark>{projectData.projectInfo.name}</mark>
          </Heading>
          <Paragraph variants={item}>
            {projectData.projectInfo.shortDescription}
          </Paragraph>
          <StyledMiniature variants={item}>
            <StyledPhoto photo={`/projects/${projectData.projectInfo.id}/${projectData.article.photoPath}`} />
          </StyledMiniature>
          <StyledTechsWrapper variants={item}>
            {
              projectData.projectInfo.technologies.map((tech,index) => <li key={index}>{displayTechnology(tech)}</li>)
            }
          </StyledTechsWrapper>
          <StyledButtonsWrapper variants={item}>
              <Button as="a" href={projectData.projectInfo.githubLink} target="_blank">github</Button>
              {projectData.projectInfo.liveLink && <Button as="a" href={projectData.projectInfo.liveLink} target="_blank">live</Button>}
          </StyledButtonsWrapper>
          <StyledArticle variants={item}>
          {
            parse(projectData.article.article)
          }
          </StyledArticle>
        </StyledProjectPage>
      }
    </Wrapper>
  )
}

const Wrapper = styled(StyledSection)`
  text-align: center;

  & > ${Paragraph} {
    width: 25%;
    margin: 1rem auto;

    @media only screen and (${BREAKPOINTS.navigation}) {
      width: 100%;
    }
  }
`;

const StyledProjectPage = styled(motion.div)`

`;

const StyledMiniature = styled(motion.figure)`
  position: relative;

  &::before {
    content: "";
    display: block;

    position: absolute;
    left: -100vw;
    top: 45%;
    z-index: -2;
    transform: translateZ(0);

    background: var(--gradient-orange-radial);
    width: 200vw;
    height: 7rem;
  }
`;


const StyledPhoto = styled.figure<{photo: string}>`
  width: 75%;
  aspect-ratio: 2/1;
  margin: 3rem auto;
  position: relative;
  
  border-radius: 5rem;
  background:
    url(${(props) => props.photo}) center no-repeat,
    var(--color-light);
  background-size: cover;

  box-shadow: 
    -1.1rem -1.1rem 0 0 var(--color-orange-2),
    -1.1rem 1.1rem 0 0 var(--color-orange-3),
    1.1rem -1.1rem 0 0 var(--color-orange-1),
    1.1rem 1.1rem 0 0 var(--color-orange-4),
    0px 0px 1.8rem 0px rgba(0, 0, 0, 0.2);

  @media only screen and (${BREAKPOINTS.navigation}) {
    width: 100%;
  }
`;

const StyledTechsWrapper = styled(motion.ul)`
  ${flexCenter};
  gap: 3.5rem;
  flex-wrap: wrap;

  margin: 0;
  padding: 0;
  margin-bottom: 2rem;

  list-style-type: none;
`;

const StyledButtonsWrapper = styled(motion.div)`
  ${flexCenter};
  gap: 2rem;
`;

const StyledArticle = styled(motion.article)`
  margin: 5rem 0;
  display: grid;
  grid-template-columns:
    1fr
    min(65ch, 100%)
    1fr;
    
  & > * {
    grid-column: 2;
  }

  & > p {
    text-align: justify;
    margin: 1rem 0;
  }

  & a {
    color: var(--color-orange-1);
    font-style: italic;
  }

  & > img {
    margin: 2.5rem auto;
  }
`;

export default ProjectPage