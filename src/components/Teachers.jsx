import React, { useState, useEffect } from "react";
import { Container, Row, Col, CardTitle, CardText, CardImg, Card, CardBody } from "reactstrap";
import courseImg1 from "../assets/images/web-design.png";
import courseImg2 from "../assets/images/graphics-design.png";
import courseImg3 from "../assets/images/ui-ux.png";
import { Box, InputLabel, MenuItem, FormControl, Select, Button, Dialog, DialogTitle, Grid, TextareaAutosize, DialogContent, DialogActions, TextField } from '@mui/material';
import photo from "../assets/images/Capture1.png";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

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





const AllTeachers = () => {

  let navigate = useNavigate();

  const [subject, setSubject] = React.useState('');

  const handleChange = (event) => {
    setSubject(event.target.value);
  };

  const [language, setLanguage] = React.useState('');

  const handleChanges = (event) => {
    setLanguage(event.target.value);
  };

  const [city, setCity] = React.useState('');

  const handleChangess = (event) => {
    setCity(event.target.value);
  };

  const [type, setType] = React.useState('');

  const handleType = (event) => {
    setType(event.target.value);
  }


  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSubmit = () => {
    // handle form submit here
    console.log(inputValue);
    setOpen(false);

  };

  const [formValue, setformValue] = React.useState({
    email: '',
    fullname: '',
    description: '',
    city: '',
    language: '',
    type: '',
    subject: '',
    mobileNumber: '',
    imgPath: '',
  });

  const handleDataChange = (event) => {
    setformValue({
      ...formValue,
      [event.target.name]: event.target.value
    });
  }


  const [imagePath, setImagePath] = useState('');

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const path = URL.createObjectURL(file);
    setImagePath(path);
  }


  const [formErrors, setFormErrors] = useState({});

  const validate = () => {
    const errors = {};
  
    if (!formValue.fullname) {
      errors.fullname = 'Full Name is required';
    }
  
    if (!formValue.subject) {
      errors.subject = 'Subject is required';
    }
  
    if (!formValue.language) {
      errors.language = 'Language is required';
    }
  
    if (!city) {
      errors.city = 'City is required';
    }
  
    if (!formValue.description) {
      errors.description = 'Description is required';
    }
  
    if (!type) {
      errors.type = 'Type is required';
    }
  
    if (!formValue.mobileNumber) {
      errors.mobileNumber = 'Mobile Number is required';
    } else if (!/^\d{10}$/.test(formValue.mobileNumber)) {
      errors.mobileNumber = 'Mobile Number is invalid';
    }
  
    if (!formValue.email) {
      errors.email = 'Email Address is required';
    } else if (!/\S+@\S+\.\S+/.test(formValue.email)) {
      errors.email = 'Email Address is invalid';
    }
  
    return errors;
  };
  

  const saveAd = () => {

  const errors = validate();
  setFormErrors(errors);

  if (Object.keys(errors).length === 0) {
    axios
    .post("http://localhost:8080/api/v1/advertisement/saveAd", {
      email: formValue.email,
      name: formValue.fullname,
      description: formValue.description,
      city: city,
      language: formValue.language,
      type: type,
      subject: formValue.subject,
      mobile: formValue.mobileNumber,
      imgPath: imagePath,
    })
    .then((res) => {
      // setCourses(res.data);
      // setName(res.data);
      console.log(res.data);
      setOpen(false);
      window.alert("Advertisement added successfully")
      toast.success("Advertisement added");
    })
    .catch((err) => {
      console.log(err);
    });
  }
   
  }

  const [ads, setAds] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/advertisement/getAllAdvertisments")
      .then((res) => {
        // setCourses(res.data); 
        setAds(res.data);
        // console.log(res.data); 
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-50">
                <h2>Teachers</h2>
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

                  <div className="drop1">
                    <Box sx={{ minWidth: 10 }}>
                      <FormControl style={{ width: 200 }} >
                        <InputLabel id="demo-simple-select-label">City</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={city}
                          label="City"
                          onChange={handleChangess}
                        >
                          <MenuItem value={10}>Colombo</MenuItem>
                          <MenuItem value={20}>Gampaha</MenuItem>
                          <MenuItem value={30}>Negombo</MenuItem>
                          <MenuItem value={40}>Kandy</MenuItem>
                          <MenuItem value={50}>Dehiwela</MenuItem>
                          <MenuItem value={60}>Moratuwa</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </div>

                  <div style={{ display: "flex", justifyContent: "flex-end", width: "100%", marginLeft: "490px" }}>
                    <Button variant="contained" onClick={handleOpen} style={{ whiteSpace: "nowrap", textAlign: "center" }}>
                      Post your Ad
                    </Button>
                  </div>

                  <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Request to post Advertisement</DialogTitle>
                    <div></div>
                    <DialogContent>
                      <Grid container spacing={2}>
                        <Grid item xs={6}>
                          <TextField
                            label="Full Name"
                            name="fullname"
                            value={formValue.fullname}
                            onChange={handleDataChange}
                            error={formErrors.fullname}
                            helperText={formErrors.fullname}
                            // onChange={(e) => setInputValue(e.target.value)}
                            fullWidth
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <TextField
                            label="Subject"
                            name="subject"
                            value={formValue.subject}
                            onChange={handleDataChange}
                            error={formErrors.subject}
                            helperText={formErrors.subject}
                            // onChange={(e) => setInputValue(e.target.value)}
                            fullWidth
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <TextField
                            label="Language"
                            name="language"
                            value={formValue.language}
                            onChange={handleDataChange}
                            error={formErrors.language}
                            helperText={formErrors.language}
                            fullWidth
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <FormControl style={{ width: 270 }} >
                            <InputLabel id="demo-simple-select-label">City</InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              name="city"
                              value={city}
                              label="City"
                              onChange={handleChangess}
                              error={formErrors.city}
                              helperText={formErrors.city}
                            >
                              <MenuItem value={"Colombo"}>Colombo</MenuItem>
                              <MenuItem value={"Gampaha"}>Gampaha</MenuItem>
                              <MenuItem value={"Negombo"}>Negombo</MenuItem>
                              <MenuItem value={"Kandy"}>Kandy</MenuItem>
                              <MenuItem value={"Dehiwela"}>Dehiwela</MenuItem>
                              <MenuItem value={"Moratuwa"}>Moratuwa</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                          <TextareaAutosize
                            aria-label="minimum height"
                            minRows={5}
                            placeholder=" Description"
                            style={{ width: 270 }}
                            value={formValue.description}
                            name="description"
                            onChange={handleDataChange}
                            error={formErrors.description}
                            helperText={formErrors.description}
                          />
                        </Grid>
                        <Grid item xs={6} >
                          <div style={{ marginBottom: '2rem' }}>
                            <FormControl style={{ width: 270 }} >
                              <InputLabel id="demo-simple-select-label">Type</InputLabel>
                              <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                name="type"
                                value={type}
                                label="type"
                                onChange={handleType}
                                error={formErrors.type}
                                helperText={formErrors.type}
                              >
                                <MenuItem value={"Normal"}>Normal</MenuItem>
                                <MenuItem value={"Premium"}>Premium</MenuItem>
                              </Select>
                            </FormControl>
                          </div>
                          <div style={{}}>

                            {/* <Button variant="outlined" component="label" fullWidth>
              Image */}
                            <input accept="image/*" multiple type="file" onChange={handleImageUpload} />
                            {/* </Button> */}
                          </div>
                        </Grid>
                        <Grid item xs={6}>
                          <TextField
                            label="Mobile Number"
                            name="mobileNumber"
                            value={formValue.mobileNumber}
                            onChange={handleDataChange}
                            error={formErrors.mobileNumber}
                            helperText={formErrors.mobileNumber}
                            fullWidth
                          />
                        </Grid>

                        <Grid item xs={6}>
                          <TextField
                            label="Email Address"
                            name="email"
                            value={formValue.email}
                            onChange={handleDataChange}
                            error={formErrors.email}
                            helperText={formErrors.email}
                            fullWidth
                          />
                        </Grid>

                        {/* <Grid item xs={6}>
              <Button variant="contained" component="label">
              Image
              <input hidden accept="image/*" multiple type="file" />
            </Button>
              </Grid> */}

                      </Grid>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleClose} variant="contained">Cancel</Button>
                      <Button onClick={saveAd} color="primary" variant="contained">
                        Submit
                      </Button>
                    </DialogActions>
                  </Dialog>

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
          <>
            <Card className="my-2">
              <CardImg
                alt="Card image cap"
                src={photo}
                style={{
                  height: 180
                }}
                top
                width="100%"
              />
              <CardBody>
                {/* <CardTitle tag="h5">
            Card Title
          </CardTitle> */}
                <CardText>
                  This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                </CardText>
                {/* <CardText>
            <small className="text-muted">
              Last updated 3 mins ago
            </small>
          </CardText> */}
              </CardBody>
            </Card>


            <Card className="my-2">
              <CardImg
                alt="Card image cap"
                src={photo}
                style={{
                  height: 180
                }}
                top
                width="100%"
              />
              <CardBody>
                {/* <CardTitle tag="h5">
            Card Title
          </CardTitle> */}
                <CardText>
                  This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                </CardText>
                {/* <CardText>
            <small className="text-muted">
              Last updated 3 mins ago
            </small>
          </CardText> */}
              </CardBody>
            </Card>

            <Card className="my-2">
              <CardImg
                alt="Card image cap"
                src={photo}
                style={{
                  height: 180
                }}
                top
                width="100%"
              />
              <CardBody>
                {/* <CardTitle tag="h5">
            Card Title
          </CardTitle> */}
                <CardText>
                  This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                </CardText>
                {/* <CardText>
            <small className="text-muted">
              Last updated 3 mins ago
            </small>
          </CardText> */}
              </CardBody>
            </Card>
          </>
        </Row>
      </Container>
    </section>
  );
};

export default AllTeachers;
