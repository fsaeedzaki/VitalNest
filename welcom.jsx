import React from "react";
import "./welcom.css";
import { useNavigate } from "react-router-dom";

export default function Welcom() {
  return (
    <div className="wrapper">
      <h1>Login</h1>
      <link rel="stylesheet" href="styles.css" />
      <div className="input-box">
        <input type="text" placeholder="Username" required />
        <i className="bx bx-user"></i>
      </div>
      <div className="input-box">
        <input type="password" placeholder="Password" required />
        <i className="bx bx-lock"></i>
      </div>

      <div className="remember-forgot">
        <label>
          <input type="checkbox" /> Remember me
        </label>
        <a href="#">Forgot Password?</a>
      </div>

      <button type="submit" className="btn">Login</button>

      <div className="register-link">
        <p>
          Not a member? <a href="#">Register</a>
        </p>
      </div>
    </div>
  );
}