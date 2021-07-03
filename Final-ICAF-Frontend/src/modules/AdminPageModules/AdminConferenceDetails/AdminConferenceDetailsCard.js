import React, { Component } from "react";
import { Button, Card, CardBody, CardText, CardTitle } from "reactstrap";
import { FaRegFilePowerpoint } from "react-icons/fa";
import { BsCalendar } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

export class AdminConferenceDetailsCard extends Component {
  render() {
    return (
      <div>
        <Card
          style={{
            borderRadius: "30px",
            backgroundColor: "#005792",
            marginLeft: "5px",
          }}
        >
          <CardBody>
            <CardTitle tag="h5" style={{ color: "white" }}>
              Introduction to Application Framework
            </CardTitle>
            <CardText style={{ color: "white" }}>
             This Shows the Infromation About Application Framework. You can get Breifly know about ICAF Conference
            </CardText>

            <Button className="bg-transparent border-0">
              <FaRegFilePowerpoint color="white" fontSize="1.75em" />
            </Button>

            <Button className="bg-transparent border-0">
              <BsCalendar color="white" fontSize="1.5em" />
            </Button>

            <Button className="bg-transparent border-0">
              <CgProfile color="white" fontSize="1.7em" />
            </Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default AdminConferenceDetailsCard;
