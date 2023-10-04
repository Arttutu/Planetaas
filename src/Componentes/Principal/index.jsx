import React from "react";
import { Conteiner, MainStyle } from "./style";
import Planeta from "../Planeta";
import InformacaoPlaneta from "../InformacaoPlaneta";

export default function Principal() {
  return (
    <>
      <MainStyle>
        <Conteiner>
          <Planeta />
          <InformacaoPlaneta />
        </Conteiner>
      </MainStyle>
    </>
  );
}
