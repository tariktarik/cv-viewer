import React from 'react';

function EditEducations({ toggleView, id, school, degree, period, handleChange }) {

    return (
        <div className="row mt-5">
            <input
                customid={id}
                customobjname={'education'}
                className="form-control"
                type="text"
                name={'school'}
                value={school}
                placeholder={school}
                onChange={handleChange}
            />
            <input
                customid={id}
                customobjname={'education'}
                className="form-control"
                type="text"
                name={'degree'}
                value={degree}
                placeholder={degree}
                onChange={handleChange}
            />
            <input
                customid={id}
                customobjname={'education'}
                className="form-control"
                type="text"
                name={'period'}
                value={period}
                placeholder={period}
                onChange={handleChange}
            />
            <button type="submit" className="btn btn-primary form-control" onClick={toggleView}>Save</button>
        </div>
    )
}

export default EditEducations;