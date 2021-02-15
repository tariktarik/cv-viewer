import React from 'react';

function Biography({biography}) {
    return(
        <div className="row mt-md-5 mt-sm-5">
                    <h2>Biography</h2>
                    <p className="mt-3">
                      {biography}
                    </p>
                  </div>
    )
}

export default Biography;