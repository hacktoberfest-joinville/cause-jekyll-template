import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  body {
    background-color: #ffffff;
    margin: 0;
    padding: 0;
    font-family: 'Inter', 'Helvetica', sans-serif;
    font-weight: 400;

    min-height: 100vh;
    position: relative;
    margin: 0 auto;
    padding-bottom: 90px;

    @media (max-width: 600px) {
      padding-bottom:200px;
    }
  }

  h1,
  h2,
  h3 {
    font-weight: 900;
    color: #072540;
  }

  h1 {
    font-size: 48px;
    line-height: 58px;
    letter-spacing: -1px;
    margin: 0 0 24px 0;
  }

  h2 {
    font-size: 36px;
    line-height: 44px;
  }

  h3 {
    font-size: 24px;
    line-height: 29px;
  }

  p {
    font-size: 18px;
    line-height: 160%;
    color: #5b6987;
  }

  ul {
    color: #5b6987;
  }

  p,
  ul,
  div {
    color: #5b6987;
  }

  p a,
  ul a,
  div a {
    color: #ff8ae2;
    font-weight: bold;
    text-decoration: none;
    cursor: pointer;
  }

  .div h2 a,
  .div h3 a {
    color: #072540;
    font-weight: 900;
  }

  .div h2 a:hover,
  .div h3 a:hover {
    color: #ff8ae2;
  }
`

export default GlobalStyles
