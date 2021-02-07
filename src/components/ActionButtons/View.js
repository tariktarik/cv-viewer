import React from "react";

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
    <button className="btn btn-dark mr-2 ac-w-18 btn-mobile">
      Print CV
    </button>
    <button className="btn btn-dark mr-2 ac-w-18">Download PDF</button>
    <button className="btn btn-dark mr-2 ac-w-18">Send Link</button>

    <button className="btn btn-primary ml-auto ac-w-18">
      Save version
    </button>
  </div>
</div>
</div>
    )
}

export default ActionButtons;