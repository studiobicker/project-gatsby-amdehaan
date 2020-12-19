import { createGlobalStyle } from "styled-components"
import { normalize } from "styled-normalize"
import { font, device } from "./variables"

import TransitionStyles from "./transition-styles"

const GlobalStyle = createGlobalStyle`
 ${normalize};

  html {
    box-sizing: border-box;
    font-size: 10px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    padding: 0;
    font-family: ${font.primary};
    font-family: 1.6rem;

    @media ${device.tablet} {
      font-size: 1.8rem;
    }
  }

  img {
    width: 100%;
    max-width: 100%;
    vertical-align: middle;
  }

  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
    vertical-align: middle;
  }

  a {
    color: currentColor;
  }

  ${TransitionStyles};

`
export default GlobalStyle
