import React from 'react';
import EditPicture from './EditPicture/View';
import PreviewPicture from './PreviewPicture/View';

function Picture({ picture, toggleView, isEditMode, handlePictureChange }) {

  return (
    <div className="row mt-3 position-relative">
      <img
        className="img-fluid w-100 rounded"
        src={picture}
        alt=""
      />

      {!isEditMode ?
      <PreviewPicture toggleView={toggleView} />
        : 
      <EditPicture toggleView={toggleView} picture={picture} handlePictureChange={handlePictureChange} />
      }
    </div>
  )
}

export default Picture;