import styled from "styled-components"
import { CorBranca, CorCinza, FontAntonio, FontSpartan } from "../Variaveis"

export const ContainerInfo = styled.div`
  display: flex;
  align-items: left;
  justify-content: end;
  gap: 30px;
  @media (max-width: 1024px) {
    margin-top: 20px;
    gap: 11px;
    align-items: center;
    padding: 0 34px;
    justify-content: center;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`
export const BoxInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  box-sizing: border-box;
  width: 255px;
  height: 128px;
  padding-top: 20px;
  padding-left: 23px;
  border: 1px solid ${CorCinza};
  @media (max-width: 1024px) {
    width: 164px;
    height: 88px;
  }
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
`
export const Info = styled.h2`
  color: ${CorBranca};
  font-family: ${FontAntonio};
  font-size: 42px;
  @media (max-width: 1024px) {
    font-size: 24px;
  }
  @media (max-width: 768px) {
    font-size: 20px;
  }
`
export const Descricao = styled.p`
  font-family: ${FontSpartan};
  font-weight: bold;
  color: ${CorBranca};
  font-size: 11px;
  letter-spacing: 1px;
  opacity: 50%;
`
