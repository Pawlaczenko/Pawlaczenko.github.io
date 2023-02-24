import { css } from "styled-components";

export const variables = css`
    html {
        //COLORS
        --color-white: #fff;  
        --color-black: #000;
        --color-dark: #271E1E;
        --color-light: #e1e6e1;

        --color-orange-1: #f85a3e;
        --color-orange-2: #ff7733;
        --color-orange-3: #e15634;
        --color-orange-4: #e63b2e;

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