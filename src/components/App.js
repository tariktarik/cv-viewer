import React from 'react';
import Nav from './Nav/View';
import ActionButtons from './ActionButtons/View';
import Quote from './Quote/View';
import Info from './Info/View';
import Biography from './Biography/View';
import PersonalInfo from './PersonalInfo/View';
import Experiences from './Experiences/View';
import LanguageSkills from './LanguageSkills/View';
import JobSkills from './JobSkills/View';
import AddPhoto from './AddPhoto/View';
import Educations from './Educations/View';
import MyTraits from './MyTraits/View';
import Projects from './Projects/View';

function App() {
  return (
    <>
    <div className="container-fluid">
      <div className="row ac-header">
        <div className="col-md-10 offset-md-1 p-0">
          <Nav />
        </div>
      </div>
      <div className="container">
        <div className="col-sm-12">
      <ActionButtons />
      <Info />
      <Quote />

          <div className="row mt-5">
            <div className="col-md-12 justify-content-center">
              <div className="row">
                <div className="col-md-4 pr-md-5 d-flex flex-column">
                  <AddPhoto />
                  <PersonalInfo />
                  <Experiences />
                  <LanguageSkills />
                  <JobSkills />
                  <Educations />
                  <MyTraits />
                </div>
                <div
                  className="col-md-8 ac-column d-flex flex-column pl-md-5 p-3 mt-sm-5 mt-md-0 d-sm-block"
                >
                  <Biography />
                  <Projects />
                  
                </div>
              </div>
            </div>
          </div>

          <ActionButtons />
        </div>
      </div>
    </div>
    </>
  );
}

export default App;