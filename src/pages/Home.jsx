import React from "react";
import { Link } from "react-router-dom";

import Socials from "../components/Socials";

import profile from "../assets/imgs/me.jpg";
import "../css/home.css";

const Button = props => {
  const { classes, to, text } = props;
  return (
    <div className={`button ${classes}`}>
      <Link style={{ textDecoration: "none" }} to={to}>
        {text}
      </Link>
    </div>
  );
};

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <p className="home-title">J.P. Nguyen</p>
      </header>
      <div className="home-content">
        <div className="profile">
          <img className="profile-pic" src={profile} alt="profile" />
        </div>
        <div className="button-group">
          <Button classes="about-color" to="/about" text="About Me" />
          <Button
            classes="experiences-color"
            to="/experiences"
            text="Experiences"
          />
          <Button classes="projects-color" to="/projects" text="Projects" />
        </div>
      </div>
      <footer className="home-footer">
        <Socials />
      </footer>
    </div>
  );
};

export default Home;
