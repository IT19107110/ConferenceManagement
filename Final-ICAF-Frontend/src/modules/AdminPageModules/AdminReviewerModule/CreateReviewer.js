import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../../actions/reviewerActions";

import {Card, CardBody, Col, Button, Form, FormGroup, Label, Input,} from "reactstrap";

export class CreateReviewer extends Component {
  constructor(props) {
    super(props);

    this.onValueChange = this.onValueChange.bind(this);
    this.onRegister = this.onRegister.bind(this);
    this.state = {
      firstName:"",
      lastName:"",
      email:"",
      password: "",

      processStatus: false,
      processStatusAlert: "",
      processStatusMessage: "",
    }
  }
  onValueChange = (e)=>this.setState({ [e.target.name]: e.target.value });
  onRegister(e){
    e.preventDefault();

    this.setState({
      processStatus: true,
      processStatusAlert: "alert alert-warning",
      processStatusMessage: "Please Wait...",
    });

    const registerReviewerObj = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
    };
    this.props.reviewerRegister(
        registerReviewerObj,
        ()=>{
          this.setState({
            processStatusAlert: "alert alert-success",
            processStatusMessage: "Register successful",

            firstName:"",
            lastName:"",
            email:"",
            password: "",
          });


        },
        ()=>{
          this.setState({
            processStatusAlert: "alert alert-danger",
            processStatusMessage: "Something went wrong. Please try again.",
          });
        },

    )
  }

  render() {
    return (
        <div>
          <div className="row justify-content-center">
          <Card style={{ width: '40rem' }}>
            
            <CardBody className="p-5">    
            <h3 style={{ textAlign: "center"}} >CREATE EDITOR</ h3>
              <Form onSubmit={this.onRegister}>
                <FormGroup>
                  {this.state.processStatus ? (
                    <div className={this.state.processStatusAlert} role="alert">
                      {this.state.processStatusMessage}
                    </div>
                  ) : (
                    ""
                  )}
                  </FormGroup>
                  <FormGroup>
                    <Label for="firstName">
                      First Name
                    </Label>
                      <Input
                          type="text"
                          name="firstName"
                          id="firstName"
                          placeholder="Enter First Name"
                          value={this.state.firstName}
                          onChange={(e) => {
                            this.onValueChange(e);
                          }}
                      />
                  </FormGroup>

                  <FormGroup>
                    <Label for="lastName">
                      Last Name
                    </Label>
                      <Input
                          type="text"
                          name="lastName"
                          id="lastName"
                          placeholder="Enter Last Name"
                          value={this.state.lastName}
                          onChange={(e) => {
                            this.onValueChange(e);
                          }}
                      />
                  </FormGroup>

                  <FormGroup>
                    <Label for="email">
                      Email
                    </Label>
                      <Input
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Enter email"
                          value={this.state.email}
                          onChange={(e) => {
                            this.onValueChange(e);
                          }}
                      />
                  </FormGroup>

                  <FormGroup>
                    <Label for="password">
                      Password
                    </Label>
                      <Input
                          type="password"
                          name="password"
                          id="password"
                          placeholder="Enter Password"
                          value={this.state.password}
                          onChange={(e) => {
                            this.onValueChange(e);
                          }}
                      />
                  </FormGroup>

                  <FormGroup check row>
                  <Col sm={{ size: 40, offset: 4 }}>
                    <Button className="btn btn-dark" type="submit">
                      Submit
                    </Button>
                  </Col>
                  </FormGroup>
                </Form>
              </CardBody>
            </Card>
          </div>
        </div>
    );
  }
}


const mapActionToProps = {
  reviewerRegister: actions.reviewerRegister,
};

export default connect(null, mapActionToProps)(CreateReviewer);
