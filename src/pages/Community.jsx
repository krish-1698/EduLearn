import React, { Fragment } from "react";
import Advertisement from "../components/Advertisement";
import Courses from "../components/Courses/Courses";
import Features from "../components/Features/Features";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/NavBar/NavBar";
import Groups from "../components/Groups";


const Community = () => {
  return (
    <Fragment>
      <Navbar />
      <Groups />
      <Footer />
    </Fragment>
  );
};

export default Community;
