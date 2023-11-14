import React, { useState } from "react";
import {
  Botao,
  HeaderStyle,
  Icone,
  LinhaStyle,
  ListaStyle,
  LogoStyle,
  NavItemStyled,
  NavStyle,
  SegundaNav,
  SegundaNavLinha,
} from "./style";
import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { CorBranca, CorFundo } from "../Variaveis";

export const LinkStyle = styled(NavLink)`
  text-decoration: none;
  cursor: pointer;
  &.active {
  }
`;
export const Caixa = styled.div`
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
  }
`;
export const ListaStyleMobile = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
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

    ${({ menuAberto }) =>
      menuAberto
        ? css`
            opacity: 1;
            pointer-events: auto;
          `
        : ""}
  }
`;
export default function Menu({ cor, rotaUm, rotaDois }) {
  const [menuAberto, setMenuAberto] = useState(false);
  return (
    <>
      <HeaderStyle>
        <Caixa>
          <LogoStyle>the planets</LogoStyle>
          <Icone onClick={() => setMenuAberto(!menuAberto)}>
            <GiHamburgerMenu size={24} color={CorBranca} />
          </Icone>
        </Caixa>
        <NavStyle>
          <ListaStyle>
            <LinkStyle to="/mercurio">
              <NavItemStyled cor={cor}>Mercurio</NavItemStyled>
            </LinkStyle>
            <LinkStyle to="/venus">
              <NavItemStyled cor={cor}>Venus</NavItemStyled>
            </LinkStyle>
            <LinkStyle to="/">
              <NavItemStyled cor={cor}>Terra</NavItemStyled>
            </LinkStyle>
            <LinkStyle to="/marte">
              <NavItemStyled cor={cor}>Marte</NavItemStyled>
            </LinkStyle>
            <LinkStyle to="/jupter">
              <NavItemStyled cor={cor}>Jupter</NavItemStyled>
            </LinkStyle>
            <LinkStyle to="/saturno">
              <NavItemStyled cor={cor}>Saturno</NavItemStyled>
            </LinkStyle>
            <LinkStyle to="/uranus">
              <NavItemStyled cor={cor}>Uranos</NavItemStyled>
            </LinkStyle>
            <LinkStyle to="/netuno">
              <NavItemStyled cor={cor}>Netuno</NavItemStyled>
            </LinkStyle>
          </ListaStyle>
        </NavStyle>
        <NavMobile menuAberto={menuAberto}>
          <ListaStyleMobile>
            <LinkStyle to="/mercurio">
              <NavItemStyled cor={cor}>Mercurio</NavItemStyled>
            </LinkStyle>
            <LinkStyle to="/venus">
              <NavItemStyled cor={cor}>Venus</NavItemStyled>
            </LinkStyle>
            <LinkStyle to="/">
              <NavItemStyled cor={cor}>Terra</NavItemStyled>
            </LinkStyle>
            <LinkStyle to="/marte">
              <NavItemStyled cor={cor}>Marte</NavItemStyled>
            </LinkStyle>
            <LinkStyle to="/jupter">
              <NavItemStyled cor={cor}>Jupter</NavItemStyled>
            </LinkStyle>
            <LinkStyle to="/saturno">
              <NavItemStyled cor={cor}>Saturno</NavItemStyled>
            </LinkStyle>
            <LinkStyle to="/uranus">
              <NavItemStyled cor={cor}>Uranos</NavItemStyled>
            </LinkStyle>
            <LinkStyle to="/netuno">
              <NavItemStyled cor={cor}>Netuno</NavItemStyled>
            </LinkStyle>
          </ListaStyleMobile>
        </NavMobile>
      </HeaderStyle>
      <SegundaNavLinha />
      <SegundaNav>
        <LinkStyle to={rotaUm}>
          <Botao>Sobre</Botao>
        </LinkStyle>
        <LinkStyle to={rotaDois}>
          <Botao>Estrutura</Botao>
        </LinkStyle>
        <LinkStyle>
          <Botao>Geologia</Botao>
        </LinkStyle>
      </SegundaNav>
      <SegundaNavLinha />
      <LinhaStyle />
    </>
  );
}
