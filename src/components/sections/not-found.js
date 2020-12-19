import React from "react"
import styled from "styled-components"
import { color, device } from "../../styles/variables"
import { Title, Subtitle } from "../../styles/type"

import Header from "../header"
import Footer from "../footer"
import Button from "../general/button"

const PageWrapper = styled.section`
  width: 100%;
  height: 100vh;
  padding: 0;
  color: ${color.dark};

  @media ${device.mobile} {
    padding: 2rem;
  }
`
const Inner = styled.div`
  background: ${color.primary};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
  height: 100%;
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
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const NotFound = () => {
  return (
    <PageWrapper>
      <Inner>
        <Header />
        <ContentWrapper>
          <CopyWrapper>
            <Title>404</Title>
            <Subtitle>Page Not Found</Subtitle>
            <Button
              to="/"
              state={{
                modal: false,
              }}
              label="Go Home"
            />
          </CopyWrapper>
        </ContentWrapper>
        <Footer />
      </Inner>
    </PageWrapper>
  )
}

export default NotFound
