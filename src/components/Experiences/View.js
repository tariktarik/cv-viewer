import React from 'react';
import PreviewExperience from './PreviewExperience/View';
import EditExperience from './EditExperience/View';
import AddInput from '../AddInput/View';

function Experiences({ experiences, isEditMode, toggleView, handleChange, handleAddInput }) {

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


            {isEditMode ?
                <EditExperience
                    isEditMode={isEditMode}
                    toggleView={toggleView}
                    handleChange={handleChange}
                    experiences={experiences}
                /> :
                <PreviewExperience
                    experiences={experiences}

                />}


        </>
    )
}

export default Experiences;