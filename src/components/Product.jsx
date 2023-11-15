import React from "react";
import Text from "./Text";

const Product = () => {
  return (
    <div className="product">
      <img src="https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2023/09/13/iphone-15-pro-max-blue-titanium-pure-back-iphone-15-pro-max-blue-titanium-pure-front-2up-screen-usen.png" />
      <p>$100</p>
      <p>Iphone 15 promax</p>
      <p>
        Tất cả iPhone chính hãng VN/A được phân phối tại Hoàng Hà Mobile đều
        được nhập trực tiếp từ Công ty TNHH Apple Việt Nam. Hoàng Hà Mobile là
        nhà bán lẻ ủy quyền chính thức của Apple tại Việt Nam.
      </p>

      <button>Add to cart</button>
      <button>Buy now</button>
    </div>
  );
};

export default Product;
