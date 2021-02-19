import React, { useState, useEffect } from 'react';

function EditPersonalInfo({ personalInfo, handlePersonalInfoChange, toggleView }) {
    const { dob, pob } = personalInfo;
    const [editPersonalInfo, setPersonalInfo] = useState({
        newdob: dob,
        newpob: pob
    });


    const getNewValue = (e) => {
        setPersonalInfo(editPersonalInfo => ({ ...editPersonalInfo, [e.target.name]: e.target.value }))
    }

    useEffect(() => { handlePersonalInfoChange(editPersonalInfo) }, [editPersonalInfo]) /* Linter Error without, with infinite loop [editPersonalInfo , handleInfoChange] */



    return (
        <>
            <input
                className="form-control"
                type="text"
                name="newdob"
                value={editPersonalInfo.newdob}
                placeholder={dob}
                onChange={getNewValue}
            />

            <input
                className="form-control"
                type="text"
                name="newpob"
                value={editPersonalInfo.newpob}
                placeholder={pob}
                onChange={getNewValue}
            />


            <button type="submit" className="btn btn-primary form-control" onClick={toggleView}>Save</button>

        </>
    )
}

export default EditPersonalInfo;