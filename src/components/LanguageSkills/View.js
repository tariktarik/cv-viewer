import React from 'react';
import EditLanguageSkill from './EditLanguageSkill/View'
import PreviewLanguageSkill from './PreviewLanguageSkill/View';

function LanguageSkills({ languageSkills, isEditMode, toggleView, handleChange }) {
    return (
        <>
            <div className="row mt-5">
                <h2>Language Skills</h2>
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