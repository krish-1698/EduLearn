import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import courseImg1 from "../assets/images/web-design.png";
import courseImg2 from "../assets/images/graphics-design.png";
import courseImg3 from "../assets/images/ui-ux.png";
import "./Courses/courses.css";
import CourseCard from "./Courses/CourseCard";
import axios from "axios";

const coursesData = [
  {
    id: "01",
    title: "Web Design for Beginners",
    teacher: "Antony",
    students: 12.5,
    rating: 5.9,
    amount:600,
    imgUrl: courseImg1,
    liked: "yes",
  },

  {
    id: "02",
    title: "Professional Graphics Design, Figma",
    teacher: "Jordan",
    students: 12.5,
    rating: 5.9,
    amount:750,
    imgUrl: courseImg2,
    liked: "yes",
  },

  {
    id: "03",
    title: "UI/UX BootCamp for Beginners in 2022",
    teacher: "Nick",
    students: 12.5,
    rating: 5.9,
    amount:850,
    imgUrl: courseImg3,
    liked: "yes"
  },
];



const Wishlist = () => {

  const [courses, setCourses] = useState([]);
useEffect(() => {
  if(localStorage.getItem('loggedIn')=='true'){
    axios
.get(`http://localhost:3001/api/wishlistCourses/${localStorage.getItem('user_id')}`)
.then((res) => {
  // setCourses(res.data);
  console.log("Like",res.data);
  setCourses(res.data);
})
.catch((err) => {
  console.log(err);
});    
  }

}, []); 

  return (
    <section style={{paddingTop:'30px'}}>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <h2>Wishlist</h2>
          </Col>
          {localStorage.getItem('loggedIn') === 'true' ? (
          courses.length > 0 ? (courses.map((item) => (
            <Col lg="4" md="6" sm="6">
              <CourseCard key={item.id} item={item} />
            </Col>
          ))
          ) : (
            <p>No courses in your wishlist.</p>
          )
        ) : (
          <p>You need to log in to see your wishlist.</p>
        )}
        </Row>
      </Container>
    </section>
  );
};

export default Wishlist;