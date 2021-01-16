import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html, body, div#root {
    width: 100%;
    height: 100%;
  }
  body {
    font-family: 'Stylish', sans-serif;
    margin: 0px;
  }
`;
