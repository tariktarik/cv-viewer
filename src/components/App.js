import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './TESTCSS.css';

import Header from './Header/View';
import MainContainer from './MainContainer/View'

function App() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  const [isEditMode, setEditMode] = useState(true);

  /* const [inputFields, setInputFields] = useState(data);
  console.log(inputFields); */


  useEffect(() => {
    axios.get('http://localhost:5000/resumes/5fbee248eb620e488cfc11f8')
      .then(response => setData(response.data))
    setLoading(false);

  }, [])

  const toggleView = () => setEditMode(!isEditMode);

  /* const handleInfoChange = useCallback(
    (newData) => {
      setData(
        {
          ...data,
          firstName: newData?.newfirstName,
          lastName: newData?.newlastName,
          position: newData?.newposition,
          email: newData?.newemail
        });
    },
    [data]
  ); */


  const handleInfoChange = (newData) => {
    setData(
      {
        ...data,
        firstName: newData?.newfirstName,
        lastName: newData?.newlastName,
        position: newData?.newposition,
        email: newData?.newemail
      })


  }

  const handleQuoteChange = (newData) => {
    setData(
      {
        ...data,
        quote: newData?.newquote,

      })


  }

  const handleBiographyChange = (newData) => {
    setData(
      {
        ...data,
        biography: newData?.newbiography,

      })


  }

  const handlePictureChange = (newData) => {
    setData(
      {
        ...data,
        picture: newData?.newpicture,

      })


  }

  const handlePersonalInfoChange = (newData) => {
    setData(
      {
        ...data,
        dob: newData?.newdob,
        pob: newData?.newpob,
      })


  }

  const handleExperiencesChange = (newData) => {
    setData(
      {
        ...data,
        duration: newData?.newdob,

      })


  }

  const handleEducationsChange = (newData) => {
    const updatedItem = data.education.map((item) => {
      console.log(item)
      return item._id === newData.newid ? { ...item, school: newData.newschool } : item;
    })
    console.log("update ", updatedItem)
    setData({
      ...data, education: updatedItem
     })

  }

  if (isLoading) {
    return <div className="App">Loading...</div>;

  }
  /*  
     function addexpfield() {
       setData({
         ...data,
         experiencs: ...data.exp, {  id: uuid, duration: '', position: ''}
       })
     } */

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

          handleInfoChange={handleInfoChange}
          handleQuoteChange={handleQuoteChange}
          handleBiographyChange={handleBiographyChange}
          handlePictureChange={handlePictureChange}
          handlePersonalInfoChange={handlePersonalInfoChange}

          handleExperiencesChange={handleExperiencesChange}
          handleEducationsChange={handleEducationsChange}


        />
      </div>
    </>
  );
}


export default App;