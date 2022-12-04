import React from "react";
import { Container, Row, Col } from "reactstrap";
import courseImg1 from "../../assets/images/web-design.png";
import courseImg2 from "../../assets/images/graphics-design.png";
import courseImg3 from "../../assets/images/ui-ux.png";
import {Box,InputLabel,MenuItem,FormControl,Select} from '@mui/material';
import "./courses.css";
import CourseCard from "./CourseCard";

const coursesData = [
  {
    id: "01",
    title: "Web Design for Beginners",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg1,
  },

  {
    id: "02",
    title: "Professional Graphics Design, Figma",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg2,
  },

  {
    id: "03",
    title: "UI/UX BootCamp for Beginners in 2022",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg3,
  },
  {
    id: "04",
    title: "Web Design for Beginners",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg1,
  },

  {
    id: "05",
    title: "Professional Graphics Design, Figma",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg2,
  },

  {
    id: "06",
    title: "UI/UX BootCamp for Beginners in 2022",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg3,
  },
  {
    id: "07",
    title: "Web Design for Beginners",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg1,
  },

  {
    id: "08",
    title: "Professional Graphics Design, Figma",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg2,
  },

  {
    id: "09",
    title: "UI/UX BootCamp for Beginners in 2022",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg3,
  },
];


   
  

const AllCourses = () => {

    const [age, setAge] = React.useState('');
  
    const handleChange = (event) => {
      setAge(event.target.value);
    };

    const [language, setLanguage] = React.useState('');
  
    const handleChanges = (event) => {
    setLanguage(event.target.value);
    };


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
                <FormControl style={{width:200}} >
                    <InputLabel id="demo-simple-select-label">Subject</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Subject"
                    onChange={handleChanges}
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
                <FormControl style={{width:200}} >
                    <InputLabel id="demo-simple-select-label">Language</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={language}
                    label="Language"
                    onChange={handleChange}
                    >
                    <MenuItem value={10}>English</MenuItem>
                    <MenuItem value={20}>Sinhala</MenuItem>
                    <MenuItem value={30}>Tamil</MenuItem>
                    </Select>
                </FormControl>
                </Box>
                </div>

                </div>
              </div>

              
                            {/* <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  consequatur libero quod voluptatibus ullam quia quas, vitae
                  voluptatem recusandae reprehenderit!
                </p> */}
{/* 
              <div className="w-50 text-end">
                <button className="butn">See All</button>
              </div> */}
            </div>
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

export default AllCourses;
