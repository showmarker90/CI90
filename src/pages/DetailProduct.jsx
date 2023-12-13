import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//https://fakestoreapi.com/products/:productID
const DetailProduct = () => {
  const { productID } = useParams();

  const [response, setResponse] = useState({
    products: [],
    errMsg: "",
    loading: false,
  });

  const fetchProduct = async () => {
    setResponse((prev) => ({ ...prev, loading: true }));
    try {
      // await delay();
      const res = await axios.get(
        `https://fakestoreapi.com/products/${productID}`
      );
      setResponse((prev) => ({ ...prev, products: res.data }));
    } catch (err) {
      setResponse((prev) => ({ ...prev, errMsg: err.message }));
    }

    setResponse((prev) => ({ ...prev, loading: false }));
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  const { products } = response;

  return (
    <div>
      {products && (
        <div>
          {products.title}
          <img src={products.image} />
        </div>
      )}
    </div>
  );
};

export default DetailProduct;
