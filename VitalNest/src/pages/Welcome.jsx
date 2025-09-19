import React from "react";
import "../styles//Welcome.css";
import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const navigate = useNavigate();
  const onclick = (e) => {
    e.preventDefault();
    console.log("ghere");
    
  }
  return (
    <div className="welcome-page">
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

        <button type="submit" className="btn" onClick={(e) => {e.preventDefault(); navigate("/Home");}}>Login</button>

        <div className="register-link">
          <p>
            Not a member? <a href="#">Register</a>
          </p>
        </div>
      </div>
    </div>
  );
}