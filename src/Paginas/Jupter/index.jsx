import React from "react";
import Principal from "../../Componentes/Principal";
import dados from "../data.json";
export default function Jupter() {
  return (
    <>
      <Principal dados={dados} index={1} />
    </>
  );
}