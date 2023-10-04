import Index from "./Paginas/Index";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Jupter from "./Paginas/Jupter";

function RouterApp() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Index />} />
          <Route path="/jupter" element={<Jupter />} />
          <Route path="/mercurio" />
          <Route path="/marte" />
          <Route path="/netuno" />
          <Route path="/saturno" />
          <Route path="/uranus" />
          <Route path="/venus" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default RouterApp;
