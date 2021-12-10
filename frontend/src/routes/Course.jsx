import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Course from "../components/course/Course";
import {ProtectedCourseRoute} from "../components/protected.route/ProtectedRoute";
import Footer from "../components/layout/Footer";
function CourseRouter() {
  
  return (
    <React.Fragment>
      <Routes>
        <Route exact path="/" element={<Course />} />
        <Route exact path="/course/:id" element={<ProtectedCourseRoute/>} />
      </Routes>
      <Footer/>
    </React.Fragment>
  );
}

export default CourseRouter;