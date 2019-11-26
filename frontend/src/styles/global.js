import { createGlobalStyle } from 'styled-components';
import colors from './colors';
import 'antd/dist/antd.css';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  html, body, #root{
    height: 100%;
  }
  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    background: ${colors.background}
    font-family: 'Roboto', sans-serif;
    color: ${colors.text};
  }
  button {
    cursor: pointer;
  }
`;
