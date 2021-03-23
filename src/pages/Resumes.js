import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Resumes() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/resumes`)
      .then(response => setData(response.data))
    setLoading(false);

  }, [])

  if (isLoading) {
    return <div className="App">Loading...</div>;

  }

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Position</th>
            <th scope="col">Resume</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((resume) =>
            <tr key={resume._id}>
              <td>{resume.firstName} {resume.lastName}</td>
              <td>{resume.position}</td>
              <td><Link
                to={`resumes/${resume._id}`}
                className="btn btn-light btn-outline-primary w-75"
                type="button"
              >
                Open
                  </Link></td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}


export default Resumes;