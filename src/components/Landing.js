import React, { Component } from "react";
import { Parallax } from "react-parallax";
import About from "./About";
import Skills from "./Skills";
import Works from "./Works";
import Contact from "./Contact";
import Profile from "./Profile";

class Landing extends Component {
  render() {
    return (
      <div id="home">
        <Parallax
          blur={10}
          bgImage={require("../img/landing.png")}
          bgImageAlt="Landing"
          strength={600}
        >
          <div style={{ height: "550px" }}>
            <Profile />
          </div>
        </Parallax>
        <div id="about">
          <About />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="works">
          <Works />
        </div>
        <Contact />
      </div>
    );
  }
}

export default Landing;
