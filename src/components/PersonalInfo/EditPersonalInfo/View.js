import React from 'react';
import InputField from '../../InputField/View';

function EditPersonalInfo({ dob, pob, handleChange, toggleView }) {
       
    return (
        <>


            <InputField
                name={'dob'}
                value={dob}
                handleChange={handleChange}
            />
            <InputField
                name={'pob'}
                value={pob}
                handleChange={handleChange}
            />

            <button type="submit" className="btn btn-primary form-control" onClick={toggleView}>Save</button>

        </>
    )
}

export default EditPersonalInfo;