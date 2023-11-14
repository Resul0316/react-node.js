import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
// components
import { Login } from "../mongoose/Login";
import { Register } from "../mongoose/Register";
import Mongoose from "../mongoose/Mongoose";
import Navbar from "../navbar/Navbar";

const token = localStorage.getItem('userToken');
console.log(token, "99");
export const Routing = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {token !== undefined && token && <Route path="/home" element={<Mongoose />}></Route>}
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </Router>
  );
};
