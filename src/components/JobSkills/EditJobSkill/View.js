import React , { useState, useEffect } from 'react';

function EditJobSkill({id, skill, grade, toggleView, handleJobSkillsChange}){
    const [editJobSkill, setJobSkill] = useState({
        newid: id,
        newskill: skill,
        newgrade: grade,
    });


    const getNewValue = (e) => {
        setJobSkill(editJobSkill => ({ ...editJobSkill, [e.target.name]: e.target.value }))
    }

    useEffect(() => { handleJobSkillsChange(editJobSkill) }, [editJobSkill])
    return (
        <div className="row">

        <input
            className="form-control"
            type="text"
            name={'newskill'}
            value={editJobSkill.newskill}
            placeholder={skill}
            onChange={getNewValue}
        />

        <input
            className="form-control"
            type="text"
            name={'newgrade'}
            value={editJobSkill.newgrade}
            placeholder={grade}
            onChange={getNewValue}
        />


        <button type="submit" className="btn btn-primary form-control" onClick={toggleView}>Save</button>

    </div>
    )
}

export default EditJobSkill;