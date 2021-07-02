import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../actions/templateActions";

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

export class AddTemplates extends Component {
  constructor(props) {
    super(props);
    this.onAddTemplate = this.onAddTemplate.bind(this);
    this.state = {
      templateName: "",
      fileLink: "",
      processStatus: false,
      processStatusAlert: "",
      processStatusMessage: "",
    };
  }

  onValueChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onAddTemplate(e) {
    e.preventDefault();

    this.setState({
      processStatus: true,
      processStatusAlert: "alert alert-warning",
      processStatusMessage: "Please wait",
    });

    const addTemplates = {
      templateName: this.state.templateName,
      fileLink: this.state.fileLink,
    };

    this.props.addTemplate(
      addTemplates,
      () => {
        this.setState({
          processStatusAlert: "alert alert-success",
          processStatusMessage: "Successful",
        });
        //     window.location = "/editordashboard";
      },
      () => {
        this.setState({
          processStatusAlert: "alert alert-danger",
          processStatusMessage: "Please try again.",
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
            <h3 style={{ textAlign: "center"}} >CREATE TEMPLATES</ h3>
              <Form onSubmit={this.onAddTemplate}>
                <FormGroup>
                  <Label for="WordLink">
                    Template Name
                  </Label>
                    <Input
                      type="text"
                      name="templateName"
                      id="templateName"
                      onChange={(e) => {
                        this.onValueChange(e);
                      }}
                    />
                </FormGroup>
                <FormGroup>
                  <Label for="WordLink">
                    File
                  </Label>
                    <Input
                      type="text"
                      name="fileLink"
                      id="fileLink"
                      onChange={(e) => {
                        this.onValueChange(e);
                      }}
                    />
                </FormGroup>

                <FormGroup>
                  {this.state.processStatus ? (
                    <div className={this.state.processStatusAlert} role="alert">
                      {this.state.processStatusMessage}
                    </div>
                  ) : (
                    ""
                  )}
                </FormGroup>

                <FormGroup row>
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
  addTemplate: actions.addTemplate,
};

export default connect(null, mapActionToProps)(AddTemplates);
