import React from 'react';
import InputField from '../../InputField/View';

function EditPicture({ error, picture, previewMode, handleChange }) {

  return (
    <>
      {
        <InputField
          name={'picture'}
          value={picture}
          handleChange={handleChange}
          error={error}
        />
      }
      <button type="submit" className="btn btn-primary form-control" onClick={previewMode}>Save</button>
    </>

  )
}

export default EditPicture;