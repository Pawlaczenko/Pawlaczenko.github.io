import { motion, Variants } from 'framer-motion';
import styled from 'styled-components';
import { BREAKPOINTS } from '../../styles/variables';

const StyledIcon = styled(motion.figure)<{fillColor?:string}>`
  & > svg {
    width: var(--icon-size);
    height: var(--icon-size);
    fill: ${(props) => props.fillColor || props.theme.text};
    cursor: pointer;

    &:hover {
        fill: ${(props) => props.theme.text};
    }

    @media only screen and (${BREAKPOINTS.navigation}){
      --icon-size: 4.5rem;
    }
  }
`;

export default StyledIcon