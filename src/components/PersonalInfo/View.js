import React from 'react';
import EditPersonalInfo from './EditPersonalInfo/View';
import PreviewPersonalInfo from './PreviewPersonalInfo/View'

function PersonalInfo({ personalInfo, toggleView, isEditMode, handleChange }) {

  return (
    <div className="row mt-5 list-group">
      <h2>Personal info</h2>

      {isEditMode ?
        <EditPersonalInfo
          toggleView={toggleView}
          personalInfo={personalInfo}
          handleChange={handleChange}
        />
        : <PreviewPersonalInfo personalInfo={personalInfo} />}
    </div>
  )
}

export default PersonalInfo;