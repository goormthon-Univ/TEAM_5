import { createGlobalStyle } from 'styled-components';
import theme from 'styles/theme';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Alegreya Sans SC";
    font-weight: ${theme.fontWeight.medium};
  }

  html,
  body {
    background-color: ${theme.color.darkBlue};
    color: ${theme.color.white};
    }
    
  button,
  img,
  a {
    all: unset;
    cursor: pointer;
  }
`;

export default GlobalStyle;
