import { motion } from 'framer-motion';
import { FC } from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import { flexStart } from '../../styles/mixins';
import { BREAKPOINTS } from '../../styles/variables';

const Navigation : FC<{isOpen: boolean}> = ({isOpen}) => {
  const links : {name:string,id:string}[] = [
    {id: "#projects", name:"Projekty"},
    {id: "#about", name:"O mnie"},
    {id: "#contact", name:"Kontakt"}
  ];
  return (
    <StyledNavigation isOpen={isOpen} layout>
        {
          links.map(link => <StyledNavigationItem to={'/'+link.id} key={link.id} >{link.name}</StyledNavigationItem> )
        }
    </StyledNavigation>
  )
}

export const StyledNavigation = styled(motion.nav)<{isOpen:boolean}>`
  ${flexStart};
  gap: 4.5rem;

  @media only screen and (${BREAKPOINTS.navigation}){
    position: fixed;
    z-index: 50;
    left: ${(props) => props.isOpen ? "0" : "-100%"};
    top: 0;
    
    width: 100vw;
    height: 100vh;
    background: ${({theme}) => theme.body};

    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

const StyledNavigationItem = styled(NavLink)`
  font-size: var(--fs-paragraph);
  &:hover {
    color: var(--color-orange-2);
  }

  @media only screen and (${BREAKPOINTS.navigation}){
    font-size: var(--fs-subheading);
  }
`;

export default Navigation