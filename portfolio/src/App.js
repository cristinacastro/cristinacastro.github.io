import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import About from './components/About';
import ProjectList from "./components/ProjectList";
import ProjectDetails from "./components/ProjectDetails";
import projects from "./projects.json";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <div className="">
      <Navbar />

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
