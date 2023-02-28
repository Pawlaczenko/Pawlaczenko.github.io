import { FC } from 'react'
import styled from 'styled-components';
import BlackBox from '../../components/BlackBox/BlackBox';
import { CornerPositions } from '../../components/BlackBox/Corner';
import Heading from '../../components/Heading/Heading';
import Paragraph from '../../components/Paragraph/Paragraph';
import StyledSection from '../Section/Section';
import { IoGlassesOutline } from "react-icons/io5";
import { BREAKPOINTS } from '../../styles/variables';

const HeroSection : FC = () => {
  return (
    <Wrapper>
      <StyledHeroSection>
        <StyledColumn>
            <Heading primary>Siemka! Jestem Bartek. <br /><mark>Front-End Developer </mark></Heading>
            <Paragraph grey>Skupiam się na tworzeniu stron internetowych, które nie tylko wyglądają dobrze, ale również działają sprawnie i szybko.</Paragraph>
        </StyledColumn>
        <StyledColumn end>
            <BlackBox big corners={[CornerPositions.TopLeft, CornerPositions.BottomRight]}>
              <IoGlassesOutline />
            </BlackBox>
        </StyledColumn>
      </StyledHeroSection>
    </Wrapper>
  )
}

const Wrapper = styled(StyledSection)`
  padding: 8.5rem 0;

  @media only screen and (${BREAKPOINTS.phone}) {
    padding: 4.5rem 0;
  }
`;

const StyledHeroSection = styled.div`
  display: grid;
  grid-template-columns: 55% 45%;
  align-items: center;
  justify-items: center;
  gap: 3rem;

  @media only screen and (${BREAKPOINTS.large}) {
    grid-template-columns: 100%;
    gap: 6rem;
  }
`;

const StyledColumn = styled.div<{end?: boolean}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${(props) => props.end && "align-items: flex-end"};
  & > ${Paragraph} {
    margin-top: 2rem;
    width: 80%;

    @media only screen and (${BREAKPOINTS.phone}) {
      width: 100%;
    }
  }

  @media only screen and (${BREAKPOINTS.large}) {
    align-items: center;
  }
`;

export default HeroSection