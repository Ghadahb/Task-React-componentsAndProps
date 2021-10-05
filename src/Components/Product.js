import React from "react";

function Product({ product }) {

  return (
    <div classname="product">
      <h6> {product.name} </h6>
      <img src={product.image} />
      <p> {product.price} KWD </p>
    </div>
  );
}

export default Product;
