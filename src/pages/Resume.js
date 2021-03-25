import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';


import MainContainer from '../components/MainContainer/View'

function Resume() {
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
  let { id } = useParams();
  const [isEditMode, setEditMode] = useState(true);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/resumes/${id}`)
      .then(response => setData(response.data))
    setLoading(false);

  }, [])

  const editMode = () => {
    setEditMode(true)
  };

  const previewMode = () => {
    const dataArray = Object.keys(data);
    const errorObj = {}
    const objectObj = {}

    dataArray.forEach((ele) => {
      if (typeof data[ele] === 'string' && data[ele] === '') {
        errorObj[ele] = `${[ele]} error`
      }
      if (typeof data[ele] === 'object') {
        data[ele].map((item) => (
          Object.keys(item).map((input) =>
            item[input] === '' ? objectObj[ele] = {
              ...objectObj[ele], _id: item._id, [input]: `${[input]} error`
            }
              : null)
        ))

      }

    })

    if (Object.keys(errorObj).length > 0) {
      setError({ ...error, ...errorObj })
    }

    if (Object.keys(objectObj).length > 0) {
      Object.keys(objectObj).map((ele) =>
        setError({ ...error, [ele]: objectObj[ele] })
      )
    }

    if (Object.keys(errorObj).length < 1 && Object.keys(objectObj).length < 1) {
      setEditMode(false)
    }

  }

  const handleChange = (e, id, objname) => {

    const { target: { name, value } } = e;

    error[name] = '';  // Da li na ispravan nacin, na pravom mjestu resetujem error polje?


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
      
          <MainContainer
            editMode={editMode}
            previewMode={previewMode}
            isEditMode={isEditMode}
            data={data}
            error={error}
            handleChange={handleChange}
            handleAddInput={handleAddInput}
          />

      
    </>
  );
}



export default Resume;