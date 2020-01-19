import React from "react";
import {Link} from "react-router-dom";

import Socials from "../components/Socials";

import profile from "../assets/imgs/me.jpg";
import "../css/home.css";

const Home = () => {
  return (
    <div>
      <header>
        <h1>J.P. Nguyen</h1>
      </header>
      <div className="profile">
        <img className="profile-pic" src={profile} alt="profile" />
      </div>
      <div className="button-group">
          <Link to="/about">About Me</Link>
          <Link to="/experiences">Experiences</Link>
          <Link to="/projects">Projects</Link>
      </div>
      <footer className="home-footer">
        <Socials />
      </footer>
    </div>
  );
};

export default Home;
