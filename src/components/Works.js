import React from "react";

const Works = () => {
  return (
    <div className="container works">
      <div className="works-header">
        <h3 className="rbft">Side Projects</h3>
      </div>
      <div className="works-content" >
      <WorkCard
        pic="/img/pj1.png"
        title="Portfolio Website"
        details="My portfolio website, build mostly from scratch with React."
        link="https://facebook.com/C9.Khanh"
      />
      <WorkCard
        pic="/img/pj4.PNG"
        title="Youtube Search"
        details="A simple Youtube search engine made from React using Youtube API."
        link="https://facebook.com/C9.Khanh"
      />
      <WorkCard
        pic="/img/pj2.PNG"
        title="Weather Search"
        details="5 days weather broadcast for cities in the USA."
        link="https://facebook.com/C9.Khanh"
      />
      <WorkCard
        pic="/img/pj3.PNG"
        title="Blog App"
        details="A simple Blog Application using API to fetch and save posts."
        link="https://facebook.com/C9.Khanh"
      />
      </div>
    </div>
  );
};
const WorkCard = props => {
  return (
    <div className="work-card">
      <div className="work-card-pic">
        <img src={props.pic} alt="pic" />
        <span className="work-card-title rbft">{props.title}</span>
      </div>
      <div className="work-card-content">
      <span className="work-card-details">{props.details}</span>
      <div className="work-card-link rbft">
        <a href={props.link}><img className="Gh-pic" src="/img/GitHub.png" alt="Github"/></a>
      </div>
      </div>
    </div>
  );
};

export default Works;
