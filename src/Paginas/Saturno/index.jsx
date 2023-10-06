import React from "react";
import Principal from "../../Componentes/Principal";
import dados from "../data.json";

export default function Saturno() {
  return (
    <>
      <Principal dados={dados} index={4} />
    </>
  );
}
