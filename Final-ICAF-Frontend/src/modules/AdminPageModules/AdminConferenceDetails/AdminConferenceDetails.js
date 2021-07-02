import React, { Component } from "react";
import AdminConferenceDetailsCard from "./AdminConferenceDetailsCard";
import AdminTemplatesTable from "./AdminTemplatesTable";

export class AdminConferenceDetails extends Component {
  render() {
    return (
      <div className="container">
        <h3 className="text-center text-white mb-5 mt-5 display-3">
          ADMIN CONFERENCE
        </h3>
        <div className="row">
          <div>
            <AdminConferenceDetailsCard />
          </div>
<br></br>  
<divider></divider>    
    <div>
            <AdminTemplatesTable />
          </div>
        </div>
      </div>
    );
  }
}

export default AdminConferenceDetails;
