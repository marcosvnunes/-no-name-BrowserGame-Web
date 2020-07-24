import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin:0;
    padding:0;
    box-sizing:border-box;
    outline:0;
  }

  body {
    background-image: linear-gradient( #4B4352 , #9A3D4F, #D17256, #FBF972);
    color: #FFF;
    min-height:100vh;
    -webkit-font-smoothing: antialiased ;

  }

  body ,input , button {
    font-family: 'Roboto Slab', serif;
    font-size:16px;
  }

  h1 , h2 ,h3 ,h4 ,h5 ,h6 , strong {
    font-weight:500;
  }
  button {
    cursor: pointer;
  }
`;
