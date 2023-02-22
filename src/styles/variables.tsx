import { css } from "styled-components";

export const variables = css`
    html {
        //COLORS

        --color-white: #ffffff;
        --color-black: #000000;

        // TYPOGRAPHY
        --fs-heading: 4.8rem;
        --fs-subheading: 3.2rem;
        --fs-title: 2.4rem;
        --fs-paragraph: 1.8rem;
        --fs-small: 1.6rem;
        --fs-description: 1.4rem;
        --fs-tiny: 1.2rem;

        // SPACES
        --website-width: 115.5rem;
    }
`;

export const BREAKPOINTS = {
    huge: "max-width:1110px",
    burger: "max-width:1010px",
    large: "max-width:910px",
    about: "max-width:730px",
    medium: "max-width:650px",
}