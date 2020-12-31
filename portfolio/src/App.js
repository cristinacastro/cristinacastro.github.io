import React from "react";
//import "./App.css";
import Navbar from "./components/Navbar";
//import About from './components/about/About';
//import Contact from './components/contact/Contact';
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
      </Switch>
      {/*  <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} /> */}
    </div>
  );
}

export default App;
