import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import { useProductContext } from "../../../context/ProductContext";

const ProductList = () => {
  const { readProduct, product } = useProductContext();

  useEffect(() => {
    readProduct();
  }, [readProduct]);
  return (
    <div
      style={{
        width: "90%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "80px",
        padding: "30px 60px",
        flexWrap: "wrap",
      }}
    >
      {product ? (
        product.map((el, index) => <ProductCard key={index} el={el} />)
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default ProductList;
