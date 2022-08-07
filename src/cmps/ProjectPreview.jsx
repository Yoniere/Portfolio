import React from "react";

export function ProjectPreview({ project }) {
  return (
    <section className="project-preview">
      <a href={project.gitHubLink}>
        <img className="project"
        src={project.imgLink} alt="" />
      </a>
    </section>
  );
}
