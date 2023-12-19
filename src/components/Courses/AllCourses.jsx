import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import courseImg1 from "../../assets/images/web-design.png";
import courseImg2 from "../../assets/images/graphics-design.png";
import courseImg3 from "../../assets/images/ui-ux.png";
import { Box, InputLabel, MenuItem, FormControl, Select } from '@mui/material';
import "./courses.css";
import CourseCard from "./CourseCard";
import axios from "axios";

const coursesData = [
  {
    id: "01",
    title: "Web Design for Beginners",
    teacher: "Antony",
    students: 2,
    // rating: 5.9,
    imgUrl: courseImg1,
  },

  {
    id: "02",
    title: "Professional Graphics Design, Figma",
    teacher: "Jack",
    students: 3,
    // rating: 5.9,
    imgUrl: courseImg2,
  },

  {
    id: "03",
    title: "UI/UX BootCamp for Beginners in 2022",
    teacher: "Yash",
    students: 4,
    // rating: 5.9,
    imgUrl: courseImg3,
  },
  {
    id: "04",
    title: "Web Design for Beginners",
    teacher: "kelvin",
    students: 3,
    // rating: 5.9,
    imgUrl: courseImg1,
  },

  {
    id: "05",
    title: "Professional Graphics Design, Figma",
    teacher: "Peter",
    students: 3,
    // rating: 5.9,
    imgUrl: courseImg2,
  },

  {
    id: "06",
    title: "UI/UX BootCamp for Beginners in 2022",
    teacher: "Henderson",
    students: 1,
    // rating: 5.9,
    imgUrl: courseImg3,
  },
  {
    id: "07",
    title: "Web Design for Beginners",
    lesson: 12,
    students: 3,
    // rating: 5.9,
    imgUrl: courseImg1,
  },

  {
    id: "08",
    title: "Professional Graphics Design, Figma",
    lesson: 12,
    students: 2,
    // rating: 5.9,
    imgUrl: courseImg2,
  },

  {
    id: "09",
    title: "UI/UX BootCamp for Beginners in 2022",
    lesson: 12,
    students: 2,
    // rating: 5.9,
    imgUrl: courseImg3,
  },
];





const AllCourses = () => {

  const [subject, setSubject] = React.useState('');

  const handleChange = (event) => {
    setSubject(event.target.value);
  };

  const [language, setLanguage] = React.useState('');

  const handleChanges = (event) => {
    setLanguage(event.target.value);
  };
  const [courses, setCourses] = useState([]);

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
},[]);


  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-50">
                <h2>Courses</h2>
                <div className="drop-down">
                  <div className="drop1">
                    <Box sx={{ minWidth: 10 }}>
                      <FormControl style={{ width: 200 }} >
                        <InputLabel id="demo-simple-select-label">Subject</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={subject}
                          label="Subject"
                          onChange={handleChange}
                        >
                          <MenuItem value={10}>Physics</MenuItem>
                          <MenuItem value={20}>Chemistry</MenuItem>
                          <MenuItem value={30}>Biology</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </div>

                  <div className="drop1">
                    <Box sx={{ minWidth: 10 }}>
                      <FormControl style={{ width: 200 }} >
                        <InputLabel id="demo-simple-select-label">Language</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={language}
                          label="Language"
                          onChange={handleChanges}
                        >
                          <MenuItem value={10}>English</MenuItem>
                          <MenuItem value={20}>Tamil</MenuItem>
                          <MenuItem value={30}>Sinhala</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </div>

                </div>
              </div>
            </div>
          </Col>
          {courses.map((item) => (
            <Col lg="4" md="6" sm="6">
              <CourseCard key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default AllCourses;
