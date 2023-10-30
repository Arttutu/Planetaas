import React from "react";
import { Conteiner, StylePrincipal } from "./style";
import Planeta from "../Planeta";
import InformacaoPlaneta from "../InformacaoPlaneta";
import Menu from "../Menu";
export default function Principal({
  nome,
  conteudo,
  imagem,
  link,
  cor,
  tablet,
  mobile,
  rotacao,
  revolucao,
  raio,
  temperatura,
  rotaUm,
  rotaDois,
}) {
  return (
    <>
      <StylePrincipal>
        <Menu cor={cor} />
        <main>
          <Conteiner>
            <Planeta
              nome={nome}
              conteudo={conteudo}
              imagem={imagem}
              link={link}
              cor={cor}
              tablet={tablet}
              mobile={mobile}
              rotaUm={rotaUm}
              rotaDois={rotaDois}
            />
            ;
            <InformacaoPlaneta
              rotacao={rotacao}
              revolucao={revolucao}
              raio={raio}
              temperatura={temperatura}
            />
          </Conteiner>
        </main>
      </StylePrincipal>
    </>
  );
}
