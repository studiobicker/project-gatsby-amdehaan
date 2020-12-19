import React from "react"
import styled from "styled-components"

import SocialAccounts from "./social-accounts"

const SiteFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 1.4rem;
`

const footer = () => {
  return (
    <SiteFooter>
      <SocialAccounts />
    </SiteFooter>
  )
}

export default footer
