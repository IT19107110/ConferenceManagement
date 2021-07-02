import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../actions/authActions";
import {
  Container,
  Card,
  CardBody,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import regImg from "url:../../assets/login.svg";
const mystyle={
  background: 'linear-gradient(to right, #03506F, #00587A, #1F618D,#2980B9)'
}
class AttendeeLogin extends Component {
  constructor(props) {
    super(props);
    this.onLogin = this.onLogin.bind(this);
    this.onValueChange = this.onValueChange.bind(this);
    this.state = {
      email: "",
      password: "",
      processStatus: false,
      processStatusAlert: "",
      processStatusMessage: "",
    };
  }

  onValueChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onLogin(e) {
    e.preventDefault();

    this.setState({
      processStatus: true,
      processStatusAlert: "alert alert-warning",
      processStatusMessage: "Please Wait...",
    });

    const loginAttendeeObj = {
      email: this.state.email,
      password: this.state.password,
    };

    this.props.loginAttendee(
      loginAttendeeObj,
      () => {
        this.setState({
          processStatusAlert: "alert alert-success",
          processStatusMessage: "Login successful",
        });
        window.location = "/";
      },
      () => {
        this.setState({
          processStatusAlert: "alert alert-danger",
          processStatusMessage:
            "Username or password incorrect. Please try again.",
        });
      }
    );
  }
  render() {
    return (
      <div>
        <Container className="mt-5">
          <Card>
            <CardBody className="p-5">
              <div className="row">
                <div className="col-lg-6 col-md-6 container">
                  <img src={regImg} alt="regImg" className="img-fluid" />
                </div>
                <div  style={mystyle} className="col-lg-6 col-md-6 container">
                  <h3 className="mb-2 mt-5 font-weight-bold" style={{color:"white"}}>ATTENDEE LOGIN</h3>
                  <hr />
                  <Form onSubmit={this.onLogin}>
                    <FormGroup>
                      {this.state.processStatus ? (
                        <div
                          className={this.state.processStatusAlert}
                          role="alert"
                        >
                          {this.state.processStatusMessage}
                        </div>
                      ) : (
                        ""
                      )}
                    </FormGroup>
                    <FormGroup row>
                      <Label style={{color:"white"}} for="email" sm={12}>
                        Email
                            </Label>
                      <Col sm={10}>
                      <Input
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Enter email"
                          onChange={(e) => {
                            this.onValueChange(e);
                          }}
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label style={{color:"white"}} for="password" sm={12}>
                        Password
                            </Label>
                      <Col sm={10}>
                      <Input
                          type="password"
                          name="password"
                          id="password"
                          placeholder="Enter password"
                          onChange={(e) => {
                            this.onValueChange(e);
                          }}
                        />
                      </Col>
                    </FormGroup>

                    <FormGroup row>
                      <Col sm={12}>
                        <Button className="btn btn-warning">Submit</Button>
                      </Col>
                    </FormGroup>
                  </Form>
                </div>
              </div>
            </CardBody>
          </Card>
        </Container>
      </div>
    );
  }
}
const mapActionToProps = {
  loginAttendee: actions.loginAttendee,
};

export default connect(null, mapActionToProps)(AttendeeLogin);