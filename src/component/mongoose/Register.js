import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
  const [registerInfo, setRegisterInfo] = useState([]);
  const handleRegister = async () => {
    const response = await axios.post("/register", {
      username,
      email,
      password,
    })
    .then(setEmail(''))
    .then(setUsername(''))
    .then(setPassword(''))
    setRegisterInfo(response.data);
    <Navigate to="/login" />
  };
  console.log(registerInfo, 'registerInfo')
  useEffect(() => {
    <Navigate to="/login" />
  }, [handleRegister])
  return (
    <div className="mt-5">
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />{" "}
      <br />
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
      <br />
      {/* <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      /><br /> */}
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};
