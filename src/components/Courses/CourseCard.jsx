import React, { useState, useEffect } from "react";
import { Link,useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartLight } from '@fortawesome/free-regular-svg-icons';
import axios from "axios";

const CourseCard = (props) => {
  const navigate = useNavigate();
  const {img_path, imgUrl, title,teacher, name, students,amount, rating, liked } = props.item;
  // console.log(imgPath);
  // const [icon1, setIcon1] = useState(null);

  const [enrolmentCount, setEnrolmentCount] = useState([]);
  useEffect(() => {
    setLike();
    console.log(props.item.id);
    getEnrolmentNumber();
  }, []); // Pass an empty array to only call the function once on mount.

  function setLike() {
    if (liked == "yes") {
      console.log(liked);
      console.log("hycks");
      setIcon(faHeartSolid);
    } else {
      console.log("kbkeewj");
      console.log(liked);
      setIcon(faHeartLight);
    }
  }

  const getEnrolmentNumber = () =>{
    axios
    .get("http://localhost:3001/api/countEnrolmentForCourse",{ params: {
      id: props.item.id,
      }})
    .then((res) => {
      // setCourses(res.data);
      setEnrolmentCount(res.data);
      console.log(res.data); 
    })
    .catch((err) => {
      console.log(err);
    });
  }
  const [icon, setIcon] = useState(null); // set initial icon

  const handleClick = () => {
    // toggle icon on click
    icon === faHeartSolid ? setIcon(faHeartLight) : setIcon(faHeartSolid);
  };

  const handleNavigation = () => {
    navigate("/courseDetails", {
      state: { item: props.item }
    });
  };

  return (

    <div className="single__course__item">
      {/* <Link to={{
    pathname: "/courseDetails",
    state: { item: props.item.id }  }} style={{ textDecoration: "none", color: "black" }}> */}
      <button onClick={handleNavigation}  style={{ textDecoration: "none",border:"none", color: "black" }}>
        <div className="course__img">
          {/* <img src={imgUrl} alt="" className="w-100" /> */}
          <img src={img_path} alt="" className="w-100" />
        </div>
        </button>
      {/* </Link> */}

      <div className="course__details">
        <h6 className="course__title mb-4">{title}</h6>

        <div className=" d-flex justify-content-between align-items-center">
          <p className="lesson d-flex align-items-center gap-1">
            {/* <i class="ri-book-open-line"></i> {lesson} Lessons */}
            Taught By {name}
          </p>

          <p className="students d-flex align-items-center gap-1">
            <i class="ri-user-line"></i> {students}{enrolmentCount[0]?.userCount}
          </p>
        </div>

        <div className=" d-flex justify-content-between align-items-center">
          <p className="rating d-flex align-items-center gap-1">
            {/* <i class="ri-star-fill"></i> {rating}K */}
            <b>Rs.{amount}</b>
          </p>

          <p className="enroll d-flex align-items-center gap-1">

            <div style={{ cursor: "pointer" }} onClick={handleClick}>
              <FontAwesomeIcon icon={icon} color="black" size="lg" />
            </div>
            {/* <a href="#"> Enroll Now</a> */}
          </p>
        </div>
      </div>
    </div>

  );
};

export default CourseCard;
