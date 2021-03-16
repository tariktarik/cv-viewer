import React from 'react';
import InputField from '../../InputField/View';

function EditJobSkill({ error, id, skill, grade, previewMode, handleChange }) {

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
                error={error}
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
                error={error}
            />


            <button type="submit" className="btn btn-primary form-control" onClick={previewMode}>Save</button>

        </div>
    )
}

export default EditJobSkill;