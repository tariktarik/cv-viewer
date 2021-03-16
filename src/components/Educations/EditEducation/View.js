import React from 'react';
import InputField from '../../InputField/View';

function EditEducations({ error, previewMode, id, school, degree, period, handleChange }) {

    return (
        <div className="row">

            <InputField
                id={id}
                objname={'education'}
                className="form-control"
                type="text"
                name={'school'}
                value={school}
                placeholder={school}
                handleChange={handleChange}
                error={error}
            />
            <InputField
                id={id}
                objname={'education'}
                className="form-control"
                type="text"
                name={'degree'}
                value={degree}
                placeholder={degree}
                handleChange={handleChange}
                error={error}
            />
            <InputField
                id={id}
                objname={'education'}
                className="form-control"
                type="text"
                name={'period'}
                value={period}
                placeholder={period}
                handleChange={handleChange}
                error={error}
            />

            <button type="submit" className="btn btn-primary form-control" onClick={previewMode}>Save</button>
        </div>
    )
}

export default EditEducations;