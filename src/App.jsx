import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListProduct from "./pages/ListProduct";
import DetailProduct from "./pages/DetailProduct";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListProduct />} />
        <Route path="/products/:productID" element={<DetailProduct />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
