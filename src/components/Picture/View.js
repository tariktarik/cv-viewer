import React from 'react';
import EditPicture from './EditPicture/View';
import PreviewPicture from './PreviewPicture/View';

function Picture({ picture, toggleView, isEditMode, handleChange }) {

  return (
    <div className="row mt-3 position-relative">
      <img
        className="img-fluid w-100 rounded"
        src={picture}
        alt=""
      />

      {isEditMode ?
        <EditPicture
          toggleView={toggleView}
          picture={picture}
          handleChange={handleChange}
        />
        :
        <PreviewPicture toggleView={toggleView} />

      }
    </div>
  )
}

export default Picture;