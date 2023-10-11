import styled from "styled-components";
import {
  CorBranca,
  CorCinzaClara,
  CorFundo,
  FontAntonio,
  FontSpartan,
} from "../Variaveis";

export const ContainerPlaneta = styled.section`
  display: flex;
  align-items: center;
  justify-content: right;
  max-width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  height: 70vh;
  gap: 280px;
  @media (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    padding-top: 150px;
    margin-left: 39px;
    margin-right: 39px;
    gap: 100px;
    height: auto;
  }
  @media (max-width: 768px) {
  }
`;
export const Box = styled.div`
  gap: 1em;
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: left;
    text-align: left;
  }
`;
export const ContainerInfo = styled.div`
  display: flex;
  align-items: left;
  flex-direction: column;
  gap: 2em;
  width: 350px;
  @media (max-width: 1024px) {
    justify-content: center;
    align-items: center;
    flex-direction: row;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const Titulo = styled.h1`
  font-style: ${FontAntonio};
  color: ${CorBranca};
  font-size: 80px;
  line-height: 103px;
  @media (max-width: 768px) {
    text-align: center;
  }
`;
export const ContainerWiki = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  @media (max-width: 768px) {
    text-align: center;
    justify-content: center;
  }
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
export const Imagem = styled.img`
  @media (max-width: 1024px) {
    width: 285px;
    height: 285px;
  }
`;
export const Conteudo = styled.p`
  font-style: ${FontSpartan};
  color: ${CorBranca};
  font-size: 16px;
  line-height: 25px;
  @media (max-width: 1024px) {
    width: 339px;
  }
  @media (max-width: 768px) {
    text-align: center;
  }
`;
export const ContainerBotao = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  gap: 16px;
  @media (max-width: 768px) {
    display: none;
  }
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
  @media (max-width: 1024px) {
    width: 281px;
    height: 40px;
  }

  &:hover {
    background-color: ${(props) => props.cor};
    border: none;
    cursor: pointer;
  }
`;
