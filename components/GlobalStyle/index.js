import{createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #ff5555;
  }
  * {
    font-family: sans-serif;
    color: #333;
  }
  
  html,
  body {
    margin: 0;
    padding: 0;
  }
  body {
    background-color: #282a36;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  a {
    color: #ff5555;
  }
  button,
  a {
    transition: opacity .3s;
    &:focus,
    &:hover {
      opacity: .5;
    }
  }
  p{
    color: #f8f8f2;
  }
  .postsContainer {
  }
  .postsContainer__post {
    a {
      font-weight: bold;
    }
    p{
      color: #f8f8f2;
      margin-bottom: 20px;
    }
  }
  .biografia{
    margin-bottom: 110px;
    margin-left: 20px;
  }
  .conteudos{
    display: flex;
    margin-bottom: 110px;
    margin-left: 20px;
  }
  .headerContainer {
    position: relative;
    margin-left: 35%;
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
    
    a{
      position: relative;
      left: 45%;
      margin-right: 15px;
    }
  }
  .lugarVazio{
    height: 500px;
  }
  .footer{
    align-items: center;
    background-color: white;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
  }
`;

export default GlobalStyle;