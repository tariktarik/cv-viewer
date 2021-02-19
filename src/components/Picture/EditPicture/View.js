import React, { useState, useEffect} from 'react';

function EditPicture({picture, toggleView, handlePictureChange}){

    const [editPicture, setPicture] = useState({
        newpicture: picture,
      });
    
    
      const getNewValue = (e) => {
    
        setPicture(editPicture => ({ ...editPicture, [e.target.name]: e.target.value }))
    
    
      }
    
      useEffect(() => { handlePictureChange(editPicture) }, [editPicture])
    return (
        <>
        <input
          className="form-control"
          type="text"
          name="newpicture"
          value={editPicture.newpicture}
          placeholder={picture}
          onChange={getNewValue}
        />
        <button type="submit" className="btn btn-primary form-control" onClick={toggleView}>Save</button>
      </>

    )
}

export default EditPicture;