import styled from "styled-components";
import {
  CorBranca,
  CorCinzaClara,
  CorFundo,
  FontAntonio,
  FontSpartan,
} from "../Variaveis";

export const Titulo = styled.h1`
  font-style: ${FontAntonio};
  color: ${CorBranca};
  font-size: 80px;
  line-height: 103px;
`;
export const Conteudo = styled.p`
  font-style: ${FontSpartan};
  color: ${CorBranca};
  font-size: 14px;
  line-height: 25px;
  width: 350px;
  height: 150px;
`;
export const ContainerBotao = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  gap: 16px;
`;
export const Botao = styled.button`
  width: 350px;
  height: 48px;
  border: 1px solid ${CorCinzaClara};
  background-color: ${CorFundo};
  color: ${CorBranca};
  font-family: ${FontSpartan};
  font-size: 12px;
  font-weight: bold;
  line-height: 25px;
  letter-spacing: 2.57px;
  text-transform: uppercase;
`;
