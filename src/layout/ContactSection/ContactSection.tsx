import React, { FC } from 'react'
import styled from 'styled-components';
import Form from '../../components/Form/Form';
import Heading, { StyledHeading } from '../../components/Heading/Heading';
import StyledSection from '../Section/Section';

const ContactSection : FC = () => {
  return (
    <Wrapper>
      <StyledContactSection>
        <Heading><mark>skontaktuj</mark> się ze mną</Heading>
        <Form />
      </StyledContactSection>
    </Wrapper>
  )
}

const Wrapper = styled(StyledSection)`
  margin-top: 3rem;
`;

const StyledContactSection = styled.div`
  & > ${StyledHeading} {
    margin-bottom: 3rem;
  }
`;

export default ContactSection