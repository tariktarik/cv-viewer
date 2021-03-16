import React from 'react';
import PreviewExperience from './PreviewExperience/View';
import EditExperience from './EditExperience/View';
import AddInput from '../AddInput/View';

function Experiences({ error, experiences, isEditMode, previewMode, handleChange, handleAddInput }) {

    return (
        <>
            <div className="row mt-5 d-flex flex-column">
                <h2>Experience
                {isEditMode ?
                        <AddInput handleAddInput={handleAddInput} objName={'experiences'} />
                        : null
                    }
                </h2>
            </div>


            {experiences.map((experience) =>
                isEditMode ?
                    <EditExperience
                        error={error}
                        objName={'experience'}
                        previewMode={previewMode}
                        id={experience._id}
                        position={experience.position}
                        duration={experience.duration}
                        key={experience._id}
                        handleChange={handleChange}

                    />
                    :
                    <PreviewExperience
                        
                        position={experience.position}
                        duration={experience.duration}
                        key={experience._id}
                    />

            )}


        </>
    )
}

export default Experiences;