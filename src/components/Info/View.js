import React from 'react';

function Info({ info }) {
  const { firstName, lastName, position, email } = info;

  return (
    <div className="row mt-5">
      <div className="col-md-12 justify-content-center">
        <div className="row">
          <h1>
            {firstName ? firstName : 'Add Name'}<span className="font-weight-lighter"> {lastName ? lastName : 'Surname'}</span>
          </h1>
          <button
            className="btn btn-light ac-w-25 ml-auto ac-addposition font-weight-bold"
          >
            {position ? position : 'Add Position'}
          </button>
        </div>
        <div className="row">
          <span className="font-weight-light">{email ? email : 'Add your Email here'}</span>
        </div>
      </div>
    </div>
  )
}

export default Info;