import React, { Component } from "react";
import Footer from "../../common/Footer/Footer";
import GetInTouch from "../../modules/HomePageModules/GetInTouchSection/GetInTouch";
import HomeAboutSection from "../../modules/HomePageModules/HomeAboutSection/HomeAboutSection";
import HomeHeroSection from "../../modules/HomePageModules/HomeHeroSection/HomeHeroSection";
import LatestNews from "../../modules/HomePageModules/LatestNews/LatestNews";
// import HomePageConferenceDetail from "../../modules/HomePageModules/HomePageConferenceDetail/HomePageConferenceDetail";
import KeyNoteSpeakers from "../../modules/HomePageModules/KeyNoteSpeakers/KeyNoteSpeakers";
import TimeLineSection from "../../modules/HomePageModules/TimeLineSection/TimeLineSection";


class HomePage extends Component {
  render() {
    return (
      <div style={{ height: "100vh" }}>
        <HomeHeroSection />
        <section id="about">
          <HomeAboutSection />
        </section>
        <section id="news">
          <LatestNews />
        </section>
        <section id="speakers">
          <KeyNoteSpeakers />
        </section>
        <TimeLineSection />
        <GetInTouch />
        <Footer />
      </div>
    );
  }
}

export default HomePage;
