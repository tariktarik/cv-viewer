import React from 'react';
import InputField from '../../InputField/View';

function EditLanguageSkill({ languages, toggleView, handleChange }) {

    return (
        <div className="row">

            {
                languages.map((language) =>
                    Object.keys(language).map((key) =>
                        (key !== '_id') ?
                            <InputField
                                objname={'languages'}
                                id={language['_id']}
                                key={key}
                                name={key}
                                value={language[key]}
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

export default EditLanguageSkill;