import React from 'react';

function AddInput({ handleAddInput, objName }) {

    return (
        <button className="btn btn-success float-right" onClick={() => handleAddInput(objName)}> + </button>
    )
}

export default AddInput;