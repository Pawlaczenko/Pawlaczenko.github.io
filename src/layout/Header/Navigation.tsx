import React, { FC } from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import { flexStart } from '../../styles/mixins';

const Navigation : FC = () => {
  const links : {name:string,id:string}[] = [
    {id: "#projects", name:"Projekty"},
    {id: "#about", name:"O mnie"},
    {id: "#contact", name:"Kontakt"}
  ];
  return (
    <StyledNavigation>
        {
          links.map(link => <StyledNavigationItem to={'/'+link.id}>{link.name}</StyledNavigationItem> )
        }
    </StyledNavigation>
  )
}

export const StyledNavigation = styled.nav`
  ${flexStart};
  gap: 4.5rem;
`

const StyledNavigationItem = styled(NavLink)`
  font-size: var(--fs-paragraph);
`;

export default Navigation