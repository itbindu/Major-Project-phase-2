// StudentLogin.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./StudentLogin.css"; // Import the shared CSS file

function StudentLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // TODO: connect with backend API
    navigate("/student/dashboard"); // Assuming a dashboard route after login
  };

  return (
    <div className="auth-container">
      <div className="auth-form-wrapper">
        <h2 className="auth-title">Student Login</h2>
        <form onSubmit={handleLogin} className="auth-form">
          <input 
            type="email" 
            className="auth-input" 
            placeholder="Email" 
            onChange={(e) => setEmail(e.target.value)} 
          />
          <input 
            type="password" 
            className="auth-input" 
            placeholder="Password" 
            onChange={(e) => setPassword(e.target.value)} 
          />
          <button type="submit" className="auth-button">Login</button>
        </form>
        <p className="auth-link">
          Don't have an account? <a href="/student/register">Register here</a>
        </p>
      </div>
    </div>
  );
}

export default StudentLogin;
