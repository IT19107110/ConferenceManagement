import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../../actions/latestNewsActions";
import "./LatestNews.css";
import { Card, CardText, CardBody, CardTitle, Button } from "reactstrap";
import AboutImg from "url:../../../assets/edit.svg";

export class LatestNews extends Component {
  componentDidMount() {
    this.props.fetchAllLatestNews();
  }
  render() {
    return (
      <div className="container">
        <br /> <br />
        <div className="row mt-4 mb-4">
          <h1 className="text-white text-center">LATEST NEWS</h1>

          {this.props.latestNewsList &&
            this.props.latestNewsList.map((singleNews) => {
              return (
                <div className="col-lg-4 col-sm-12 mt-3">
                  <Card style={{
                borderRadius: "20px",
                backgroundColor: "#005792",
                marginLeft: "20px",
                marginTop: "25px",
                width: "20rem",
                boxShadow:10 ,
              }} > 
                    <CardBody>
                      <CardText style={{color:"white"}}>{singleNews.message}</CardText>
                      <CardText style={{color:"white"}}>
                        {singleNews.newsDate.substring(0, 10)}
                      </CardText>
                      <Button className="btn btn-warning">
                        <a
                          href={singleNews.hyperlink}
                          style={{ color: "black", textDecoration: "none" }}
                          target="_blank"
                        >
                          Click Here
                        </a>
                      </Button>
                    </CardBody>
                  </Card>
                </div>
              );
            })}
        </div>
        <br />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  latestNewsList: state.latestNewsReducer.latestNewsList,
});

const mapActionToProps = {
  fetchAllLatestNews: actions.fetchAllLatestNews,
};
export default connect(mapStateToProps, mapActionToProps)(LatestNews);
