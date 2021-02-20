import React from 'react';

function EditInfo({ info, handleChange, toggleView }) {
    const { firstName, lastName, position, email } = info;

    return (
        <>
            <input
               
                className="form-control"
                type="text"
                name="firstName"
                value={firstName}
                placeholder={firstName}
                onChange={handleChange}
            />

            <input
              
                className="form-control"
                type="text"
                name="lastName"
                value={lastName}
                placeholder={lastName}
                onChange={handleChange}
            />

            <input
                className="form-control"
                type="text"
                name="position"
                value={position}
                placeholder={position}
                onChange={handleChange}
            />

            <input
                className="form-control"
                type="text"
                name="email"
                value={email}
                placeholder={email}
                onChange={handleChange}
            />

            <button type="submit" className="btn btn-primary form-control" onClick={toggleView}>Save</button>

        </>
    )
}

export default EditInfo;