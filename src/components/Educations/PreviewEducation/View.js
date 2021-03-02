import React from 'react';

function PreviewEducation({ educations }) {

  return (
    educations.map((education) =>
      <li className="event">
        <p>
          <span className="d-block text-muted">
            College/School</span>
          <span className="d-block vertical-line"></span>
          <span className="d-block">
            {education.school}
          </span>
        </p>

        <p>
          <span className="d-block text-muted">Degree</span>
          <span className="d-block">{education.degree}</span>
        </p>
        <p>
          <span className="d-block text-muted">From - To</span>
          <span className="d-block">{education.period}</span>
        </p>
      </li>)
  )
}

export default PreviewEducation;