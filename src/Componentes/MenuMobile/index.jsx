import React from "react"
import { BolinhaPlaneta } from "../Menu/style"
import {
  LinkStyleMobile,
  ListaStyleMobile,
  NavItemStyledMobile,
  NavMobile,
} from "./Style"

export default function MenuMobile({ corMenuMobile, menuOpen, cor }) {
  return (
    <NavMobile menuOpen={menuOpen}>
      <ListaStyleMobile>
        <LinkStyleMobile to="/mercurio">
          <BolinhaPlaneta corMenuMobile={corMenuMobile} />
          <NavItemStyledMobile cor={cor}>Mercurio</NavItemStyledMobile>
        </LinkStyleMobile>
        <LinkStyleMobile to="/venus">
          <BolinhaPlaneta corMenuMobile={corMenuMobile} />
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
  )
}
