import React from "react";
import Product from "./product";

function ProductList(props) {
  return (
    <>
      {props.productList.map((product, i) => (
        <Product
          key={i}
          product={product}
          incrementQuantity={props.incrementQuantity}
          index={i}
          decrementQuantity={props.decrementQuantity}
          removeItem={props.removeItem}
        />
      ))}
    </>
  );
}

export default ProductList;