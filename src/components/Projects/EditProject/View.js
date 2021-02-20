import React, { useState, useEffect } from 'react';

function EditProject({ id, company, position, period, description, toggleView, handleChange }) {

    return (
        <div className="row">

            <input
                customid={id}
                customobjname={'experiencesProjects'}
                className="form-control"
                type="text"
                name={'company'}
                value={company}
                placeholder={company}
                onChange={handleChange}
            />

            <input
                customid={id}
                customobjname={'experiencesProjects'}
                className="form-control"
                type="text"
                name={'position'}
                value={position}
                placeholder={position}
                onChange={handleChange}
            />

            <input
                customid={id}
                customobjname={'experiencesProjects'}
                className="form-control"
                type="text"
                name={'period'}
                value={period}
                placeholder={period}
                onChange={handleChange}
            />

            <input
                customid={id}
                customobjname={'experiencesProjects'}
                className="form-control"
                type="text"
                name={'description'}
                value={description}
                placeholder={description}
                onChange={handleChange}
            />




            <button type="submit" className="btn btn-primary form-control" onClick={toggleView}>Save</button>

        </div>

    )
}

export default EditProject;