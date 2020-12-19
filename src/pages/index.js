import React from "react"

import Layout from "../components/layout"
import Intro from "../components/sections/intro"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Front-end developer" />
    <Intro />
  </Layout>
)

export default IndexPage
