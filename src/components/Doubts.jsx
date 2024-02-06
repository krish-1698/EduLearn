import React, { useState,useEffect } from "react";
import {
  Container, Row, Col, Card, CardText, CardTitle, Button, CardBody, Form, FormGroup, Input, Label, CardSubtitle, CardLink,
  Modal, ModalBody, ModalHeader, ModalFooter
} from "reactstrap";
import image from "../assets/images/doubtImg.png";
import axios from "axios";
import UploadIcon from '@mui/icons-material/Upload';
import {ImageUploadWidget} from '../components/CloudinaryFileUpload';
import "./componentstyle.css";


const Doubts = (props) => {

  const group_id = props.group_id ;
  // const [age, setAge] = React.useState('');

  const [doubtInfo, setDoubtInfo] = useState({
    topic: null,
    doubt: null
  })

  const handleChange = (event) => {
    setDoubtInfo({
      ...doubtInfo,
      topic: event.target.value,
    })
  };

  const handleChanges = (event) => {
    setDoubtInfo({
      ...doubtInfo,
      doubt: event.target.value,
    })
  };

  const handleSubmit = () => {
    axios.post("http://localhost:3001/api/addAnswer", {
    data: {
      description:explaination,
      img_path: imageA,
      voice_path:null,
      user_id:localStorage.getItem('user_id'),
      doubt_id:doubtId
    }
    })
      .then((response) => {
        console.log(response.data);
        toggle(null);
        setExplaination('');
        setImageA('');
        alert('Answer Submitted');
      })
      .catch((error) => {
        console.error(error.response);
      });
  };



  // const [language, setLanguage] = React.useState('');

  // const handleChanges = (event) => {
  //   setLanguage(event.target.value);
  // };

  const [selectedFile, setSelectedFile] = useState(null);
  const [doubts, setDoubts] = useState([]);
  const [answers, setAnswers] = useState([]);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    setDoubtInfo({
      ...doubtInfo,
      image: selectedFile,
    })
  };

  const [image1, setImage] = useState('');
  const [imageA, setImageA] = useState('');
  const [explaination, setExplaination] = useState('');
  const [doubtId, setDoubtId] = useState(null);

  const handleOnUpload = (error, result, widget) => {
    debugger;
      if ( error ) {
        widget.close({
          quiet: true
        });
        return;
      }
      setImage(result?.info?.secure_url);
      console.log(result);
    }

    const handleOnUploadImage = (error, result, widget) => {
      if ( error ) {
        widget.close({
          quiet: true
        });
        return;
      }
      setImageA(result?.info?.secure_url);
      console.log(result);
    }

  const saveDoubt = () => {
    axios
    .post("http://localhost:3001/api/addDoubt", {
     data:{ topic: doubtInfo.topic,
      description: doubtInfo.doubt,
      img_path: image1,
      user_id:localStorage.getItem('user_id'),
      group_id: group_id
     }
    })
    .then((res) => {
      // setCourses(res.data);
      // setName(res.data);
      console.log(res.data);
      setDoubtInfo({
        topic: null,
        doubt: null
      });
      window.alert("Doubt added successfully");
    })
    .catch((err) => {
      console.log(err);
    });
  }
  const fetchAllDoubts = () => {
  axios
      .get("http://localhost:3001/api/getAllDoubts",
      {params:{
        group_id:group_id
      }})
      .then((res) => {
        // setCourses(res.data);
        setDoubts(res.data);
        console.log(res.data); 
      })
      .catch((err) => {
        console.log(err);
      });
    }
    
  useEffect(() => {
    console.log(group_id);
    fetchAllDoubts();
  },[]);


  const fetchAnswers = (doubt_id) => {
    axios
    .get("http://localhost:3001/api/getAllAnswersForDoubt",
    {params:{
      doubt_id:doubt_id
    }})
    .then((res) => {
      // setCourses(res.data);
      setAnswers(res.data);
      toggle1();
      console.log(res.data); 
    })
    .catch((err) => {
      console.log(err);
    });
  }

  

  const [modal, setModal] = useState(false);

  // const toggle = () => setModal(!modal);
  const toggle = (doubtId) => {
    setModal(!modal);
    setDoubtId(doubtId);
  };

  const [modal1, setModal1] = useState(false);

  const toggle1 = () => setModal1(!modal1);

  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" className="mb-5">
            {/* <img src= {image} alt= "doubt img" width= "500px" height= "auto"/> */}
            <Card
              style={{
                width: '25rem'
              }}
            >
              <img
                alt="Card image cap"
                src={image}
                width="100%"
              />
            </Card>
          </Col>
          {/* {groupData.map((item) => (
              <Col lg="4" md="6" sm="6">
                <CourseCard key={item.id} item={item} />
              </Col>
            ))} */}



          <Col sm="6">
            <Card
              style={{
                width: '24rem'
              }}
            >
              <CardBody>
                <CardTitle tag="h5">
                  Ask your Doubt here
                </CardTitle>
                <Form>

                  <FormGroup>
                    <Label for="topic">
                      Topic
                    </Label>
                    <Input
                      id="topic"
                      name="select"
                      type="select"
                      onChange={handleChange}
                    >
                      <option>
                        Organic
                      </option>
                      <option>
                        Inorganic
                      </option>
                      <option>
                        Thermal
                      </option>
                      <option>
                        Industrial
                      </option>
                      <option>
                        Other
                      </option>
                    </Input>
                  </FormGroup>
                  <FormGroup>
                    <Label for="doubt">
                      Mention your doubt here clearly
                    </Label>
                    <Input
                      id="doubt"
                      name="doubt"
                      placeholder="What is..."
                      type="textarea"
                      onChange={handleChanges}
                    />
                  </FormGroup>
                  <FormGroup>
                    Add Image
                    {/* <Input
                      id="exampleFile"
                      name="file"
                      type="file"
                      onChange={handleFileChange} accept="image/*"
                    /> */}

