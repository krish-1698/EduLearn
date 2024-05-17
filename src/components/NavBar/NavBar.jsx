import React, { useRef } from "react";
import { Container, Button, Row, Col } from "reactstrap";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import "./NavBar.css";
import backgroundImage from "../../assets/images/banner.png";
import { useNavigate } from "react-router-dom";

const navLinks = [
  {
    display: "Home",
    url: "/home",
  },
  {
    display: "Courses",
    url: "/Courses",
  },

  {
    display: "Teachers",
    url: "/Teachers",
  },
  // {
  //   display: "Community",
  //   url: "#",
  // },
  {
    display: "Teach on EduLearn",
    url: "/TeachOnEduLearn",
  },
  {
    display: <i class="ri-heart-3-line"></i>,
    url: "/Wishlist",
  },
  {
    display: "Community",
    url: "/Community",
  },
];

// const backgroundImage = require("../../assets/images/banner.png");



const NavBar = () => {
  let navigate = useNavigate();

  const handleLogout = () => {

    localStorage.clear();
    navigate('/home');
    // window.location.reload();
  };
  const menuRef = useRef();

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  return (
    <header className="header" >
      <Container>
        <Row>
          <div className="navigation d-flex align-items-center justify-content-between ">
            <div className="logo">
              <h2 className=" d-flex align-items-center gap-1">
                <img src={logo} id="logo" className="App__logo" alt="logo" /> EduLearn
              </h2>
            </div>



            <div className="nav d-flex align-items-center gap-5" >
              <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
                <ul className="nav__list">
                  {navLinks.map((item, index) => (
                    <li key={index} className="nav__item">
                      <a href={item.url}>{item.display}</a>
                    </li>
                  ))}
                </ul>
              </div>


              {localStorage.getItem("loggedIn") ? (
                <div className="nav__right">
                  <p style={{ color: "red" }} className="mb-0 d-flex align-items-center gap-2">
                    {/* <Link to="/login" style={{ textDecoration: "none", color: "black" }}> */}
                      <Button color="danger" outline  onClick={handleLogout}>  {localStorage.getItem("uname")} </Button>
                    {/* </Link> */}
                  </p>
                </div>
              ) : (

                <div className="nav__right" style={{ marginTop: "40px" }}>
                  <Row>
                    <Col className="mt-10">
                      <div className="nav__right" >
                        <p style={{ color: "red" }} className="mb-0 d-flex align-items-center gap-2">
                          <Link to="/login" style={{ textDecoration: "none", color: "black" }}>
                            <Button className="mt-10" color="danger" outline >   Login </Button>
                          </Link>
                        </p>
                      </div>
                    </Col>

                    <Col>
                      <div className="nav__right">
                        <p style={{ color: "red" }} className="mb-0 d-flex align-items-center gap-2">
                          <Link to="/Register" style={{ textDecoration: "none", color: "black" }}>
                            <Button style={{ width: "100px" }} color="danger"> Sign Up </Button> {' '}
                          </Link>
                        </p>
                      </div>
                    </Col>

                  </Row>



                </div>
              )}

              {/* <div className="nav__right">
                  <p style={{color: "red" }} className="mb-0 d-flex align-items-center gap-2">
                  <Link to="/login" style={{ textDecoration: "none", color: "black" }}>
                  <Button   color="danger"  outline >   Login </Button>
                  </Link>
                  </p>
                </div>
                
                <div className="nav__right">
                <p style={{color: "red" }} className="mb-0 d-flex align-items-center gap-2">
                <Link to="/Register" style={{ textDecoration: "none", color: "black" }}>
                <Button color="danger"> Sign Up </Button> {' '}
                </Link>
                </p>
                </div>   */}

            </div>

            <div className="mobile__menu">
              <span>
                <i class="ri-menu-line" onClick={menuToggle}></i>
              </span>
            </div>
          </div>
        </Row>
        {/* <div class="input-group" style={{ width: 700, marginTop: "-30px" }} >
          <input type="search" class="form-control rounded" placeholder="What do you want to learn ?" aria-label="Search" aria-describedby="search-addon" />
          <button type="button" class="btn btn-outline-primary" >Search</button>
        </div> */}

      </Container>


    </header>
  );
};

export default NavBar;
