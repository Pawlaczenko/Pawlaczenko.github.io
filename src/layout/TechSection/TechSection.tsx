import { FC } from 'react'
import styled from 'styled-components';
import Heading from '../../components/Heading/Heading';
import TechBar from '../../components/TechBar/TechBar';
import StyledSection from '../Section/Section';
import { TechnologyKey } from '../../data/technologies';
import Paragraph from '../../components/Paragraph/Paragraph';
import { BREAKPOINTS } from '../../styles/variables';

const TechSection : FC = () => {
  const technologies : TechnologyKey[] = ["react","ts","js","sc","node","html"];
  return (
    <Wrapper id="about">
      <StyledTechSection>
        <Heading>about <mark>technologies</mark></Heading>
        <TechBar technologies={technologies} />
        <Paragraph>
        My main code editor is <b>Visual Studio Code</b>. I use programs like <b>Figma</b> and <b>Adobe XD</b> to design user interfaces, and I'm familiar with <b>Adobe Photoshop</b>. I am well acquainted with the version control tool <b>git</b>, and teamwork practices using <b>GitHub</b>. I use tools like <b>npm</b>, <b>vite</b>, and <b>webpack</b> when creating pages.
        </Paragraph>
      </StyledTechSection>
    </Wrapper>
  )
}

const Wrapper = styled(StyledSection)`
  padding-bottom: 5rem;
`;

const StyledTechSection = styled.div`
  & > ${Paragraph} {
    text-align: center;
    width: 55%;
    margin: 0 auto;

    @media only screen and (${BREAKPOINTS.phone}){
      width: 100%;
    }
  }
`;

export default TechSection