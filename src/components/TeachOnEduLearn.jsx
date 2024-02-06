import React, { useState } from "react";
import {
    FormGroup,
    Label,
    Input,
    Col,
    Row,
    Form,
    Button,
    InputGroup,
    InputGroupAddon,
    InputGroupText

} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import { useNavigate } from "react-router-dom";

function TeachOnEduLearn() {
    let navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        nic: "",
        mobile_no: "",
        city: "",
        qualification: "",
        password: "",
        subject: ""
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value
        }));
      };

    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleSubmit = (e) => {
        console.log(formData);
        e.preventDefault();
        axios
          .post("http://localhost:3001/api/createTeacher", {
            data: formData
          })
          .then((res) => {
            console.log(res.data);
            window.alert("Subbmitted for Verification");
                  navigate('/TeachOnEduLearn');
                  window.location.reload(false);
            // Handle success, e.g., show a success message
          })
          .catch((err) => {
            console.error(err);
            // Handle error, e.g., show an error message
          });
      };
    

    return (
        <div>
            <p style={{ paddingRight: "70px", paddingLeft: "70px" }}>
                Hello User,<br></br>
                This option is only for teachers and university students in Sri Lanka. Fill out the details below and once you apply our team will contact you . If you need more details please contact us through email or mobile given below.
            </p>

            <div style={{ padding: "70px" }}>

                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="exampleName">
                                    Full Name
                                </Label>
                                <Input
                                    id="name"
                                    name="name"
                                    placeholder="Full Name"
                                    value={formData.name}
                                 onChange={handleChange}
                                />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="exampleEmail">
                                    Email
                                </Label>
                                <Input
                                    id="exampleEmail"
                                    name="email"
                                    placeholder="example@gmail.com"
                                    type="email"
                                    value={formData.email}
                                     onChange={handleChange}
                                />
                            </FormGroup>
                        </Col>

                    </Row>

                    <Row>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="exampleName">
                                    NIC No.
                                </Label>
                                <Input
                                    id="nic"
                                    name="nic"
                                    placeholder="NIC NO."
                                    value={formData.nic}
                  onChange={handleChange}
                                />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="mobileNo">
                                    Mobile No.
                                </Label>
                                <Input
                                    id="mobileNo"
                                    name="mobile_no"
                                    placeholder="Mobile number"
                                    value={formData.mobile_no}
                  onChange={handleChange}
                                />
                            </FormGroup>
                        </Col>

                    </Row>

                    <Row>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="city">
                                    City
                                </Label>
                                <Input
                                    id="city"
                                    name="city"
                                    placeholder="City"
                                    value={formData.city}
                  onChange={handleChange}
                                />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="Qualification">
                                    Qualification
                                </Label>
                                <Input
                                    id="qualification"
                                    name="qualification"
                                    placeholder="Qualification"
                                    value={formData.qualification}
                  onChange={handleChange}
                                />
                            </FormGroup>
                        </Col>

                    </Row>
                    <Row>
                        <Col md={6}>
                            <FormGroup>

                                <Label for="password">
                                    Password
                                </Label>
                                <InputGroup>
                                    <Input type={passwordVisible ? 'text' : 'password'} name= "password" placeholder="Enter password" 
                                          value={formData.password}
                                          onChange={handleChange}   />
                                    <InputGroupText onClick={togglePasswordVisibility}>
                                        {passwordVisible ? <FontAwesomeIcon icon={faEye} color="black" /> : <FontAwesomeIcon icon={faEyeSlash} color="black" />}
                                    </InputGroupText>
                                </InputGroup>
                          





                                {/* <Label for="password">
                        Password
                        </Label>
                        <Input
                        id="passsword"
                        name="password"
                        placeholder="password"
                        type="password"
                        autoComplete="password"
                        /> */}
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="subject">
                                    Subject
                                </Label>
                                <Input
                                    id="subject"
                                    name="subject"
                                    type="select"
                                    placeholder="Select Subject"
                                    value={formData.subject}
                                          onChange={handleChange}
                                >
                                     <option value="">Select Subject</option>
                                   <option value="Mathematics">Mathematics</option>
                                <option value="Biology">Biology</option>
                                  <option value="Chemistry">Chemistry</option>
                                <option value="Physics">Physics</option>
                                    <option value="Computer Science">
                                    Computer Science
                                    </option>
                                </Input>
                            </FormGroup>
                        </Col>

                    </Row>
                    <div >
                        <Button style={{ marginLeft: "0px", color: "white", backgroundColor: "blue" }} type="submit" >
                            Submit
                        </Button>
                    </div>

                </Form>

            </div>

        </div>




    );
}

export default TeachOnEduLearn;

