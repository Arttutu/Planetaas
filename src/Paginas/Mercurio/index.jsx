import React from "react";
import Principal from "../../Componentes/Principal";
import Dados from "../data.json";
export default function Mercurio() {
  const dados = Dados;
  const index = 3;
  return (
    <>
      <Principal
        nome={dados[index].nome}
        conteudo={dados[index].visao_geral.conteudo}
        imagem={dados[index].imagens.planeta}
        link={dados[index].visao_geral.fonte}
        cor={dados[index].cor}
        tablet={dados[index].tablet}
        mobile={dados[index].mobile}
        rotacao={dados[index].rotacao}
        revolucao={dados[index].revolucao}
        raio={dados[index].raio}
        temperatura={dados[index].temperatura}
      />
    </>
  );
}
