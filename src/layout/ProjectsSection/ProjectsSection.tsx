import { FC } from 'react'
import styled from 'styled-components';
import Heading,{StyledHeading} from '../../components/Heading/Heading';
import Paragraph from '../../components/Paragraph/Paragraph';
import StyledSection from '../Section/Section';
import { BREAKPOINTS } from '../../styles/variables';
import PROJECTS from '../../data/projects';
import ProjectItem from '../../components/ProjectItem/ProjectItem';

const ProductsSection : FC = () => {
  return (
    <Wrapper>
      <StyledProductsSection>
            <Heading><mark>moje</mark> projekty</Heading>
            <StyledProjectsList>
              {
                PROJECTS.map((project, index) => <ProjectItem index={index} project={project} key={index}/>)
              }
            </StyledProjectsList>
      </StyledProductsSection>
    </Wrapper>
  )
}

const Wrapper = styled(StyledSection)`
  padding: 8.5rem 0;
`;

const StyledProductsSection = styled.div`
    & > ${StyledHeading} {
        position: relative;

        &::before,
        &::after{
            content: "";
            position: absolute;
            height: 1rem;
            width: 100vw;

            background: var(--gradient-orange);
            border-radius: 5rem;

            --horizontal-offset: 35%;
            --vertical-offset: -2.5rem;

            box-shadow: -1rem .5rem 0 orange;
        }

        &:before {
            right: var(--horizontal-offset);
            top: var(--vertical-offset);
        }

        &:after {
            left: var(--horizontal-offset);
            bottom: var(--vertical-offset);
        }
    }
`;

const StyledProjectsList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-top: 12rem;

  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(40rem,1fr));
  gap: 6rem;
`;


export default ProductsSection