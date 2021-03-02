import React from 'react';
import InputField from '../../InputField/View';

function EditExperience({ experiences, toggleView, handleChange }) {

    return (
        <div className="row">
            {
                experiences.map((experience) =>
                    Object.keys(experience).map((key) =>
                        (key !== '_id') ?
                            <InputField
                                objname={'experiences'}
                                id={experience['_id']}
                                key={key}
                                name={key}
                                value={experience[key]}
                                handleChange={handleChange}
                            />
                            : null
                    )
                )
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