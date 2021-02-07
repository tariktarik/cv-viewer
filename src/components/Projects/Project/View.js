import React from 'react';

function Project({company, position, duration, description}) {
    return(
        <div className="row d-flex flex-column mt-5">
        <div className="text-muted">{company}</div>
        <div>
          <h3 className="mb-0">{position}</h3>
        </div>
        <div className="row justify-content-end w-100 ml-0">
          <span className="mb-3">{duration}</span>
        </div>
        <div>
          <p className="pr-4">
            {description}
          </p>
        </div>
      </div>
    )
}

export default Project;