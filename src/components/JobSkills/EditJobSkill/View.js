import React from 'react';

function EditJobSkill({ id, skill, grade, toggleView, handleChange }) {

    return (
        <div className="row">

            <input
                customid={id}
                customobjname={'jobSkills'}
                className="form-control"
                type="text"
                name={'skill'}
                value={skill}
                placeholder={skill}
                onChange={handleChange}
            />

            <input
                customid={id}
                customobjname={'jobSkills'}
                className="form-control"
                type="text"
                name={'grade'}
                value={grade}
                placeholder={grade}
                onChange={handleChange}
            />


            <button type="submit" className="btn btn-primary form-control" onClick={toggleView}>Save</button>

        </div>
    )
}

export default EditJobSkill;