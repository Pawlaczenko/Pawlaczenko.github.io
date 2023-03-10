import React, { FC } from 'react'
import styled from 'styled-components';
import Form from '../../components/Form/Form';
import Heading, { StyledHeading } from '../../components/Heading/Heading';
import Paragraph from '../../components/Paragraph/Paragraph';
import StyledSection from '../Section/Section';
import { PERSONAL_EMAIL, PERSONAL_PHONE_NUMBER } from '../../data/links';
import ContactImage from "../../assets/contact_background.svg";

const ContactSection : FC = () => {
  return (
    <Wrapper>
      <StyledContactSection>
        <Heading><mark>skontaktuj</mark> się ze mną</Heading>
        <Form />
        <StyledContactInfo>
          lub
          <Paragraph><b>wyślij mi maila: </b><a href={`mailto:${PERSONAL_EMAIL}`}>{PERSONAL_EMAIL}</a></Paragraph>
          <Paragraph><b>zadzwoń do mnie: </b><a href={`tel:${PERSONAL_PHONE_NUMBER}`}>{PERSONAL_PHONE_NUMBER}</a></Paragraph>
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