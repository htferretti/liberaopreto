import { createGlobalStyle } from "styled-components";

export const COLORS = {
  background: '#F5F5F7',
  white: '#FFFFFF',
  black: '#000000',
  blue: '#3463CE',
  green: '#208100'
} as const;

export const TRANSITIONS = {
  default: '0.2s',
  slow: '0.5s',
} as const;

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    border: none;
    text-decoration: none;
    list-style: none;
    font-family: Roboto, sans-serif;
    transition: ${TRANSITIONS.default};
  }

  html, body {
    height: 100%;
    background: ${COLORS.background};
    scroll-behavior: smooth;
  }
`;

export default GlobalStyle;