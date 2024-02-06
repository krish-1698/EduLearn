import React, { Fragment } from "react";
import CourseContent from "../components/CourseContent";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import { useLocation } from "react-router-dom";


const CourseDetails = () => {
  const location = useLocation();
  const item = location.state?.item;
  return (
    <Fragment>
      <NavBar />
      <CourseContent item={item}/>
      <Footer />
    </Fragment>
  );
};

export default CourseDetails;
