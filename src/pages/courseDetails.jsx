import React, { Fragment } from "react";
import CourseContent from "../components/CourseContent";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";


const CourseDetails = () => {
  return (
    <Fragment>
      <NavBar />
      <CourseContent />
      <Footer />
    </Fragment>
  );
};

export default CourseDetails;
