import React from 'react';

function Info() {
    return(
        <div className="row mt-5">
            <div className="col-md-12 justify-content-center">
              <div className="row">
                <h1>
                  Add Name<span className="font-weight-lighter"> Surname</span>
                </h1>
                <button
                  className="btn btn-light ac-w-25 ml-auto ac-addposition font-weight-bold"
                >
                  Add Position
                </button>
              </div>
              <div className="row">
                <span className="font-weight-light">Add your Email here</span>
              </div>
            </div>
          </div>
    )
}

export default Info;