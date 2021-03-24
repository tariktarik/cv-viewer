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
        editMode,
        previewMode,
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
                <ActionButtons isEditMode={isEditMode} editMode={editMode} previewMode={previewMode} />
                <Info
                    error={error}
                    firstName={firstName}
                    lastName={lastName}
                    position={position}
                    email={email}
                    isEditMode={isEditMode}
                    previewMode={previewMode}
                    handleChange={handleChange}
                />
                <Quote
                    error={error}
                    quote={quote}
                    isEditMode={isEditMode}
                    previewMode={previewMode}
                    handleChange={handleChange}
                />

                <div className="row mt-5">
                    <div className="col-md-12 justify-content-center">
                        <div className="row">
                            <div className="col-md-4 pr-md-5 d-flex flex-column">
                                <Picture
                                    error={error}
                                    picture={picture}
                                    previewMode={previewMode}
                                    isEditMode={isEditMode}
                                    editMode={editMode}
                                    handleChange={handleChange} />
                                <PersonalInfo
                                    error={error}
                                    dob={moment(dob).format('MMMM D, YYYY')}
                                    pob={pob}
                                    isEditMode={isEditMode}
                                    previewMode={previewMode}
                                    handleChange={handleChange}
                                />
                                <Experiences
                                    error={error}
                                    experiences={experiences}
                                    isEditMode={isEditMode}
                                    previewMode={previewMode}
                                    handleChange={handleChange}
                                    handleAddInput={handleAddInput}
                                />
                                <LanguageSkills
                                    error={error}
                                    languageSkills={languages}
                                    isEditMode={isEditMode}
                                    previewMode={previewMode}
                                    handleChange={handleChange}
                                    handleAddInput={handleAddInput}
                                />
                                <JobSkills
                                    error={error}
                                    jobSkills={jobSkills}
                                    isEditMode={isEditMode}
                                    previewMode={previewMode}
                                    handleChange={handleChange}
                                    handleAddInput={handleAddInput}
                                />
                                <Educations
                                    error={error}
                                    objname={'educations'}
                                    educations={education}
                                    isEditMode={isEditMode}
                                    previewMode={previewMode}
                                    handleChange={handleChange}
                                    handleAddInput={handleAddInput}
                                />
                               <MyTraits
                                    error={error}
                                    traits={myTraits}
                                    isEditMode={isEditMode}
                                    previewMode={previewMode}
                                    handleChange={handleChange}
                                    handleAddInput={handleAddInput}
                                />
                            </div>
                            <div className="col-md-8 ac-column d-flex flex-column 
                            pl-md-5 p-3 mt-sm-5 mt-md-0 d-sm-block">
                                 <Biography
                                    error={error}
                                    biography={biography}
                                    isEditMode={isEditMode}
                                    previewMode={previewMode}
                                    handleChange={handleChange}
                                />
                              <Projects
                                    error={error}
                                    projects={experiencesProjects}
                                    isEditMode={isEditMode}
                                    previewMode={previewMode}
                                    handleChange={handleChange}
                                    handleAddInput={handleAddInput}
                                />

                            </div>
                        </div>
                    </div>
                </div>

                <ActionButtons isEditMode={isEditMode} editMode={editMode} previewMode={previewMode} />

            </div>
        </div>
    )
}

export default MainContainer;