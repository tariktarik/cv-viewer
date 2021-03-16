import React from 'react';
import InputField from '../../InputField/View';
import TextField from '../../TextField/View';

function EditProject({ error, id, company, position, period, description, previewMode, handleChange }) {

    return (
        <div className="row">

            <InputField
                error={error}
                id={id}
                objname={'experiencesProjects'}
                className="form-control"
                type="text"
                name={'company'}
                value={company}
                placeholder={company}
                handleChange={handleChange}
            />

            <InputField
                error={error}
                id={id}
                objname={'experiencesProjects'}
                className="form-control"
                type="text"
                name={'position'}
                value={position}
                placeholder={position}
                handleChange={handleChange}
            />

            <InputField
                error={error}
                id={id}
                objname={'experiencesProjects'}
                className="form-control"
                type="text"
                name={'period'}
                value={period}
                placeholder={period}
                handleChange={handleChange}
            />

            <TextField
                error={error}
                id={id}
                objname={'experiencesProjects'}
                className="form-control"
                type="text"
                name={'description'}
                value={description}
                placeholder={description}
                handleChange={handleChange}
            /> 
 



            <button type="submit" className="btn btn-primary form-control" onClick={previewMode}>Save</button>

        </div>

    )
}

export default EditProject;