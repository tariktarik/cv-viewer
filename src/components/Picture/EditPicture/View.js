import React from 'react';

function EditPicture({ picture, toggleView, handleChange }) {

  return (
    <>
      <input
        className="form-control"
        type="text"
        name="picture"
        value={picture}
        placeholder={picture}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn-primary form-control" onClick={toggleView}>Save</button>
    </>

  )
}

export default EditPicture;