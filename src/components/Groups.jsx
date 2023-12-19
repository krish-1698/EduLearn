import React from "react";
import { Container, Row, Col, Card, CardText, CardTitle, Button, CardImg, CardSubtitle, CardBody } from "reactstrap";
import { Link } from "react-router-dom";



const Groups = () => {

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [language, setLanguage] = React.useState('');

  const handleChanges = (event) => {
    setLanguage(event.target.value);
  };


  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <h2>Groups</h2>
          </Col>
          {/* {groupData.map((item) => (
              <Col lg="4" md="6" sm="6">
                <CourseCard key={item.id} item={item} />
              </Col>
            ))} */}

          <Row>

            <Col sm="4">
              <Card
                style={{
                  width: '18rem'
                }}
              >
                <CardBody>
                  <CardImg
                    alt="Card image cap"
                    src="https://d20x1nptavktw0.cloudfront.net/wordpress_media/2022/04/Blog-Image-30.jpg"
                    top
                    width="100%"
                    height="200px"
                  />
                  <CardTitle tag="h5">
                    Physics
                  </CardTitle>
                  <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                  >
                    <i class="ri-team-fill"></i> 20
                  </CardSubtitle>
                  <Link to="/doubts" style={{ textDecoration: "none", color: "black" }}>
                    <Button style={{ float: "right" }}>
                      join
                    </Button>
                  </Link>
                </CardBody>
              </Card>
            </Col>

            <Col sm="4">
              <Card
                style={{
                  width: '18rem',
                }}
              >
                <CardBody>
                  <CardImg
                    alt="Card image cap"
                    src="https://thumbs.dreamstime.com/b/chemistry-concept-modern-vector-horizontal-banner-creative-chemical-illustration-145532385.jpg"
                    top
                    width="100%"
                    height="200px"
                  />
                  <CardTitle tag="h5">
                    Chemistry
                  </CardTitle>
                  <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                  >
                    <i class="ri-team-fill"></i> 20
                  </CardSubtitle>
                  <Button style={{ float: "right" }}>
                    Join
                  </Button>
                </CardBody>
              </Card>
            </Col>

            <Col sm="4">
              <Card
                style={{
                  width: '18rem'
                }}
              >
                <CardBody>
                  <CardImg
                    alt="Card image cap"
                    src="https://thumbs.dreamstime.com/b/biology-hand-drawn-doodles-lettering-education-science-vector-white-background-135246167.jpg"
                    top
                    width="100%"
                    height="200px"
                  />
                  <CardTitle tag="h5">
                    Biology
                  </CardTitle>
                  <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                  >
                    <i class="ri-team-fill"></i> 20
                  </CardSubtitle>
                  <Button style={{ float: "right" }}>
                    Join
                  </Button>
                </CardBody>
              </Card>
            </Col>



          </Row>
        </Row>
      </Container>
    </section>
  );
};

export default Groups;
