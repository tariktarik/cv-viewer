import React, {useState} from 'react';
import MainContainer from '../components/MainContainer/View'
function CreateCV() {
  const [data, setData] = useState({
    quote: '',
    picture: '',
    biography: '',
    firstName: '',
    lastName: '',
    email: '',
    position: '',
    dob: '',
    pob: '',
    experiences: [{ duration: '', position: '' }],
    languages: [{ language: '', grade: '' }],
    jobSkills: [{ skill: '', grade: '' }],
    education: [{ school: '', degree: '', period: '' }],
    myTraits: [{ trait: '' }],
    experiencesProjects: [{ company: '', position: '', period: '', description: '' }]
  })
/*   const [isEditMode, setEditMode] = useState(true);
  const editMode = () => {
    setEditMode(true)
  };
 */
  return (
    <>
     
      <MainContainer
        data={data}
        
      />
   
    </>
  );
}


export default CreateCV;