import React from "react";
import { useParams } from "react-router-dom";

const ProductsDetail = () => {
  const { ID } = useParams();

  return <div>Chi tiết sản phẩm : {ID}</div>;
};

export default ProductsDetail;
