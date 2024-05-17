import React, { useState, useEffect } from "react";
import { Link,useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartLight } from '@fortawesome/free-regular-svg-icons';
import axios from "axios";
import Rating from '../../components/Rating';

const CourseCard = (props) => {
  const navigate = useNavigate();
  const {img_path, imgUrl, title,teacher, name, students,amount, rating, liked } = props.item;
  // console.log(imgPath);
  // const [icon1, setIcon1] = useState(null);

  const [ratings, setRatings] = useState([]);
  const fetAllRatingsForCourse = () =>{
    axios
    .get(`http://localhost:3001/api/getRatingForCourse/${props.item.id}`)
    .then((res) => {
      // res.data should be the count of enrollments (1 if enrolled, 0 otherwise)
      console.log(res.data);
      setRatings(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }
  const[like,setLike]= useState([]);

  const[ratingForACourse,setRatingForACourse]= useState(0);
  useEffect(() => {
    if(ratings.length != 0){
      let totalRating = 0;

    ratings.forEach((rating) => {
    totalRating += parseFloat(rating.rating);
  });
  console.log("Total",totalRating);
   const averageRating = totalRating / ratings.length;
   console.log("AVG",averageRating);
  setRatingForACourse(averageRating);
    }
  }, [ratings]); 


  const [enrolmentCount, setEnrolmentCount] = useState([]);
  useEffect(() => {
    setLike();
    if(localStorage.getItem('loggedIn') == 'true'){
    getLikeValue();
    }
    console.log(props.item.id);
    getEnrolmentNumber();
    fetAllRatingsForCourse();
  }, []); // Pass an empty array to only call the function once on mount.


  // function setLike() {
  //   if (liked == "yes") {
  //     console.log(liked);
  //     console.log("hycks");
  //     setIcon(faHeartSolid);
  //   } else {
  //     console.log("kbkeewj");
  //     console.log(liked);
  //     setIcon(faHeartLight);
  //   }
  // }

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
  const [icon, setIcon] = useState(faHeartLight); // set initial icon

  const handleClick = () => {
    // toggle icon on click
    if(localStorage.getItem('loggedIn') == 'true'){
      icon === faHeartSolid ? setIcon(faHeartLight) : setIcon(faHeartSolid);
      if (icon === faHeartLight) {
        axios
          .post("http://localhost:3001/api/addToWishlist", {
            data: {
              course_id: props.item.id,
              user_id: localStorage.getItem('user_id')
            }
          })
          .then((res) => {
            console.log("Like", res.data);
            setIcon(faHeartSolid);
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        axios
          .delete(`http://localhost:3001/api/deleteWishlistCourse/${props.item.id}/${localStorage.getItem('user_id')}}`)
          .then((res) => {
            console.log("DisLike", res.data);
            setIcon(faHeartLight);
          })
          .catch((err) => {
            console.log(err);
          });
        
      }
      if (window.location.pathname.includes("Wishlist")) {
        window.location.reload();
      }
    }
    else{
      alert('Please login to add a course to your wishlist');
    }
  };

  const getLikeValue =() =>{
      axios
    .post("http://localhost:3001/api/wishlistCourseForUser",{ data: {
    course_id: props.item.id,
    user_id: localStorage.getItem('user_id')
      }})
    .then((res) => {
      // setCourses(res.data);
      console.log("Like",res.data);
      setLike(res.data)
      if(res.data.length != 0){
        setIcon(faHeartSolid)
      } 
      else{
        setIcon(faHeartLight)
      }
    })
    .catch((err) => {
      console.log(err);
    });    
  }

  const handleNavigation = () => {
    navigate("/courseDetails", {
      state: { item: props.item }
    });
  };

  return (

    <div className="single__course__item">
      <button onClick={handleNavigation}  style={{ textDecoration: "none",border:"none", color: "black" }}>
        <div className="course__img">
          <img src={img_path} alt="" className="w-100" />
        </div>
        </button>

      <div className="course__details">
      <div className=" d-flex justify-content-between align-items-center">
      <p className="lesson d-flex align-items-center gap-1">
        <h6 className="course__title mb-4">{title}</h6>
        </p>
        <div style={{ cursor: "pointer" }} onClick={handleClick}>
              <FontAwesomeIcon icon={icon} color="black" size="lg" />
            </div>
      </div>
        <div className=" d-flex justify-content-between align-items-center">
          <p className="lesson d-flex align-items-center gap-1">
            Taught By {name}
          </p>
          <p className="students d-flex align-items-center gap-1">
            <i class="ri-user-line"></i> {students}{enrolmentCount[0]?.userCount}
          </p>
        </div>

        <div className=" d-flex justify-content-between align-items-center">
          <p className="rating d-flex align-items-center gap-1">
            <b>Rs.{amount}</b>
          </p>

          <p className="enroll d-flex align-items-center gap-1">
            <p className="students d-flex align-items-center gap-1">
          <Rating rating={ratingForACourse} numReviews={ratings.length}></Rating>
          </p>
          </p>
        </div>
      </div>
    </div>

  );
};

export default CourseCard;
