import React from 'react';
import EditJobSKill from './EditJobSkill/View';
import PreviewJobSkill from './PreviewJobSkill/View';
import AddInput from '../AddInput/View';


function JobSkills({ jobSkills, isEditMode, toggleView, handleChange, handleAddInput }) {

  return (
    <>
      <div className="row mt-5 d-flex flex-column">
        <h2>Job Skills
        {isEditMode ?
            <AddInput handleAddInput={handleAddInput} objName={'jobSkills'} />
            : null
          }
        </h2>

      </div>
      {jobSkills.map((jobSkill =>
        isEditMode ?
          <EditJobSKill
            skill={jobSkill.skill}
            grade={jobSkill.grade}
            id={jobSkill._id}
            toggleView={toggleView}
            handleChange={handleChange}
            key={jobSkill._id}
          />
          :
          <PreviewJobSkill jobSkill={jobSkill} key={jobSkill._id} />))}
    </>
  )
}

export default JobSkills;