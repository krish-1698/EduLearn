import React, { Fragment } from "react";
import Advertisement from "../components/Advertisement";
import Courses from "../components/Courses/Courses";
import Features from "../components/Features/Features";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/NavBar/NavBar";
import RvCourse from "../components/Recently-viewed-courses/r-v-courses"


const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <Advertisement />
      <Courses />
      <RvCourse />
      <Features />
      <Footer />
    </Fragment>
  );
};

export default Home;
