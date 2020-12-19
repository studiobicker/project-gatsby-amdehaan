import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import styled from "styled-components"
import { color, device } from "../../styles/variables"
import { Heading01, Copy01 } from "../../styles/type"

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
  min-height: 100%;
  padding: 2rem;
`

const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
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
  margin: 1rem 0;

  @media ${device.tablet} {
    margin: 2rem 0;
  }

  @media ${device.desktop} {
    flex: 0 1 50%;
    max-width: 50%;
    order: 0;
  }
`

const MediaWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 1rem 0;

  @media ${device.tablet} {
    margin: 2rem 0;
  }

  @media ${device.desktop} {
    flex: 0 1 50%;
    max-width: 50%;
    order: 1;
  }
`

const Thumbnail = styled.div`
  width: 20rem;

  @media ${device.tablet} {
    width: 30rem;
  }
`

const Intro = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(name: { eq: "hero" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <>
      <PageWrapper>
        <Inner>
          <Header />
          <ContentWrapper>
            <MediaWrapper>
              <Thumbnail>
                <Img fluid={data.placeholderImage.childImageSharp.fluid} />
              </Thumbnail>
            </MediaWrapper>
            <CopyWrapper>
              <Heading01>
                Front-end developer
                <br />& UX enthousiast
              </Heading01>
              <Copy01>
                specialized in building <span>high-quality</span> websites and
                applications.
              </Copy01>
              <Button
                to="/contact/"
                state={{
                  modal: true,
                }}
                label="Get in touch"
              />
            </CopyWrapper>
          </ContentWrapper>
          <Footer />
        </Inner>
      </PageWrapper>
    </>
  )
}

export default Intro
