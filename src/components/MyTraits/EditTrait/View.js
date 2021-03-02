import React from 'react';
import InputField from '../../InputField/View';

function EditTrait({ traits, handleChange, toggleView }) {

    return (
        <>
            {
                traits.map((trait) =>
                    Object.keys(trait).map((key) =>
                        (key !== '_id') ?
                            <InputField
                                objname={'myTraits'}
                                id={trait['_id']}
                                key={key}
                                name={key}
                                value={trait[key]}
                                handleChange={handleChange}
                            />
                            : null
                    )
                )
            }
            <button type="submit" className="btn btn-primary form-control" onClick={toggleView}>Save</button>
        </>

    )
}

export default EditTrait;