import React from 'react'

function TextField({ id, objname, name, value, handleChange, error }) {

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
           {error[name] ? error[name] : null}
           {objname && error[objname][name] ? error[objname][name] : null}
        </>

    )
}

export default TextField;