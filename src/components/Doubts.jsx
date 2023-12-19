import React, { useState } from "react";
import {
  Container, Row, Col, Card, CardText, CardTitle, Button, CardBody, Form, FormGroup, Input, Label, CardSubtitle, CardLink,
  Modal, ModalBody, ModalHeader, ModalFooter
} from "reactstrap";
import image from "../assets/images/doubtImg.png";
import axios from "axios";


const Doubts = () => {

  // const [age, setAge] = React.useState('');

  const [doubtInfo, setDoubtInfo] = useState({
    topic: null,
    doubt: null,
    image: null,
    userId: "1",
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


  // const [language, setLanguage] = React.useState('');

  // const handleChanges = (event) => {
  //   setLanguage(event.target.value);
  // };

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    setDoubtInfo({
      ...doubtInfo,
      image: selectedFile,
    })
  };

  const saveDoubt = () => {
    console.log(doubtInfo.image);
    axios
    .post("http://localhost:8080/api/v1/doubt/saveDoubt", {
      topic: doubtInfo.topic,
      description: doubtInfo.doubt,
      imgPath: selectedFile.name,
      userId:parseInt(doubtInfo.userId)
    })
    .then((res) => {
      // setCourses(res.data);
      // setName(res.data);
      console.log(res.data);
      window.alert("Doubt added successfully");
    })
    .catch((err) => {
      console.log(err);
    });
  }

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

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
                    <Input
                      id="exampleFile"
                      name="file"
                      type="file"
                      onChange={handleFileChange} accept="image/*"
                    />
                  </FormGroup>
                </Form>
                <Button  onClick={saveDoubt} class="col-md-12 text-center btn btn-primary " color="primary" style={{ margin: "auto" }}>
                  Submit
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg="12" className="mb-5">
            <h2>Most Recent Doubts</h2>
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
        </Row>

        <div>
          <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}> <h2>Your Answer</h2></ModalHeader>
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
                  />
                </FormGroup>
                <FormGroup>
                  Add Image
                  <Input
                    id="exampleFile"
                    name="file"
                    type="file"
                    onChange={handleFileChange} accept="image/*"
                  />
                </FormGroup>
                <FormGroup>
                  Add Voice
                  <Input
                    id="exampleFile"
                    name="file"
                    type="file"
                    onChange={handleFileChange} accept="audio/*"
                  />
                </FormGroup>
              </Form>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={toggle}>
                Submit
              </Button>{' '}
              <Button color="secondary" onClick={toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </div>




        <div >
          <Modal isOpen={modal1} toggle={toggle1} scrollable={true}>
            <ModalHeader toggle={toggle1}> <h2>Answers</h2></ModalHeader>
            <ModalBody>

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
            </ModalBody>
          </Modal>
        </div>
      </Container>
    </section>
  );
};

export default Doubts;
