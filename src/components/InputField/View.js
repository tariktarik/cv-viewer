import React from 'react'

function InputField({ error, type, id, objname, name, value, handleChange }) {

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
            {error[name] ? error[name] : null}
            {
                objname &&
                    error[objname][name] &&
                    error[objname]._id === id ?
                    error[objname][name] :
                    null
            }

        </>

    )
}

export default InputField;