{image1 && <img src={image1} alt="menu item" className="image-preview"/>}
            <ImageUploadWidget onUpload={handleOnUpload} identifier="first">
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
                  </FormGroup>
                </Form>
                <Button  onClick={saveDoubt} class="col-md-12 text-center btn btn-primary " color="primary" style={{ margin: "auto" }}>
                  Submit
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
        {/* <Row>
          <Col lg="12" className="mb-5">
            <h2>All Doubts</h2>
          </Col>
          <Col lg="4" className="mb-5">
            <Card
              style={{
                width: '25rem'
              }}
            >
              <CardBody>
                <CardTitle tag="h5">
                  Physics
                </CardTitle>
                <img
                  alt="Card image cap"
                  src={image}
                  width="100%"
                />
                <CardText>
                  Some quick example text to build on the card title and make up the bulk of the card‘s content.
                </CardText>
                <CardText>
                  Posted by <b>Sam</b>
                </CardText>
                <Row>
                  <Col sm="6">
                    <CardLink href="#" onClick={toggle1}>
                      Answers
                    </CardLink>
                  </Col>
                  <Col>

                    <Button color="primary" class="btn btn-primary" onClick={toggle}>
                      Add Answer
                    </Button>
                  </Col>

                </Row>


              </CardBody>

            </Card>
          </Col>

          <Col lg="4" className="mb-5">
            <Card
              style={{
                width: '25rem'
              }}
            >
              <CardBody>
                <CardTitle tag="h5">
                  Physics
                </CardTitle>
                <img
                  alt="Card image cap"
                  src={image}
                  width="100%"
                />
                <CardText>
                  Some quick example text to build on the card title and make up the bulk of the card‘s content.
                </CardText>
                <CardText>
                  Posted by <b>Sam</b>
                </CardText>
                <Row>
                  <Col sm="6">
                    <CardLink href="#">
                      Answers
                    </CardLink>
                  </Col>
                  <Col>

                    <Button color="primary" class="btn btn-primary" onClick={toggle}>
                      Add Answer
                    </Button>
                  </Col>

                </Row>


              </CardBody>

            </Card>
          </Col>

          <Col lg="4" className="mb-5">
            <Card
              style={{
                width: '25rem'
              }}
            >
              <CardBody>
                <CardTitle tag="h5">
                  Physics
                </CardTitle>
                <img
                  alt="Card image cap"
                  src={image}
                  width="100%"
                />
                <CardText>
                  Some quick example text to build on the card title and make up the bulk of the card‘s content.
                </CardText>
                <CardText>
                  Posted by <b>Sam</b>
                </CardText>
                <Row>
                  <Col sm="6">
                    <CardLink href="#">
                      Answers
                    </CardLink>
                  </Col>
                  <Col>

                    <Button color="primary" class="btn btn-primary" onClick={toggle} >
                      Add Answer
                    </Button>
                  </Col>

                </Row>


              </CardBody>

            </Card>
          </Col>
        </Row> */}
         <Row>
         <Col lg="12" className="mb-5">
            <h2>All Doubts</h2>
          </Col>
          {doubts.length > 0 ? (
      doubts.map((doubt, index) => (
        <Col key={index} lg="4" className="mb-5">
          <Card style={{ width: '25rem' }}>
            <CardBody>
              <CardTitle tag="h5">{doubt.topic}</CardTitle>
              <img alt="Card image capnm" src={doubt.img_path || image} style={{ width: '100%', height: '200px' }}/>
              <CardText>{doubt.description}</CardText>
              <CardText>Posted by <b>{doubt.name}</b></CardText>
              <Row>
                <Col sm="6">
                  <CardLink href="javascript:void(0)" onClick={() =>{ fetchAnswers(doubt.id);}}>
                    Answers
                  </CardLink>
                </Col>
                <Col>
                  <Button color="primary" class="btn btn-primary" onClick={() => toggle(doubt.id)} >
                    Add Answer
                  </Button>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      ))
          ):(
            <Col lg="12" className="mb-5">
              <p>No doubts available.</p>
            </Col>
          )}
    </Row>

        <div>
          {/* <Modal isOpen={modal} toggle={toggle}> */}
          <Modal isOpen={modal} toggle={() => toggle(null)}>
            {/* <ModalHeader toggle={toggle}> <h2>Your Answer</h2></ModalHeader> */}
            <ModalHeader toggle={() => toggle(null)}> <h2>Your Answer</h2></ModalHeader>
            <ModalBody>

              <Form>
                <FormGroup>
                  <Label for="answer">
                    <h5>Explanation</h5>
                  </Label>
                  <Input
                    id="answer"
                    name="answer"
                    placeholder="Your Explanation"
                    type="textarea"
                    value={explaination}
                    onChange={(e) => setExplaination(e.target.value)}
                  />
                </FormGroup>
                <FormGroup>
                  Add Image
                  {/* <Input
                    id="exampleFile"
                    name="file"
                    type="file"
                    onChange={handleFileChange} accept="image/*"
                  /> */}
                  {imageA && <img src={imageA} alt="menu item" className="image-preview"/>}
            <ImageUploadWidget onUpload={handleOnUploadImage} identifier="second">
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
                </FormGroup>
                {/* <FormGroup>
                  Add Voice
                  <Input
                    id="exampleFile"
                    name="file"
                    type="file"
                    onChange={handleFileChange} accept="audio/*"
                  />
                </FormGroup> */}
              </Form>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick = {handleSubmit}>
                Submit
              </Button>{' '}
              <Button color="secondary" onClick={() => toggle(null)}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </div>




        <div >
          <Modal isOpen={modal1} toggle={toggle1} scrollable={true}>
            <ModalHeader toggle={toggle1}> <h2>Answers</h2></ModalHeader>
            {/* <ModalBody>

              <Col lg="4" className="mb-5">
                <Card
                  style={{
                    width: '300%'
                  }}
                >
                  <CardBody>
                    <img
                      alt="Card image cap"
                      src={image}
                      width="100%"
                    />
                    <CardText>
                      Some quick example text to build on the card title and make up the bulk of the card‘s content.
                    </CardText>
                    <Row>
                      <Col sm="6">
                        <CardText>
                          Answered by <b>Will</b>
                        </CardText>
                      </Col>
                      <Col sm="6" style={{ textAlign: "right" }} >
                        <Button style={{ padding: "0px", backgroundColor: "transparent", border: "0px", fontSize: "18px" }}>
                          <i class="ri-thumb-up-line"></i>
                        </Button>
                      </Col>
                    </Row>
                    <Row style={{ float: "right" }}>
                      <Col sm="12" >
                        <CardLink href="#">
                          Report
                        </CardLink>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>


              <Col lg="4" className="mb-5">
                <Card
                  style={{
                    width: '300%'
                  }}
                >
                  <CardBody>
                    <CardText>
                      Some quick example text to build on the card title and make up the bulk of the card‘s content.
                    </CardText>
                    <Row>
                      <Col sm="6">
                        <CardText>
                          Answered by <b>Will</b>
                        </CardText>
                      </Col>
                      <Col sm="6" style={{ textAlign: "right" }} >
                        <Button style={{ padding: "0px", backgroundColor: "transparent", border: "0px", fontSize: "18px" }}>
                          <i class="ri-thumb-up-line"></i>
                        </Button>
                      </Col>
                    </Row>
                    <Row style={{ float: "right" }}>
                      <Col sm="12" >
                        <CardLink href="#">
                          Report
                        </CardLink>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            </ModalBody> */}
           <ModalBody>
           {answers.length > 0 ? (
            answers.map((answer) => (
              <div key={answer.id}>
                <Col lg="4" className="mb-5">
                <Card
                  style={{
                    width: '300%'
                  }}
                >
                  <CardBody>
                    <img
                      alt="Card image cap"
                      src={answer.img_path || image}
                      width="100%"
                    />
                    <CardText>
                      {answer.description}
                    </CardText>
                    <Row>
                      <Col sm="6">
                        <CardText>
                          Answered by <b>{answer.name}</b>
                        </CardText>
                      </Col>
                      <Col sm="6" style={{ textAlign: "right" }} >
                        <Button style={{ padding: "0px", backgroundColor: "transparent", border: "0px", fontSize: "18px" }}>
                          <i class="ri-thumb-up-line"></i>
                        </Button>
                      </Col>
                    </Row>
                    <Row style={{ float: "right" }}>
                      <Col sm="12" >
                        <CardLink href="#">
                          Report
                        </CardLink>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              </div>
            ))
            ):(
              <Col lg="12" className="mb-5">
                <p>No answers available.</p>
              </Col>
            )}

          </ModalBody>
          </Modal>
        </div>
      </Container>
    </section>
  );
};

export default Doubts;
