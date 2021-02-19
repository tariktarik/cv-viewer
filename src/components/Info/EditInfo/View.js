import React, { useState, useEffect } from 'react';

function EditInfo({ info, handleInfoChange, toggleView }) {
    const { firstName, lastName, position, email } = info;
    const [editInfo, setInfo] = useState({
        newfirstName: firstName,
        newlastName: lastName,
        newposition: position,
        newemail: email
    });
    
    
    const getNewValue = (e) => {
       
        setInfo(editInfo => ({ ...editInfo, [e.target.name]: e.target.value }))
        /* handleInfoChange(editInfo) */
        console.log("TRIGER ON CHANGE: ", editInfo)
        console.log("TRIGER ON CHANGE TARGEt: ", e.target.name)

    }

    useEffect(() => {handleInfoChange(editInfo)}, [editInfo]) /* Linter Error without, with infinite loop [editInfo , handleInfoChange] */

   
    
    return (
        <>
            <input
                className="form-control"
                type="text"
                name="newfirstName"
                value={editInfo.newfirstName}
                placeholder={firstName}
                onChange={getNewValue}
            />

            <input
                className="form-control"
                type="text"
                name="newlastName"
                value={editInfo.newlastName}
                placeholder={lastName}
                onChange={getNewValue}
            />

            <input
                className="form-control"
                type="text"
                name="newposition"
                value={editInfo.newposition}
                placeholder={position}
                onChange={getNewValue}
            />

            <input
                className="form-control"
                type="text"
                name="newemail"
                value={editInfo.newemail}
                placeholder={email}
                onChange={getNewValue}
            />

            <button type="submit" className="btn btn-primary form-control" onClick={toggleView}>Save</button>

        </>
    )
}

export default EditInfo;