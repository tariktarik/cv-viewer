import React from 'react';
import InputField from '../../InputField/View';

function EditInfo({ error, firstName, lastName, position, email, handleChange, toggleView }) {

    return (
        <>

            <InputField
                name={'firstName'}
                value={firstName}
                handleChange={handleChange}
            />
            {error.firstName ? 'Popni plje' : null}
            <InputField
                name={'lastName'}
                value={lastName}
                handleChange={handleChange}
            />
            <InputField
                name={'position'}
                value={position}
                handleChange={handleChange}
            />
            <InputField
                name={'email'}
                value={email}
                handleChange={handleChange}
            />



            <button type="submit" className="btn btn-primary form-control" onClick={toggleView}>Save</button>

        </>
    )
}

export default EditInfo;