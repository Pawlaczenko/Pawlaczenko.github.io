import React, { FC } from 'react'
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import StyledIcon from '../../components/Icon/Icon';
import styled from 'styled-components';
import { motion, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';

const BackIcon : FC<{variants?:Variants}> = ({variants}) => {
  return (
    <motion.div variants={variants}>
        <StyledBackIcon as={Link} to="/">
        <BsFillArrowLeftCircleFill />
        </StyledBackIcon>
    </motion.div>
  )
}

export const StyledBackIcon = styled(StyledIcon)`
    z-index: 51;
`;

export default BackIcon