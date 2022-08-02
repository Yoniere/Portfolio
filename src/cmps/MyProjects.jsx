import React from "react";
import { ProjectPreview } from "./ProjectPreview";

export function MyProjects({projects}) {
  return (
    <section className="projects-app container">
      <h2 className="projects-header">My Projects</h2>
      <hr></hr>
    {console.log(projects)}
      <section className="projects-list flex wrap">
        {projects.map(project => 
          <ProjectPreview key={project.id} project={project}></ProjectPreview>
        )}
      </section>

    </section>
  );
}
