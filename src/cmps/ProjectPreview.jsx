import React from 'react'

export function ProjectPreview({project}) {
  return (
    <section className='project-preview'>
            <a href={project.gitHubLink}>
        <img
          src={project.imgLink}
          alt=""
        />
      </a>
    </section>
  )
}
