import React from 'react';

function PreviewLanguageSkill({language, grade}) {
    return (
        
        <div className="row mt-2 ac-line"> 
                    <p>
                      <span className="d-block font-weight-bold">{language}</span>
                      <span className="d-block font-weight-bold">{grade}</span>
                    </p>
        </div>
        

    )
}

export default PreviewLanguageSkill;