import { FormError, useForm } from '@formspree/react';
import React, { FC, useState } from 'react'
import styled from 'styled-components';
import Button from '../Button/Button';
import FormInput from './FormInput';

const Form : FC = () => {
  const [state, handleSubmit] = useForm("myyapkky");
  const getErrors = (name:string) : FormError[] => {
    return state.errors.filter(err=>err.field===name);
  }

  if (state.succeeded) {
    return <div>Thank you for signing up!</div>;
  }
  
  return (
    <StyledForm method="POST" onSubmit={handleSubmit}>
        <FormInput type='text' placeholder='Twoje Imię' isRequired={true} name="name" errors={getErrors("name")} />
        <FormInput type='email' placeholder='Twój Email' isRequired={true} name="email" errors={getErrors("email")} />
        <FormInput type='tel' placeholder='Twój Email' isRequired={false} name="phone" errors={getErrors("phone")} />
        <FormInput placeholder='Twoja Wiadomość' isRequired={true} displayAs="textarea" name="message" errors={getErrors("message")} />
        <Button type="submit" disabled={state.submitting}>wyślij</Button>
    </StyledForm>
  )
}

const StyledForm = styled.form`
  width: 40%;
  margin: 5rem auto;

  & > ${Button} {
    margin: 2rem auto;
  }
`;

export default Form