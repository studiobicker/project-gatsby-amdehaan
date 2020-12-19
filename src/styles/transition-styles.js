import { css } from "styled-components"
import { transition } from "./variables"

// https://reactcommunity.org/react-transition-group/css-transition

const TransitionStyles = css`
  .fadeup-enter {
    opacity: 0.01;
    transform: translateY(20px);
    transition: opacity 300ms ${transition.easing},
      transform 300ms ${transition.easing};
  }

  .fadeup-enter-active {
    opacity: 1;
    transform: translateY(0px);
    transition: opacity 300ms ${transition.easing},
      transform 300ms ${transition.easing};
  }

  .fadedown-enter {
    opacity: 0.01;
    transform: translateY(-20px);
    transition: opacity 300ms ${transition.easing},
      transform 300ms ${transition.easing};
  }

  .fadedown-enter-active {
    opacity: 1;
    transform: translateY(0px);
    transition: opacity 300ms ${transition.easing},
      transform 300ms ${transition.easing};
  }

  .fade-enter {
    opacity: 0.01;
    transition: opacity 1000ms ${transition.easing};
  }

  .fade-enter-active {
    opacity: 1;
    transition: opacity 1000ms ${transition.easing};
  }
`

export default TransitionStyles
