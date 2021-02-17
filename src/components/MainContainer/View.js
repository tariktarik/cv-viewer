import React from 'react';

import ActionButtons from '../ActionButtons/View';
import Quote from '../Quote/View';
import Info from '../Info/View';
import Biography from '../Biography/View';
import PersonalInfo from '../PersonalInfo/View';
import Experiences from '../Experiences/View';
import LanguageSkills from '../LanguageSkills/View';
import JobSkills from '../JobSkills/View';
import AddPhoto from '../AddPhoto/View';
import Educations from '../Educations/View';
import MyTraits from '../MyTraits/View';
import Projects from '../Projects/View';

function MainContainer({ isEditMode, data, handleInfoChange }) {
   
    if (!data) {
        return null;
    }
    const {
        firstName,
        lastName,
        position,
        email,
        dob,
        pob,
        quote,
        picture,
        experiences,
        languages,
        jobSkills,
        education,
        myTraits,
        experiencesProjects,
        biography } = data;




    return (
        <div className="container">
            <div className="col-sm-12">
                <ActionButtons isEditMode={isEditMode} />
                <Info info={{firstName, lastName, position, email}} isEditMode={isEditMode} handleInfoChange={handleInfoChange}/>
                <Quote quote={quote} />

                <div className="row mt-5">
                    <div className="col-md-12 justify-content-center">
                        <div className="row">
                            <div className="col-md-4 pr-md-5 d-flex flex-column">
                                <AddPhoto photoUrl={picture} />
                                <PersonalInfo personalInfo={{dob, pob}} /* viewmode={true}  */
                                />
                                <Experiences experiences={experiences}/*  handleExpChange={handleExpChange} viewmode={true} */ />
                                <LanguageSkills languageSkills={languages} />
                                <JobSkills jobSkills={jobSkills} />
                                <Educations educations={
                                    education
                                } />
                                <MyTraits traits={myTraits} />
                            </div>
                            <div
                                className="col-md-8 ac-column d-flex flex-column pl-md-5 p-3 mt-sm-5 mt-md-0 d-sm-block"
                            >
                                <Biography biography={biography} />
                                <Projects projects={experiencesProjects} />

                            </div>
                        </div>
                    </div>
                </div>

                <ActionButtons />
            </div>
        </div>
    )
}

export default MainContainer;