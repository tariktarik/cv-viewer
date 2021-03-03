import React from 'react';
import InputField from '../../InputField/View';

function EditTrait({ id, trait, handleChange, toggleView }) {

    return (
        <>
            <InputField
                id={id}
                objname={'myTraits'}
                className="form-control"
                type="text"
                name={'trait'}
                value={trait}
                placeholder={trait}
                handleChange={handleChange}
            />


            <button type="submit" className="btn btn-primary form-control" onClick={toggleView}>Save</button>

        </>

    )
}

export default EditTrait;