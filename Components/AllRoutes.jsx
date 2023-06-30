import React from "react";
import { Routes, Route } from "react-router-dom";
import AddIce from "./AddIce";
import Admin from "./Admin";
import User from "./User";
import Login from "./Login";
import Home from "./Home";
import FetchIcecream from "./FetchIcecream";
import PrivateRoute from "./privateRoute";
import Cart from "./Cart";

const AllRoutes = () => {
  const isAuthenticated = true;

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addice" element={<AddIce />} />
        <Route path="/fetch" element={<FetchIcecream />} />
        <Route path="/user" element={<User />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
