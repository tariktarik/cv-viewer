import React from 'react';

function PreviewQuote({quote}) {
    return (
        <h2 className="font-weight-lighter display-4">
            {quote ? quote : 'Add a qoute aboute the Resume owner which summs up goals/strenghts'}
        </h2>
    )
}

export default PreviewQuote;