import React from 'react';
import PreviewEducation from './PreviewEducation/View';
import EditEducation from './EditEducation/View';
import AddInput from '../AddInput/View';

function Educations({ error, educations, isEditMode, handleChange, previewMode, handleAddInput }) {
  return (
    <div className="row mt-5 d-flex flex-column">
      <h2>
        Education
        {isEditMode ?
          <AddInput handleAddInput={handleAddInput} objName={'education'} />
          : null}
      </h2>

      <ul className="timeline mt-3 ml-2">
        {educations.map((education =>
          isEditMode ?
            <EditEducation
              error={error}
              previewMode={previewMode}
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
        ))}
      </ul>
    </div>
  )
}

export default Educations;