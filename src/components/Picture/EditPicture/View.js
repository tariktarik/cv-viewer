import React from 'react';
import InputField from '../../InputField/View';

function EditPicture({ picture, toggleView, handleChange }) {

  return (
    <>
      {
        <InputField
          name={'picture'}
          value={picture}
          handleChange={handleChange}
        />
      }
      <button type="submit" className="btn btn-primary form-control" onClick={toggleView}>Save</button>
    </>

  )
}

export default EditPicture;