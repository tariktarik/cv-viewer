import React from 'react';

function PreviewInfo({ firstName, lastName, position, email }) {
    
    return (
        <>
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
        </>
    )
}

export default PreviewInfo;