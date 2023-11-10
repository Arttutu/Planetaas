import Index from "./Paginas/Index";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Jupter from "./Paginas/Jupter";
import Marte from "./Paginas/Marte";
import Netuno from "./Paginas/Netuno";
import Saturno from "./Paginas/Saturno";
import Mercurio from "./Paginas/Mercurio";
import Uranos from "./Paginas/Uranus";
import Venus from "./Paginas/Venus";
import JupterEstrutura from "./Paginas/Jupter-estrutura";
import MarteEstrutura from "./Paginas/Marte-estrutura";
import MercurioEstrutura from "./Paginas/Mercurio-estrutura";
import NetunoEstrutura from "./Paginas/Netuno-estrutura";
import SaturnoEstrutura from "./Paginas/Saturno-estrutura";
import TerraEstrutura from "./Paginas/Terra-estruturada";
import UranusEstrutura from "./Paginas/Uranus-estrutura";
import VenusEstruturas from "./Paginas/Venus-estrutura";

function RouterApp() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Index />} />
          <Route path="/terra-estrutura" element={<TerraEstrutura />} />
          <Route path="/jupter" element={<Jupter />} />
          <Route path="/jupter-estrutura" element={<JupterEstrutura />} />
          <Route path="/marte" element={<Marte />} />
          <Route path="/marte-estrutura" element={<MarteEstrutura />} />
          <Route path="/netuno" element={<Netuno />} />
          <Route path="/netuno-estrutura" element={<NetunoEstrutura />} />
          <Route path="/saturno" element={<Saturno />} />
          <Route path="/saturno-estrutura" element={<SaturnoEstrutura />} />
          <Route path="/mercurio" element={<Mercurio />} />
          <Route path="/mercurio-estrutura" element={<MercurioEstrutura />} />
          <Route path="/uranus" element={<Uranos />} />
          <Route path="/uranus-estrutura" element={<UranusEstrutura />} />
          <Route path="/venus" element={<Venus />} />
          <Route path="/venus-estrutura" element={<VenusEstruturas />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default RouterApp;
