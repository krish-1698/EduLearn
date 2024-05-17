import React, { useEffect } from "react";
import courseImg from "../assets/images/ui-ux.png";
import { Button, Col } from "reactstrap";
import { useState } from "react";
import "./CourseContent.css";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  ListGroup,
  ListGroupItem,
  Form,FormGroup,Label,Input
} from 'reactstrap';

// import Rating from '@mui/material/Rating';
import Rating from '../components/Rating';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Link } from "react-router-dom";
import { Divider, Grid, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';
import courseImg1 from "../assets/images/VISA-Logo.jpg";
import courseImg2 from "../assets/images/Mastercard.png";
import courseImg3 from "../assets/images/AmXpress.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartLight } from '@fortawesome/free-regular-svg-icons';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import axios from "axios";


const CourseContent = (props) => {
  // const { imgUrl, title, lesson, students, rating } = props.item;
  const {img_path, imgUrl, title,teacher, name, students,amount, rating, liked, language,s_title,id } = props.item;
  const [value, setValue] = React.useState(2.5);
  const [open, setOpen] = useState('1');
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  // const [val, setVal] = React.useState(dayjs('2023-04-18T21:11:54'));
  // const [val, setVal] = React.useState(dayjs());
  const [val, setVal] = React.useState(dayjs());
  const isCardNumberValid = (value) => /^\d{16}$/.test(value);
  const isCvvValid = (value) => /^\d{3}$/.test(value);

  const handleChange = (newValue) => {
    setVal(newValue);
  };

  const [opening, setOpening] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleOpen = () => {
    const isLoggedIn = localStorage.getItem('loggedIn');
    if (isLoggedIn === 'true') {
      setOpening(true);
    } else {
      alert('You need to login');
    }
  };
  const handleClose = () => setOpening(false);
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // handle form submit here
  //   console.log(inputValue);
  //   setOpening(false);
  // };
  const enrolCourse = () => {
    const data = {
      course_id: id, 
      user_id: localStorage.getItem('user_id'),
    };

    axios
      .post("http://localhost:3001/api/saveEnrolment", {
        data: data
      })
      .then((res) => {
        console.log(res.data);
        // Additional logic after enrolling in the course (e.g., navigate to a new page)
        alert('Enrolled successfully!');
        window.location.reload();
        // navigate('/doubts'); // Uncomment this line if you want to navigate to a new page
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = () => {
    if (!isCardNumberValid(cardNumber)) {
      alert('Please enter a valid 16-digit card number.');
      return;
    }

    if (!isCvvValid(cvv)) {
      alert('Please enter a valid 3-digit CVV.');
      return;
    }
    enrolCourse();
    setCardNumber('');
    setVal(dayjs());
    setCvv('');
    setOpening(false);
  };

  
  const handleReviewSubmit = () => {
    const isLoggedIn = localStorage.getItem('loggedIn');
    if (isLoggedIn != 'true') {
      alert('Please login to add a comment');
      return;
    }
    else{
      axios
      .post("http://localhost:3001/api/courseratingByUser", {
        data: {
          course_id: id,
          user_id: localStorage.getItem('user_id'),
          rating: ratingV,
          comment: comment
        },
      })
      .then((res) => {
        // res.data should be the count of enrollments (1 if enrolled, 0 otherwise)
        alert('Comment added successfully');
        setRating('');
        setComment('');
        fetAllRatingsForCourse();
        
      })
      .catch((err) => {
        if (err.response && err.response.status === 400) {
          setRating('');
          setComment('');
          alert(err.response.data);
        }
        console.log(err);
      });
    }
  };

  const [icon, setIcon] = useState(faHeartLight); // set initial icon
  const [subContent, setSubContent] = useState([]);
  const [alreadyEnroled, setAlreadyEnroled] = useState(false);

  const handleClick = () => {
    // toggle icon on click
    // icon === faHeartSolid ? setIcon(faHeartLight) : setIcon(faHeartSolid);
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

  const [ratings, setRatings] = useState([]);
  const fetAllRatingsForCourse = () =>{
    axios
    .get(`http://localhost:3001/api/getRatingForCourse/${id}`)
    .then((res) => {
      // res.data should be the count of enrollments (1 if enrolled, 0 otherwise)
      console.log(res.data);
      setRatings(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  const [ratingV, setRating] = useState(0);
  const [comment, setComment] = useState('');

  useEffect(() => {
    console.log(props.item); 
    const courseId = id;
    const userId = localStorage.getItem('user_id');
    axios
      .post("http://localhost:3001/api/enrolmentForCourseByUser", {
        data: {
          course_id: courseId,
          user_id: userId,
        },
      })
      .then((res) => {
        // res.data should be the count of enrollments (1 if enrolled, 0 otherwise)
        const count = res.data[0]['count(1)'];
        const isEnrolled = count == 1;
        setAlreadyEnroled(isEnrolled);
      })
      .catch((err) => {
        console.log(err);
      });
      fetAllRatingsForCourse();
  },[]);

 

  useEffect(() => {
    axios
    .get("http://localhost:3001/api/subTopicbyCourseId",{ params: {
      id: id,
      }})
    .then((res) => {
      // setCourses(res.data);
      setSubContent(res.data);
      console.log(res.data); 
    })
    .catch((err) => {
      console.log(err);
    });
  },[]);

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log('Payment submitted!');
  //   // Do your payment processing logic here
  // };


  return (

    <div className="section">
      <div className="boxed" >
        <div className="text">
          <h6>{title}</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            consequatur libero quod voluptatibus ullam quia quas, vitae
            voluptatem recusandae reprehenderit!
          </p>
          <div>
            <p>Language: {language}</p>
            <p>Taught By: {name}</p>
          </div>
        </div>
         <div>
          <Col>
            <img src={img_path} alt="img" />
          </Col>
          <Col >
            {/* <Link to="/Login" style={{ textDecoration: "none", color: "black" }}> */}
            {/* <Button color="primary" onClick={handleOpen}>   Enrol </Button> */}
            {alreadyEnroled ? (
              <Button color="success" >Enrolled</Button>
            ) : (
              <div>
              <Button color="primary" onClick={handleOpen}>Enrol</Button>

              <div style={{ marginLeft: "20px", cursor: "pointer" }} onClick={handleClick}>
              <FontAwesomeIcon icon={icon} color="white" size="lg" />
            </div>
            </div>
            )}

            {/* </Link> */}
            {/* <div>
                      <i class="ri-heart-3-fill"></i>
                          <i class="ri-heart-3-line"></i>
                      </div> */}

            
          </Col>

        </div>

      </div>

      <div style={{ padding: "70px" }}>
        <div style={{ paddingBottom: "20px" }}>
          <h2>Course Content</h2>
        </div>


        {/* <Accordion open={open} toggle={toggle}>
          <AccordionItem>
            <AccordionHeader targetId="1">Thermal Equilibrium</AccordionHeader>
            <AccordionBody accordionId="1">
              <strong>This is the first item&#39;s accordion body.</strong>
              You can modify any of this with custom CSS or overriding our default
              variables. It&#39;s also worth noting that just about any HTML can
              go within the <code>.accordion-body</code>, though the transition
              does limit overflow.
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="2">Lower Fixed Point</AccordionHeader>
            <AccordionBody accordionId="2">
              <strong>This is the second item&#39;s accordion body.</strong>
              You can modify any of this with custom CSS or overriding our default
              variables. It&#39;s also worth noting that just about any HTML can
              go within the <code>.accordion-body</code>, though the transition
              does limit overflow.
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="3">Upper Fixed Point</AccordionHeader>
            <AccordionBody accordionId="3">
              <strong>This is the third item&#39;s accordion body.</strong>
              You can modify any of this with custom CSS or overriding our default
              variables. It&#39;s also worth noting that just about any HTML can
              go within the <code>.accordion-body</code>, though the transition
              does limit overflow.
            </AccordionBody>
          </AccordionItem>
        </Accordion> */}
  {alreadyEnroled ? (
      subContent.length != 0 ? (
          <Accordion open={open} toggle={toggle}>
            {subContent.map((item, index) => (
              <AccordionItem key={index}>
                <AccordionHeader targetId={index.toString()}>{item.title}</AccordionHeader>
                <AccordionBody accordionId={index.toString()}>
                <div>
              <strong>{item.description}</strong>
            </div>
            {item.file_type === "video" && item.file_path && (
              <div>
              {item.file_path.includes("youtube.com") ? (
                // YouTube video link
                <iframe
                  width="560"
                  height="315"
                  src={item.file_path.replace("watch?v=", "embed/")}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                // Other video link (assuming it's a direct video file)
                <video width="400" controls disabled={!alreadyEnroled}>
                  <source src={item.file_path} type="video/mp4"  />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
                )}
                </AccordionBody>
              </AccordionItem>
            ))}
          </Accordion>
        ) : (
          <p>No content available</p>
        )
        ):(
          <p><strong>Please enrol to view this course content</strong></p>
        )}
      </div>

      <div style={{ paddingLeft: "70px", paddingRight: "70px" }}>

        <h2>Reviews</h2>
        
        {/* {ratings.map((rating, index) => (
        <Stack key={index} direction="row" spacing={2}>
          <Avatar>{rating.name.charAt(0).toUpperCase()}</Avatar>
          <Typography style={{ paddingTop: '10px' }} component="legend">
            {rating.name}
          </Typography>
          <Rating rating={rating.level} numReviews={0} style={{ paddingLeft: "50px" }} />
        </Stack>
      ))} */}
      <div className="mb-3">
          {ratings.length === 0 && (
            <p>There is no review</p>
          )}
        </div>

        
        <ListGroup>
          {ratings.map((rating) => (
            <ListGroupItem key={rating.id}>
              <Stack key={rating.id} direction="row" spacing={2}>
          <Avatar>{rating.name.charAt(0).toUpperCase()}</Avatar>
          <Typography style={{ paddingTop: '10px' }} component="legend">
          <strong>{rating.name.toUpperCase()}</strong>
          </Typography>
          </Stack>
          {/* <Rating rating={rating.level} caption=" " style={{ paddingLeft: "50px" }} /> */}
          <Rating rating={rating.rating} caption=" "></Rating>
              <p>{rating.date_added}</p>
              <p>{rating.comment}</p>
            </ListGroupItem>
          ))}
        </ListGroup>
        <div className="my-3">
            <h2>Write a customer review</h2>
            <FormGroup>
              <Label for="rating">Rating</Label>
              <Input
                type="select"
                name="rating"
                id="rating"
                value={ratingV}
                onChange={(e) => setRating(e.target.value)}
              >
                <option value="">Select...</option>
                <option value="1">1- Poor</option>
                <option value="2">2- Fair</option>
                <option value="3">3- Good</option>
                <option value="4">4- Very good</option>
                <option value="5">5- Excellent</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="comment">Comments</Label>
              <Input
                type="textarea"
                name="comment"
                id="comment"
                placeholder="Leave a comment here"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </FormGroup>
            <Button onClick={handleReviewSubmit}>Submit</Button>
        </div>
      </div>


      <Dialog open={opening} onClose={handleClose}>
        {/* <DialogTitle>My Form</DialogTitle> */}
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h6">Confirm Payment</Typography>
            </Grid>
            <Grid item xs={12}>
              <div style={{ marginBottom: "20px" }}>
                <img src={courseImg1} height="40px" width="50px" />
                <img src={courseImg2} height="40px" width="50px" />
                <img src={courseImg3} height="40px" width="50px" />
              </div>


              <TextField
                label="Card Number"
                variant="outlined"
                fullWidth
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <MobileDatePicker
                  label="Expiry Date"
                  inputFormat="DD/MM/YYYY"
                  value={val}
                  onChange={handleChange}
                  renderInput={(params) => <TextField {...params}/>}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="CVV"
                variant="outlined"
                fullWidth
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
              />
            </Grid>

            {/* <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Submit Payment
            </Button>
          </Grid> */}
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>

    </div>

  );
};

export default CourseContent;





