import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartLight } from '@fortawesome/free-regular-svg-icons';

const CourseCard = (props) => {
  const {img_path, imgUrl, title, teacher, students, rating, liked } = props.item;
  // console.log(imgPath);
  // const [icon1, setIcon1] = useState(null);

  useEffect(() => {
    setLike();
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


  const [icon, setIcon] = useState(null); // set initial icon

  const handleClick = () => {
    // toggle icon on click
    icon === faHeartSolid ? setIcon(faHeartLight) : setIcon(faHeartSolid);
  };


  return (

    <div className="single__course__item">
      <Link to="/courseDetails" style={{ textDecoration: "none", color: "black" }}>
        <div className="course__img">
          <img src={imgUrl} alt="" className="w-100" />
          {/* <img src={img_path} alt="" className="w-100" /> */}
        </div>
      </Link>

      <div className="course__details">
        <h6 className="course__title mb-4">{title}</h6>

        <div className=" d-flex justify-content-between align-items-center">
          <p className="lesson d-flex align-items-center gap-1">
            {/* <i class="ri-book-open-line"></i> {lesson} Lessons */}
            Taught By {teacher}
          </p>

          <p className="students d-flex align-items-center gap-1">
            <i class="ri-user-line"></i> {students}
          </p>
        </div>

        <div className=" d-flex justify-content-between align-items-center">
          <p className="rating d-flex align-items-center gap-1">
            {/* <i class="ri-star-fill"></i> {rating}K */}
            <b>Rs.700.00</b>
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
