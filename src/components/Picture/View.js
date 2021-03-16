import React from 'react';
import EditPicture from './EditPicture/View';
import PreviewPicture from './PreviewPicture/View';

function Picture({ error, picture, previewMode, editMode, isEditMode, handleChange }) {

  return (
    <div className="row mt-3 position-relative">
      <img
        className="img-fluid w-100 rounded"
        src={picture}
        alt=""
      />

      {isEditMode ?
        <EditPicture
          error={error}
          previewMode={previewMode}
          picture={picture}
          handleChange={handleChange}
        />
        :
        <PreviewPicture editMode={editMode} />

      }
    </div>
  )
}

export default Picture;