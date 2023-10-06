import Index from "./Paginas/Index";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Jupter from "./Paginas/Jupter";
import Marte from "./Paginas/Marte";
import Netuno from "./Paginas/Netuno";
import Saturno from "./Paginas/Saturno";
import Mercurio from "./Paginas/Mercurio";
import Uranos from "./Paginas/Uranus";
import Venus from "./Paginas/Venus";

function RouterApp() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Index />} />
          <Route path="/jupter" element={<Jupter />} />
          <Route path="/marte" element={<Marte />} />
          <Route path="/netuno" element={<Netuno />} />
          <Route path="/saturno" element={<Saturno />} />
          <Route path="/mercurio" element={<Mercurio />} />
          <Route path="/uranus" element={<Uranos />} />
          <Route path="/venus" element={<Venus />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default RouterApp;
