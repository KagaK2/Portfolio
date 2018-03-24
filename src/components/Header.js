import React from "react";
import "materialize-css/dist/css/materialize.min.css";
function Header() {
  return (
    <nav>
      <div className="nav-wrapper rbft">
        <a href="#home" className="brand-logo rbft">
          KP
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#works">Works</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
