import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import courseImg1 from "../assets/images/web-design.png";
import courseImg2 from "../assets/images/graphics-design.png";
import courseImg3 from "../assets/images/ui-ux.png";
import "./Courses/courses.css";
import CourseCard from "./Courses/CourseCard";

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
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
          </Col>
          {coursesData.map((item) => (
            <Col lg="4" md="6" sm="6">
              <CourseCard key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Wishlist;