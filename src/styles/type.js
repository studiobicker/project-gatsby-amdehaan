import styled from "styled-components"
import { device } from "./variables"

export const Title = styled.h1`
  font-weight: 700;
  font-size: 12rem;
  line-height: 1;
  margin: 0 0 1rem 0;
`

export const Subtitle = styled.h2`
  font-size: 3.1rem;
  font-weight: 400;
  line-height: 1;
  margin: 0 0 5rem 0;
`

export const Heading01 = styled.h1`
  font-weight: 700;
  font-size: 2.8rem;
  line-height: 3.4rem;
  margin: 0 0 1rem 0;

  @media ${device.tablet} {
    font-size: 4rem;
    line-height: 5rem;
  }
`

export const Heading02 = styled.h2`
  font-size: 2.1rem;
  font-weight: 700;
  line-height: 2.8rem;
  margin: 0;

  @media ${device.tablet} {
    font-size: 2.6rem;
    line-height: 3.6rem;
  }
`

export const Copy01 = styled.p`
  font-size: 2.1rem;
  line-height: 2.8rem;
  margin: 0 0 2.4rem 0;

  span {
    white-space: nowrap;
  }

  @media ${device.tablet} {
    font-size: 2.6rem;
    line-height: 3.6rem;
  }
`
