import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { CSSTransition, TransitionGroup } from "react-transition-group"

import styled from "styled-components"
import { color, device } from "../../styles/variables"
import { Heading01, Heading02, Copy01 } from "../../styles/type"

import SocialAccounts from "../social-accounts"

const PageWrapper = styled.section`
  width: 100%;
  height: 100vh;
  padding: 0;
  color: ${color.light};
`

const Inner = styled.div`
  background: ${color.dark};
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100%;
  padding: 2rem;
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  @media ${device.tablet} {
    max-width: 45rem;
  }
  @media ${device.desktop} {
    max-width: 83rem;
  }
`
const CopyWrapper = styled.div`
  width: 100%;
`

const ContactGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`

const ContactItem = styled.div`
  margin: 1rem 0;
  flex: 0 1 100%;

  @media ${device.tablet} {
    margin: 2rem 0;
  }

  @media ${device.desktop} {
    flex: 0 1 50%;
    max-width: 50%;
    order: 0;
  }
`
const SocialWrapper = styled.div`
  margin: 1rem 0;
  display: flex;
  justify-content: flex-start;
`
const Contact = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 100)
    return () => clearTimeout(timeout)
  }, [])
  return (
    <PageWrapper>
      <Inner>
        <TransitionGroup component={null}>
          {isMounted && (
            <CSSTransition timeout={500} classNames="fadeup">
              <ContentWrapper>
                <CopyWrapper>
                  <Heading01>Get in touch</Heading01>
                  <Copy01>
                    Do you have a question{" "}
                    <span role="img" aria-label="question">
                      ☝️
                    </span>{" "}
                    or just want to say hi{" "}
                    <span role="img" aria-label="wave">
                      👋
                    </span>{" "}
                    ?
                  </Copy01>
                </CopyWrapper>
                <ContactGrid>
                  <ContactItem>
                    <Heading02>Email</Heading02>
                    <Copy01>
                      <Link to="mailto:anne@studiobicker.nl">
                        anne@studiobicker.nl
                      </Link>
                    </Copy01>
                  </ContactItem>
                  <ContactItem>
                    <Heading02>Phone</Heading02>
                    <Copy01>
                      <Link to="+31651892854">+31 6 51892854</Link>
                    </Copy01>
                  </ContactItem>
                </ContactGrid>
                <SocialWrapper>
                  <SocialAccounts />
                </SocialWrapper>
              </ContentWrapper>
            </CSSTransition>
          )}
        </TransitionGroup>
      </Inner>
    </PageWrapper>
  )
}

export default Contact
