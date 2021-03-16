import React from 'react';

function PreviewPicture({ editMode }) {
    return (
        <button className="btn btn-dark position-absolute ac-addphoto" onClick={editMode}>
            Add Picture
        </button>
    )
}

export default PreviewPicture;