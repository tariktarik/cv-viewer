import React from 'react';
import './TESTCSS.css';
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
            <Info firstName={''} lastName={''} position={''} email={''} />
            <Quote quote={''} />

            <div className="row mt-5">
              <div className="col-md-12 justify-content-center">
                <div className="row">
                  <div className="col-md-4 pr-md-5 d-flex flex-column">
                    <AddPhoto photoUrl={'https://via.placeholder.com/300x300?'} />
                    <PersonalInfo
                      dob={'August 1, 1991'}
                      location={'Sarajevo, Bosnia and Herzegovina'}
                    />
                    <Experiences experiences={[
                      {
                        "duration": "6 years",
                        "position": "UI/UX designer"
                      },
                      {
                        "duration": "3 years",
                        "position": "Ux/Ui designer"
                      }
                    ]
                    } />
                    <LanguageSkills languageSkills={[
                      {
                        "language": "English",
                        "grade": "Native speaker"
                      },
                      {
                        "language": "German",
                        "grade": "Native speaker"
                      }
                    ]} />
                    <JobSkills jobSkills={[
                      {
                        "skill": "CSS3",
                        "grade": "6"
                      },
                      {
                        "skill": "HTML",
                        "grade": "6"
                      }
                    ]} />
                    <Educations educations={
                      [
                        {
                          "school": "Elektrotehnicka",
                          "degree": "SSS",
                          "period": "2006 - 2010"
                        },
                        {
                          "school": "Udemy",
                          "degree": "SSS",
                          "period": "2000 - 2020"
                        }
                      ]
                    } />
                    <MyTraits traits={['Fast1', 'Team Player']} />
                  </div>
                  <div
                    className="col-md-8 ac-column d-flex flex-column pl-md-5 p-3 mt-sm-5 mt-md-0 d-sm-block"
                  >
                    <Biography description={`Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Excepturi neque molestias qui maiores et consectetur odit,
                      recusandae est soluta rem suscipit doloribus ratione
                      officia culpa magni molestiae, asperiores consequuntur
                      possimus laboriosam maxime doloremque praesentium quae ex?
                      Accusamus tempora facere quod eveniet beatae et deleniti
                      molestiae laudantium pariatur doloremque, delectus
                      aspernatur ipsa dolores expedita libero cumque atque
                      laborum tempore, itaque hic voluptatibus quo. Ea itaque
                      quidem dignissimos odit ipsam neque quis, hic modi error`} />
                    <Projects projects={[
                      {
                        "company": "Ant Colony",
                        "position": "intern",
                        "period": "2020 - 2020",
                        "description": "Bla Bla"
                      },
                      {
                        "company": "Ant Colony",
                        "position": "intern",
                        "period": "2020 - 2020",
                        "description": "Bla Bla"
                      }
                    ]} />

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