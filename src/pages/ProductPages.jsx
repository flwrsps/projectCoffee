import React from "react";
import HeaderUp from "../components/admin/Haeder/HeaderUp";
import { Box } from "@mui/material";
import Header from "../components/admin/Haeder/Header";
import HeaderNavigate from "../components/admin/Haeder/HeaderNavigate";
import logo from "../image/76069154611832_coffee.webp";
import ProductList from "../components/admin/Product/ProductList";
import ProductSort from "../components/admin/Product/ProductSort";
import ImageLoga from "../components/BgImg/ImageLoga";

const ProductPages = () => {
  return (
    <div>
      <Box>
        <HeaderUp />
        <Header />
        <HeaderNavigate />
        <Box sx={{ textAlign: "center", p: "40px 0" }}>
          <img src={logo} alt="" />
          {/* <ImageLoga /> */}
        </Box>
        <Box>
          <ProductSort />
          <ProductList />
        </Box>
      </Box>
    </div>
  );
};

export default ProductPages;
