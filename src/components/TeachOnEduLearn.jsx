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

    const [city, setCity] = React.useState('');

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
      const handlecity = (event, newValue) => {
        setCity(newValue);
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
            if (err.response) {
                if (err.response.status === 400) {
                    alert(err.response.data);
                }else {
                     alert("An error occurred while updating user."); 
                }
            } else {
                   alert("Network error or server is unreachable. Please try again later.");
            }
            // Handle error, e.g., show an error message
          });
      };

      const allDistricts = [
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
                                 required
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
                                     required
                                    //  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                    pattern="[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n.]+"
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
                                required
                                pattern="^\d{9}[vVxX]?$"
                                title="NIC number should contain 9 digits followed by 'v', 'V', 'x', or 'X' (optional)"
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
                  required
                  pattern="[0-9]{10}"
        title="Mobile number should contain exactly 10 digits"
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
                                type="select"
                                id="city"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select City</option>
                                {allDistricts.map((city, index) => (
                                    <option key={index} value={city}>
                                        {city}
                                    </option>
                                ))}
                            </Input>
                    
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
                  required
                  pattern="[^\d]+"
                  title="Qualification should not contain numbers"
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
                                          onChange={handleChange} required  />
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
                                          required
                                >
                                     <option value="">Select Subject</option>
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
                        <Button style={{ marginLeft: "0px", color: "white", backgroundColor: "blue" }} type="submit" disabled={formData.subject === "" || formData.city === "" } >
                            Submit
                        </Button>
                    </div>

                </Form>

            </div>

        </div>




    );
}

export default TeachOnEduLearn;

