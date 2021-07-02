import React, { Component } from "react";
import {
  Container,
  Card,
  CardBody,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";

export default class Contact extends Component {
  render() {
    return (
      <div className="container">
        <br />
        <br /> <br />
        <div className="row justify-content-center align-self-center">
          
          <h3 className="text-white">CONTACT US</h3>
          <p className="bdr"></p>
                <hr />
                
            <Card>
              <CardBody className="p-5">
                <Form>
                  <FormGroup row>
                    <Label for="First Name" sm={2}>
                      Name
                    </Label>
                    <Col sm={10}>
                      <Input
                        type="text"
                        name="firstName"
                        id="firstName"
                        placeholder="Your Name"
                      />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Label for="email" sm={2}>
                      Email
                    </Label>
                    <Col sm={10}>
                      <Input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="subject" sm={2}>
                      Subject
                    </Label>
                    <Col sm={10}>
                      <Input
                        type="text"
                        name="subject"
                        id="subject"
                        placeholder="Subject"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="message" sm={2}>
                      Message
                    </Label>
                    <Col sm={10}>
                      <Input
                        type="textarea"
                        name="message"
                        id="message"
                        placeholder="Message"
                      />
                    </Col>
                  </FormGroup>
                  <br />
                  <Button className="btn btn-dark btn-md">Submit</Button>
                </Form>
              </CardBody>
            </Card>
            
          </div>
        </div>
        
      
    );
  }
}