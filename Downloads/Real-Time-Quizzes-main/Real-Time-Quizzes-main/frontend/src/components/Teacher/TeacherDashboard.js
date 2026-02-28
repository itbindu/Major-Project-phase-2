import React from "react";
import "./TeacherDashboard.css";

function TeacherDashboard() {
  return (
    <div className="dashboard-container">
      <h2>Teacher Dashboard</h2>
      <div className="dashboard-grid">
        <div className="dashboard-box">Give Access to Students</div>
        <div className="dashboard-box">Create Meeting Link</div>
        <div className="dashboard-box">Create Quiz</div>
        <div className="dashboard-box">Leaderboard</div>
        <div className="dashboard-box">Attendance</div>
        <div className="dashboard-box">Upload Files (LMS)</div>
      </div>
    </div>
  );
}

export default TeacherDashboard;
