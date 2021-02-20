import React from 'react';
import EditQuote from './EditQuote/View'
import PreviewQuote from './PreviewQuote/View';

function Quote({ quote, isEditMode, toggleView, handleChange }) {

  return (
    <div className="row mt-5">
      <div className="col-md-12 justify-content-center">
        <div className="row">
          {isEditMode ?
            <EditQuote quote={quote} toggleView={toggleView} handleChange={handleChange} />
            :
            <PreviewQuote quote={quote}
            />}
        </div>
      </div>
    </div>
  )
}

export default Quote;