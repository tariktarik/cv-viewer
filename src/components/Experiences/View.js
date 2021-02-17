import React from 'react';
import Experience from './Experience/View';
import ExperienceInput from './ExperienceInput/View'
function Experiences({experiences, handleExpChange}) {

    /* const [stateExperiences, setStateExperiences] = useState(experiences);

    setStateExperiences([...stateExperiences, newExperience])

    function newExperience() {
        return <Experience experience/>
    } */

    return ( 
        <>
        <div className="row mt-5">
                    <h2>Experience</h2>
                  </div>
                 {/*  {viewVode =  edit ? (
(               <inpi
z
                  ) : )} */}
                  {experiences.map((experience) => (
                  <Experience experience={experience} key={experience.position}/>
                  ))}

                  
{/* {experiences.map((experience) => (
                  <ExperienceInput experience={experience} key={experience.position} handleChange={handleExpChange} />
                  ))} */}
                  
          </>
         /*  addfield('experiences') */
    )
}

export default Experiences;