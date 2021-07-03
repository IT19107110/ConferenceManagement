import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../../actions/templateActions";
import { Table, Card, CardBody, Button } from "reactstrap";
import { AiTwotoneLike, AiTwotoneDislike } from "react-icons/ai";

export class PendingEditorTemplates extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.viewTemplate();
  }
  render() {
    return (
      <div>
        <div className="container">
          <h3 className="text-center text-white mt-5 mb-5 display-3">
            PENDING EDITOR TEMPLATES
          </h3>
          
                <Table>
                  <thead className="text-white">
                    <tr>
                      <th>No</th>
                      <th>Template Name</th>
                      <th>Link</th>
                      <th>Status</th>
                      <th>Approved</th>
                      <th>Declined</th>
                    </tr>
                  </thead>
                  <tbody className="text-white">
                    {this.props.templates &&
                      this.props.templates.map((singleTemplate, index) => {
                        return (
                          <tr>
                            <th scope="row">{++index}</th>
                            <td>{singleTemplate.templateName}</td>
                            <td>
                              <a href={singleTemplate.fileLink} target="_blank">
                                Download
                              </a>
                            </td>
                            <td>
                              {singleTemplate.approved ? (
                                <button className="btn btn-success">
                                  Approved
                                </button>
                              ) : (
                                <button className="btn btn-danger">
                                  Unapproved
                                </button>
                              )}
                            </td>
                            <td>
                              <Button
                                className="bg-transparent border-0"
                                disabled={singleTemplate.approved}
                                onClick={() => {
                                  const DataObj = {
                                    approved: true,
                                  };
                                  this.props.approveTemplate(
                                    singleTemplate._id,
                                    DataObj
                                  );
                                }}
                              >
                                <AiTwotoneLike color="green" fontSize="1.7em" />
                              </Button>
                            </td>
                            <td>
                              <Button
                                className="bg-transparent border-0"
                                disabled={!singleTemplate.approved}
                                onClick={() => {
                                  const DataObj = {
                                    approved: false,
                                  };
                                  this.props.approveTemplate(
                                    singleTemplate._id,
                                    DataObj
                                  );
                                }}
                              >
                                <AiTwotoneDislike
                                  color="red"
                                  fontSize="1.7em"
                                />
                              </Button>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </Table>
              </div>
            
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  templates: state.templateReducer.templates,
});

const mapActionToProps = {
  viewTemplate: actions.viewTemplate,
  approveTemplate: actions.approveTemplate,
};
export default connect(
  mapStateToProps,
  mapActionToProps
)(PendingEditorTemplates);