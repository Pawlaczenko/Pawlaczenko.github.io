import { FormError, ValidationError } from '@formspree/react';
import React, { FC } from 'react'
import styled from 'styled-components';

interface IFormInputProps {
    type?: React.HTMLInputTypeAttribute,
    isRequired: boolean,
    placeholder: string,
    displayAs?: keyof JSX.IntrinsicElements,
    name: string,
    errors: FormError[]
}

const FormInput : FC<IFormInputProps> = ({type,isRequired,placeholder,displayAs,name,errors}) => {
  const textareaProps = displayAs === "textarea" ? {rows: 10} : null;
  const isError = errors.length > 0;

  return (
    <>
      <StyledWarning prefix="This field" errors={errors} field={name} />
      <StyledInput 
        type={type} 
        required={isRequired} 
        placeholder={placeholder}
        as={displayAs}
        name={name}
        key={name}
        warning={isError}
        {...textareaProps}
      />
    </>
  )
}

interface IStyledInputProps {
  warning?: boolean
}

const StyledInput = styled.input<IStyledInputProps>`
  background-color: var(--color-light);
  font-size: var(--fs-description);
  border: none;
  border-radius: 3rem;
  
  width: 100%;
  padding: 1.5rem 2.5rem;
  margin-bottom: 1.3rem;

  box-shadow: 0 .3rem 0 rgba(${({theme}) => theme.shadow},.25);

  &:is(textarea){
    resize: vertical;
  }

  &:focus{
    outline: 2px solid var(--color-orange-2);
    height: auto;
  }

  ${(props) => props.warning && `
    border: 2px solid var(--color-orange-1);
    color: var(--color-orange-1);
    font-weight: var(--fw-bold);
  `};
`;

const StyledWarning = styled(ValidationError)`
  color: var(--color-orange-4);
`;

export default FormInput