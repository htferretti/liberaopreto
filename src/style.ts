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
  @font-face {
    font-family: "San Francisco";
    font-weight: 400;
    src: url("https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-regular-webfont.woff");
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    border: none;
    text-decoration: none;
    list-style: none;
    font-family: "San Francisco", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    transition: ${TRANSITIONS.default};
  }

  html, body {
    height: 100%;
    background: ${COLORS.background};
    scroll-behavior: smooth;
  }
`;

export default GlobalStyle;