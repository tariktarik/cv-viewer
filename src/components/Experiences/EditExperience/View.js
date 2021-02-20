import React, { useState, useEffect } from 'react';

function EditExperience({ id, duration, position, toggleView, handleExperiencesChange }) {
    const [editExperiences, setExperiences] = useState({
        newid: id,
        newduration: duration,
        newposition: position,
    });


    const getNewValue = (e) => {
        setExperiences(editExperiences => ({ ...editExperiences, [e.target.name]: e.target.value }))
    }

    useEffect(() => { handleExperiencesChange(editExperiences) }, [editExperiences])


    return (
        <div className="row">

            <input
                className="form-control"
                type="text"
                name={`newduration`}
                value={editExperiences.newduration}
                placeholder={duration}
                onChange={getNewValue}
            />

            <input
                className="form-control"
                type="text"
                name={`newposition`}
                value={editExperiences.newposition}
                placeholder={position}
                onChange={getNewValue}
            />


            <button type="submit" className="btn btn-primary form-control" onClick={toggleView}>Save</button>

        </div>

    )
}

export default EditExperience;