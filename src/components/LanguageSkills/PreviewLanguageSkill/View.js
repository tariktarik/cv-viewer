import React from 'react';

function PreviewLanguageSkill({ languages }) {
  return (

    <div className="row mt-2 ac-line">
      {languages.map(language =>
        <p>
          <span className="d-block font-weight-bold">{language.language}</span>
          <span className="d-block font-weight-bold">{language.grade}</span>
        </p>
      )
      }
    </div>


  )
}

export default PreviewLanguageSkill;