import React from "react";
import "./App.css";
import NavBurger from "./components/NavBurger";
import About from "./components/About";
import ProjectList from "./components/ProjectList";
import ProjectDetails from "./components/ProjectDetails";
import projects from "./projects.json";
import { Switch, Route } from "react-router-dom";
import Media from "react-media";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="">
      <Media
        queries={{
          mobile: "(max-width: 420px)",
          desktop: "(min-width: 421px)",
        }}
      >
        {(matches) => (
          <div>
            {matches.mobile && <NavBurger />}
            {matches.desktop && <Navbar />}
          </div>
        )}
      </Media>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/projects"
          render={(routerProps) => (
            <ProjectList {...routerProps} projects={projects} />
          )}
        />
        <Route exact path="/projects/:id" component={ProjectDetails} />
        <Route exact path="/about" component={About} />
      </Switch>
    </div>
  );
}

export default App;
