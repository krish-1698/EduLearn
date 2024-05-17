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
    amount:750,
    // rating: 5.9,
    imgUrl: courseImg1,
    liked: "yes",
  },

  {
    id: "02",
    title: "Professional Graphics Design, Figma",
    teacher: "Elizabeth",
    students: 1,
    amount:800,
    // rating: 5.9,
    imgUrl: courseImg2,
    liked: "no",
  },

  {
    id: "03",
    title: "UI/UX BootCamp for Beginners in 2022",
    teacher: "Ted",
    students: 3,
    amount:800,
    // rating: 5.9,
    imgUrl: courseImg3,
    liked: "yes",
  },
];

const Courses = () => {

  const [courseData, setCourses] = useState([]);
  const [enroledCourseData, setEnrolldCourseData] = useState([]);


  const enrolledCourses = () => {
    axios
      .get("http://localhost:3001/api/enrolmentForUser", {
        params: {user_id: localStorage.getItem('user_id')}
      })
      .then((res) => {
        console.log(res.data);
        setEnrolldCourseData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/raddCourses")
      .then((res) => {
        // setCourses(res.data);
        setCourses(res.data);
        console.log(res.data); 
      })
      .catch((err) => {
        console.log(err);
      });
      const isLoggedIn = localStorage.getItem('loggedIn');
    if (isLoggedIn === 'true') {
      enrolledCourses();
    }
  },[]);


  return (
    <section>
      <Container>

      {enroledCourseData.length != 0 && (
      <Row>
        <Col lg="12" className="mb-5">
          <div className="course__top d-flex justify-content-between align-items-center">
            <div className="course__top__left w-50">
              <h2>Enroled Courses</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                consequatur libero quod voluptatibus ullam quia quas, vitae
                voluptatem recusandae reprehenderit!
              </p>
            </div>
            {/* <div className="w-50 text-end">
              <Link to="/courses" style={{ textDecoration: "none", color: "black" }}>
                <button className="butn">See All</button>
              </Link>
            </div> */}
          </div>
        </Col>
        {enroledCourseData.map((item) => (
          // <Col lg="4" md="6" sm="6" key={item.id}>
          <Col lg="3" md="4" className="mb-4" key={item.id}>
            <CourseCard item={item} />
          </Col>
        ))}
      </Row>
    )}
        <Row>
          <Col lg="12" className="mb-5">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-50">
                <h2>Recently Added Courses</h2>
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
          {courseData.map((item) => (
             <Col lg="4" md="6" sm="6">
              {/* <Col lg="3" md="4" className="mb-4" key={item.id}> */}
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
