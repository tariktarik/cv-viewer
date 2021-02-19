import React, {useState, useEffect} from 'react';

function EditExperience({experience, toggleView, handleExperiencesChange}) {
    const { _id, duration } = experience;
    const [editExperiences, setExperiences] = useState({
       /*  newposition: position, */
        newduration: duration,
        
    });
    
    
    const getNewValue = (e) => {
       
        setExperiences(editExperiences => ({ ...editExperiences, [e.target.name]: e.target.value }))

    }

    useEffect(() => {handleExperiencesChange(editExperiences)}, [editExperiences]) /* Linter Error without, with infinite loop [editInfo , handleInfoChange] */

   
    return (
        <div className="row" /* key={_id} */>
            {/* <input
                className="form-control"
                type="text"
                name="newposition"
                value={editExperiences.newposition}
                placeholder={position}
                onChange={getNewValue}
            /> */}

            <input
                className="form-control"
                type="text"
                name={`newduration`}
                value={editExperiences.newduration}
                placeholder={duration}
                onChange={getNewValue}
            />


            <button type="submit" className="btn btn-primary form-control" onClick={toggleView}>Save</button>

        </div>

    )
}

export default EditExperience;