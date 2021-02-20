import React from 'react';
import PreviewEducation from './PreviewEducation/View';
import EditEducation from './EditEducation/View';

function Educations({ educations, isEditMode, handleChange, toggleView }) {
  return (
    <div className="row mt-5 d-flex flex-column">
      <h2>Education</h2>
      <ul className="timeline mt-3 ml-2">
        {educations.map((education) =>
          isEditMode ?
            <EditEducation
              objName={'educations'}
              toggleView={toggleView}
              id={education._id}
              school={education.school}
              degree={education.degree}
              period={education.period}
              key={education._id}
              handleChange={handleChange}

            />
            :
            <PreviewEducation
              school={education.school}
              degree={education.degree}
              period={education.period}
              key={education._id}
            />
        )}
      </ul>
    </div>
  )
}

export default Educations;