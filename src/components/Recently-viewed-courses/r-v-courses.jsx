import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";

import courseImg01 from "../../assets/images/web-development.png";
import courseImg02 from "../../assets/images/kids-learning.png";
import courseImg03 from "../../assets/images/seo.png";
import courseImg04 from "../../assets/images/ui-ux.png";
import RvCourseCard from "./r-v-courseCard";
import axios from "axios";
import CourseCard from "../../components/Courses/CourseCard";

import "./r-v-courses.css";

const rvCourseData = [
  {
    id: "01",
    title: "Basic Web Development Course",
    imgUrl: courseImg01,
    students: 5.3,
    rating: 1.7,
  },
  {
    id: "02",
    title: "Coding for Junior Basic Course",
    imgUrl: courseImg02,
    students: 5.3,
    rating: 1.7,
  },

  {
    id: "03",
    title: "Search Engine Optimization - Basic",
    imgUrl: courseImg03,
    students: 5.3,
    rating: 1.7,
  },

  {
    id: "04",
    title: "Basic UI/UX Design - Figma",
    imgUrl: courseImg04,
    students: 5.3,
    rating: 1.7,
  },
];

const RvCourse = () => {

  const [courseData, setCourses] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/mostEnroled")
      .then((res) => {
        // setCourses(res.data);
        setCourses(res.data);
        console.log(res.data); 
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);

  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="text-left mb-5">
            <h2 className="fw-bold">Most Popular Courses</h2>
          </Col>

          {courseData.map((item) => (
            <Col lg="3" md="4" className="mb-4" key={item.id}>
          {/* </Col> <Col lg="4" md="6" sm="6" key={item.id}> */}

              <CourseCard key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default RvCourse;
