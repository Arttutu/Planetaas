import React from "react";
import { Conteiner, ConteinerDois, MainStyle } from "./style";
import Planeta from "../Planeta";
import InformacaoPlaneta from "../InformacaoPlaneta";
export default function Principal({ dados, index }) {
  return (
    <>
      <MainStyle>
        <Conteiner>
          <Planeta
            nome={dados[index].nome}
            conteudo={dados[index].visao_geral.conteudo}
            imagem={dados[index].imagens.planeta}
            link={dados[index].visao_geral.fonte}
          />
          ;
          <InformacaoPlaneta
            rotacao={dados[index].rotacao}
            revolucao={dados[index].revolucao}
            raio={dados[index].raio}
            temperatura={dados[index].temperatura}
          />
        </Conteiner>
      </MainStyle>
    </>
  );
}
