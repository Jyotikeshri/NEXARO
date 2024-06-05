import { Routes, Route, Link } from "react-router-dom";

import React from "react";
import App from "../App";
import HomePage from "../Pages/HomePage";
import LoginPage from "../Pages/LoginPage";
import SignUp from "../Pages/SignUp";
import AdminPanel from "../Components/AminPanel";
import AllUsers from "../Pages/AllUsers.jsx";
import AllProducts from "../Pages/AllProducts.jsx";
import CategoryProduct from "../Pages/CategoryProduct.jsx";
import ProductDetails from "../Pages/ProductDetails.jsx";
import Cart from "../Pages/CartPage.jsx";
import SearchProduct from "../Pages/SearchPage.jsx";
import Success from "../Pages/Success.jsx";
import Cancel from "../Pages/Cancel.jsx";
import OrderPage from "../Pages/OrderPage.jsx";
import AllOrder from "../Pages/AllOrderPage.jsx";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/adminPanel" element={<AdminPanel />} />
      <Route path="/all-users" element={<AllUsers />} />
      <Route path="/all-products" element={<AllProducts />} />
      <Route path="/product-category" element={<CategoryProduct />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/search" element={<SearchProduct />} />
      <Route path="/success" element={<Success />} />
      <Route path="/cancel" element={<Cancel />} />
      <Route path="/order" element={<OrderPage />} />
      <Route path="/all-orders" element={<AllOrder />} />
    </Routes>
  );
};

export default AllRoutes;
