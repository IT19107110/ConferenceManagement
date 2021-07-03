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
                      <td>Express js</td>
                      <td>https://www.google.com/search?q=tech+workshop&oq=tech+workshop&aqs=chrome.0.69i59j0j0i457j0l2j69i60l3.2020j0j7&sourceid=chrome&ie=UTF-8</td>
                    </tr>
                    <tr>
                      <td>MongoDB</td>
                      <td>https://www.google.com/search?q=tech+workshop&oq=tech+workshop&aqs=chrome.0.69i59j0j0i457j0l2j69i60l3.2020j0j7&sourceid=chrome&ie=UTF-8</td>
                    </tr>
                    <tr>
                      <td>Springboot</td>
                      <td>https://www.google.com/search?q=tech+workshop&oq=tech+workshop&aqs=chrome.0.69i59j0j0i457j0l2j69i60l3.2020j0j7&sourceid=chrome&ie=UTF-8</td>
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
