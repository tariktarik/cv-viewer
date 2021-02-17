import React, { useState } from 'react';

function EditInfo({ info, handleInfoChange }) {
    const { firstName, lastName, position, email } = info;
    const [editInfo, setInfo] = useState({
        newfirstName: firstName,
        newlastName: lastName,
        newposition: position,
        newemail: email
    });

    const getNewValue = (e) => {

        setInfo({ ...editInfo, [e.target.name]: e.target.value })
        handleInfoChange(editInfo);
        console.log("TRIGER ON CHANGE: ", editInfo)
        console.log("TRIGER ON CHANGE TARGEt: ", e.target.name)


    }

    return (
        <>

            <input
                type="text"
                name="newfirstName"
                value={editInfo.newfirstName}
                placeholder={firstName}
                onChange={getNewValue}
            />

            <input
                type="text"
                name="newlastName"
                value={editInfo.newlastName}
                placeholder={lastName}
                onChange={getNewValue}
            />

            <input
                type="text"
                name="newposition"
                value={editInfo.newposition}
                placeholder={position}
                onChange={getNewValue}
            />

            <input
                type="text"
                name="newemail"
                value={editInfo.newemail}
                placeholder={email}
                onChange={getNewValue}
            />

        </>
    )
}

export default EditInfo;