import React from "react"
import {
  Box,
  ContainerBotao,
  ContainerInfo,
  ContainerPlaneta,
  ContainerWiki,
  Conteudo,
  Imagem,
  LinkStylePlanetas,
  Span,
  Titulo,
  Wiki,
} from "./style"
import IconeBusca from "./icon-source.svg"
import { CorFundo } from "../Variaveis"

export default function Planeta({
  nome,
  conteudo,
  imagem,
  link,
  cor,
  tablet,
  mobile,
  rotaUm,
  rotaDois,
}) {
  return (
    <ContainerPlaneta>
      <Imagem src={imagem} tablet={tablet} mobile={mobile} alt={nome}></Imagem>
      <ContainerInfo>
        <Box>
          <Titulo>{nome}</Titulo>
          <Conteudo>{conteudo}</Conteudo>
          <ContainerWiki>
            <Span>Fonte : </Span>
            <Span>
              <Wiki href={link} target="blank">
                Wikpédia
              </Wiki>
            </Span>
            <img src={IconeBusca}></img>
          </ContainerWiki>
        </Box>
        <ContainerBotao>
          <LinkStylePlanetas to={rotaUm} cor={cor} activeClassName="active">
            01 Sobre
          </LinkStylePlanetas>
          <LinkStylePlanetas to={rotaDois} cor={cor} activeClassName="active">
            02 Estrutura Interna
          </LinkStylePlanetas>
          <LinkStylePlanetas>03 Geologia da superfíce</LinkStylePlanetas>
        </ContainerBotao>
      </ContainerInfo>
    </ContainerPlaneta>
  )
}
