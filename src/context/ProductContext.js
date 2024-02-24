import axios from "axios";
import React, { createContext, useContext, useState } from "react";

const productContext = createContext();
export const useProductContext = () => useContext(productContext);

const ProductContext = ({ children }) => {
  const API_PRODUCT = "http://localhost:3001/product";

  const [product, setProduct] = useState([]);
  const [oneProduct, setOneProduct] = useState({});

  async function addProduct(newProduct) {
    await axios.post(API_PRODUCT, newProduct);
  }

  async function readProduct() {
    const { data } = await axios(API_PRODUCT);
    setProduct(data);
  }

  async function deleteProduct(id) {
    await axios.delete(`${API_PRODUCT}/${id}`);
    readProduct();
  }
  async function getOneProduct(id) {
    const { data } = await axios(`${API_PRODUCT}/${id}`);
    setOneProduct(data);
  }

  async function editProduct(id, editProduct) {
    await axios.patch(`${API_PRODUCT}/${id}`, editProduct);
  }
  const values = {
    addProduct,
    readProduct,
    product,
    deleteProduct,
    getOneProduct,
    editProduct,
    oneProduct
  };

  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContext;
