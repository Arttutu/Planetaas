import React from "react";
import { Conteiner, MainStyle } from "./style";
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
          />
          ;
          <InformacaoPlaneta />
        </Conteiner>
      </MainStyle>
    </>
  );
}
