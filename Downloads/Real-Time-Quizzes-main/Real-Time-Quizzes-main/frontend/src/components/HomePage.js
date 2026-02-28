import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>Virtual Classroom</h1>
      <div className="home-boxes">
        <div className="home-box teacher" onClick={() => navigate("/teacher/login")}>
          <h2>👨‍🏫 Teacher</h2>
          <p>Manage classes, quizzes, attendance, LMS</p>
        </div>
        <div className="home-box student" onClick={() => navigate("/student/login")}>
          <h2>👩‍🎓 Student</h2>
          <p>Join meetings, quizzes, assignments, notifications</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
