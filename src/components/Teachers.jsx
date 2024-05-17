import React, { useState, useEffect } from "react";
import { Container, Row, Col, CardTitle, CardText, CardImg, Card, CardBody } from "reactstrap";
import courseImg1 from "../assets/images/web-design.png";
import courseImg2 from "../assets/images/graphics-design.png";
import courseImg3 from "../assets/images/ui-ux.png";
import { Box, InputLabel, MenuItem, FormControl, Select, Button, Dialog, DialogTitle, Grid, TextareaAutosize, DialogContent, DialogActions, TextField,Autocomplete } from '@mui/material';
import photo from "../assets/images/Capture1.png";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {ImageUploadWidget} from '../components/CloudinaryFileUpload';
import "./componentstyle.css";
import UploadIcon from '@mui/icons-material/Upload';


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

const allDistricts = [
  "Any",
  "Ampara",
  "Anuradhapura",
  "Badulla",
  "Batticaloa",
  "Colombo",
  "Galle",
  "Gampaha",
  "Hambantota",
  "Jaffna",
  "Kalutara",
  "Kandy",
  "Kegalle",
  "Kilinochchi",
  "Kurunegala",
  "Mannar",
  "Matale",
  "Matara",
  "Monaragala",
  "Mullaitivu",
  "Nuwara Eliya",
  "Polonnaruwa",
  "Puttalam",
  "Ratnapura",
  "Trincomalee",
  "Vavuniya"
];




