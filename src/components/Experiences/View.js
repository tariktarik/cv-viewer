import React from 'react';
import PreviewExperience from './PreviewExperience/View';
import EditExperience from './EditExperience/View'
function Experiences({ experiences, isEditMode, toggleView, handleExperiencesChange }) {

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
                isEditMode ?
                    <EditExperience
                        key={experience._id}
                        isEditMode={isEditMode}
                        toggleView={toggleView}
                        handleExperiencesChange={handleExperiencesChange}
                        experience={experience}
                    /> :
                    <PreviewExperience 
                    experience={experience} 
                    key={experience._id} 
                    />
            ))}


            {/* {experiences.map((experience) => (
                  <ExperienceInput experience={experience} key={experience.position} handleChange={handleExpChange} />
                  ))} */}

        </>
        /*  addfield('experiences') */
    )
}

export default Experiences;