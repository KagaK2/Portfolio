import React from "react";

const Skills = () => {
  return (
    <div className="skills">
      <h3 className="skills-header rbft">What do I know?</h3>
      <div className="skills-content" abbr="">
        <Skill name="HTML" ratio="80%" skillLevel="Great">
          <img
            src="https://www.w3.org/html/logo/badge/html5-badge-h-solo.png"
            width="64"
            height="64"
            alt="HTML5 Powered"
            title="HTML5 Powered"
          />
        </Skill>
        <Skill name="CSS" ratio="80%" skillLevel="Great">
          <img src="css.svg" width="64" height="64" alt="CSS" />
        </Skill>

        <Skill name="Javascript" ratio="75%" skillLevel="Great">
          <img
            src="https://camo.githubusercontent.com/055e8995558e293e52e92d7c93b9ec49a9ea6c78/68747470733a2f2f63646e2e7261776769742e636f6d2f7a656b652f6a6176617363726970742d79656c6c6f772f6d61737465722f6c6f676f2e737667"
            width="64"
            height="64"
            alt="JS"
          />
        </Skill>
        <Skill name="Bootstrap" ratio="75%" skillLevel="Great">
          <img src="bootstrap.svg" width="64" height="64" alt="Bootstrap" />
        </Skill>
        <Skill name="JQuery" ratio="75%" skillLevel="Great">
        <img src="jquery.svg" width="64" height="64" alt="Bootstrap" />
        </Skill>
        <Skill name="React" ratio="65%" skillLevel="Good">
          <img src="react.ico" width="64" height="64" alt="React" />
        </Skill>
        <Skill name="Redux" ratio="65%" skillLevel="Good">
          <img src="../redux.svg" width="64" height="64" alt="Redux" />
        </Skill>
        <Skill name="Git" ratio="70%" skillLevel="Great">
          <img src="git.png" width="64" height="64" alt="Git" />
        </Skill>
        <Skill name="Node" ratio="50%" skillLevel="Learning">
          <img src="node.svg" width="64" height="64" alt="Mongo" />
        </Skill>
        <Skill name="Express" ratio="50%" skillLevel="Learning">
          <img src="express.svg" width="64" height="64" alt="Express" />
        </Skill>
      </div>
    </div>
  );
};

const Skill = props => {
  return (
    <div className="skill">
      <div className="skill-pic">{props.children}</div>
      <div className="skill-name rbft">{props.name}</div>
      <ProgressBar ratio={props.ratio} skillLevel={props.skillLevel}/>
    </div>
  );
};

const ProgressBar = props => {
  console.log(props.ratio);
  return (
    <div className="progressBar">
      <div className="skillProgress" style={{width: props.ratio}}>
        {props.skillLevel}
      </div>
    </div>
  );
}

export default Skills;
