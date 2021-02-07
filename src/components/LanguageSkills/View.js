import React from 'react';
import LanguageSkill from './LanguageSkill/View';

function LanguageSkills() {
    return(
        <>
        <div className="row mt-5">
                    <h2>Language Skills</h2>
        </div>
                  <LanguageSkill language="English" skill="Native speaker" />
                  <LanguageSkill language="German" skill="Native speaker" />
            </>
    )
}

export default LanguageSkills;