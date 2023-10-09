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

export default function Planeta({ nome, conteudo, imagem, link }) {
  return (
    <ContainerPlaneta>
      <Imagem src={imagem}></Imagem>
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
          <Botao> 01 Sobre</Botao>
          <Botao> 02 Estrutura Interna</Botao>
          <Botao> 03 Geologia da superfíce</Botao>
        </ContainerBotao>
      </ContainerInfo>
    </ContainerPlaneta>
  );
}
