import React, { Component } from "react";
import "./Footer.css";
import {AiOutlineCopyrightCircle} from "react-icons/ai";



export default class Footer extends Component {
  render() {
    return (
      <div className="FooterBackground">
        <div className="container-fluid">
          <div className="card cardFooter">
            <div className="heading text-center">   
            </div>
            <div className="card-footer row m-0">
            <div className="head1">CONTACT US</div>
            <p className="bdr"></p>
            
              <h5 className="text">
Department of Software Engineering, Faculty of Computing, SLIIT, Sri Lanka

              </h5>
              <h5 className="text">
Telephone: +94 77 688 7978, Email: icaf@sliit.lk
              </h5>
              <div>
                <p>
                  {" "}
                  <small className="follow-text">
                    FOLLOW US ON 
                  </small>{" "}
                  <label className="footer-right">
                    {" "}
                    <i className="fab fa-facebook-square"></i>{" "}
                    <i className="fab fa-instagram"></i>{" "}
                    <i className="fab fa-linkedin"></i>{" "}
                    
                  </label>{" "}
                </p>
              </div>
            </div>
            <div className="mt-3">
              <p className="text-center"><AiOutlineCopyrightCircle color="white" fontSize="1.5em" /> 2021 SLIIT Developed By Cord Nerds, All Rights Reserved </p>

            </div>
          </div>
        </div>
      </div>
    );
  }
}
