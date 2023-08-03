import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
    font-family: 'Roboto Slab', serif;
  }

  body {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    color: ${({ theme }) => theme.COLORS.WHITE};
    -webkit-font-smoothing: antialiased;

    font-size: 1.6rem;
  }

  button, input, a, textarea {
    font-family: 'Roboto', serif;
    font-size: 1.6rem;
    font-weight: 400;
    outline: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }

  a {
    text-decoration: none;
  }
`