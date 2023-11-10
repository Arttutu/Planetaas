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
import styled from "styled-components";

export const LinkStylePlanetas = styled(NavLink)`
  text-decoration: none;
  cursor: pointer;
  &.active {
    background-color: red;
  }
`;
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
          <LinkStylePlanetas
            cor={cor}
            to={rotaUm}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <Botao className={({ isActive }) => (isActive ? "active" : "")}>
              01 Sobre
            </Botao>
          </LinkStylePlanetas>
          <LinkStylePlanetas
            cor={cor}
            to={rotaDois}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <Botao className={({ isActive }) => (isActive ? "active" : "")}>
              02 Estrutura Interna
            </Botao>
          </LinkStylePlanetas>

          <Botao $cor={cor}> 03 Geologia da superfíce</Botao>
        </ContainerBotao>
      </ContainerInfo>
    </ContainerPlaneta>
  );
}
