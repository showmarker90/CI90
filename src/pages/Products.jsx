import React, { useEffect } from "react";
import Header from "../components/Header";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

const userLogin = true;

const Products = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!userLogin) {
      //re-direct -> login page
      navigate("/login");
    }
  }, []);
  return (
    <div>
      <Link to={"/products/asus-gaming"}>Asus Gaming</Link>
      <Link to={"/products/macbook-pro"}>Macbook pro</Link>
      <Link to={"/products/dell-gaming"}>Dell Gaming</Link>
    </div>
  );
};

export default Products;
