import React from "react";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <div className="about-me">
        <div className="container">
          <div className="about-me-title">
            <img src="/img/pic.PNG" alt="pic"/>
          </div>
          <div className="about-me-content">
            My full name is Viet Khanh Phan. In 2015, I came to Finland as a
            freshman at Metropolia UAS. I'm a full stack web developer who have
            a desire to create elegant solutions in the least amount of time.
            Passionate and serious about my goals, not only do I want to improve
            what I currently have, but I also am eager to learn new exciting
            things. Also I'm a game lover, feel free to reach out to me if you
            want to discuss about games too.
          </div>
        </div>
      </div>
      <div className="container ability-row">
        <h3 className="ability-row-header rbft">What do I do?</h3>
        <div className="column">
          <h4 className="ability-title rbft">Coding</h4>
          <i className="fa fa-code fa-3x" />
          <p className="ability-sum">
            "I make website, web application with HTML, CSS and Javascript. I
            can build everything from scratch, or use framework like Bootstrap,
            React with Redux and so on."
          </p>
        </div>
        <div className="column">
          <h4 className="ability-title rbft">Delivering</h4>
          <i className="fa fa-envelope fa-3x" />
          <p className="ability-sum">
            "A perfect delivery of a product with my utmost contribution is what
            I value the best. I'll always try to do my best to match the
            customers' expectation, and also to satisfy my expectation of
            myself."
          </p>
        </div>
        <div className="column">
          <h4 className="ability-title rbft">Improving</h4>
          <i className="fa fa-thumbs-o-up fa-3x" />
          <p className="ability-sum">
            "Self-improvement is a endless road. Everyday I try to learn
            something new, while improving everything I've got and bringing them
            closer and closer to perfection."
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
