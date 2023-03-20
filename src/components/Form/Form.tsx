import { FormError, useForm } from '@formspree/react';
import React, { FC, useState } from 'react'
import styled from 'styled-components';
import { FORMSPREE_ID } from '../../data/links';
import { flexCenter } from '../../styles/mixins';
import { BREAKPOINTS } from '../../styles/variables';
import Button from '../Button/Button';
import Loader from '../Loader/Loader';
import FormInput from './FormInput';
import SuccessWindow from './SuccessWindow';

const Form : FC = () => {
  const [state, handleSubmit] = useForm(FORMSPREE_ID);
  const getErrors = (name:string) : FormError[] => {
    return state.errors.filter(err=>err.field===name);
  }
  
  return (
    <StyledForm method="POST" onSubmit={handleSubmit}>
        {state.submitting && <Loader isAbsolute={true} />}
        {state.succeeded ? 
          <SuccessWindow /> :
          <>
            <FormInput type='text' placeholder='Your name' isRequired={true} name="name" errors={getErrors("name")} />
            <FormInput type='email' placeholder='Your email' isRequired={true} name="email" errors={getErrors("email")} />
            <FormInput type='tel' placeholder='Your phone number' isRequired={false} name="phone" errors={getErrors("phone")} />
            <FormInput placeholder='Your message' isRequired={true} displayAs="textarea" name="message" errors={getErrors("message")} />
            <Button type="submit" disabled={state.submitting}>send</Button>
          </>
        }
    </StyledForm>
  )
}

const StyledForm = styled.form`
  width: 40%;
  margin: 5rem auto;
  position: relative;

  & > ${Button} {
    margin: 2rem auto;
  }

  @media only screen and (${BREAKPOINTS.navigation}){
    width: 100%;
  }
`;

export default Form