import Home from "./layout/Home/Home";
import React from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Grid from "./layout/Grid/Grid";
import Details from "./component/Details/Details";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Grid />} />
          <Route path="detail" element={<Details />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
} 