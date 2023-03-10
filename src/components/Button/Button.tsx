import styled from 'styled-components';

const Button = styled.button`
    display: block;
    border: none;
    background: var(--gradient-orange-radial);
    color: white;
    font-weight: var(--fw-bold);
    text-align: center;
    padding: .3rem 1rem;
    min-width: 10rem;
    position: relative;
    cursor: pointer;

    &:hover {
      background: var(--gradient-orange);
    }

    &:before {
      content: "";
      position: absolute;
      left: -4%;
      top: .4rem;
      z-index: -1;

      width: 108%;
      height: 100%;
      background: var(--color-orange-4);
    }

    &:active{
      transform: translateY(.4rem);

      &:before{
        top: 0;
      }
    }

    &:disabled {
      background: var(--color-grey);
      opacity: 0.5;
      cursor: default;
      &:before {
        opacity: 0.5;
      }
    }
`;

export default Button