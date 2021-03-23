import React from 'react';

function Login({handleSubmit, setEmail, setPassword}) {
  

  return (
    <>
      <h1> Login Page! </h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Email</p>
          <input type="text" onChange={e => setEmail(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)} />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>

    </>
  );
}


export default Login;