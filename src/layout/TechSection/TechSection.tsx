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
        <Heading>moje <mark>technologie</mark></Heading>
        <TechBar technologies={technologies} />
        <Paragraph>
          Mój główny edytor kodu to <b>Visual Studio Code</b>. Do projektowania interfejsów użytkownika korzystam z programów takich jak <b>Figma</b> i <b>Adobe XD</b>, znam także <b>Adobe Photoshop</b>. Jestem dobrze zaznajomiony z narzędziem kontroli wersji <b>git</b>, oraz praktykami pracy zespołowej wykorzystującymi <b>GitHub</b>. W trakcie tworzenia stron korzystam z narzędzi takich jak <b>npm</b>, <b>vite</b> oraz <b>webpack</b>.
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