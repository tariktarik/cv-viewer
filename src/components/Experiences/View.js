import React from 'react';
import Experience from './Experience/View';

function Experiences({experiences}) {
    return ( 
        <>
        <div className="row mt-5">
                    <h2>Experience</h2>
                  </div>
                  {experiences.map((experience) => (
                  <Experience experience={experience} key={experience.position}/>
                  ))}
                  
          </>
    )
}

export default Experiences;