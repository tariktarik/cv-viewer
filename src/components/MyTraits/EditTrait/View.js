import React from 'react';
import InputField from '../../InputField/View';

function EditTrait({ error, id, trait, handleChange, previewMode }) {

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
                error={error}
            />


            <button type="submit" className="btn btn-primary form-control" onClick={previewMode}>Save</button>

        </>

    )
}

export default EditTrait;