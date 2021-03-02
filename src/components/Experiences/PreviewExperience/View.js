import React from 'react';

function PreviewExperience({ experiences }) {

  return (
    <div className="row mt-2 ac-line flex-column" >

      { experiences.map((experience =>
        <>
          <p className="d-block">{experience.duration}</p>
          <p>
            <span className="d-block text-muted">Position</span>
            <span className="d-block font-weight-bold">{experience.position}</span>
          </p>
        </>
      ))
      }
    </div>
  )
}

export default PreviewExperience;