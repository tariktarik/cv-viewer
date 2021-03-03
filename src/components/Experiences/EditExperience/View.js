import React from 'react';
import InputField from '../../InputField/View';

function EditExperience({ id, duration, position, toggleView, handleChange }) {

    return (
        <div className="row">
            {
                <>
                   <InputField
                id={id}
                objname={'experiences'}
                className="form-control"
                type="text"
                name={'duration'}
                value={duration}
                placeholder={duration}
                handleChange={handleChange}
            />
            <InputField
                id={id}
                objname={'experiences'}
                className="form-control"
                type="text"
                name={'position'}
                value={position}
                placeholder={position}
                handleChange={handleChange}
            />
                </>
            }
            <button type="submit" className="btn btn-primary form-control" onClick={toggleView}>Save</button>
            {/* <input
                customid={id}
                customobjname={'experiences'}
                className="form-control"
                type="text"
                name={'duration'}
                value={duration}
                placeholder={duration}
                onChange={handleChange}
            />

            <input
                customid={id}
                customobjname={'experiences'}
                className="form-control"
                type="text"
                name={'position'}
                value={position}
                placeholder={position}
                onChange={handleChange}
            /> */}




        </div>

    )
}

export default EditExperience;