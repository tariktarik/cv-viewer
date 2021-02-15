import React from 'react';
import JobSkill from './JobSkill/View';


function JobSkills({jobSkills}) {

    return(
        <>
      <div className="row mt-5">
        <h2>Job Skills</h2>
      </div>
      {jobSkills.map((jobSkill => <JobSkill jobSkill={jobSkill} key={jobSkill.skill} />))}
      {/* skill={jobSkill.skill} grade={jobSkill.grade} */}
      
      </>
    )
}

export default JobSkills;