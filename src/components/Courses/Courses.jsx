import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import courseImg1 from "../../assets/images/web-design.png";
import courseImg2 from "../../assets/images/graphics-design.png";
import courseImg3 from "../../assets/images/ui-ux.png";
import banner from "../../assets/images/banner.png";
import "./courses.css";
import CourseCard from "./CourseCard";
import axios from "axios";





const coursesData = [
  {
    id: "01",
    title: "Web Design for Beginners",
    teacher: "Mark",
    students: 2,
    // rating: 5.9,
    imgUrl: courseImg1,
    liked: "yes",
  },

  {
    id: "02",
    title: "Professional Graphics Design, Figma",
    teacher: "Elizabeth",
    students: 1,
    // rating: 5.9,
    imgUrl: courseImg2,
    liked: "no",
  },

  {
    id: "03",
    title: "UI/UX BootCamp for Beginners in 2022",
    teacher: "Ted",
    students: 3,
    // rating: 5.9,
    imgUrl: courseImg3,
    liked: "yes",
  },
];

const Courses = () => {

  const [courseData, setCourses] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/course/getAllCourses")
      .then((res) => {
        // setCourses(res.data);
        setCourses(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-50">
                <h2>Trending Courses</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  consequatur libero quod voluptatibus ullam quia quas, vitae
                  voluptatem recusandae reprehenderit!
                </p>
              </div>

              <div className="w-50 text-end">
                <Link to="/courses" style={{ textDecoration: "none", color: "black" }}>
                  <button className="butn">See All</button>
                </Link>
              </div>
            </div>
          </Col>
          {coursesData.map((item) => (
            <Col lg="4" md="6" sm="6">
              <CourseCard key={item.id} item={item} />
            </Col>
          ))}
        </Row>
        <Row>
          <img src={banner} ></img>
        </Row>
      </Container>
    </section>
  );
};

export default Courses;
