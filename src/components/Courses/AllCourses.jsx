import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import courseImg1 from "../../assets/images/web-design.png";
import courseImg2 from "../../assets/images/graphics-design.png";
import courseImg3 from "../../assets/images/ui-ux.png";
import { Box, InputLabel, MenuItem, FormControl, Select, TextField, Button } from '@mui/material';
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
    amount:500,
    imgUrl: courseImg1,
  },

  {
    id: "02",
    title: "Professional Graphics Design, Figma",
    teacher: "Jack",
    students: 3,
    amount:800,
    // rating: 5.9,
    imgUrl: courseImg2,
  },

  {
    id: "03",
    title: "UI/UX BootCamp for Beginners in 2022",
    teacher: "Yash",
    students: 4,
    amount:800,
    // rating: 5.9,
    imgUrl: courseImg3,
  },
  {
    id: "04",
    title: "Web Design for Beginners",
    teacher: "kelvin",
    students: 3,
    amount:900,
    // rating: 5.9,
    imgUrl: courseImg1,
  },

  {
    id: "05",
    title: "Professional Graphics Design, Figma",
    teacher: "Peter",
    students: 3,
    amount:750,
    // rating: 5.9,
    imgUrl: courseImg2,
  },

  {
    id: "06",
    title: "UI/UX BootCamp for Beginners in 2022",
    teacher: "Henderson",
    students: 1,
    amount:800,
    // rating: 5.9,
    imgUrl: courseImg3,
  },
  {
    id: "07",
    title: "Web Design for Beginners",
    lesson: 12,
    students: 3,
    amount:650,
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




const CoursesPerPage = 9;

const AllCourses = () => {

  const [subject, setSubject] = React.useState('all');

  const handleSubjectChange  = (event) => {
    setSubject(event.target.value);
    setCurrentPage(1);
  };

  const [language, setLanguage] = React.useState('all');
  const [sortBy, setSortBy] = React.useState('newest');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
    setCurrentPage(1);
  };

  const handleSortByChange = (event) => {
    setSortBy(event.target.value);
    setCurrentPage(1);
  };

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const [courses, setCourses] = useState([]);

// useEffect(() => {
//   axios
//     .get("http://localhost:3001/api/allCoursesV1")
//     .then((res) => {
//       // setCourses(res.data);
//       setCourses(res.data);
//       console.log(res.data); 
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// },[]);

const fetchCourseData = () =>{
  axios
    .get(`http://localhost:3001/api/allCoursesV1/?subject=${subject}&language=${language}&sortBy=${sortBy}&searchTerm=${searchTerm}`)
    .then((res) => {
      // setCourses(res.data);
      setCourses(res.data);
      console.log(res.data); 
    })
    .catch((err) => {
      console.log(err);
    });
}


useEffect(() => {
  fetchCourseData();
}, [subject, language, sortBy,searchTerm]);


const paginate = (pageNumber) => {
  setCurrentPage(pageNumber);
};

const indexOfLastCourse = currentPage * CoursesPerPage;
const indexOfFirstCourse = indexOfLastCourse - CoursesPerPage;
const currentCourses = courses.slice(indexOfFirstCourse, indexOfLastCourse);

// const paginate = (pageNumber) => setCurrentPage(pageNumber);


  return (
    <section>
      <Container>
        <Row>
        <div >
        <TextField style={{ width: 700, marginTop: "-70px", marginLeft:'304px' }}
          label="Search By Course name, subject, language ..."
          value={searchTerm}
          onChange={handleSearchInputChange}
        />
        </div>
        </Row>
   
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
                          onChange={handleSubjectChange}
                        >
                          <MenuItem value="all">Any</MenuItem>
                          <MenuItem value="physics">Physics</MenuItem>
                          <MenuItem value="chemistry">Chemistry</MenuItem>
                          <MenuItem value="biology">Biology</MenuItem>
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
                          onChange={handleLanguageChange}
                        >
                          <MenuItem value="all">Any</MenuItem>
                          <MenuItem value="english">English</MenuItem>
                          <MenuItem value="tamil">Tamil</MenuItem>
                          <MenuItem value="sinhala">Sinhala</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </div>
                  <div className="drop1">
                    <Box sx={{ minWidth: 10 }}>
                      <FormControl style={{ width: 200 }} >
                        <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={sortBy}
                          label="Sort By"
                          // onChange={handleChanges}
                          onChange={handleSortByChange}
                        >
                          <MenuItem value="newest">Newest courses</MenuItem>
                          <MenuItem value="popular">Most popular courses</MenuItem>
                          <MenuItem value="lowest">Course Fee: Low to high</MenuItem>
                          <MenuItem value="highest">Course Fee: High to low</MenuItem>
                          <MenuItem value="toprated">Top rated courses</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          {currentCourses.map((item) => (
            <Col lg="4" md="6" sm="6">
              <CourseCard key={item.id} item={item} />
            </Col>
          ))}
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                {Array.from({ length: Math.ceil(courses.length / CoursesPerPage) }, (_, i) => (
                  <li key={i} className="page-item">
                    <a onClick={() => paginate(i + 1)} className="page-link">
                      {i + 1}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </Col>
          </Row>
      </Container>
    </section>
  );
};

export default AllCourses;
