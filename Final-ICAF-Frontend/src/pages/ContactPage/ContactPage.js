import React, { Component } from "react";
import Footer from "../../common/Footer/Footer";
import Navbar from "../../common/Navbar/Navbar";
import GetInTouch from "../../modules/ContactPageModule/ContactSection/Contact";
 
class ContactPage extends Component {
  render() {
    return (
      <div style={{ height: "100vh" }}>
          <Navbar />
        <GetInTouch />
        <Footer />
      </div>
    );
  }
}
 
export default ContactPage;