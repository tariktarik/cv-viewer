import React from 'react';
import Education from './Education/View';

function Educations() {
    return(
        <div className="row mt-5 d-flex flex-column">
                    <h2>Education</h2>
                    <ul className="timeline mt-3 ml-2">
                      <Education school="Academy of fine arts Sarajevo" degree="Master of Arts" duration="2013 - 2014"/>
                      <Education school="Academy of fine arts Sarajevo" degree="Bachelor" duration="2013 - 2014"/>
                    </ul>
                  </div>
    )
}

export default Educations;