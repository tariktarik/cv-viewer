import React from 'react';
import EditBiography from './EditBiography/View';
import PreviewBiography from './PreviewBiography/View'

function Biography({ biography, isEditMode, toggleView, handleBiographyChange }) {
  return (
    <div className="row mt-md-5 mt-sm-5">
      <h2>Biography</h2>
      
        {isEditMode ? 
          <EditBiography toggleView={toggleView} handleBiographyChange={handleBiographyChange} biography={biography}  />
          : <PreviewBiography biography={biography} />}
      
    </div>
  )
}

export default Biography;