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

  
  const handleInfoChange = (newData) => {
   setData(
    {
    ...data,
    firstName: newData?.newfirstName,
    lastName: newData?.newlastName,
    position: newData?.position,
    email: newData?.email
   })
   console.log("TRIGER IN APP: ", newData)


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
          handleInfoChange={handleInfoChange}
          setEditMode={setEditMode}
          isEditMode={isEditMode}
          data={data}
        />
      </div>
    </>
  );
}


export default App;