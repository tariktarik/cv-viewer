import React from 'react';

function PreviewPersonalInfo({ dob, pob }) {

    return (
        <>
            <h6 className="mb-0">Born</h6>

            <p>{dob}</p>
            <p className="mb-0">Birth place</p>
            <p>{pob}</p>
        </>
    )
}

export default PreviewPersonalInfo;