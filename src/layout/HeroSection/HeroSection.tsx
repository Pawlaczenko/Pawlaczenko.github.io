import { FC } from 'react'
import styled from 'styled-components';
import BlackBox from '../../components/BlackBox/BlackBox';
import { CornerPositions } from '../../components/BlackBox/Corner';
import Heading from '../../components/Heading/Heading';
import Paragraph from '../../components/Paragraph/Paragraph';
import StyledSection from '../Section/Section';
import { IoGlassesOutline } from "react-icons/io5";
import { BREAKPOINTS } from '../../styles/variables';
import { easeInOut, motion, Variants } from 'framer-motion';

const container = {
  show: {
    transition: {
      staggerChildren: 0.2
    }
  }
}

const fadeInDirecion = (direction?: boolean) : Variants => {
  return {
    hidden: {
      opacity: 0,
      x: 200 * (direction?1:-1)
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        ease: "easeInOut",
        duration: 1.6
      }
    }
  }
}

const HeroSection : FC = () => {
  return (
    <Wrapper>
      <StyledHeroSection variants={container} initial="hidden" animate="show">
        <StyledColumn>
            <Heading variants={fadeInDirecion()} primary>Siemka! Jestem Bartek. <br /><mark>Front-End Developer </mark></Heading>
            <Paragraph variants={fadeInDirecion()} grey>Skupiam się na tworzeniu stron internetowych, które nie tylko wyglądają dobrze, ale również działają sprawnie i szybko.</Paragraph>
        </StyledColumn>
        <StyledColumn end>
            <BlackBox big variants={fadeInDirecion(true)} corners={[CornerPositions.TopLeft, CornerPositions.BottomRight]}>
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

const StyledHeroSection = styled(motion.div)`
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

const StyledColumn = styled(motion.div)<{end?: boolean}>`
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