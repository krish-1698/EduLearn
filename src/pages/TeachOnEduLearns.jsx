import React, { Fragment } from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/NavBar/NavBar";
import TeachOnEduLearn from "../components/TeachOnEduLearn";


const TeachOnEduLEarns = () => {
  return (
    <Fragment>
      <Navbar />
      <TeachOnEduLearn />
      <Footer />
    </Fragment>
  );
};

export default TeachOnEduLEarns;