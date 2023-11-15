import React from "react";
import styled, { css } from "styled-components";
import { CorFundo } from "../Variaveis";
import { BolinhaPlaneta, NavItemStyled } from "../Menu/style";
import { NavLink } from "react-router-dom";
export const NavItemStyledMobile = styled(NavItemStyled)`
  font-size: 25px;
  font-weight: bold;
  text-transform: uppercase;
`;
export const ListaStyleMobile = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  gap: 41px;
`;
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
`;
export const LinkStyleMobile = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
  text-decoration: none;
  cursor: pointer;
`;
export default function MenuMobile({ menuOpen, cor }) {
  return (
    <NavMobile menuOpen={menuOpen}>
      <ListaStyleMobile>
        <LinkStyleMobile to="/mercurio">
          <BolinhaPlaneta cor={cor} />
          <NavItemStyledMobile cor={cor}>Mercurio</NavItemStyledMobile>
        </LinkStyleMobile>
        <LinkStyleMobile to="/venus">
          <BolinhaPlaneta cor={cor} />
          <NavItemStyledMobile cor={cor}>Venus</NavItemStyledMobile>
        </LinkStyleMobile>
        <LinkStyleMobile to="/">
          <BolinhaPlaneta cor={cor} />
          <NavItemStyledMobile cor={cor}>Terra</NavItemStyledMobile>
        </LinkStyleMobile>
        <LinkStyleMobile to="/marte">
          <BolinhaPlaneta cor={cor} />
          <NavItemStyledMobile cor={cor}>Marte</NavItemStyledMobile>
        </LinkStyleMobile>
        <LinkStyleMobile to="/jupter">
          <BolinhaPlaneta cor={cor} />
          <NavItemStyledMobile cor={cor}>Jupter</NavItemStyledMobile>
        </LinkStyleMobile>
        <LinkStyleMobile to="/saturno">
          <BolinhaPlaneta cor={cor} />
          <NavItemStyledMobile cor={cor}>Saturno</NavItemStyledMobile>
        </LinkStyleMobile>
        <LinkStyleMobile to="/uranus">
          <BolinhaPlaneta cor={cor} />
          <NavItemStyledMobile cor={cor}>Uranos</NavItemStyledMobile>
        </LinkStyleMobile>
        <LinkStyleMobile to="/netuno">
          <BolinhaPlaneta cor={cor} />
          <NavItemStyledMobile cor={cor}>Netuno</NavItemStyledMobile>
        </LinkStyleMobile>
      </ListaStyleMobile>
    </NavMobile>
  );
}
