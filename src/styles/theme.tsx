export enum Themes {
  light,
  dark
}

export interface ITheme {
    body: string,
    text: string
}

export const lightTheme : ITheme = {
    body: 'var(--color-white)',
    text: 'var(--color-black)'
  };
  export const darkTheme : ITheme = {
    body: 'var(--color-black)',
    text: 'var(--color-white)'
  };