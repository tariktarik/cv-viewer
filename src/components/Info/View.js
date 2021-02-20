import React from 'react';
import PreviewInfo from './PreviewInfo/View';
import EditInfo from './EditInfo/View';

function Info({ info, isEditMode, toggleView, handleChange }) {

  return (
    <div className="row mt-5">
      <div className="col-md-12 justify-content-center">

        {isEditMode ?
          <EditInfo
            info={info}
            handleChange={handleChange}
            isEditMode={isEditMode}
            toggleView={toggleView}
          />
          :
          <PreviewInfo info={info} />}


      </div>
    </div>
  )
}

export default Info;