import React from "react"
import { BolinhaPlaneta } from "../Menu/style"
import Dados from "../../Paginas/data.json"
import {
  LinhaMenu,
  LinkStyleMobile,
  ListaStyleMobile,
  NavItemStyledMobile,
  NavMobile,
} from "./Style"

export default function MenuMobile({ menuOpen, cor }) {
  const DadosCor = Dados
  return (
    <NavMobile menuOpen={menuOpen}>
      <ListaStyleMobile>
        <LinkStyleMobile to="/mercurio">
          <BolinhaPlaneta cor={DadosCor[5].cor} />
          <NavItemStyledMobile>Mercurio</NavItemStyledMobile>
        </LinkStyleMobile>
        <LinhaMenu />
        <LinkStyleMobile to="/venus">
          <BolinhaPlaneta cor={DadosCor[7].cor} />
          <NavItemStyledMobile>Venus</NavItemStyledMobile>
        </LinkStyleMobile>
        <LinhaMenu />
        <LinkStyleMobile to="/">
          <BolinhaPlaneta cor={DadosCor[0].cor} />
          <NavItemStyledMobile>Terra</NavItemStyledMobile>
        </LinkStyleMobile>
        <LinhaMenu />
        <LinkStyleMobile to="/marte">
          <BolinhaPlaneta cor={DadosCor[2].cor} />
          <NavItemStyledMobile>Marte</NavItemStyledMobile>
        </LinkStyleMobile>
        <LinhaMenu />
        <LinkStyleMobile to="/jupter">
          <BolinhaPlaneta cor={DadosCor[1].cor} />
          <NavItemStyledMobile>Jupter</NavItemStyledMobile>
        </LinkStyleMobile>
        <LinhaMenu />
        <LinkStyleMobile to="/saturno">
          <BolinhaPlaneta cor={DadosCor[4].cor} />
          <NavItemStyledMobile>Saturno</NavItemStyledMobile>
        </LinkStyleMobile>
        <LinhaMenu />
        <LinkStyleMobile to="/uranus">
          <BolinhaPlaneta cor={DadosCor[6].cor} />
          <NavItemStyledMobile>Uranos</NavItemStyledMobile>
        </LinkStyleMobile>
        <LinhaMenu />
        <LinkStyleMobile to="/netuno">
          <BolinhaPlaneta cor={DadosCor[3].cor} />
          <NavItemStyledMobile>Netuno</NavItemStyledMobile>
        </LinkStyleMobile>
        <LinhaMenu />
      </ListaStyleMobile>
    </NavMobile>
  )
}
