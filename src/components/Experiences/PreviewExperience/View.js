import React from 'react';

function PreviewExperience({ duration, position }) {

  return (
    <div className="row mt-2 ac-line flex-column" >


      <>
        <p className="d-block">{duration}</p>
        <p>
          <span className="d-block text-muted">Position</span>
          <span className="d-block font-weight-bold">{position}</span>
        </p>
      </>

    </div>
  )
}

export default PreviewExperience;