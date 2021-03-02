import React from 'react';
import InputField from '../../InputField/View';

function EditPersonalInfo({ personalInfo, handleChange, toggleView }) {

    return (
        <>
            {
                Object.keys(personalInfo).map((key) =>
                    <InputField
                        key={key}
                        name={key}
                        value={personalInfo[key]}
                        handleChange={handleChange}
                    />
                )
            }


            <button type="submit" className="btn btn-primary form-control" onClick={toggleView}>Save</button>

        </>
    )
}

export default EditPersonalInfo;