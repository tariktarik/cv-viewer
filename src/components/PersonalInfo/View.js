import React from 'react';
import EditPersonalInfo from './EditPersonalInfo/View';
import PreviewPersonalInfo from './PreviewPersonalInfo/View'

function PersonalInfo({ dob, pob, toggleView, isEditMode, handleChange }) {
   
  return (
    <div className="row mt-5 list-group">
      <h2>Personal info</h2>

      {isEditMode ?
        <EditPersonalInfo
          toggleView={toggleView}
          dob={dob}
          pob={pob}
          handleChange={handleChange}
        />
        : <PreviewPersonalInfo
          dob={dob}
          pob={pob}
        />
      }
    </div>
  )
}

export default PersonalInfo;