import React, { Component } from "react";
import AboutImg from "url:../../../assets/home/about.svg";
import "./HomeAboutSection.css";

export class HomeAboutSection extends Component {
  render() {
    return (
      <div
        className="pt-4"
        style={{ backgroundColor: "#0A043C", color: "#ffffff" }}>
        <div className="container text-center pt-5 pb-5">
          <h1 className="mt-4">About ICAF 2021 Conference</h1>
          <hr />
          <div className="container">
            <p>
            The inaugural international conference on Application Frameworks 2021 (ICAF2021) is organized by Sri Lanka Institute of Information Technology as an open forum for academics along with industry professionals to present the latest findings and research output and practical deployments in the Application Framework domains. . Conference will be physically held at SLIIT and the Researchers will present their latest findings and implementations of different programming languages including Java, JavaScript and Python. Conference will be physically held at SLIIT.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeAboutSection;
