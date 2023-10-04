import React from "react";
import { Botao, ContainerBotao, Conteudo, Titulo } from "./style";
export default function Planeta({ nome, conteudo }) {
  return (
    <div>
      <img></img>
      <div>
        <Titulo>{nome}</Titulo>
        <Conteudo>{conteudo}</Conteudo>
        <div>
          <span></span>
          <span></span>
          <icone></icone>
        </div>
        <ContainerBotao>
          <Botao> 01 Sobre</Botao>
          <Botao> 02 Estrutura Interna</Botao>
          <Botao> 03 Geologia da superfíce</Botao>
        </ContainerBotao>
      </div>
    </div>
  );
}
