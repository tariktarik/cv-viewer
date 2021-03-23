import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
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

  const logout = () => {
    setToken(null)
  }

  const handleSubmit = async e => {
    e.preventDefault();
    const data = await loginUser({
      email,
      password
    });
    console.log(data)
    setToken(data.token)
  }


  return (

    <>
      <div className="container-fluid">

        <Router>
          {token ?
            <Header
              nav={
                {
                  username: 'Tarik',
                  profilePicture: ''
                }

              }
              logout={logout}

            />
            : null}

          <Switch>

            <Route exact path="/">
              {!token ? <Redirect to="/login" /> : <Resumes />}
            </Route>
            <Route exact path="/createcv">
              {!token ? <Redirect to="/login" /> : <CreateCv />}
            </Route>
            <Route exact path="/mydrafts">
              {!token ? <Redirect to="/login" /> : <MyDrafts />}
            </Route>
            <Route exact path="/instructions">
              {!token ? <Redirect to="/login" /> : <Instructions />}
            </Route>

            <Route exact path="/resumes/:id">
              {!token ? <Redirect to="/login" /> : <Resume />}
            </Route>
            <Route exact path="/login">
              {token ? <Redirect to="/" /> : <Login setEmail={setEmail} setPassword={setPassword} handleSubmit={handleSubmit} />}
            </Route>

          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;