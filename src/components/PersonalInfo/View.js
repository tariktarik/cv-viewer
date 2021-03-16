import React from 'react';
import EditPersonalInfo from './EditPersonalInfo/View';
import PreviewPersonalInfo from './PreviewPersonalInfo/View'

function PersonalInfo({ error, dob, pob, editMode, previewMode, isEditMode, handleChange }) {

  return (
    <div className="row mt-5 list-group">
      <h2>Personal info</h2>

      {isEditMode ?
        <EditPersonalInfo
          error={error}
          previewMode={previewMode}
          dob={dob}
          pob={pob}
          handleChange={handleChange}
        />
        : <PreviewPersonalInfo
          editMode={editMode}
          dob={dob}
          pob={pob}
        />
      }
    </div>
  )
}

export default PersonalInfo;