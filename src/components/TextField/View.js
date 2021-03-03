import React from 'react'

function TextField({id, objname, name, value, handleChange, error }) {

    return (
        <>
        <textarea
            className={'form-control'}
            rows={'7'}
            name={name}
            value={value}
            placeholder={value}
            onChange={(e) => handleChange(e, id, objname)}
        />
        {error ? <p>{error}</p> : null}
        </>

    )
}

export default TextField;