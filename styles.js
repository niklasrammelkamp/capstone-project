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
    --background: #F5F5F3;
    --green: #86E211;
    --red: #F62323;
    --border-radius: 1.5rem;
  }

  html {
      font-size: var(--font-size);
  }

  body {
    margin: 0;
    font-family: system-ui;
    background-color: var(--background);
  }


`;

export default GlobalStyle;
