import React from 'react';
import InputField from '../../InputField/View';

function EditQuote({ error, quote, previewMode, handleChange }) {

    return (
        <>
            {
                <InputField
                    name={'quote'}
                    value={quote}
                    handleChange={handleChange}
                    error={error}
                />
            }
            <button type="submit" className="btn btn-primary form-control" onClick={previewMode}>Save</button>
        </>
    )
}

export default EditQuote;