const AllTeachers = () => {

  let navigate = useNavigate();

  const [subject, setSubject] = React.useState('all');

  const handleChange = (event) => {
    setSubject(event.target.value);
  };

  const [language, setLanguage] = React.useState('all');

  const handleChanges = (event) => {
    setLanguage(event.target.value);
  };

  const [city, setCity] = React.useState('Any');
  const [city1, setCity1] = React.useState('');

  const [type, setType] = React.useState('');
  const [image, setImage] = React.useState('');
  const [mode, setMode] = React.useState('all');
  const [courseFee, setCourseFee] = React.useState('lowest');

  const handleType = (event) => {
    setType(event.target.value);
  }

  const handleOnUploadImage = (error, result, widget) => {
    if ( error ) {
      widget.close({
        quiet: true
      });
      return;
    }
    setImage(result?.info?.secure_url);
    console.log(result);
  }
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [mode1, setMode1] = useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setformValue({
      email: null,
      fullname: null,
      description: null,
      city: null,
      language: null,
      type: null,
      subject: null,
      mobile: null,
      img_path: null,
      state: null,
      mode:null,
      courseFee:null
    });
    setCity1(''); 
    setMode1('');
    setType('');
  }
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
    mobile: '',
    img_path: '',
    state: '',
    mode: '',
    courseFee: ''
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
    .post("http://localhost:3001/api/addAdvertisement", {
     data: { email: formValue.email,
      name: formValue.fullname,
      description: formValue.description,
      city: city1,
      language: formValue.language,
      type: type,
      subject: formValue.subject,
      mobile: formValue.mobileNumber,
      img_path: image,
      state:'Unpaid',
      course_fee: formValue.courseFee,
      mode:mode1
     }
    })
    .then((res) => {
      // setCourses(res.data);
      // setName(res.data);
      console.log(res.data);
      setOpen(false);
      window.alert("Advertisement added successfully")
      toast.success("Advertisement added");
      setformValue({
        email: null,
        fullname: null,
        description: null,
        city: null,
        language: null,
        type: null,
        subject: null,
        mobile: null,
        img_path: null,
        state: null,
        mode:null,
        courseFee:null
      });
      setCity1('');
      setMode1('');
      setType('');
    })
    .catch((err) => {
      console.log(err);
    });
  }
   
  }

  const handleCityChange = (event, newValue) => {
    console.log(event);
    console.log(event.target.value);
    setCity(newValue);
  };

  const handlecity1 = (event, newValue) => {
    setCity1(newValue);
  };
  const handleSubjectChange = (event, newValue) => {
    setSubject(event.target.value);
  };
  const handleLanguageChange = (event, newValue) => {
    setLanguage(event.target.value);
  };
  const handleModeChange = (event, newValue) => {
    setMode(event.target.value);
  };
  const handleMode1Change = (event, newValue) => {
    setMode1(event.target.value);
  };
  const handleCourseFeeChange = (event, newValue) => {
    setCourseFee(event.target.value);
  };
  const [ads, setAds] = useState([]);
  const fetchAdData = () => {
    axios
      .get(`http://localhost:3001/api/getAllAdvertisements?subject=${subject}&language=${language}&city=${city}&mode=${mode}&courseFee=${courseFee}`)
      .then((res) => {
        // setCourses(res.data); 
        setAds(res.data);
        // console.log(res.data); 
      })
      .catch((err) => {
        console.log(err);
      });
    }

  useEffect(() => {
    fetchAdData();
  }, [subject, language, city,mode,courseFee]);

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
                          onChange={handleSubjectChange}
                        >
                          <MenuItem value='all'>Any</MenuItem>
                          <MenuItem value='physics'>Physics</MenuItem>
                          <MenuItem value='chemistry'>Chemistry</MenuItem>
                          <MenuItem value='biology'>Biology</MenuItem>
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
                          <MenuItem value='all'>Any</MenuItem>
                          <MenuItem value='english'>English</MenuItem>
                          <MenuItem value='tamil'>Tamil</MenuItem>
                          <MenuItem value='sinhala'>Sinhala</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </div>

                  <div className="drop1">
                  <Box sx={{ width: 200 }}>
                    {/* <Box sx={{ minWidth: 10 }}>
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
                    </Box> */}
                     <Autocomplete
                      value={city}
                      onChange={handleCityChange}
                      options={allDistricts}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="City"
                          variant="outlined"
                        />
                      )}
                      />
                      </Box>
                  </div>
                  <div className="drop1">
                    <Box sx={{ minWidth: 10 }}>
                      <FormControl style={{ width: 200 }} >
                        <InputLabel id="demo-simple-select-label">Mode</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={mode}
                          label="mode"
                          onChange={handleModeChange}
                        >
                          <MenuItem value='all'>Any</MenuItem>
                          <MenuItem value='physical'>Physical</MenuItem>
                          <MenuItem value='online'>Online</MenuItem>
                          <MenuItem value='hybrid'>Hybrid</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </div>
                  <div className="drop1">
                    <Box sx={{ minWidth: 10 }}>
                      <FormControl style={{ width: 200 }} >
                        <InputLabel id="demo-simple-select-label">Course Fee</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={courseFee}
                          label="course fee"
                          onChange={handleCourseFeeChange}
                        >
                          <MenuItem value='lowest'>Low to high</MenuItem>
                          <MenuItem value='highest'>High to low</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </div>

                  <div style={{ display: "flex", justifyContent: "flex-end", width: "100%", marginLeft: "100px" }}>
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
                          {/* <TextField
                            label="Subject"
                            name="subject1"
                            value={formValue.subject}
                            onChange={handleDataChange}
                            error={formErrors.subject}
                            helperText={formErrors.subject}
                            // onChange={(e) => setInputValue(e.target.value)}
                            fullWidth
                          /> */}
                          <FormControl style={{ width: 260 }} >
                              <InputLabel id="demo-simple-select-label">Subject</InputLabel>
                              <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                name="subject"
                                value={formValue.subject}
                                label="subject"
                                onChange={handleDataChange}
                                error={formErrors.subject}
                                helperText={formErrors.subject}
                              >
                                <MenuItem value='Physics'>Physics</MenuItem>
                          <MenuItem value='Chemistry'>Chemistry</MenuItem>
                          <MenuItem value='Biology'>Biology</MenuItem>
                              </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                          {/* <TextField
                            label="Language"
                            name="language"
                            value={formValue.language}
                            onChange={handleDataChange}
                            error={formErrors.language}
                            helperText={formErrors.language}
                            fullWidth
                          /> */}
                          <FormControl style={{ width: 260 }} >
                              <InputLabel id="demo-simple-select-label">Language</InputLabel>
                              <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                name="language"
                                value={formValue.language}
                                label="language"
                                onChange={handleDataChange}
                                error={formErrors.language}
                                helperText={formErrors.language}
                              >
                                 <MenuItem value='English'>English</MenuItem>
                               <MenuItem value='Tamil'>Tamil</MenuItem>
                                <MenuItem value='Sinhala'>Sinhala</MenuItem>
                              </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                          {/* <FormControl style={{ width: 270 }} >
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
                          </FormControl> */}
                             <Autocomplete
                              value={city1}
                              onChange={handlecity1}
                              options={allDistricts.slice(1)}
                              renderInput={(params) => (
                                <TextField
                                  {...params}
                                  label="City"
                                  variant="outlined"
                                />
                              )}
                              />
                        </Grid>
                        <Grid item xs={6}>
                          <TextareaAutosize
                            aria-label="minimum height"
                            minRows={5}
                            placeholder=" Description"
                            style={{ width: 260 }}
                            value={formValue.description}
                            name="description"
                            onChange={handleDataChange}
                            error={formErrors.description}
                            helperText={formErrors.description}
                          />
                        </Grid>
                        <Grid item xs={6} >
                          <div style={{ marginBottom: '2rem' }}>
                            <FormControl style={{ width: 260,marginBottom:20 }} >
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
                                <MenuItem value={"Normal"}>Normal (Rs.500)</MenuItem>
                                <MenuItem value={"Premium"}>Premium (Rs.1000)</MenuItem>
                              </Select>
                            </FormControl>
                            <Grid item xs={6}>
                              <TextField style={{ width: 260 }}
                                label="Mobile Number"
                                name="mobileNumber"
                                value={formValue.mobileNumber}
                                onChange={handleDataChange}
                                error={formErrors.mobileNumber}
                                helperText={formErrors.mobileNumber}
                                fullWidth
                              />
                            </Grid>
                          </div>
                        </Grid>
                        <Grid item xs={6}>
                          <TextField style={{ marginBlockStart: -20 }}
                            label="Email Address"
                            name="email"
                            value={formValue.email}
                            onChange={handleDataChange}
                            error={formErrors.email}
                            helperText={formErrors.email}
                            fullWidth
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <FormControl style={{ width: 260, marginBlockStart: -20 }} >
                              <InputLabel id="demo-simple-select-label">Mode</InputLabel>
                              <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                name="mode1"
                                value={mode1}
                                label="mode"
                                onChange={handleMode1Change}
                                error={formErrors.mode1}
                                helperText={formErrors.mode1}
                              >
                                 <MenuItem value='Physical'>Physical</MenuItem>
                               <MenuItem value='Online'>Online</MenuItem>
                                <MenuItem value='Hybrid'>Hybrid</MenuItem>
                              </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                          <TextField style={{ marginBlockStart: 10 }}
                            label="Course Fee"
                            name="courseFee"
                            value={formValue.courseFee}
                            onChange={handleDataChange}
                            error={formErrors.courseFee}
                            helperText={formErrors.courseFee}
                            fullWidth
                          />
                        </Grid>
                        <Grid item xs={6}>

                        <div style={{}}>

                          {image && <img src={image} alt="menu item" className="image-preview"/>}
                        <ImageUploadWidget onUpload={handleOnUploadImage}  identifier="first">
                      {({ open }) => {
                        function handleOnClick(e) {
                          e.preventDefault();
                          console.log("hekko");
                          open();
                        }
                        return (
                          <button onClick={handleOnClick} id="upload-button">
                            <UploadIcon />
                            Upload
                          </button>
                        )
                      }}
                        </ImageUploadWidget>
                          </div>
                        </Grid>
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

          {ads.map((ad, index) => (
          <Card key={index} className="my-2">
            <div className="image-container">
            <CardImg
              alt="Card image cap"
              src={ad.img_path}
              className="card-image"// In componentStyle.css
              // style={{
              //   maxHeight: 220,
              //   width: '100%',
              // }}
              // top
            />
            </div>
            <CardBody style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
            <CardText style={{ gridColumn: '1 / span 4' }}>{ad.description}</CardText>
            <div>
                <strong>Name:</strong> {ad.name}
              </div>
              <div>
                <strong>Course Fee:</strong> {ad.course_fee}
              </div>
              <div>
                <strong>Subject:</strong> {ad.subject}
              </div>
              <div>
                <strong>Language:</strong> {ad.language}
              </div>
              <div>
                <strong>Mode:</strong> {ad.mode}
              </div>
              <div>
                <strong>City:</strong> {ad.city}
              </div>
              <div>
                <strong>Mobile:</strong> {ad.mobile}
              </div>
              <div>
                <strong>Email:</strong> {ad.email}
              </div>
             
             
            </CardBody>
          </Card>
                  ))}

            {/* <Card className="my-2">
              <CardImg
                alt="Card image cap"
                src={photo}
                style={{
                  height: 180
                }}
                top
                width="100%"
              />
              <CardBody> */}
                {/* <CardTitle tag="h5">
            Card Title
          </CardTitle> */}
                {/* <CardText>
                  This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                </CardText> */}
                {/* <CardText>
            <small className="text-muted">
              Last updated 3 mins ago
            </small>
          </CardText> */}
              {/* </CardBody>
            </Card> */}


          </>
        </Row>
      </Container>
    </section>
  );
};

export default AllTeachers;
