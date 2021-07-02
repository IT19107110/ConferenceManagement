import React, { Component } from "react";
import { Table, Card, CardBody } from "reactstrap";

export class AdminTemplatesTable extends Component {
  render() {
    return (
      <div>
        <div className="container">
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
                      <th>Template</th>
                      <th>Link</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Henry</td>
                      <td>James</td>
                    </tr>
                    <tr>
                      <td>Jason</td>
                      <td>Thor</td>
                    </tr>
                    <tr>
                      <td>BILL</td>
                      <td>oWL</td>
                    </tr>
                    <tr>
                      <td>JaSON STAHTAHM</td>
                      <td>gLENDWICH</td>
                    </tr>
                  </tbody>
                </table>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    );
  }
}

export default AdminTemplatesTable;
