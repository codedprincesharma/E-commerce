import { Route, Routes } from "react-router-dom";
import Home from "./../pages/Home";
import Products from "./../pages/Products";
import Login from "./../pages/Login";
import Register from "../pages/Register";
import CreateProduct from "../pages/Admin/CreateProduct";
import UpdateProduct from "../pages/Admin/UpdateProduct";

const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="admin/create-product" element={<CreateProduct />} />
      <Route path="admin/updat-project/:id" element={<UpdateProduct />} />
    </Routes>
  );
};

export default MainRoute;
