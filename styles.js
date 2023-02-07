import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root {
    --font-size: 13px;

    --black: #232222;
    --grey: #A6A2A2;
    --white: #ffffff;
  }

  html {
      font-size: var(--font-size);
  }

  body {
    margin: 0;
    font-family: system-ui;
    background-color: #F5F5F3;
  }

`;

export default GlobalStyle;
