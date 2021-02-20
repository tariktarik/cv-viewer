import React from 'react';

function EditTrait({ id, trait, handleChange, toggleView }) {

    return (
        <>
            <input
                customid={id}
                customobjname={'myTraits'}
                className="form-control"
                type="text"
                name={'trait'}
                value={trait}
                placeholder={trait}
                onChange={handleChange}
            />


            <button type="submit" className="btn btn-primary form-control" onClick={toggleView}>Save</button>

        </>

    )
}

export default EditTrait;