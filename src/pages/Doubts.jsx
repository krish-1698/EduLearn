import React, { Fragment } from "react";
import AllCourses from "../components/Courses/AllCourses";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import DoubtsC from "../components/Doubts";
import { useLocation } from "react-router-dom";

const Doubts = () => {
  const location = useLocation();
  const group_id = location.state?.group_id;
  return (
    <Fragment>
      <NavBar />
      <DoubtsC group_id={group_id}/>
      <Footer />
    </Fragment>
  );
};

export default Doubts;
