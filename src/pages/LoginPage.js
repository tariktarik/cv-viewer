import React from 'react';
import Login from '../components/Login/View';

function LoginPage() {
  return (
    <div className="container d-flex justify-content-center">
      <div className="col-md-4 vh-100 d-flex flex-column justify-content-center">
        <Login />
      </div>
    </div>
  );
}


export default LoginPage;