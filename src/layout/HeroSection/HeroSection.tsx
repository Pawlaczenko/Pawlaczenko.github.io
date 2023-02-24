import { FC } from 'react'
import styled from 'styled-components';
import Heading from '../../components/Heading/Heading';
import Paragraph from '../../components/Paragraph/Paragraph';
import StyledSection from '../Section/Section';

const HeroSection : FC = () => {
  return (
    <Wrapper>
      <StyledHeroSection>
        <StyledColumn>
            <Heading primary>Siemka! Jestem Bartek. <br /><mark>Front-End Developer </mark></Heading>
            <Paragraph grey>Skupiam się na tworzeniu stron internetowych, które nie tylko wyglądają dobrze, ale również działają sprawnie i szybko.</Paragraph>
        </StyledColumn>
        <StyledColumn>
            <Heading>Hello</Heading>
        </StyledColumn>
      </StyledHeroSection>
    </Wrapper>
  )
}

const Wrapper = styled(StyledSection)`
  padding: 4.5rem 0;
`;

const StyledHeroSection = styled.div`
  display: grid;
  grid-template-columns: 55% 45%;
  align-items: center;
  justify-items: center;
`;

const StyledColumn = styled.div`
  & > ${Paragraph} {
    margin-top: 2rem;
    width: 80%;
  }
`;

export default HeroSection