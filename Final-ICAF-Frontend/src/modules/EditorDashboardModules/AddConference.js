import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../actions/conferenceActions";
import {
  Card,
  CardBody,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

class AddConference extends Component {
  constructor(props) {
    super(props);
    this.onCreateConference = this.onCreateConference.bind(this);
    this.onValueChange = this.onValueChange.bind(this);
    this.state = {
      venue: "",
      confTitle: "",
      description: "",
      fromTime: "",
      toTime: "",

      processStatus: false,
      processStatusAlert: "",
      processStatusMessage: "",
    };
  }

  onValueChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onCreateConference(e) {
    e.preventDefault();

    this.setState({
      processStatus: true,
      processStatusAlert: "alert alert-warning",
      processStatusMessage: "Please Wait...",
    });

    const newConferenceObj = {
      venue: this.state.venue,
      confTitle: this.state.confTitle,
      description: this.state.description,
      fromTime: this.state.fromTime,
      toTime: this.state.toTime,
    };

    this.props.addConferenceDetails(
      newConferenceObj,
      () => {
        this.setState({
          processStatusAlert: "alert alert-success",
          processStatusMessage: "Conference Added Successful",
        });
      },
      () => {
        this.setState({
          processStatusAlert: "alert alert-danger",
          processStatusMessage: "Something went wrong. Please try again.",
        });
      }
    );
  }
  render() {
    return (
      <div>
        <div className="row justify-content-center">
          <Card style={{ width: '40rem' }}>
            
            <CardBody className="p-5">    
            <h3 style={{ textAlign: "center"}} >CREATE CONFERENCE</ h3>
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
                  <Label for="confTitle">
                    Conference Name
                  </Label>
                    <Input
                      type="text"
                      name="confTitle"
                      id="confTitle"
                      placeholder="Enter Conference Name"
                      onChange={(e) => {
                        this.onValueChange(e);
                      }}
                    />
                </FormGroup>

                <FormGroup>
                  <Label for="description">
                    Description
                  </Label>
                    <Input
                      type="text"
                      name="description"
                      id="description"
                      placeholder="Enter Description"
                      onChange={(e) => {
                        this.onValueChange(e);
                      }}
                    />
                </FormGroup>

                <FormGroup>
                  <Label for="fomTime">
                    From
                  </Label>
                    <Input
                      type="date"
                      name="fromTime"
                      id="fromTime"
                      onChange={(e) => {
                        this.onValueChange(e);
                      }}
                    />
                </FormGroup>

                <FormGroup>
                  <Label for="toTime">
                    To
                  </Label>
                    <Input
                      type="date"
                      name="toTime"
                      id="toTime"
                      onChange={(e) => {
                        this.onValueChange(e);
                      }}
                    />
                </FormGroup>

                <FormGroup>
                  <Label for="venue">
                    Venue
                  </Label>
                    <Input
                      type="text"
                      name="venue"
                      id="venue"
                      placeholder="Enter Venue"
                      onChange={(e) => {
                        this.onValueChange(e);
                      }}
                    />
                </FormGroup>

                <FormGroup check row>
                  <Col sm={{ size: 10, offset: 2 }}>
                    <Button className="btn btn-success" type="submit">
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
  addConferenceDetails: actions.addConferenceDetails,
};

export default connect(null, mapActionToProps)(AddConference);
