import React, { FC } from 'react'
import styled from 'styled-components';
import Form from '../../components/Form/Form';
import Heading, { StyledHeading } from '../../components/Heading/Heading';
import Paragraph from '../../components/Paragraph/Paragraph';
import StyledSection from '../Section/Section';
import { PERSONAL_EMAIL } from '../../data/links';
import ContactImage from "../../assets/contact_background.svg";

const ContactSection : FC = () => {
  return (
    <Wrapper id="contact">
      <StyledContactSection>
        <Heading>let's be <mark>in touch</mark></Heading>
        <Form />
        <StyledContactInfo>
          or
          <Paragraph><b>send me an email: </b><a href={`mailto:${PERSONAL_EMAIL}`}>{PERSONAL_EMAIL}</a></Paragraph>
        </StyledContactInfo>
      </StyledContactSection>
    </Wrapper>
  )
}

const Wrapper = styled(StyledSection)`
  padding: 3rem 0;
  background: url(${ContactImage}) no-repeat;
  background-size: cover;
`;

const StyledContactSection = styled.div`
  & > ${StyledHeading} {
    margin-bottom: 3rem;
  }
`;

const StyledContactInfo = styled.div`
  text-align: center;
  & > ${Paragraph}{
    margin: 1rem 0;
    &:first-child{
      margin-top: 3rem;
    }
  }
`;

export default ContactSection