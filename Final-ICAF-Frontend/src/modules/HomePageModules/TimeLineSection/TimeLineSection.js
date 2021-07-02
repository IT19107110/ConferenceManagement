import React from "react";
import "./TimeLineSection.css";
import { makeStyles } from "@material-ui/core/styles";
import Sliitlogo from "url:../../../assets/image2vector.svg";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 16px",
  },
  secondaryTail: {
    backgroundColor: "#333",
  },
}));

export default function TimeLineSection() {
  const classes = useStyles();
  return (
    <div className="container mt-5 mb-5">
      <h1 className="text-white text-center">Financially Sponsored By</h1>
      <br />
      <br />
      <div className="container text-center pt-5 pb-5">
          <img
            src={Sliitlogo}
            className="img-fluid"
            alt="sliitlogo"
            style={{ width: "200px" }}
          />
          </div>
          
          <h2 className="mt-3 text-center conferenceDateDiv2">
          Department of Software Engineering, Faculty of Computing, Sri Lanka Institute of Information Technology
              </h2>
         
    </div>
  );
}
