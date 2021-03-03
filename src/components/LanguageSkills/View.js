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
            {languageSkills.map((languageSkill) =>
                isEditMode ?
                    <EditLanguageSkill
                        id={languageSkill._id}
                        language={languageSkill.language}
                        grade={languageSkill.grade}
                        toggleView={toggleView}
                        handleChange={handleChange}
                        key={languageSkill._id}
                    />
                    :
                    <PreviewLanguageSkill
                        language={languageSkill.language}
                        grade={languageSkill.grade}
                        key={languageSkill._id}
                    />
            )}

        </>
    )
}

export default LanguageSkills;