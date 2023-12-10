import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import ProductsDetail from "./pages/ProductsDetail";
import Login from "./pages/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products/:ID" element={<ProductsDetail />} />
        <Route path="*" element=<NotFound /> />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
