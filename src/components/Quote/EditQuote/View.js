import React, { useState, useEffect } from 'react';

function EditQuote({quote, toggleView, handleQuoteChange}) {
    const [editQuote, setQuote] = useState({
        newquote: quote,
    });


    const getNewValue = (e) => {

        setQuote(editQuote => ({ ...editQuote, [e.target.name]: e.target.value }))


    }

    useEffect(() => {handleQuoteChange(editQuote)}, [editQuote])
    return (
    <>
            <input
                className="form-control"
                type="text"
                name="newquote"
                value={editQuote.newquote}
                placeholder={quote}
                onChange={getNewValue}
            />
            <button type="submit" className="btn btn-primary form-control" onClick={toggleView}>Save</button>
        </>
    )
}

export default EditQuote;