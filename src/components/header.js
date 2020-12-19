import React from "react"
import styled from "styled-components"
import { device } from "../styles/variables"
import { Logo } from "../icons"

const SiteHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const LogoBlock = styled.div`
  display: flex;
`
const LogoImage = styled.div`
  display: flex;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  margin-right: 0.8rem;
`
const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  font-size: 1.5rem;
  padding-left: 1.6rem;

  @media ${device.tablet} {
    font-size: 1.5rem;
  }

  &:before {
    border-left: 0.2rem solid rgba(0, 0, 0, 0.15);
    height: 4rem;
    position: absolute;
    left: 0;
    transition: border-color 0.5s ease-in-out;
    content: "";
  }
`
const ContactLinks = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.tablet} {
    flex-direction: row;
  }
`
const ContactLink = styled.a`
  text-decoration: none;
`

const Header = () => {
  return (
    <SiteHeader>
      <LogoBlock>
        <LogoImage>
          <Logo />
        </LogoImage>
        <ContactDetails>
          <strong>Anne-Marie de Haan</strong>
          <ContactLinks>
            <ContactLink to="mailto:anne@studiobicker.nl">
              anne@studiobicker.nl
            </ContactLink>
          </ContactLinks>
        </ContactDetails>
      </LogoBlock>
    </SiteHeader>
  )
}

export default Header
