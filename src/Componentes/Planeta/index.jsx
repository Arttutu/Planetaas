import React from "react";
import {
  Botao,
  Box,
  ContainerBotao,
  ContainerInfo,
  ContainerPlaneta,
  ContainerWiki,
  Conteudo,
  Imagem,
  Span,
  Titulo,
  Wiki,
} from "./style";
import IconeBusca from "./icon-source.svg";
import { NavLink } from "react-router-dom";
import { LinkStyle } from "../Menu";

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
      <Imagem
        src={imagem}
        tablet={tablet}
        mobile={mobile}
        alt="Nome do planeta ainda vou adicionar"
      ></Imagem>
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
          <LinkStyle to={rotaUm}>
            <Botao $cor={cor}> 01 Sobre</Botao>
          </LinkStyle>
          <LinkStyle to={rotaDois}>
            <Botao $cor={cor}> 02 Estrutura Interna</Botao>
          </LinkStyle>
          <Botao $cor={cor}> 03 Geologia da superfíce</Botao>
        </ContainerBotao>
      </ContainerInfo>
    </ContainerPlaneta>
  );
}
