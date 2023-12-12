import React from "react"
import Dados from "../Paginas/data.json"
import { createContext } from "react"

export const PlanetaContext = createContext()
export const PlanetaProvider = ({ children }) => {
  return <UsuarioContex.Provider value={""}>{children}</UsuarioContex.Provider>
}
