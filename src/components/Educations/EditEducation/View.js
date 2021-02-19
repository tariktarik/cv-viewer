import React, { useState, useEffect } from 'react';

function EditEducations({ toggleView, id, school, degree, duration, handleEducationsChange }) {
    const [editEducations, setEducations] = useState({
        newid: id,
        newschool: school,
        newdegree: degree,
        newduration: duration,

    });


    const getNewValue = (e) => {
        setEducations(editEducations => ({ ...editEducations, [e.target.name]: e.target.value}))
    }

   useEffect(() => { handleEducationsChange(editEducations) }, [editEducations])
    return (
        <div className="row mt-5">
            <input
                
                className="form-control"
                type="text"
                name={'newschool'}
                value={editEducations.newschool}
                placeholder={school}
                onChange={getNewValue}
            />
            <input
                
                className="form-control"
                type="text"
                name={'newdegree'}
                value={editEducations.newdegree}
                placeholder={degree}
                onChange={getNewValue}
            />
            <input
                
                className="form-control"
                type="text"
                name={'newduration'}
                value={editEducations.newduration}
                placeholder={duration}
                onChange={getNewValue}
            />
            <button type="submit" className="btn btn-primary form-control" onClick={toggleView}>Save</button>
        </div>
    )
}

export default EditEducations;