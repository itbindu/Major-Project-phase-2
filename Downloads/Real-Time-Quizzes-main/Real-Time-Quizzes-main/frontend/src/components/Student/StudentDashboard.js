import React from "react";
import "./StudentDashboard.css";
import studentImage from "../../assets/student.png";
 // <-- place your student picture inside src folder  

function StudentDashboard() {
  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Student Dashboard</h2>

      <div className="dashboard-content">
        {/* Left side - Buttons */}
        <div className="dashboard-left">
          <div className="dashboard-box">Meeting Links</div>
          <div className="dashboard-box">Notifications</div>
          <div className="dashboard-box">Assignments / Quiz</div>
          <div className="dashboard-box">Leaderboard</div>
          <div className="dashboard-box">Attendance</div>
        </div>

        {/* Right side - Student Image */}
        <div className="dashboard-right">
          <img
            src={studentImage}
            alt="Student illustration"
            className="student-image"
          />
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;