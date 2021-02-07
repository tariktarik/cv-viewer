import React from 'react';

function AddPhoto({photoUrl}) {
    return(
        <div className="row mt-3 position-relative">
                    <img
                      className="img-fluid w-100 rounded"
                      src={photoUrl}
                      alt=""
                    />

                    <button className="btn btn-dark position-absolute ac-addphoto">
                      Add Photo
                    </button>
                  </div>
    )
}

export default AddPhoto;