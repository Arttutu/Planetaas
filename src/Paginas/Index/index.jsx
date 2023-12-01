import React from "react";
import Principal from "../../Componentes/Principal";
import Dados from "../data.json";
export default function Index() {
  const index = 0;
  const dados = Dados;
  return (
    <>
      <Principal
        nome={dados[index].nome}
        conteudo={dados[index].visao_geral.conteudo}
        imagem={dados[index].imagens.planeta}
        link={dados[index].visao_geral.fonte}
        cor={dados[index].cor}
        corMenuMobile={dados[index].cor}
        tablet={dados[index].tablet}
        mobile={dados[index].mobile}
        rotacao={dados[index].rotacao}
        revolucao={dados[index].revolucao}
        raio={dados[index].raio}
        temperatura={dados[index].temperatura}
        rotaUm="/"
        rotaDois="/terra-estrutura"
      />
      - `
    </>
  );
}
