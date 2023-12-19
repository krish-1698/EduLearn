import React, { Fragment } from "react";
import Advertisement from "../components/Advertisement";
import Wishlists from "../components/Wishlist";
import Features from "../components/Features/Features";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/NavBar/NavBar";
import RvCourse from "../components/Recently-viewed-courses/r-v-courses"


const Wishlist = () => {
  return (
    <Fragment>
      <Navbar />
      <Wishlists />
      <Footer />
    </Fragment>
  );
};

export default Wishlist;
