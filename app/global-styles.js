import { createGlobalStyle } from 'styled-components';
const gradients = [
  'linear-gradient(to bottom, #ff0844 0%, #ffb199 100%)',
  'linear-gradient(to right, #ff758c 0%, #ff7eb3 100%);',
  'linear-gradient(60deg, #96deda 0%, #50c9c3 100%);',
  'linear-gradient(to top, #c79081 0%, #dfa579 100%);',
  'linear-gradient(-20deg, #d558c8 0%, #24d292 100%);',
  'linear-gradient(60deg, #abecd6 0%, #fbed96 100%);',
];

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    background-image: ${props => gradients[props.random]};
background-attachment: fixed;

overscroll-behavior-y: none;


  }
    
  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
min-height: 100%;
    min-width: 100%;

  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
`;

export default GlobalStyle;
