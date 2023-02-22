import styled from 'styled-components';

const StyledIcon = styled.figure`
  & > svg {
    --icon-size: 3rem;

    width: var(--icon-size);
    height: var(--icon-size);
    fill: ${(props) => props.theme.text};
    cursor: pointer;

    &:hover {
        fill: ${(props) => props.theme.text};
    }
  }
`;

export default StyledIcon