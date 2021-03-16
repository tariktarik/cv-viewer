import React from 'react';
import InputField from '../../InputField/View';

function EditLanguageSkill({ error, id, language, grade, previewMode, handleChange }) {

    return (
        <div className="row">
            <InputField
                error={error}
                id={id}
                objname={'languages'}
                className="form-control"
                type="text"
                name={'language'}
                value={language}
                placeholder={language}
                handleChange={handleChange}
            />
             <InputField
                error={error}
                id={id}
                objname={'languages'}
                className="form-control"
                type="text"
                name={'grade'}
                value={grade}
                placeholder={grade}
                handleChange={handleChange}
            />
            <button type="submit" className="btn btn-primary form-control" onClick={previewMode}>Save</button>

        </div>

    )
}

export default EditLanguageSkill;