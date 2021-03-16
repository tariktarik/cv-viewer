import React, { useState } from 'react';
import Button from './Button/View';

function ActionButtons({ isEditMode, editMode, previewMode }) {
  /* const [editButtons,setEditButtons] = useState(isEditMode); */
  
  return (
    <div className="row my-5">
      <div className="col-md-12 justify-content-center">
        <div className="row">
          {!isEditMode ?
            <button className="btn btn-outline-primary ac-w-18 btn-mobile" onClick={editMode}>
              Exit preview
          </button>
            : null
          }
        </div>
        <div className="row mt-2">
          {!isEditMode ?
            <>
              <Button text={'Print CV'} />
              <Button text={'Download PDF'} />
              <Button text={'Send Link'} />
            </>
            :
            <button className="btn btn-primary ml-auto ac-w-18 btn-mobile" onClick={previewMode}>
              Save version
         </button>
          }



        </div>
      </div>
    </div>
  )
}

export default ActionButtons;