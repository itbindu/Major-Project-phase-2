// StudentRegister.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./StudentRegister.css"; // Import the shared CSS file

function StudentRegister() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // TODO: connect with backend API
    navigate("/student/login");
  };

  return (
    <div className="auth-container">
      <div className="auth-form-wrapper">
        <h2 className="auth-title">Student Register</h2>
        <form onSubmit={handleRegister} className="auth-form">
          <input 
            className="auth-input" 
            placeholder="Name" 
            onChange={(e) => setName(e.target.value)} 
          />
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
          <button type="submit" className="auth-button">Register</button>
        </form>
        <p className="auth-link">
          Already have an account? <a href="/student/login">Login here</a>
        </p>
      </div>
    </div>
  );
}

export default StudentRegister;
