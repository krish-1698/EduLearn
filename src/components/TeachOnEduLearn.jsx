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

function TeachOnEduLearn() {


    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div>
            <p style={{ paddingRight: "70px", paddingLeft: "70px" }}>
                Hello User,<br></br>
                This option is only for teachers and university students in Sri Lanka. Fill out the details below and once you apply our team will contact you . If you need more details please contact us through email or mobile given below.
            </p>

            <div style={{ padding: "70px" }}>

                <Form>
                    <Row>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="exampleName">
                                    Full Name
                                </Label>
                                <Input
                                    id="name"
                                    name="fullname"
                                    placeholder="FullName"
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
                                    name="mobileNo"
                                    placeholder="Mobile number"
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
                                    <Input type={passwordVisible ? 'text' : 'password'} placeholder="Enter password" />
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
                                >
                                    <option>
                                        Mathematics
                                    </option>
                                    <option>
                                        Biology
                                    </option>
                                    <option>
                                        Chemistry
                                    </option>
                                    <option>
                                        Physics
                                    </option>
                                </Input>
                            </FormGroup>
                        </Col>

                    </Row>
                    <div >
                        <Button style={{ marginLeft: "0px", color: "white", backgroundColor: "blue" }} >
                            Submit
                        </Button>
                    </div>

                </Form>

            </div>

        </div>




    );
}

export default TeachOnEduLearn;

