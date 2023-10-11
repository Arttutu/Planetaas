import React from "react";
import { Conteiner, StylePrincipal } from "./style";
import Planeta from "../Planeta";
import InformacaoPlaneta from "../InformacaoPlaneta";
import Menu from "../Menu";
export default function Principal({ dados, index }) {
  return (
    <>
      <StylePrincipal>
        <Menu cor={dados[index].cor} />
        <main>
          <Conteiner>
            <Planeta
              nome={dados[index].nome}
              conteudo={dados[index].visao_geral.conteudo}
              imagem={dados[index].imagens.planeta}
              link={dados[index].visao_geral.fonte}
              cor={dados[index].cor}
            />
            ;
            <InformacaoPlaneta
              rotacao={dados[index].rotacao}
              revolucao={dados[index].revolucao}
              raio={dados[index].raio}
              temperatura={dados[index].temperatura}
            />
          </Conteiner>
        </main>
      </StylePrincipal>
    </>
  );
}
