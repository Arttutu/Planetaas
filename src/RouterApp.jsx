import Index from "./Paginas/Index";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function RouterApp() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Index />} />
          <Route path="/jupter" />
          <Route path="/marte" />
          <Route path="/mercurio" />
          <Route path="/netuno" />
          <Route path="/saturno" />
          <Route path="/uranus" />
          <Route path="/venus" />
        </Routes>
      </BrowserRouter>
      <Index />
    </>
  );
}

export default RouterApp;
