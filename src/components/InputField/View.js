import React from 'react'

function InputField({ id, objname, name, value, handleChange }) {

    return (
        <input
            className="form-control"
            type="text"
            name={name}
            value={value}
            placeholder={value}
            onChange={(e) => handleChange(id, objname,e)}
        />

    )
}

export default InputField;