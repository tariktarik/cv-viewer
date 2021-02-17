import React, { useState } from 'react';

function AddPhoto({ photoUrl }) {

  const [isHidden, setIsHidden] = useState(true);
  const [newPhotoUrl, setNewPhotoUrl] = useState('');
  function toggleHidden() {
    setIsHidden(false);
  }

  function updatePhoto() {
    /* axios.post to the api */
    postMessage(newPhotoUrl)
    setIsHidden(true);
  }

  function handleChange(e) {
    let newUrl = e.target.value;
    setNewPhotoUrl(newUrl)
  }

  return (
    <div className="row mt-3 position-relative">
      <img
        className="img-fluid w-100 rounded"
        src={photoUrl}
        alt=""
      />

      {!isHidden ?
        <button className="btn btn-dark position-absolute ac-addphoto" onClick={toggleHidden}>
          Add Photo
                    </button>
        : null}
      {isHidden ?
        <div>
          <input type="input" value={newPhotoUrl} onChange={handleChange} />
          <button type="submit" onClick={updatePhoto}>Update</button>
        </div> : null}
    </div>
  )
}

export default AddPhoto;