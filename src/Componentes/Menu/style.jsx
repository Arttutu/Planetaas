import styled from "styled-components";
import {
  CorBranca,
  CorFundo,
  CorLinha,
  FontAntonio,
  FontSpartan,
} from "../Variaveis";

export const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  height: 86px;
  padding: 20px;
  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 39px;
  }
  @media (max-width: 768px) {
    padding: 0px 24px;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
`;
export const Icone = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    cursor: pointer;
  }
`;
export const LogoStyle = styled.h1`
  font-size: 28px;
  font-family: ${FontAntonio};
  color: ${CorBranca};
  text-transform: uppercase;
`;
export const NavStyle = styled.nav`
  width: 665px;
  height: 65px;
  display: flex;
  @media (max-width: 1024px) {
    justify-content: center;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
export const ListaStyle = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 33px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const NavItemStyled = styled.li`
  color: ${CorBranca};
  opacity: 70%;
  font-family: ${FontSpartan};
  font-weight: bold;
  font-size: 16px;
  line-height: 25px;
  transition: 0.5s;
  &:hover {
    border-top: 5px solid ${(props) => props.cor};
  }
`;
export const SegundaNav = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 43px;
    padding: 20px;
  }
`;
export const Botao = styled.button`
  border: none;
  text-transform: uppercase;
  font-family: ${FontSpartan};
  background-color: ${CorFundo};
  color: ${CorBranca};
  font-size: 16px;
`;

export const LinhaStyle = styled.div`
  border-bottom: 1px solid ${CorLinha};
  opacity: 20%;
  @media (max-width: 1024px) {
    display: none;
  }
`;
export const SegundaNavLinha = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    width: 100%;
    border-bottom: 2px solid ${CorLinha};
    opacity: 20%;
  }
`;
export const BolinhaPlaneta = styled.div`
  border-radius: 100%;
  width: 20px;
  height: 20px;
  color: ${(props) => props.cor};
  background-color: ${(props) => props.cor};
`;
