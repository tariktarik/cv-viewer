import React from 'react';
import Education from './Education/View';

function Educations({ educations }) {
  return (
    <div className="row mt-5 d-flex flex-column">
      <h2>Education</h2>
      <ul className="timeline mt-3 ml-2">
        {educations.map((education) =>
          <Education
            school={education.school}
            degree={education.degree}
            duration={education.period} />
        )}
      </ul>
    </div>
  )
}

export default Educations;