import Home from "./layout/Home/Home";
import React from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Grid from "./layout/Grid/Grid";



export default function App() {
  return (
     
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Grid />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
} 