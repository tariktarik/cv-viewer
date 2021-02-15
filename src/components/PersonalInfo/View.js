import React from 'react';

function PersonalInfo({personalInfo}) {
    const {dob, location} = personalInfo;
    return (
        <div className="row mt-5 list-group">
        <h2>Personal info</h2>
        <h6 className="mb-0">Born</h6>
        <p>{dob}</p>
        <p className="mb-0">Birth place</p>
        <p>{location}</p>
      </div>
    )
}

export default PersonalInfo;