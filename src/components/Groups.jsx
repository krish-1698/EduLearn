import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, CardText, CardTitle, Button, CardImg, CardSubtitle, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";



const Groups = () => {
  let navigate = useNavigate();
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [language, setLanguage] = React.useState('');
  const [groupsData, setGroupsData] = React.useState('');
  const [allGroupsData, setAllGroupsData] = React.useState([]);
  const [groupIds, setGroupIds] = React.useState([]);

  const handleChanges = (event) => {
    setLanguage(event.target.value);
  };

  const handleJoin = (groupId) => {

    const isLoggedIn = localStorage.getItem('loggedIn');
    const data = {
      group_id : groupId,
      user_id : localStorage.getItem('user_id')
    }
    if (isLoggedIn === 'true') {
    axios
    .post("http://localhost:3001/api/joinGroup", {
      data: data
  })
    .then((res) => {
      // setCourses(res.data);
      // setCourses(res.data);
      console.log(res.data); 
      navigate('/doubts');
      
    })
    .catch((err) => {
      console.log(err);
    });
    } else {
      alert('You need to login');
    }
  };

  const handleViewClick = (group_id) => {
    debugger;
    navigate("/doubts", {
      state: { group_id:group_id}
    });
  };

  const fetchData = async () => {
    const user_id = localStorage.getItem('user_id');
    try {
        axios.get("http://localhost:3001/api/getGroupByUserId",
        {
          params: { user_id }
        }).then(
            (response) => {
                console.log(response.data);
                // setTeacherData(...teacherData, response.data);
                setGroupsData(response.data);
                console.log(response.data);
            }
        );
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

const [groupCountData, setGroupCountData] = useState([]);

useEffect(() => {
  // This will be called after the state has been updated
  console.log("mmmmmm");
  const updatedGroupIds = allGroupsData.map(group => group.id);
  FetchGroupMemberCount(updatedGroupIds);
}, [allGroupsData]);

const FetchGroupMemberCount = async (groupIds) => {
  // const groupIds = [1,2,3];
  try {
    const promises = groupIds.map(groupId =>
      axios.get("http://localhost:3001/api/getGroupCountByGroupId", {
        params: { group_id: groupId }
      })
    );

    const responses = await Promise.all(promises);

    const groupDataArray = responses.map(response => response.data);
      console.log(groupDataArray);
      console.log(groupDataArray[0][0].groupCount);
      console.log(groupDataArray[1][0]?.groupCount)
      console.log(groupDataArray[2][0]?.groupCount)
      debugger;
    setGroupCountData(groupDataArray);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};


const fetchAllGroupsData = async () => {
  axios
  .get("http://localhost:3001/api/getAllGroups")
  .then((res) => {
    // setCourses(res.data);
    setAllGroupsData(res.data);
    console.log(res.data); 
  })
  .catch((err) => {
    console.log(err);
  });
}
useEffect(() => {
  // This will be called after the state has been updated
  console.log("Updated groupCountData:", groupCountData);
}, [groupCountData]);

useEffect(() => {
  console.log("Not working");
  fetchAllGroupsData();
  const fetchDataAndGroupCount = async () => {
    // await FetchGroupMemberCount();
     if (localStorage.getItem('loggedIn') === 'true') {
      // Call fetchData only if the user is logged in
      fetchData();
     }
    };
    fetchDataAndGroupCount();
    console.log("groupCountData:", groupCountData);
}, []);



const hasGroupWithId = (groupId) => {
  return Array.isArray(groupsData) && groupsData.some(group => group.group_id === groupId);
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

            {/* <Col sm="4">
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
                    <i class="ri-team-fill"></i>  {groupCountData[0]?.[0]?.groupCount || 'Loading...'}
                  </CardSubtitle>
                  {hasGroupWithId(2) ? (
                    <Button style={{ float: "right" }} onClick={() => handleViewClick(2)}>
                      View
                    </Button>
                  ) :(
                  <Button style={{ float: "right" }} onClick={() => handleJoin(2)}>
                    join
                  </Button>
                  )}
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
                    <i class="ri-team-fill"></i>  {groupCountData[1]?.[0]?.groupCount || 'Loading...'}
                  </CardSubtitle>
                  {hasGroupWithId(1) ? (
                    <Button style={{ float: "right" }} onClick={() => handleViewClick(1)}>
                      View
                    </Button>
                  ) :(
                  <Button style={{ float: "right" }} onClick={() => handleJoin(1)}>
                    join
                  </Button>
                //   <Link to="/doubts" style={{ textDecoration: "none", color: "black" }}>
                //   <Button style={{ float: "right" }} onClick={() => handleJoin(1)}>
                //     join
                //   </Button>
                // </Link>
                  )}
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
                    <i class="ri-team-fill"></i> {groupCountData[2]?.[0]?.groupCount || 'Loading...'} */}
                    {/* <i class="ri-team-fill"></i>10 */}
                  {/* </CardSubtitle>
                  {hasGroupWithId(3) ? (
                    <Button style={{ float: "right" }} onClick={() => handleViewClick(3)}>
                      View
                    </Button>
                  ) :(
                  <Button style={{ float: "right" }} onClick={() => handleJoin(3)}>
                    join
                  </Button>
                  )}
                </CardBody>
              </Card>
            </Col> */}

            {allGroupsData.map((group) => (
        <Col key={group.id} sm="4">
          <Card style={{ width: '18rem' }}>
            <CardBody>
              <CardImg
                alt="Card image cap"
                src={group.img_path}
                top
                width="100%"
                height="200px"
              />
              <CardTitle tag="h5">{group.name}</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                <i class="ri-team-fill"></i> {groupCountData[group.id - 1]?.[0]?.groupCount || 'Loading...'}
              </CardSubtitle>
              {hasGroupWithId(group.id) ? (
                <Button style={{ float: "right" }} onClick={() => handleViewClick(group.id)}>
                  View
                </Button>
              ) : (
                <Button style={{ float: "right" }} onClick={() => handleJoin(group.id)}>
                  Join
                </Button>
              )}
            </CardBody>
          </Card>
        </Col>
      ))}

          </Row>
        </Row>
      </Container>
    </section>
  );
};

export default Groups;
