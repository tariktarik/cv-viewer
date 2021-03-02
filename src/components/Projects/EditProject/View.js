import React from 'react';
import InputField from '../../InputField/View';

function EditProject({ projects, toggleView, handleChange }) {

    return (
        <div className="row">

            {
                projects.map((project) =>
                    Object.keys(project).map((key) =>
                        (key !== '_id') ?
                            <InputField
                                objname={'experiencesProjects'}
                                id={project['_id']}
                                key={key}
                                name={key}
                                value={project[key]}
                                handleChange={handleChange}
                            />
                            : null
                    )
                )
            }
            <button type="submit" className="btn btn-primary form-control" onClick={toggleView}>Save</button>

        </div>

    )
}

export default EditProject;