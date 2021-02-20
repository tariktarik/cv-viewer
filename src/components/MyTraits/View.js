import React from 'react';
import EditTrait from './EditTrait/View'
import PreviewTrait from './PreviewTrait/View';

function MyTraits({ traits, isEditMode, toggleView, handleChange }) {
  return (
    <>
      <div className="row mt-5">
        <h2>My Traits</h2>
      </div>
      <div className="row mt-2 mb-5">
        {traits.map((trait) => (
          isEditMode ?
            <EditTrait
              trait={trait.trait}
              id={trait._id}
              key={trait._id}
              toggleView={toggleView}
              handleChange={handleChange} />
            :
            <PreviewTrait trait={trait.trait} key={trait._id} />
        ))}
      </div>
    </>
  )
}

export default MyTraits;