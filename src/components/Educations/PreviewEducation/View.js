import React from 'react';

function PreviewEducation({ school, degree, period }) {
  
  return (
    <li className="event">
      <p>
        <span className="d-block text-muted">
          College/School</span>
        <span className="d-block vertical-line"></span>
        <span className="d-block">
          {school}
        </span>
      </p>

      <p>
        <span className="d-block text-muted">Degree</span>
        <span className="d-block">{degree}</span>
      </p>
      <p>
        <span className="d-block text-muted">From - To</span>
        <span className="d-block">{period}</span>
      </p>
    </li>
  )
}

export default PreviewEducation;