import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root {
    --font-size: 14px;

    --black: #232222;
    --grey: #A6A2A2;
  }

  html {
      font-size: var(--font-size);
  }

  body {
    margin: 0;
    font-family: system-ui;
  }

`;

export default GlobalStyle;
