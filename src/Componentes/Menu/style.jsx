import styled from "styled-components";
import { CorBranca, CorLinha, FontAntonio, FontSpartan } from "../Variaveis";

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
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
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
    position: relative;
    border-top: 5px solid ${(props) => props.cor};
  }
`;

export const LinhaStyle = styled.div`
  border-bottom: 1px solid ${CorLinha};
  opacity: 20%;
  @media (max-width: 1024px) {
    display: none;
  }
`;
