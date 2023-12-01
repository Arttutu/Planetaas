import React from "react"
import { BoxInfo, ContainerInfo, Descricao, Info } from "./Style"

export default function InformacaoPlaneta({
  rotacao,
  revolucao,
  raio,
  temperatura,
}) {
  return (
    <ContainerInfo>
      <BoxInfo>
        <Descricao>Tempo de Rotação</Descricao>
        <Info>{rotacao}</Info>
      </BoxInfo>
      <BoxInfo>
        <Descricao>Tempo de Revolução</Descricao>
        <Info>{revolucao}</Info>
      </BoxInfo>
      <BoxInfo>
        <Descricao>Raio</Descricao>
        <Info>{raio}</Info>
      </BoxInfo>
      <BoxInfo>
        <Descricao>Temperatura</Descricao>
        <Info>{temperatura}</Info>
      </BoxInfo>
    </ContainerInfo>
  )
}
