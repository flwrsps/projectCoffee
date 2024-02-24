import React from "react";
import ProductPages from "../pages/ProductPages";
import { Route, Routes } from "react-router-dom";
import AddCoffee from "../components/admin/Product/AddCoffee";
import Registar from "../components/admin/Haeder/registar/Registar";
import Login from "../components/admin/Haeder/registar/Login";
import InstructionsCoffee from "../components/admin/Product/InstructionsCoffee";
import EditProduct from "../components/EditProduct/EditProduct";

const MyRoutes = () => {
  const PUBLIC_ROUTES = [
    {
      link: "/",
      element: <ProductPages />,
      id: 1,
    },
    {
      link: "/addcoffee",
      element: <AddCoffee />,
      id: 2,
    },
    {
      link: "/registar",
      element: <Registar />,
      id: 3,
    },
    {
      link: "/login",
      element: <Login />,
      id: 4,
    },
    {
      link: "/instructions",
      element: <InstructionsCoffee />,
      id: 5,
    },
    {
      link: "/edit/:id",
      element: <EditProduct />,
      id: 6,
    },
  ];
  return (
    <Routes>
      {PUBLIC_ROUTES.map((el) => (
        <Route path={el.link} element={el.element} key={el.id} />
      ))}
    </Routes>
  );
};

export default MyRoutes;
