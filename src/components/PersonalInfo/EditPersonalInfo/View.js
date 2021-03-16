import React from 'react';
import InputField from '../../InputField/View';

function EditPersonalInfo({ error, dob, pob, handleChange, previewMode }) {
       
    return (
        <>


            <InputField
                name={'dob'}
                value={dob}
                handleChange={handleChange}
                error={error}
            />
            <InputField
                name={'pob'}
                value={pob}
                handleChange={handleChange}
                error={error}
            />

            <button type="submit" className="btn btn-primary form-control" onClick={previewMode}>Save</button>

        </>
    )
}

export default EditPersonalInfo;