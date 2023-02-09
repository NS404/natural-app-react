import Home from "./Home";
import React from 'react';
import { Route, Routes } from "react-router-dom";
import Tabular from "./Tabular";


function Pages() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/views/:name" element={<Tabular />} /> 
    </Routes>
  );
}

export default Pages