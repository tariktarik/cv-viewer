import React from 'react';
import EditBiography from './EditBiography/View';
import PreviewBiography from './PreviewBiography/View';

function Biography({ error, biography, isEditMode, editMode, previewMode, handleChange }) {
  return (
    <div className="row mt-md-5 mt-sm-5">
      <h2>Biography</h2>

      {isEditMode ?
        <EditBiography
          error={error}
          biography={biography}
          previewMode={previewMode}
          handleChange={handleChange}
        />
        :
        <PreviewBiography biography={biography} editMode={editMode} />
      }

    </div>
  )
}

export default Biography;