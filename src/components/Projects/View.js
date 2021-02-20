import React from 'react';
import EditProject from './EditProject/View'
import PreviewProject from './PreviewProject/View';

function Projects({ projects, isEditMode, toggleView, handleProjectsChange }) {
    return (
        <>
            <div className="row mt-5">
                <h2>Experiences / Projects</h2>
            </div>
            {projects.map((project) =>
                isEditMode ?
                    <EditProject
                        company={project.company}
                        position={project.position}
                        period={project.period}
                        description={project.description}
                        key={project._id}
                        id={project._id}
                        toggleView={toggleView}
                        handleProjectsChange={handleProjectsChange}
                         />
                    :
                    <PreviewProject
                        company={project.company}
                        position={project.position}
                        period={project.period}
                        description={project.description}
                        key={project._id} />
            )}

        </>
    )
}

export default Projects;