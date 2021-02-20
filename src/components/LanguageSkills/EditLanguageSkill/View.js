import React, { useState, useEffect } from 'react';

function EditLanguageSkill({ id, language, grade, toggleView, handleLanguageSkillsChange }) {
    const [editLanguageSkill, setLanguageSkill] = useState({
        newid: id,
        newlanguage: language,
        newgrade: grade,
    });


    const getNewValue = (e) => {
        setLanguageSkill(editLanguageSkill => ({ ...editLanguageSkill, [e.target.name]: e.target.value }))
    }

    useEffect(() => { handleLanguageSkillsChange(editLanguageSkill) }, [editLanguageSkill])
    return (
        <div className="row">

            <input
                className="form-control"
                type="text"
                name={'newlanguage'}
                value={editLanguageSkill.newlanguage}
                placeholder={language}
                onChange={getNewValue}
            />

            <input
                className="form-control"
                type="text"
                name={'newgrade'}
                value={editLanguageSkill.newgrade}
                placeholder={grade}
                onChange={getNewValue}
            />


            <button type="submit" className="btn btn-primary form-control" onClick={toggleView}>Save</button>

        </div>

    )
}

export default EditLanguageSkill;