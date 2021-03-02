import React from 'react';
import PreviewEducation from './PreviewEducation/View';
import EditEducation from './EditEducation/View';
import AddInput from '../AddInput/View';

function Educations({ educations, isEditMode, handleChange, toggleView, handleAddInput }) {
  return (
    <div className="row mt-5 d-flex flex-column">
      <h2>
        Education
        {isEditMode ?
          <AddInput handleAddInput={handleAddInput} objName={'education'} />
          : null}
      </h2>

      <ul className="timeline mt-3 ml-2">
        {
          isEditMode ?
            <EditEducation
              objName={'education'}
              toggleView={toggleView}
              educations={educations}
              handleChange={handleChange}

            />
            :
            <PreviewEducation
              educations={educations}
            />
        }
      </ul>
    </div>
  )
}

export default Educations;