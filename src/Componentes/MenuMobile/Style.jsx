import styled, { css } from "styled-components"
import { NavItemStyled } from "../Menu/style"
import { CorCinza, CorFundo } from "../Variaveis"
import { NavLink } from "react-router-dom"

export const LinhaMenu = styled.div`
  width: 327px;
  height: 1px;
  background-color: ${CorCinza};
`
export const NavItemStyledMobile = styled(NavItemStyled)`
  display: flex;
  align-items: center;
  font-size: 25px;
  font-weight: bold;
  text-transform: uppercase;
  &:hover {
    border-top: none;
  }
`
export const ListaStyleMobile = styled.ul`
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  margin-left: 30px;
  gap: 41px;
`
export const NavMobile = styled.nav`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 100vh;
    width: 100vw;
    padding: 100px 0px;
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
  align-items: left;
  justify-content: center;
  gap: 45px;
  text-decoration: none;
  cursor: pointer;
`
