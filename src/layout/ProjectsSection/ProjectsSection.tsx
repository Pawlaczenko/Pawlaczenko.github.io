import { FC } from 'react'
import styled from 'styled-components';
import Heading,{StyledHeading} from '../../components/Heading/Heading';
import StyledSection from '../Section/Section';
import PROJECTS from '../../data/projects';
import ProjectItem from '../../components/ProjectItem/ProjectItem';

const ProjectsSection : FC = () => {
  return (
    <Wrapper id="projects">
      <StyledProjectsSection>
            <Heading withDecoration><mark>moje</mark> projekty</Heading>
            <StyledProjectsList>
              {
                PROJECTS.map((project, index) => <ProjectItem index={index} project={project} key={index}/>)
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

const StyledProjectsList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-top: 12rem;

  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(40rem,1fr));
  gap: 6rem;
`;


export default ProjectsSection