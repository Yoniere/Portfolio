import React from "react";
import Tech from "./Tech";

export function ProjectPreview({ project }) {
  return (
    <section className="project-preview">
      <h3 className="project-header">{project.name}</h3>
      <p>{project.details}</p>
      {project.tech.map(tech=>
        <Tech tech={ tech }></Tech>)}
        <a href={project.gitHubLink}>
          <img className="project" src={project.imgLink} alt="" />
        </a>
    </section>
  );
}
