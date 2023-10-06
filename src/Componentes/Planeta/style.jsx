import styled from "styled-components";
import {
  CorBranca,
  CorCinza,
  CorCinzaClara,
  CorFundo,
  FontAntonio,
  FontSpartan,
} from "../Variaveis";

export const ContainerPlaneta = styled.section`
  display: flex;
  align-items: center;
  justify-content: right;
  width: 100%;
  height: 80vh;
  gap: 280px;
`;
export const ContainerInfo = styled.div`
  display: flex;
  align-items: left;
  flex-direction: column;
  gap: 2em;
  width: 350px;
`;
export const Titulo = styled.h1`
  font-style: ${FontAntonio};
  color: ${CorBranca};
  font-size: 80px;
  line-height: 103px;
`;
export const ContainerWiki = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
export const Wiki = styled.a`
  color: ${CorCinzaClara};
  font-weight: bold;
`;
export const Span = styled.span`
  font-style: ${FontSpartan};
  font-size: 16px;
  color: ${CorBranca};
  opacity: 50%;
  line-height: 25px;
`;
export const Conteudo = styled.p`
  font-style: ${FontSpartan};
  color: ${CorBranca};
  font-size: 22px;
  line-height: 25px;
`;
export const ContainerBotao = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  gap: 16px;
`;
export const Botao = styled.button`
  width: 350px;
  display: flex;
  align-items: center;
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
  text-align: left;
  padding-left: 28px;
`;
