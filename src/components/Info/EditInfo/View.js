import React from 'react';
import InputField from '../../InputField/View';

function EditInfo({ error, firstName, lastName, position, email, handleChange, previewMode}) {

    return (
        <>

            <InputField
                name={'firstName'}
                value={firstName}
                handleChange={handleChange}
                error={error}
            />
            
            <InputField
                name={'lastName'}
                value={lastName}
                handleChange={handleChange}
                error={error}
            />
            <InputField
                name={'position'}
                value={position}
                handleChange={handleChange}
                error={error}
            />
            <InputField
                name={'email'}
                value={email}
                handleChange={handleChange}
                error={error}
            />



            <button type="submit" className="btn btn-primary form-control" onClick={previewMode}>Save</button>

        </>
    )
}

export default EditInfo;