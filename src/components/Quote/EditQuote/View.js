import React from 'react';

function EditQuote({ quote, toggleView, handleChange }) {

    return (
        <>
            <input
                className="form-control"
                type="text"
                name="quote"
                value={quote}
                placeholder={quote}
                onChange={handleChange}
            />
            <button type="submit" className="btn btn-primary form-control" onClick={toggleView}>Save</button>
        </>
    )
}

export default EditQuote;