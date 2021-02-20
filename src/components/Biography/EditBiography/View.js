import React from 'react';

function EditBiography({ toggleView, biography, handleChange }) {

    return (
        <div className="mt-5">
            <textarea
                rows={8}
                className="form-control"
                type="text"
                name="biography"
                value={biography}
                placeholder={biography}
                onChange={handleChange}
            />
            <button type="submit" className="btn btn-primary form-control" onClick={toggleView}>Save</button>
        </div>
    )
}

export default EditBiography;