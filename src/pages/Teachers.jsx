import React, { Fragment } from "react";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import AllTeachers from "../components/Teachers";


const Teachers = () => {
  return (
    <Fragment>
      <NavBar />
      <AllTeachers />
      <Footer />
    </Fragment>
  );
};

export default Teachers;