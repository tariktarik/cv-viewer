import React, { useState, useEffect } from 'react';

function EditBiography({ toggleView, biography, handleBiographyChange }) {
    const [editBiography, setBiography] = useState({
        newbiography: biography,
    });


    const getNewValue = (e) => {
        
       setBiography(editBiography => ({ ...editBiography, [e.target.name]: e.target.value }))

    }

    useEffect(() => { handleBiographyChange(editBiography) }, [editBiography])
    return (
        <div className="mt-5">
            <textarea
                rows={8}
                className="form-control"
                type="text"
                name="newbiography"
                value={editBiography.newbiography}
                placeholder={biography}
                onChange={getNewValue}
            />
            <button type="submit" className="btn btn-primary form-control" onClick={toggleView}>Save</button>
        </div>
    )
}

export default EditBiography;