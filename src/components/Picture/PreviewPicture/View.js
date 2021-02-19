import React from 'react';

function PreviewPicture({ toggleView}) {
    return (
        <button className="btn btn-dark position-absolute ac-addphoto" onClick={toggleView}>
            Add Picture
        </button>
    )
}

export default PreviewPicture;