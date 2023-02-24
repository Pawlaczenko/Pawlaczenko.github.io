import styled from "styled-components";

const Paragraph = styled.p<{grey?: boolean}>`
    font-size: var(--fs-paragraph);
    color: ${(props) => props.grey ? props.theme.paragraph : props.theme.text};
`

export default Paragraph;