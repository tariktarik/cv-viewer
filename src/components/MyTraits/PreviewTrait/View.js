import React from 'react';

function PreviewTrait({ traits }) {
    return (

        traits.map((trait) =>
            
                <button className="btn btn-light mr-2">{trait.trait}</button>
            
        )


    )
}

export default PreviewTrait;