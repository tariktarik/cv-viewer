import React from 'react'

function InputField({ type, id, objname, name, value, handleChange, error }) {

    return (
        <>
            <input
                className="form-control"
                type={type ? type : 'text'}
                name={name}
                value={value}
                placeholder={value}
                onChange={(e) => handleChange(e, id, objname)}
            />
            {error ? <p>{error}</p> : null}
        </>

    )
}

export default InputField;