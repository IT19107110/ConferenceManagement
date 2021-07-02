import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardBody, CardText, CardTitle, CardImg } from "reactstrap";
import { GiClick } from "react-icons/gi";
import AboutImg from "url:../../../assets/edit.svg";
import AboutImg2 from "url:../../../assets/edit2.svg";



export class AdminDashboard extends Component {
  render() {
    return (
      <div className="container">
        <h3 className="text-center text-white mt-5 mb-5 display-2">
          ADMIN DASHBOARD
          <hr />
        </h3>
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12">
            <Card
              style={{
                borderRadius: "20px",
                backgroundColor: "#005792",
                marginLeft: "20px",
                marginTop: "25px",
                width: "20rem",
                boxShadow:10 
              }}
            >
              <CardImg style={{background:"white"}} top width="100%" src={AboutImg}/>
              <CardBody>
                <CardTitle tag="h5" style={{ color: "white" }}>
                  EDITOR
                </CardTitle>
                <CardText style={{ color: "white" }}>
                  You can View Editor Dashboard using click Below.
                </CardText>
                <Button className="bg-transparent border-0">
                  <Link to="admineditor">
                    <GiClick color="white" fontSize="1.7em" />
                  </Link>
                </Button>
              </CardBody>
            </Card>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <Card
                   style={{
                    borderRadius: "20px",
                    backgroundColor: "#005792",
                    marginLeft: "20px",
                    marginTop: "25px",
                    width: "20rem",
                    boxShadow:10 
                  }}
            >
              <CardImg style={{background:"white"}} top width="100%" src={AboutImg}/>
              <CardBody>
                <CardTitle tag="h5" style={{ color: "white" }}>
                  REVIEWER
                </CardTitle>
                <CardText style={{ color: "white" }}>
                You can View Editor Dashboard using click Below.

                </CardText>
                <Button className="bg-transparent border-0">
                <Link to="adminreviewer">
                    <GiClick color="white" fontSize="1.7em" />
                  </Link>
                </Button>
              </CardBody>
            </Card>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <Card
                  style={{
                    borderRadius: "20px",
                    backgroundColor: "#005792",
                    marginLeft: "20px",
                    marginTop: "25px",
                    width: "20rem",
                    boxShadow:10 
                  }}
            >
              <CardImg style={{background:"white"}} top width="100%" src={AboutImg}/>
              <CardBody>
                <CardTitle tag="h5" style={{ color: "white" }}>
                  ATTENDEE
                </CardTitle>
                <CardText style={{ color: "white" }}>
                You can View Editor Dashboard using click Below.

                </CardText>
                <Button className="bg-transparent border-0">
                <Link to="adminattendee">
                    <GiClick color="white" fontSize="1.7em" />
                  </Link>
                </Button>
              </CardBody>
            </Card>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <Card
                    style={{
                      borderRadius: "20px",
                      backgroundColor: "#005792",
                      marginLeft: "20px",
                      marginTop: "25px",
                      width: "20rem",
                      boxShadow:10 
                    }}
            >
              <CardImg style={{background:"white"}}  src={AboutImg2}/>
              <CardBody>
                <CardTitle tag="h5" style={{ color: "white" }}>
                  RESEARCHER
                </CardTitle>
                <CardText style={{ color: "white" }}>
                You can View Editor Dashboard using click Below.

                </CardText>
                <Button className="bg-transparent border-0">
                <Link to="adminresearcher">
                    <GiClick color="white" fontSize="1.7em" />
                  </Link>
                </Button>
              </CardBody>
            </Card>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <Card
                   style={{
                    borderRadius: "20px",
                    backgroundColor: "#005792",
                    marginLeft: "20px",
                    marginTop: "25px",
                    width: "20rem",
                    boxShadow:10 
                  }}
            >
              <CardImg style={{background:"white"}} src={AboutImg2}/>
              <CardBody>
                <CardTitle tag="h5" style={{ color: "white" }}>
                  PRESENTER
                </CardTitle>
                <CardText style={{ color: "white" }}>
                You can View Editor Dashboard using click Below.

                </CardText>
                <Button className="bg-transparent border-0">
                <Link to="adminpresenter">
                    <GiClick color="white" fontSize="1.7em" />
                  </Link>
                </Button>
              </CardBody>
            </Card>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <Card
                   style={{
                    borderRadius: "20px",
                    backgroundColor: "#005792",
                    marginLeft: "20px",
                    marginTop: "30px",
                    width: "20rem",
                    boxShadow:10 
                  }}
            >
              <CardImg style={{background:"white"}}  src={AboutImg2}/>
              <CardBody>
                <CardTitle tag="h5" style={{ color: "white" }}>
                 CONFERENCE DETAILS
                </CardTitle>
                <CardText style={{ color: "white" }}>
                You can View Editor Dashboard using click Below.

                </CardText>
                <Button className="bg-transparent border-0">
                <Link to="adminconference">
                    <GiClick color="white" fontSize="1.7em" />
                  </Link>
                </Button>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminDashboard;