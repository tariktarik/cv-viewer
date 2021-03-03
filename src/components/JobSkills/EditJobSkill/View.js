import React from 'react';
import InputField from '../../InputField/View';

function EditJobSkill({ id, skill, grade, toggleView, handleChange }) {

    return (
        <div className="row">

            <InputField
                id={id}
                objname={'jobSkills'}
                className="form-control"
                type="text"
                name={'skill'}
                value={skill}
                placeholder={skill}
                handleChange={handleChange}
            />

            <InputField
                id={id}
                objname={'jobSkills'}
                className="form-control"
                type={'number'}
                name={'grade'}
                value={grade}
                placeholder={grade}
                handleChange={handleChange}
            />


            <button type="submit" className="btn btn-primary form-control" onClick={toggleView}>Save</button>

        </div>
    )
}

export default EditJobSkill;