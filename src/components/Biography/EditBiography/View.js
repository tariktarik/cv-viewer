import React from 'react';
import TextField from '../../TextField/View';

function EditBiography({ error, previewMode, biography, handleChange }) {

    return (
        <>
           <TextField
             name={'biography'}
             value={biography}
             handleChange={handleChange}
             error={error}
            />
            {/* <textarea
                rows={8}
                className="form-control mt-3"
                type="text"
                name="biography"
                value={biography}
                placeholder={biography}
                onChange={handleChange}
            /> */}
            <button type="submit" className="btn btn-primary form-control" onClick={previewMode}>Save</button>
        </>
    )
}

export default EditBiography;