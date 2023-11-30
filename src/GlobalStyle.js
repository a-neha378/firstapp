import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: "Work Sans", sans-serif;
}

html {
    font-size: 62.5%;
    overflow-x: hidden;
  }
  
  body{
    overflow-x: hidden;
  }

  .container {
    max-width: 120rem;
    margin: 0 auto;
  }
  
  .grid
  {
    display:grid;
  }

  .grid-two-column
  {
    grid-template-columns: repeat(2, 1fr)
  }

`;