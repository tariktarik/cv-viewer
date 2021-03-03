import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import './TESTCSS.css';

import Header from './Header/View';
import MainContainer from './MainContainer/View'

function App() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState({
    quote: '',
    picture: '',
    biography: '',
    firstName: '',
    lastName: '',
    email: '',
    position: '',
    dob: '',
    pob: '',
    experiences: { duration: '', position: '' },
    languages: { language: '', grade: '' },
    jobSkills: { skill: '', grade: '' },
    education: { school: '', degree: '', period: '' },
    myTraits: { trait: '' },
    experiencesProjects: { company: '', position: '', period: '', description: '' }
  })
  const [isEditMode, setEditMode] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:5000/resumes/5fbee248eb620e488cfc11f8')
      .then(response => setData(response.data))
    setLoading(false);

  }, [])

  const toggleView = () => setEditMode(!isEditMode);

  const handleChange = (e, id, objname) => {

    const { target: { name, value } } = e;


    if (id) {
      const updatedItem = data[objname].map((item) => {
        return item._id === id ? { ...item, [name]: value } : item;
      })
      setData({
        ...data, [objname]: updatedItem
      })

    } else {

      setData({
        ...data,
        [name]: value
      })


    }
 
  }


  const handleAddInput = (objName) => {
    const keysArray = Object.keys(data[objName][0]);
    const newObj = {};
    keysArray.forEach((ele) => {
      newObj[ele] = '';
    })

    setData({
      ...data, [objName]: [...data[objName], { ...newObj, _id: uuidv4() }]
    });

  };

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
          toggleView={toggleView}
          isEditMode={isEditMode}
          data={data}
          error={error}
          handleChange={handleChange}
          handleAddInput={handleAddInput}
        />
      </div>
    </>
  );
}


export default App;