import React, { Fragment } from "react";
import AllCourses from "../components/Courses/AllCourses";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import DoubtsC from "../components/Doubts";

const Doubts = () => {
  return (
    <Fragment>
      <NavBar />
      <DoubtsC />
      <Footer />
    </Fragment>
  );
};

export default Doubts;
