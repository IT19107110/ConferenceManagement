import React, { Component } from "react";
import "./HomePageConferenceDetail.css";
import Icaf from "url:../../../assets/icaf.svg";


export class HomePageConferenceDetail extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center align-self-center">
          
          <div className="col-lg-6 col-md-6 col-sm-12 conferenceDetailsSection">
            <div className="container">
            <div className="text-center">
          <h1> ICAF 2021</h1>
          </div>
              <h2 className="mb-0 text-center">
                SLIIT Computing International Conference on Application Frameworks
              </h2>
              <br>
              </br>
              <h2 className="mt-3 mb-0 rounded text-center">
                <span className="conferenceDateDiv rounded">
                  September 13 - September 16, 2021
                </span>
              </h2>
              <br>
              </br>
              <h2 className="mt-3 text-center">
                Sri Lanka Institute of Information Technology, Sri Lanka
              </h2>
            </div>
          </div>
          
        </div>
      </div>
    );
  }
}

export default HomePageConferenceDetail;
