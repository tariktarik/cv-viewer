import React from 'react';
import InputField from '../../InputField/View';

function EditEducations({ toggleView, educations, handleChange }) {

    return (
        <div className="row">

            {
                educations.map((education) =>
                    Object.keys(education).map((key) =>
                        (key !== '_id') ?
                            <InputField
                                objname={'education'}
                                id={education['_id']}
                                key={key}
                                name={key}
                                value={education[key]}
                                handleChange={handleChange}
                            />
                            : null
                    )
                )
            }
            <button type="submit" className="btn btn-primary form-control" onClick={toggleView}>Save</button>
        </div>
    )
}

export default EditEducations;