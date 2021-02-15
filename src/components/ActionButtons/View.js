import React from 'react';
import Button from './Button/View';

function ActionButtons() {
    return (
        <div className="row my-5">
<div className="col-md-12 justify-content-center">
  <div className="row">

    <button className="btn btn-outline-primary ac-w-18 btn-mobile">
      Exit preview
    </button>
  </div>
  <div className="row mt-2">
    <Button text={'Print CV'} />
    <Button text={'Download PDF'} />
    <Button text={'Send Link'} />
    {/* <button className="btn btn-dark mr-2 ac-w-18 btn-mobile">
      Print CV
    </button>
    <button className="btn btn-dark mr-2 ac-w-18 btn-mobile">Download PDF</button>
    <button className="btn btn-dark mr-2 ac-w-18 btn-mobile">Send Link</button> */}

    <button className="btn btn-primary ml-auto ac-w-18 btn-mobile">
      Save version
    </button>
  </div>
</div>
</div>
    )
}

export default ActionButtons;