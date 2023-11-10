import React from "react";
import Principal from "../../Componentes/Principal";
import Dados from "../data.json";
export default function VenusEstruturas() {
  const dados = Dados;
  const index = 7;
  return (
    <>
      <Principal
        nome={dados[index].nome}
        conteudo={dados[index].estrutura.conteudo}
        imagem={dados[index].imagens.interno}
        link={dados[index].estrutura.fonte}
        cor={dados[index].cor}
        tablet={dados[index].tablet}
        mobile={dados[index].mobile}
        rotacao={dados[index].rotacao}
        revolucao={dados[index].revolucao}
        raio={dados[index].raio}
        temperatura={dados[index].temperatura}
        rotaUm="/venus"
        rotaDois="/venus-estrutura"
      />
    </>
  );
}
