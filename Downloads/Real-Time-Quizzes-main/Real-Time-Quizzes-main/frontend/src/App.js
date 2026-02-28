import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./components/HomePage";

// Teacher
import TeacherLogin from "./components/Teacher/TeacherLogin";
import TeacherRegister from "./components/Teacher/TeacherRegister";
import TeacherDashboard from "./components/Teacher/TeacherDashboard";

// Student
import StudentLogin from "./components/Student/StudentLogin";
import StudentRegister from "./components/Student/StudentRegister";
import StudentDashboard from "./components/Student/StudentDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* Teacher routes */}
        <Route path="/teacher/login" element={<TeacherLogin />} />
        <Route path="/teacher/register" element={<TeacherRegister />} />
        <Route path="/teacher/dashboard" element={<TeacherDashboard />} />

        {/* Student routes */}
        <Route path="/student/login" element={<StudentLogin />} />
        <Route path="/student/register" element={<StudentRegister />} />
        <Route path="/student/dashboard" element={<StudentDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
