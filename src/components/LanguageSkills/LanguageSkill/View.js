import React from 'react';

function LanguageSkill({language, skill}) {
    return (
        
        <div className="row mt-2 ac-line"> 
                    <p>
                      <span className="d-block font-weight-bold">{language}</span>
                      <span className="d-block font-weight-bold">{skill}</span>
                    </p>
        </div>
        

    )
}

export default LanguageSkill;