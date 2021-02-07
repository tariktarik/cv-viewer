import React from 'react';
import Project from './Project/View';

function Projects({ projects }) {
    return (
        <>
            <div className="row mt-5">
                <h2>Experiences / Projects</h2>
            </div>
            {projects.map((project) =>
                <Project company={project.company} position={project.position} duration={project.duration} description={project.description} />
            )}

        </>
    )
}

export default Projects;