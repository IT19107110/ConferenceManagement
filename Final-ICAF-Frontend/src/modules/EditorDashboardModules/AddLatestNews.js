import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../actions/latestNewsActions";
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

class AddLatestNews extends Component {
  constructor(props) {
    super(props);
    this.onCreateLastestNews = this.onCreateLastestNews.bind(this);
    this.onValueChange = this.onValueChange.bind(this);
    this.state = {
      message: "",
      hyperlink: "",

      processStatus: false,
      processStatusAlert: "",
      processStatusMessage: "",
    };
  }

  onValueChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onCreateLastestNews(e) {
    e.preventDefault();

    this.setState({
      processStatus: true,
      processStatusAlert: "alert alert-warning",
      processStatusMessage: "Please Wait...",
    });

    const newLatestNews = {
      message: this.state.message,
      hyperlink: this.state.hyperlink,
      newsDate: new Date(),
    };

    this.props.addLatestNews(
      newLatestNews,
      () => {
        this.setState({
          processStatusAlert: "alert alert-success",
          processStatusMessage: "News Added Successful",
          message: "",
          hyperlink: "",
        });
      },
      () => {
        this.setState({
          processStatusAlert: "alert alert-danger",
          processStatusMessage: "Something went wrong. Please try again.",
          message: "",
          hyperlink: "",
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
            <h3 style={{ textAlign: "center"}} >CREATE LATEST NEWS</ h3>
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
                  <Label for="message">
                    Message
                  </Label>
                    <Input
                      type="textarea"
                      name="message"
                      id="message"
                      value={this.state.message}
                      placeholder="Enter  message"
                      onChange={(e) => {
                        this.onValueChange(e);
                      }}
                    />
                </FormGroup>

                <FormGroup>
                  <Label for="hyperlink">
                    Hyperlink
                  </Label>
                    <Input
                      type="text"
                      name="hyperlink"
                      id="hyperlink"
                      value={this.state.hyperlink}
                      placeholder="Enter Hyperlink"
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
  addLatestNews: actions.addLatestNews,
};

export default connect(null, mapActionToProps)(AddLatestNews);
