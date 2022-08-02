import { Component } from "react";
import { About } from "../cmps/About";
import { Contact } from "../cmps/Contact";
import { Home } from "../cmps/Home";
import { MyProjects } from "../cmps/MyProjects";
import { projectService } from "../servics/projectsService";

export class PortfolioApp extends Component {
  state = {
    projects: null,
  };

  componentDidMount() {
    const projects = projectService.loadProjects();
    this.setState({ projects });
    console.log(projects);
  }

  render() {
    const { projects } = this.state;
    if (!projects) return <div className="container">Loading...</div>;
    return (
      <section className="portfolio-app">
        <Home></Home>
        <About></About>
        <MyProjects projects={ projects }></MyProjects>
        <Contact></Contact>
      </section>
    );
  }
}
