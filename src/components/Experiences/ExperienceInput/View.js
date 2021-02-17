import React from 'react';

function ExperienceInput({ experience, handleChange }) {
    return (
        <div>
            <input name='description' value={experience.description} onChange={handleChange} />
            <input name='duration' value={experience.duration} onChange={handleChange} />
        </div>
    )
}

export default ExperienceInput;
