import React from 'react';
import EditProject from './EditProject/View'
import PreviewProject from './PreviewProject/View';
import AddInput from '../AddInput/View';

function Projects({ projects, isEditMode, toggleView, handleChange, handleAddInput }) {
    return (
        <>
            <div className="row mt-5 d-flex flex-column">
                <h2>Experiences / Projects
                {isEditMode ?
                        <AddInput handleAddInput={handleAddInput} objName={'experiencesProjects'} />
                        : null
                    }
                </h2>
            </div>
            {
                isEditMode ?
                    <EditProject
                        projects={projects}
                        toggleView={toggleView}
                        handleChange={handleChange}
                    />
                    :
                    <PreviewProject
                        projects={projects}
                    />
            }

        </>
    )
}

export default Projects;