import{createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #8be9fd;
  }
  * {
    font-family: sans-serif;
    color: #333;
    box-sizing: border-box;
  }
  
  html,
  body {
    margin: 0;
    padding: 0;
  }
  body {
    padding-left: 16px;
    padding-right: 16px;
    max-width: 700px;
    margin: auto;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  a {
    color: red;
  }
  button,
  a {
    transition: opacity .3s;
    &:focus,
    &:hover {
      opacity: .5;
    }
  }
  .postsContainer {
  }
  .postsContainer__post {
    a {
      font-weight: bold;
      text-decoration: none;
    }
    p{
      color: #8be9fd;
    }
  }
  .headerContainer {
    display: flex;
    align-items: center;
    padding-top: 16px;
    padding-bottom: 16px;
    margin-bottom: 32px;
    img {
      max-width: 100px;
      border-radius: 100%;
      margin-right: 16px;
    }
    h1 {
      margin: 0;
    }
  }
  .linkContainer{
    display: flex;
    align-items: center;
    a{
      margin-right: 15px;
    }
  }
  .lugarVazio{
    height: 500px;
  }
`;

export default GlobalStyle;