import React, { FC } from 'react'
import styled from 'styled-components';
import { flexCenter } from '../../styles/mixins';
import Corner, { CornerPositions } from '../BlackBox/Corner';
import Paragraph from '../Paragraph/Paragraph';

const SuccessWindow : FC = () => {
  return (
    <StyledSuccessMessage>
        <Corner position={CornerPositions.TopLeft} big />
        <Corner position={CornerPositions.BottomRight} big />
        <Paragraph>
            Your messange has been sent.<br/>
            <b>Thank you!</b>
        </Paragraph>
    </StyledSuccessMessage>
  )
}

const StyledSuccessMessage = styled.div`
  width: 100%;
  
  background: ${({theme}) => theme.body};
  ${flexCenter};
  text-align: center;
  padding: 5rem;
`;

export default SuccessWindow