import React from 'react';

function Biography({description}) {
    return(
        <div className="row mt-md-5 mt-sm-5">
                    <h2>Biography</h2>
                    <p className="mt-3">
                      {description}
                    </p>
                  </div>
    )
}

export default Biography;