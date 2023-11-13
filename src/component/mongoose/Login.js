import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from 'js-cookie'

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userInfo, setUserInfo] = useState([]);

  const handleLogin = async () => {
    try {
        const response = await axios.post('/login', { email, password })
        .then(setEmail(''))
        .then(setPassword(''))
        console.log(response.data, 'response.data')
        setUserInfo(response.data)
    } catch (err) {
        console.log('LoginError', err)
    }
  }
  useEffect(() => {
    if (userInfo) {
        Cookies.set('token', userInfo.token)
    }
  }, [handleLogin])

  return (
    <div className="mt-5">
      <input
        type="email"
        placeholder="Please Enter you Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /> <br/>
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
