import React from 'react';

import ActionButtons from '../ActionButtons/View';
import Quote from '../Quote/View';
import Info from '../Info/View';
import Biography from '../Biography/View';
import PersonalInfo from '../PersonalInfo/View';
import Experiences from '../Experiences/View';
import LanguageSkills from '../LanguageSkills/View';
import JobSkills from '../JobSkills/View';
import Picture from '../Picture/View';
import Educations from '../Educations/View';
import MyTraits from '../MyTraits/View';
import Projects from '../Projects/View';
import moment from 'moment';

function MainContainer(
    {
        toggleView,
        isEditMode,
        data,
        error,
        handleChange,
        handleAddInput
    }) {

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
                <ActionButtons isEditMode={isEditMode} toggleView={toggleView} />
                <Info
                    error={error}
                    firstName={firstName}
                    lastName={lastName}
                    position={position}
                    email={email}
                    isEditMode={isEditMode}
                    toggleView={toggleView}
                    handleChange={handleChange}
                />
                <Quote
                    quote={quote}
                    isEditMode={isEditMode}
                    toggleView={toggleView}
                    handleChange={handleChange}
                />

                <div className="row mt-5">
                    <div className="col-md-12 justify-content-center">
                        <div className="row">
                            <div className="col-md-4 pr-md-5 d-flex flex-column">
                                <Picture
                                    picture={picture}
                                    toggleView={toggleView}
                                    isEditMode={isEditMode}
                                    handleChange={handleChange} />
                                <PersonalInfo
                                    dob={moment(dob).format('MMMM D, YYYY')}
                                    pob={pob}
                                    isEditMode={isEditMode}
                                    toggleView={toggleView}
                                    handleChange={handleChange}
                                />
                                <Experiences
                                    experiences={experiences}
                                    isEditMode={isEditMode}
                                    toggleView={toggleView}
                                    handleChange={handleChange}
                                    handleAddInput={handleAddInput}
                                />
                                <LanguageSkills
                                    languageSkills={languages}
                                    isEditMode={isEditMode}
                                    toggleView={toggleView}
                                    handleChange={handleChange}
                                    handleAddInput={handleAddInput}
                                />
                                <JobSkills
                                    jobSkills={jobSkills}
                                    isEditMode={isEditMode}
                                    toggleView={toggleView}
                                    handleChange={handleChange}
                                    handleAddInput={handleAddInput}
                                />
                                <Educations
                                    objname={'educations'}
                                    educations={education}
                                    isEditMode={isEditMode}
                                    toggleView={toggleView}
                                    handleChange={handleChange}
                                    handleAddInput={handleAddInput}
                                />
                                <MyTraits
                                    traits={myTraits}
                                    isEditMode={isEditMode}
                                    toggleView={toggleView}
                                    handleChange={handleChange}
                                    handleAddInput={handleAddInput}
                                />
                            </div>
                            <div className="col-md-8 ac-column d-flex flex-column 
                            pl-md-5 p-3 mt-sm-5 mt-md-0 d-sm-block">
                                <Biography
                                    biography={biography}
                                    isEditMode={isEditMode}
                                    toggleView={toggleView}
                                    handleChange={handleChange}
                                />
                                <Projects
                                    projects={experiencesProjects}
                                    isEditMode={isEditMode}
                                    toggleView={toggleView}
                                    handleChange={handleChange}
                                    handleAddInput={handleAddInput}
                                />

                            </div>
                        </div>
                    </div>
                </div>

                <ActionButtons isEditMode={isEditMode} toggleView={toggleView} />
            </div>
        </div>
    )
}

export default MainContainer;