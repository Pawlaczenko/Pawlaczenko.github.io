import React, { FC } from 'react'
import styled from 'styled-components'
import StyledSection from '../Section/Section';
import GithubIcon from '../../components/GithubIcon/GithubIcon';
import Paragraph from '../../components/Paragraph/Paragraph';
import { flexCenter } from '../../styles/mixins';

const Footer : FC = () => {
  return (
    <Wrapper as="footer">
      <StyledFooter>
        <GithubIcon fillColor='black' />
        <Paragraph><b>&copy; 2023 Bartłomiej Pawlak</b></Paragraph>
      </StyledFooter>
    </Wrapper>
  )
}

const Wrapper = styled(StyledSection)`
  background-color: var(--color-light);
`;

const StyledFooter = styled.div`
  padding: 2rem 0;

  ${flexCenter};
  flex-direction: column;
  gap: 1rem;

  & > ${Paragraph}{
    color: black;
  }
`;

export default Footer