import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  //   const [confirmPassword, setConfirmPassword] = useState("");
  const [registerInfo, setRegisterInfo] = useState([]);
  const navigate = useNavigate();
  // registeration
  const handleRegister = async () => {
    try {
      if (password.length <= 5) {
        alert("Please enter a longer password");
      } else {
        const response = await axios.post("/register", {
          username,
          email,
          password,
        });
        if (response.status === 201) {
          setEmail("");
          setUsername("");
          setPassword("");
          setRegisterInfo(response.data);
          navigate("/login");
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

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
