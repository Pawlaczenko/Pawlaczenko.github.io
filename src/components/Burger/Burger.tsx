import styled from 'styled-components';
import { FC } from 'react';
import { BREAKPOINTS } from '../../styles/variables';
import { motion, Variants } from 'framer-motion';

interface IProps {
    isOpen: boolean,
    handleClick: React.MouseEventHandler,
    variants?: Variants
}

const Burger : FC<IProps> = ({isOpen, handleClick, variants}) => {
    return (
        <StyledBurger variants={variants} isOpen={isOpen} onClick={handleClick}>
            <div></div>
            <div></div>
            <div></div>
        </StyledBurger>
    )
}

const StyledBurger = styled(motion.button)<{isOpen:boolean}>`
    --burger-gap: 3px;
    --burger-height: 4px;
    --burger-color: ${({theme}) => theme.body};

    display: none;
    min-width: 5rem;
    min-height: 5rem;
    
    border: none;
    cursor: pointer;
    background: ${({theme}) => theme.text};
    border-radius: 50%;

    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 51;
    
    & div {
        width: 100%;        
        height: var( --burger-height);
        z-index: 150;
        position: relative;
        background-color: var(--burger-color);
        transition: all .2s ease-in-out;
        border-radius: 5px;
        
        &:nth-child(1){
            ${props => props.isOpen && `
                transform: translateY(175%) rotate(45deg);
            `};
        }

        &:nth-child(2){
            width: 85%;
            ${props => props.isOpen && `
                background-color: transparent; 
            `};
        }

        &:nth-child(3){

            ${props => props.isOpen && `
                transform: translateY(-175%) rotate(-45deg);
            `};
        }

        &:not(:last-child){
            margin-bottom: var(--burger-gap);
        }
    }

    @media only screen and (${BREAKPOINTS.navigation}){
        display: flex;
    }
`;

export default Burger