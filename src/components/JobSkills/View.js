import React from 'react';
import EditJobSKill from './EditJobSkill/View';
import PreviewJobSkill from './PreviewJobSkill/View';


function JobSkills({ jobSkills, isEditMode, toggleView, handleJobSkillsChange }) {

  return (
    <>
      <div className="row mt-5">
        <h2>Job Skills</h2>
      </div>
      {jobSkills.map((jobSkill =>
        isEditMode ?
          <EditJobSKill
            skill={jobSkill.skill}
            grade={jobSkill.grade}
            id={jobSkill._id}
            toggleView={toggleView}
            handleJobSkillsChange={handleJobSkillsChange}
            key={jobSkill._id}
          />
          :
          <PreviewJobSkill jobSkill={jobSkill} key={jobSkill._id} />))}
    </>
  )
}

export default JobSkills;