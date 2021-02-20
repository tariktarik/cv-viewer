import React, { useState, useEffect } from 'react';

function EditLanguageSkill({ id, language, grade, toggleView, handleChange }) {

    return (
        <div className="row">

            <input
                customid={id}
                customobjname={'languages'}
                className="form-control"
                type="text"
                name={'language'}
                value={language}
                placeholder={language}
                onChange={handleChange}
            />

            <input
                customid={id}
                customobjname={'languages'}
                className="form-control"
                type="text"
                name={'grade'}
                value={grade}
                placeholder={grade}
                onChange={handleChange}
            />


            <button type="submit" className="btn btn-primary form-control" onClick={toggleView}>Save</button>

        </div>

    )
}

export default EditLanguageSkill;