import React, { useState, useEffect } from 'react';

function EditTrait({ id, trait, handleMyTraitsChange, toggleView }) {
    const [editMyTrait, setMyTrait] = useState({
        newid: id,
        newtrait: trait,
    });


    const getNewValue = (e) => {
        setMyTrait(editMyTrait => ({ ...editMyTrait, [e.target.name]: e.target.value }))

    }

    useEffect(() => { handleMyTraitsChange(editMyTrait) }, [editMyTrait])
    return (
        <>
            <input
                className="form-control"
                type="text"
                name={'newtrait'}
                value={editMyTrait.newtrait}
                placeholder={trait}
                onChange={getNewValue}
            />


            <button type="submit" className="btn btn-primary form-control" onClick={toggleView}>Save</button>

        </>

    )
}

export default EditTrait;