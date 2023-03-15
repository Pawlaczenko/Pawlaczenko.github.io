import { FC } from 'react'
import styled from 'styled-components';
import Heading,{StyledHeading} from '../../components/Heading/Heading';
import StyledSection from '../Section/Section';
import PROJECTS from '../../data/projects';
import ProjectItem from '../../components/ProjectItem/ProjectItem';
import { motion } from 'framer-motion';

const container = {
  show: {
    transition:{
      staggerChildren: 0.5
    }
  }
}

const item = {
  hidden:{
    y: -10,
    opacity: 0
  },
  show:{
    y: 0,
    opacity: 1
  }
}

const ProjectsSection : FC = () => {
  return (
    <Wrapper id="projects">
      <StyledProjectsSection>
        <Heading withDecoration><mark>moje</mark> projekty</Heading>
        <StyledProjectsList variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
          {
            PROJECTS.map((project, index) => <ProjectItem index={index} project={project} key={index} variants={item}/>)
          }
        </StyledProjectsList>
      </StyledProjectsSection>
    </Wrapper>
  )
}

const Wrapper = styled(StyledSection)`
  padding: 8.5rem 0;
`;

const StyledProjectsSection = styled.div`

`;

const StyledProjectsList = styled(motion.ul)`
  list-style-type: none;
  padding: 0;
  margin-top: 12rem;

  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(40rem,1fr));
  gap: 6rem;
`;


export default ProjectsSection