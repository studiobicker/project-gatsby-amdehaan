import React from "react"
import styled from "styled-components"

import { transition } from "../styles/variables"
import { Github, Linkedin } from "../icons"

const SocialList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
`
const SocialItem = styled.li`
  margin-left: 1rem;

  &:first-of-type {
    margin-left: 0;
  }
`
const SocialLink = styled.a`
  display: flex;
  height: 2.4rem;
  width: 2.4rem;
  color: currentColor;
  transition: ${transition.easeInOut};
`

const SocialAccounts = () => {
  return (
    <SocialList>
      <SocialItem>
        <SocialLink
          href="https://www.linkedin.com/in/amdehaan/"
          target="_blank"
          rel="nofollow noopener noreferrer"
          aria-label="Linkedin"
        >
          <Linkedin />
        </SocialLink>
      </SocialItem>
      <SocialItem>
        <SocialLink
          href="https://github.com/studiobicker"
          target="_blank"
          rel="nofollow noopener noreferrer"
          aria-label="Github"
        >
          <Github />
        </SocialLink>
      </SocialItem>
    </SocialList>
  )
}

export default SocialAccounts
