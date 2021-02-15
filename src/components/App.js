import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './TESTCSS.css';

import Header from './Header/View';
import MainContainer from './MainContainer/View'

function App() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get('http://localhost:5000/resumes/5fbee248eb620e488cfc11f8')
      .then(response => setData(response.data))
       setLoading(false);
  }, [])




  if (isLoading) {
    return <div className="App">Loading...</div>;

  }

  return (

    <>

      <div className="container-fluid">
        <Header
          nav={
            {
              username: 'Tarik',
              profilePicture: ''
            }
          }

        />
        <MainContainer
          info={
            {
              firstName: data.firstName,
              lastName: data.lastName,
              position: data.position,
              email: data.email
            }
          }
          quote={data.quote}
          photoUrl={data.picture}
          personalInfo={
            {
              dob: data.dob,
              location: data.pob
            }
          }
          experiences={data.experiences || []}
          languageSkills={data.languages || []}
          jobSkills={data.jobSkills || []}
          educations={data.education || []}
          traits={data.myTraits || []}
          projects={data.experiencesProjects || []}
          biography={data.biography || []}
        />
      </div>
    </>
  );
}


export default App;