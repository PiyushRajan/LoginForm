import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [usererr, setUsererr] = useState("");
  const [passerr, setPasserr] = useState("");

  async function LoginForm(e) {
    e.preventDefault();
    if (email.length < 1) {
      setUsererr("enter email");
    } else if (password.length < 1) {
      setPasserr("enter email");
    } else {
      console.log(email, password);
      let item = { email, password };
      let result = await fetch(
        "https://sql-dev-india.thewitslab.com:3003/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(item),
        }
      );
      result = await result.json();
      localStorage.setItem("user-info", JSON.stringify(result));
      if (result.token === undefined) {
        navigate("/");
        alert("not registered");
      } else {
        console.log(result.token);
        navigate("/login");
      }
    }
  }

  return (
    <form onSubmit={LoginForm} className="page">
      <div className="cover">
        <h1>Login</h1>
        <input
          className="input"
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        {usererr ? <span>Please Enter Email</span> : null}
        <input
          className="input"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        {passerr ? <span>Please Enter Password</span> : null}
        <button className="login-btn">Login</button>
      </div>
    </form>
  );
};

export default LoginForm;
