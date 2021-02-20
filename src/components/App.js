import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './TESTCSS.css';

import Header from './Header/View';
import MainContainer from './MainContainer/View'

function App() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  const [isEditMode, setEditMode] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:5000/resumes/5fbee248eb620e488cfc11f8')
      .then(response => setData(response.data))
    setLoading(false);

  }, [])

  const toggleView = () => setEditMode(!isEditMode);

  const handleChange = (e) => {
    const { target: { name, value } } = e;
    const objName = e.target.attributes.customobjname.nodeValue;
    const customid = e.target.attributes.customid.nodeValue;

    if (customid) {
      const updatedItem = data[objName].map((item) => {
        return item._id === customid ? { ...item, [name]: value } : item;
      })

      setData({
        ...data, [objName]: updatedItem
      })

    } else {

      setData({
        ...data,
        [name]: value
      })
    }
  }

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
          handleChange={handleChange}
        />
      </div>
    </>
  );
}


export default App;