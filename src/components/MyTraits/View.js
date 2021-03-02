import React from 'react';
import EditTrait from './EditTrait/View'
import PreviewTrait from './PreviewTrait/View';
import AddInput from '../AddInput/View';

function MyTraits({ traits, isEditMode, toggleView, handleChange, handleAddInput }) {
  return (
    <>
      <div className="row mt-5 d-flex flex-column">
        <h2>My Traits
        {isEditMode ?
            <AddInput handleAddInput={handleAddInput} objName={'myTraits'} />
            : null
          }
        </h2>
      </div>
      <div className="row mt-2 mb-5">
        {
          isEditMode ?
            <EditTrait
              traits={traits}
              toggleView={toggleView}
              handleChange={handleChange} />
            :
            <PreviewTrait traits={traits} />
        }
      </div>
    </>
  )
}

export default MyTraits;