import { Button, Image, Typography } from "antd";
import React, { useState } from "react";
import axios from "axios";
import BeatLoader from "react-spinners/BeatLoader";
import { Link } from "react-router-dom";

const ListProduct = () => {
  const [response, setResponse] = useState({
    products: [],
    errMsg: "",
    loading: false,
  });

  const fetchProducts = async () => {
    setResponse((prev) => ({ ...prev, loading: true }));
    try {
      // await delay();
      const res = await axios.get("https://fakestoreapi.com/products");
      setResponse((prev) => ({ ...prev, products: res.data }));
    } catch (err) {
      setResponse((prev) => ({ ...prev, errMsg: err.message }));
    }

    setResponse((prev) => ({ ...prev, loading: false }));
  };

  const { products, errMsg, loading } = response;

  return (
    <div>
      <Button
        type="primary"
        size="large"
        onClick={fetchProducts}
        style={{
          margin: "0 auto",
          display: "block",
        }}
      >
        Get Products
      </Button>

      {loading && (
        <div className="loading">
          <BeatLoader color="blue" />
        </div>
      )}
      {errMsg && (
        <Typography
          style={{
            fontWeight: "bold",
            color: "red",
            fontSize: "25px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          {errMsg}
        </Typography>
      )}

      {!!products &&
        products.map((product) => (
          <Link
            to={`/products/${product.id}`}
            className="image-product"
            key={product.id}
          >
            <img src={product.image} />
          </Link>
        ))}
    </div>
  );
};

export default ListProduct;
