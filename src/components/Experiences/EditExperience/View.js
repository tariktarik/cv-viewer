import React from 'react';

function EditExperience({ id, duration, position, toggleView, handleChange }) {

    return (
        <div className="row">

            <input
                customid={id}
                customobjname={'experiences'}
                className="form-control"
                type="text"
                name={'duration'}
                value={duration}
                placeholder={duration}
                onChange={handleChange}
            />

            <input
                customid={id}
                customobjname={'experiences'}
                className="form-control"
                type="text"
                name={'position'}
                value={position}
                placeholder={position}
                onChange={handleChange}
            />


            <button type="submit" className="btn btn-primary form-control" onClick={toggleView}>Save</button>

        </div>

    )
}

export default EditExperience;