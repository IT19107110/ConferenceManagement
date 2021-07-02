import React, { Component } from "react";
import * as actions from "../../../../actions/editorActions";
import { connect } from "react-redux";
import { Table, Card, CardBody } from "reactstrap";

class EditorTable extends Component {
  componentDidMount() {
    this.props.fetchAllEditors();
  }
  render() {
    return (
      <div>
        <Card>
          <CardBody className="p-3">
            <div
              style={{
                maxHeight: "390px",
                overflowY: "auto",
              }}
            >
              <div class="table-responsive">
              <table class="table table-striped text-center my-3">
                <thead>
                  <tr class="table-dark">
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.editorList.map((singleEditor, index) => {
                    return (
                      <tr>
                        <th scope="row">{index}</th>
                        <td>{singleEditor.firstName}</td>
                        <td>{singleEditor.lastName}</td>
                        <td>{singleEditor.email}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.authReducer.user,
  editorList: state.editorReducer.editorList,
});

const mapActionToProps = {
  fetchAllEditors: actions.fetchAllEditors,
};
export default connect(mapStateToProps, mapActionToProps)(EditorTable);
