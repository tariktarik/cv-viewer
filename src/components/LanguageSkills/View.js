import React from 'react';
import EditLanguageSkill from './EditLanguageSkill/View'
import PreviewLanguageSkill from './PreviewLanguageSkill/View';
import AddInput from '../AddInput/View';

function LanguageSkills({ languageSkills, isEditMode, toggleView, handleChange, handleAddInput }) {
    return (
        <>
            <div className="row mt-5 d-flex flex-column">
                <h2>Language Skills
                {isEditMode ?
                        <AddInput handleAddInput={handleAddInput} objName={'languages'} />
                        : null
                    }
                </h2>
            </div>
            {
                isEditMode ?
                    <EditLanguageSkill
                        languages={languageSkills}
                        toggleView={toggleView}
                        handleChange={handleChange}
                    />
                    :
                    <PreviewLanguageSkill
                        languages={languageSkills}
                    />
            }

        </>
    )
}

export default LanguageSkills;