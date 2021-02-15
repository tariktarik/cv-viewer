import React from 'react';
import LanguageSkill from './LanguageSkill/View';

function LanguageSkills({languageSkills}) {
    return(
        <>
        <div className="row mt-5">
                    <h2>Language Skills</h2>
        </div>
         {languageSkills.map((languageSkill) => 
          <LanguageSkill language={languageSkill.language} skill={languageSkill.grade} key={languageSkill.language}/>
         )}
                 
            </>
    )
}

export default LanguageSkills;