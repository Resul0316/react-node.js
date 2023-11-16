import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { currentUser } from "../../redux/actions/User";
// import { user } from "../../redux/reducers/User";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userInfo, setUserInfo] = useState([]);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post("/login", { email, password });
      if (response && !("errors" in response)) {
        const data = response.data;
        setUserInfo(data);
      }
      const { token } = response.data;
      localStorage.setItem("userToken", token);
      localStorage.setItem("userEmail", email);
      navigate("/home");
    } catch (err) {
      console.log("LoginError", err);
    }
  };
  console.log(currentUser(email), "currentUser(email)");
  dispatch(currentUser(email));

  return (
    <div className="mt-5">
      <input
        type="email"
        placeholder="Please Enter you Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />{" "}
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};
