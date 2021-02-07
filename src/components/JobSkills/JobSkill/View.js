import React from 'react';

function JobSkill({skill, grade}) {
   /*  const activeSkill = grade.split("/")[0];
    const emptySkill = grade.split("/")[1] - grade.split("/")[0]; */

    return(
        <div className="row mt-2 d-flex flex-column">
        <div className="font-weight-bold">{skill}</div>
        <div className="d-flex">
          <div className="text-muted">{grade}</div>
          <div
            className="d-flex w-100 ml-5 my-auto justify-content-around"
          >
              {/* render div X times with class active. How TO!? */}
            {
             
            
            }
            {/*  */}
            <div className="ac-circle-skill ac-active-circle-skill"></div>
            <div className="ac-circle-skill"></div>

          </div>
        </div>
      </div>
    )
}

export default JobSkill;