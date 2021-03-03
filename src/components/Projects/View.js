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
                        handleChange={handleChange}
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