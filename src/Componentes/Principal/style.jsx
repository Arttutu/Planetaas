import styled from "styled-components";
import { CorFundo } from "../Variaveis";

export const StylePrincipal = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${CorFundo};
  background-image: url("../../assets/img/Outros/background-stars.svg");
  background-size: cover;
  background-repeat: repeat;
  @media (max-width: 1024px) {
    width: 100vw;
    height: 100%;
    padding-bottom: 50px;
  }
  @media (max-width: 768px) {
    width: 100vw;
    height: 100%;
  }
`;
export const Conteiner = styled.div`
  max-width: 1100px;
  height: 756px;
  margin: 0 auto;
  height: auto;
`;
