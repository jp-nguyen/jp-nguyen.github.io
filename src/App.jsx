import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Experiences from "./pages/Experiences";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Error from "./pages/Error";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route strict exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/experiences" component={Experiences} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/resume" component={Resume} />
          <Route>
            <Error />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
