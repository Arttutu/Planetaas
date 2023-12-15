import React, { useState } from "react"
import {
  Botao,
  Caixa,
  HeaderStyle,
  Icone,
  LinhaStyle,
  LinkStyle,
  ListaStyle,
  LogoStyle,
  NavItemStyled,
  NavStyle,
  SegundaNav,
  SegundaNavLinha,
} from "./style"
import { GiHamburgerMenu } from "react-icons/gi"
import { CorBranca } from "../Variaveis"
import MenuMobile from "../MenuMobile"
import { NavLink } from "react-router-dom"
import "./style.css"
export default function Menu({ cor, rotaUm, rotaDois, corMenuMobile }) {
  const [menuAberto, setMenuAberto] = useState(false)
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
              <NavItemStyled cor={cor} activeClassName="active">
                Mercurio
              </NavItemStyled>
            </LinkStyle>
            <LinkStyle to="/venus">
              <NavItemStyled cor={cor} activeClassName="active">
                Venus
              </NavItemStyled>
            </LinkStyle>
            <LinkStyle to="/">
              <NavItemStyled cor={cor} activeClassName="active">
                Terra
              </NavItemStyled>
            </LinkStyle>
            <LinkStyle to="/marte">
              <NavItemStyled cor={cor} activeClassName="active">
                Marte
              </NavItemStyled>
            </LinkStyle>
            <LinkStyle to="/jupter">
              <NavItemStyled cor={cor} activeClassName="active">
                Jupter
              </NavItemStyled>
            </LinkStyle>
            <LinkStyle to="/saturno">
              <NavItemStyled cor={cor} activeClassName="active">
                Saturno
              </NavItemStyled>
            </LinkStyle>
            <LinkStyle to="/uranus">
              <NavItemStyled cor={cor} activeClassName="active">
                Uranos
              </NavItemStyled>
            </LinkStyle>
            <LinkStyle to="/netuno">
              <NavItemStyled cor={cor} activeClassName="active">
                Netuno
              </NavItemStyled>
            </LinkStyle>
          </ListaStyle>
        </NavStyle>
        <MenuMobile
          menuOpen={menuAberto}
          cor={cor}
          corMenuMobile={corMenuMobile}
        />
      </HeaderStyle>
      <SegundaNavLinha />
      <SegundaNav>
        <Botao>
          <NavLink className="style-link" to={rotaUm}>
            Sobre
          </NavLink>
        </Botao>
        <Botao>
          <NavLink className="style-link" to={rotaDois}>
            Estrutura
          </NavLink>
        </Botao>
        <LinkStyle>
          <Botao>Geologia</Botao>
        </LinkStyle>
      </SegundaNav>
      <SegundaNavLinha />
      <LinhaStyle />
    </>
  )
}
