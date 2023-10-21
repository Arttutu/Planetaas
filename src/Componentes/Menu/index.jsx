import React from "react";
import {
  HeaderStyle,
  Icone,
  LinhaStyle,
  ListaStyle,
  LogoStyle,
  NavItemStyled,
  NavStyle,
} from "./style";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { CorBranca } from "../Variaveis";

const LinkStyle = styled(NavLink)`
  text-decoration: none;
  cursor: pointer;
`;
export default function Menu({ cor }) {
  return (
    <>
      <HeaderStyle>
        <LogoStyle>the planets</LogoStyle>
        <Icone>
          <GiHamburgerMenu size={24} color={CorBranca} />
        </Icone>
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
      </HeaderStyle>
      <LinhaStyle />
    </>
  );
}
