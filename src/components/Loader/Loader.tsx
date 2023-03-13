import { motion } from 'framer-motion';
import React, { FC } from 'react'
import styled from 'styled-components'
import { flexCenter } from '../../styles/mixins';
import Corner, { CornerPositions } from '../BlackBox/Corner';

const Loader : FC = () => {
  return (
    <StyledLoaderWrapper>
        <StyledLoader animate={{ rotate: 360 }}  transition={{ repeat: Infinity,repeatType: "reverse", duration: 2 }}>
            <Corner position={CornerPositions.TopLeft} />
            <Corner position={CornerPositions.BottomRight} />
        </StyledLoader>
    </StyledLoaderWrapper>
  )
}

const StyledLoaderWrapper = styled.div`
    position: absolute;
    left: -3%;
    top: -3%;
    z-index: 50;

    width: 106%;
    height: 106%;
    background: rgba(0,0,0,.4);
    border-radius: 1.5rem;

    ${flexCenter};
`;

const StyledLoader = styled(motion.figure)`
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    position: relative;

    border: .8rem solid white;
`;

export default Loader