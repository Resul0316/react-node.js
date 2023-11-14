import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Cookies from "js-cookie";
// components
import { Login } from "../mongoose/Login";
import { Register } from "../mongoose/Register";
import Mongoose from "../mongoose/Mongoose";
import Navbar from "../navbar/Navbar";

const token = Cookies.get().token;
console.log(token, "99");
export const Routing = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/home" element={<Mongoose />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </Router>
  );
};
