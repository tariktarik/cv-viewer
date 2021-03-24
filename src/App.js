import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import PrivateRoute from './PrivateRoute';
import LoginPage from './pages/LoginPage';
import Resumes from './pages/Resumes';
import Resume from './pages/Resume';
import CreateCv from './pages/CreateCv';
import MyDrafts from './pages/MyDrafts';
import Instructions from './pages/Instructions';
import NotFound from './pages/NotFound'

import './TESTCSS.css';

function App() {
 
  return (
    <>
      <div className="container-fluid">
        <Router>
          
          <Switch>
            <PrivateRoute exact path="/" comp={Resumes} />
            <PrivateRoute exact path="/createcv" comp={CreateCv} />
            <PrivateRoute exact path="/mydrafts" comp={MyDrafts} />
            <PrivateRoute exact path="/instructions" comp={Instructions} />
            <PrivateRoute exact path="/resumes/:id" comp={Resume} />
            <Route exact path="/login">
              <LoginPage/>
            </Route>
            <Route path="*" component={NotFound} />
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;