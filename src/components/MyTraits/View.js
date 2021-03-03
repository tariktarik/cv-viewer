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