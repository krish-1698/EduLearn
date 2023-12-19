import React from "react";
import courseImg from "../assets/images/ui-ux.png";
import { Button, Col } from "reactstrap";
import { useState } from "react";
import "./CourseContent.css";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';

import Rating from '@mui/material/Rating';
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


const CourseContent = (props) => {
  // const { imgUrl, title, lesson, students, rating } = props.item;
  const [value, setValue] = React.useState(2);
  const [open, setOpen] = useState('1');
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  const [val, setVal] = React.useState(dayjs('2023-04-18T21:11:54'));

  const handleChange = (newValue) => {
    setVal(newValue);
  };

  const [opening, setOpening] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleOpen = () => setOpening(true);
  const handleClose = () => setOpening(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submit here
    console.log(inputValue);
    setOpening(false);
  };

  const [icon, setIcon] = useState(faHeartLight); // set initial icon

  const handleClick = () => {
    // toggle icon on click
    icon === faHeartSolid ? setIcon(faHeartLight) : setIcon(faHeartSolid);
  };




  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log('Payment submitted!');
  //   // Do your payment processing logic here
  // };


  return (

    <div class="section">
      <div class="boxed" >
        <div className="text">
          <h6>UI/UX BootCamp for Beginners in 2022</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            consequatur libero quod voluptatibus ullam quia quas, vitae
            voluptatem recusandae reprehenderit!
          </p>
          <div>
            <p>Language: English</p>
            <p>Taught By: Mark</p>
          </div>
        </div>
        <div>
          <Col>
            <img src={courseImg} alt="img" />
          </Col>
          <Col >
            {/* <Link to="/Login" style={{ textDecoration: "none", color: "black" }}> */}
            <Button color="primary" onClick={handleOpen}>   Enrol </Button>

            {/* </Link> */}
            {/* <div>
                      <i class="ri-heart-3-fill"></i>
                          <i class="ri-heart-3-line"></i>
                      </div> */}

            <div style={{ marginLeft: "20px", cursor: "pointer" }} onClick={handleClick}>
              <FontAwesomeIcon icon={icon} color="white" size="lg" />
            </div>
          </Col>

        </div>

      </div>

      <div style={{ padding: "70px" }}>
        <div style={{ paddingBottom: "20px" }}>
          <h2>Course Content</h2>
        </div>


        <Accordion open={open} toggle={toggle}>
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
        </Accordion>
      </div>

      <div style={{ paddingLeft: "70px", paddingRight: "70px" }}>

        <h2>Reviews</h2>
        <Stack direction="row" spacing={2}>
          <Avatar>K</Avatar>
          <Typography style={{ paddingTop: "10px" }} component="legend">Kevin</Typography>
        </Stack>

        <Rating style={{ paddingLeft: "50px" }}
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
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
                  inputFormat="MM/DD/YYYY"
                  value={val}
                  onChange={handleChange}
                  renderInput={(params) => <TextField {...params} />}
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





