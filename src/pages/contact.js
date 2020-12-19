import React from "react"
import { ModalRoutingContext } from "gatsby-plugin-modal-routing"

import styled from "styled-components"
import { color } from "../styles/variables"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Contact from "../components/sections/contact"
import { Close } from "../icons"

const CloseLink = styled.a`
  position: absolute;
  top: 2rem;
  right: 2rem;
  display: flex;
  height: 2.4rem;
  width: 2.4rem;
  color: ${color.light};
`

const ModalContact = () => (
  <ModalRoutingContext.Consumer>
    {({ modal, closeTo }) => (
      <>
        {modal ? (
          <>
            <CloseLink href={closeTo}>
              <Close />
            </CloseLink>
            <Contact />
          </>
        ) : (
          <Layout>
            <SEO title="Front-end developer" />
            <Contact />
          </Layout>
        )}
      </>
    )}
  </ModalRoutingContext.Consumer>
)

export default ModalContact
