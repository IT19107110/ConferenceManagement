import React, { Component } from "react";
import AboutImg from "url:../../../assets/sliit1.svg";
import AboutImg2 from "url:../../../assets/sliit2.svg";
import AboutImg3 from "url:../../../assets/sliit3.svg";
import background from "url:../../../assets/blur.svg";
import "./GetInTouch.css";
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

export default class GetInTouch extends Component {
  render() {
    return (
      <div className="container">
        <br />
        <h2 className="mt-3 text-center conferenceDateDiv3">
          Event Venue
              </h2>
        <div className="row">
          <div className="col-lg-6  mt-3">
            <iframe
              className="googleMapDiv"
              frameBorder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              id="gmap_canvas"
              src="https://maps.google.com/maps?width=302&amp;height=383&amp;hl=en&amp;q=SLIIT%20Colombo+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
            <script
              type="text/javascript"
              src="https://embedmaps.com/google-maps-authorization/script.js?id=9d0b336a328f9dc4c3b799ea47ad1637cd93b6d0"
            ></script>
          </div>
          {/* <div className="col-lg-6 mt-3">
            {/* <Card>
              <CardBody className="p-5">
              <h2 className="mt-3 text-center">
              Sri Lanka Institute of Information Technology
              </h2>
              </CardBody>
            </Card>
          </div> */} 
          <div className="col-lg-6 mt-3">
            <Card style={{ backgroundImage: `url(${background})`,margin:"20px"}}>
              <CardBody className="p-5 ">
                
                <h1 className="mt-3 text-center text-light">THE NEXT YOU</h1>
              <h2 className="mt-3 text-center text-light">
              SLIIT IS YOUR BEST DIRECTION
              </h2>
              </CardBody>
            </Card>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4  mt-3">
          <img
            src={AboutImg}
            className="img-fluid"
            alt="aboutImg"
            style={{ width: "300px" }}
          />
          </div>
          <div className="col-lg-4 mt-3">
          <img
            src={AboutImg2}
            className="img-fluid"
            alt="AboutImg2"
            style={{ width: "300px" }}
          />
          </div>
          <div className="col-lg-4 mt-3">
          <img
            src={AboutImg3}
            className="img-fluid"
            alt="AboutImg3"
            style={{ width: "300px" }}
          />
          </div>
        </div>
      </div>
    );
  }
}