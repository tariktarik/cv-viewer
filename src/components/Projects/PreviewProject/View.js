import React from 'react';

function PreviewProject({ projects }) {
  return (
    <div className="row d-flex flex-column mt-5">
      {projects.map((project =>
        <>
          <div className="text-muted">{project.company}</div>
          <div>
            <h3 className="mb-0">{project.position}</h3>
          </div>
          <div className="row justify-content-end w-100 ml-0">
            <span className="mb-3">{project.period}</span>
          </div>
          <div>
            <p className="pr-4">
              {project.description}
            </p>
          </div>
        </>))}
    </div>
  )
}

export default PreviewProject;