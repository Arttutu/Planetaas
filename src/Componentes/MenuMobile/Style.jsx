import styled, { css } from "styled-components"
import { NavItemStyled } from "../Menu/style"
import { CorFundo } from "../Variaveis"
import { NavLink } from "react-router-dom"
export const NavItemStyledMobile = styled(NavItemStyled)`
  font-size: 25px;
  font-weight: bold;
  text-transform: uppercase;
`
export const ListaStyleMobile = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  margin: 0 auto;
  gap: 41px;
`
export const NavMobile = styled.nav`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    position: absolute;
    align-items: center;
    height: 95vh;
    width: 100%;
    padding: 0px;
    margin: 0px;
    top: 50px;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${CorFundo};
    transition: 0.5s;
    z-index: 5;
    opacity: 0;
    pointer-events: none;

    ${({ menuOpen }) =>
      menuOpen
        ? css`
            opacity: 1;
            pointer-events: auto;
          `
        : ""}
  }
`
export const LinkStyleMobile = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
  text-decoration: none;
  cursor: pointer;
`
