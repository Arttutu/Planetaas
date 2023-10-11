import styled from "styled-components";
import { CorBranca, CorLinha, FontAntonio, FontSpartan } from "../Variaveis";

export const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  height: 86px;
  padding: 20px;
`;
export const LinhaStyle = styled.div`
  border-bottom: 1px solid ${CorLinha};
  opacity: 20%;
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
`;
