import React from 'react';
import InputField from '../../InputField/View';

function EditExperience({ error, id, duration, position, previewMode, handleChange }) {

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
                        error={error}
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
                        error={error}
                    />
                </>
            }
            <button type="submit" className="btn btn-primary form-control" onClick={previewMode}>Save</button>
        </div>

    )
}

export default EditExperience;