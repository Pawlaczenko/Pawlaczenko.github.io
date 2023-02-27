import styled from "styled-components";
import { BREAKPOINTS } from "../../styles/variables";

const Paragraph = styled.p<{grey?: boolean}>`
    font-size: var(--fs-paragraph);
    color: ${(props) => props.grey ? props.theme.paragraph : props.theme.text};

    @media only screen and (${BREAKPOINTS.large}) {
        text-align: center;
    }
`

export default Paragraph;