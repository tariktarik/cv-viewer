import React from 'react';
import PreviewInfo from './PreviewInfo/View';
import EditInfo from './EditInfo/View';

function Info({ info, isEditMode, handleInfoChange }) {
 
  return (
    <div className="row mt-5">
      <div className="col-md-12 justify-content-center">
       
          {isEditMode ? <EditInfo info={info} handleInfoChange={handleInfoChange} /> : <PreviewInfo info={info} />}
        
        
      </div>
    </div>
  )
}

export default Info;