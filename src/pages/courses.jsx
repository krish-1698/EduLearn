  import React, { Fragment } from "react";
  import Advertisement from "../components/Advertisement";
  import AllCourses from "../components/Courses/AllCourses";
  import Footer from "../components/Footer/Footer";
  import NavBar from "../components/NavBar/NavBar";


  const Courses = () => {
    return (
      <Fragment>
        <NavBar />
        <AllCourses/>
        <Footer />
      </Fragment>
    );
  };

  export default Courses;
