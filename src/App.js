import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './TESTCSS.css';

import Login from './pages/Login';
import Resumes from './pages/Resumes';
import Resume from './pages/Resume';

import CreateCv from './pages/CreateCv';
import MyDrafts from './pages/MyDrafts';
import Instructions from './pages/Instructions';
import Header from './components/Header/View';

function App() {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [token, setToken] = useState(null);

  async function loginUser(credentials) {
    return fetch('http://localhost:5000/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
  }

  const handleSubmit = async e => {
    e.preventDefault();
    const data = await loginUser({
      email,
      password
    });
    setToken(data.token)
  }


  return (

    <>
      <div className="container-fluid">

        <Router>
          {token ? <Header
            nav={
              {
                username: 'Tarik',
                profilePicture: ''
              }
            }

          /> : null}

          <Switch>

            <Route exact path="/">
              <Resumes />
            </Route>
            <Route exact path="/createcv">
              <CreateCv />
            </Route>
            <Route exact path="/mydrafts">
              <MyDrafts />
            </Route>
            <Route exact path="/instructions">
              <Instructions />
            </Route>

            <Route exact path="/resumes/:id">
              <Resume />
            </Route>
            <Route exact path="/login">
              <Login setEmail={setEmail} setPassword={setPassword} handleSubmit={handleSubmit} />
            </Route>

          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;