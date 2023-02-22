import { createGlobalStyle } from "styled-components";
import { reset } from "./reset";
import { variables } from "./variables";
import { ITheme } from './theme';

const GlobalStyles = createGlobalStyle<{theme: ITheme}>`
    ${reset}
    ${variables}

    html {
        font-size: 62.5%;

        @media only screen and (max-width: 93.75em){
            font-size: 50%;
        }
    }

    body {
        font-family: 'Montserrat', sans-serif;
        font-size: var(--fs-paragraph);

        background-color: ${({theme}) => theme.body};
        color: ${({theme}) => theme.text};
    }
`;

export default GlobalStyles;