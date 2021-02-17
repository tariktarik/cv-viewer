import React from 'react';

function JobSkill({ jobSkill }) {
  const { skill, grade } = jobSkill;
  let skills = [];

  for (let i = 0; i < 10; i++) {
    skills.push(<div className={`ac-circle-skill ${i <= grade - 1 ? 'ac-active-circle-skill' : ''}`} key={i}></div>);
  }
  return (
    <div className="row mt-2 d-flex flex-column">
      <div className="font-weight-bold">{skill}</div>
      <div className="d-flex">
        <div className="text-muted">
          {grade}/10
        </div>
        <div className="d-flex w-100 ml-5 my-auto justify-content-around">
          {skills.map((skill) => skill)}
        </div>
      </div>
    </div>
  )
}

export default JobSkill;