import React from 'react';
import { useHistory } from 'react-router-dom';

function NotFound() {
    const history = useHistory();
    return (
        <div className="container d-flex justify-content-center">
            <div className="col-md-4 vh-100 d-flex flex-column justify-content-center">
                <h1 className="text-center font-weight-bold">
                    404 - Not found
                </h1>
                <button
                    onClick={history.goBack}
                    className="btn btn-primary"
                >
                    Go Back
                </button>
            </div>
        </div>
    )
}

export default NotFound;