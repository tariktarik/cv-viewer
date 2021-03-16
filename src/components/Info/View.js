import React from 'react';
import PreviewInfo from './PreviewInfo/View';
import EditInfo from './EditInfo/View';

function Info({ error, firstName, lastName, position, email, isEditMode, previewMode, handleChange }) {

  return (
    <div className="row mt-5">
      <div className="col-md-12 justify-content-center">

        {
          isEditMode ?
            <EditInfo
              error={error}
              firstName={firstName}
              lastName={lastName}
              position={position}
              email={email}
              handleChange={handleChange}
              previewMode={previewMode}
            />
            :
            <PreviewInfo firstName={firstName}
            lastName={lastName}
            position={position}
            email={email} />}


      </div>
    </div>
  )
}

export default Info;