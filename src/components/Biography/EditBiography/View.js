import React from 'react';

function EditBiography({ toggleView, biography, handleChange }) {

    return (
        <>
            <textarea
                rows={8}
                className="form-control mt-3"
                type="text"
                name="biography"
                value={biography}
                placeholder={biography}
                onChange={handleChange}
            />
            <button type="submit" className="btn btn-primary form-control" onClick={toggleView}>Save</button>
 </>
    )
}

export default EditBiography;