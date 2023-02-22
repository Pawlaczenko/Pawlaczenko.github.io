export enum Themes {
  light,
  dark
}

export interface ITheme {
    body: string,
    text: string,
    accents: string
}

export const lightTheme : ITheme = {
    body: 'var(--color-white)',
    text: 'var(--color-black)',
    accents: 'var(--color-light)'
  };
  
  export const darkTheme : ITheme = {
    body: 'var(--color-dark)',
    text: 'var(--color-white)',
    accents: 'var(--color-black)'
  };