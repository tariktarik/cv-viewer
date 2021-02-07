import React from 'react';

function AddPhoto() {
    return(
        <div className="row mt-3 position-relative">
                    <img
                      className="img-fluid w-100 rounded"
                      src="https://via.placeholder.com/300x300?"
                      alt=""
                    />

                    <button className="btn btn-dark position-absolute ac-addphoto">
                      Add Photo
                    </button>
                  </div>
    )
}

export default AddPhoto;