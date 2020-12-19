import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { color } from "../../styles/variables"
import { Arrow } from "../../icons"

const ButtonLink = styled(props => <Link {...props} />)`
  color: ${color.light};
  background-color: ${color.dark};
  font-size: 1.8rem;
  font-weight: 700;
  text-decoration: none;
  justify-items: center;
  padding: 1.2rem 2.4rem;

  & svg {
    height: 1.8rem;
    width: auto;
    margin-left: 1.6rem;
    vertical-align: middle;
    transform: translateX(0%);
    transition: -webkit-transform 0.15s linear 0s, transform 0.15s linear 0s;
  }

  &:hover svg {
    transform: translateX(10%);
    transition: -webkit-transform 0.15s linear 0s, transform 0.15s linear 0s;
  }
`

const Button = ({ label, to, state }) => {
  return (
    <ButtonLink to={to} state={state}>
      <span>{label}</span>
      <Arrow />
    </ButtonLink>
  )
}
export default Button
