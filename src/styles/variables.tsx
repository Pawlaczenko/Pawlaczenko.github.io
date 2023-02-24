import { css } from "styled-components";

export const variables = css`
    html {
        //COLORS
        --color-white: #fff;  
        --color-black: #000;
        --color-dark: #271E1E;
        --color-light: #e1e6e1;
        --color-grey: #6a6a6a;

        --color-orange-1: #f85a3e;
        --color-orange-2: #ff7733;
        --color-orange-3: #e15634;
        --color-orange-4: #e63b2e;

        //GRADIENTS

        --gradient-orange: repeating-linear-gradient(to right, var(--color-orange-1),var(--color-orange-2) 25%,var(--color-orange-3) 25%,var(--color-orange-4) 25%);

        // TYPOGRAPHY
        --fs-heading: 5.5rem;
        --fs-subheading: 3.2rem;
        --fs-title: 2.0rem;
        --fs-paragraph: 1.8rem;
        --fs-description: 1.6rem;

        --ff-heading: 'Gloock', serif;
        --ff-text: 'Montserrat', sans-serif;

        // SPACES
        --website-width: 120rem;
    }
`;

export const BREAKPOINTS = {
    navigation: "max-width:800px",
}