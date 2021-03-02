import React from 'react';
import InputField from '../../InputField/View';

function EditQuote({ quote, toggleView, handleChange }) {

    return (
        <>
            {
                <InputField
                    name={'quote'}
                    value={quote}
                    handleChange={handleChange}
                />
            }
            <button type="submit" className="btn btn-primary form-control" onClick={toggleView}>Save</button>
        </>
    )
}

export default EditQuote;