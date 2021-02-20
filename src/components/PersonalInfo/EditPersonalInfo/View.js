import React from 'react';

function EditPersonalInfo({ personalInfo, handleChange, toggleView }) {
    const { dob, pob } = personalInfo;

    return (
        <>
            <input
                className="form-control"
                type="text"
                name="dob"
                value={dob}
                placeholder={dob}
                onChange={handleChange}
            />

            <input
                className="form-control"
                type="text"
                name="pob"
                value={pob}
                placeholder={pob}
                onChange={handleChange}
            />


            <button type="submit" className="btn btn-primary form-control" onClick={toggleView}>Save</button>

        </>
    )
}

export default EditPersonalInfo;