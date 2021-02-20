import React, { useState, useEffect } from 'react';

function EditProject({ id, company, position, period, description, toggleView, handleProjectsChange }) {
    const [editProject, setProject] = useState({
        newid: id,
        newcompany: company,
        newposition: position,
        newperiod: period,
        newdescription: description
    });


    const getNewValue = (e) => {
        setProject(editProject => ({ ...editProject, [e.target.name]: e.target.value }))
    }

    useEffect(() => { handleProjectsChange(editProject) }, [editProject])
    return (
        <div className="row">

            <input
                className="form-control"
                type="text"
                name={'newcompany'}
                value={editProject.newcompany}
                placeholder={company}
                onChange={getNewValue}
            />

            <input
                className="form-control"
                type="text"
                name={'newposition'}
                value={editProject.newposition}
                placeholder={position}
                onChange={getNewValue}
            />

            <input
                className="form-control"
                type="text"
                name={'newperiod'}
                value={editProject.newperiod}
                placeholder={period}
                onChange={getNewValue}
            />

            <input
                className="form-control"
                type="text"
                name={'newdescription'}
                value={editProject.newdescription}
                placeholder={description}
                onChange={getNewValue}
            />




            <button type="submit" className="btn btn-primary form-control" onClick={toggleView}>Save</button>

        </div>

    )
}

export default EditProject;