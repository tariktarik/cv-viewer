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

            {experiences.map((experience) => (
                isEditMode ?
                    <EditExperience
                        key={experience._id}
                        id={experience._id}
                        isEditMode={isEditMode}
                        toggleView={toggleView}
                        handleExperiencesChange={handleExperiencesChange}
                        duration={experience.duration}
                        position={experience.position}
                    /> :
                    <PreviewExperience
                        duration={experience.duration}
                        position={experience.position}
                        key={experience._id}
                    />
            ))}

        </>
    )
}

export default Experiences;