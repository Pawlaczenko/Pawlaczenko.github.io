import styled from 'styled-components';

export enum BleedOptions {
  full = "1/-1",
  center = "2",
  right = "2/-1"
}

interface ISectionProps {
    bleed?: BleedOptions
}

export const StyledSection = styled.section<ISectionProps>`
    display: grid;
    grid-template-columns: 1fr min(var(--website-width),90%) 1fr;

    & > * {
      grid-column: ${(props) => props.bleed || BleedOptions.center};
    }
`;

export default StyledSection