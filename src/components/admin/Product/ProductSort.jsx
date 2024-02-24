import { Box, Typography } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import { useProductContext } from "../../../context/ProductContext";

const ProductSort = () => {
  const { product } = useProductContext();
  return (
    <Box>
      <Box className="container">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: "none",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography sx={{ fontSize: "27px", fontWeight: "bold" }}>
              Все виды ({product.length})
            </Typography>
            <Link to="/addcoffee">
              <AddIcon />
            </Link>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <input
              style={{
                padding: "10px 20px",
                borderRadius: "40px",
                border: "none",
                background: "rgb(230, 210, 193)",
              }}
              type=""
              name=""
              id=""
            />
            <SearchIcon />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductSort;
