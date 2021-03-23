import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [errorEmail, setErrorEmail] = useState('')
  const [errorPassword, setErrorPassword] = useState('')

  const history = useHistory();

  /* Zanemari komentare :D */
  /* Make this an Axios request! */
  /* Login page is rendere with input fields, as user 
      start typing, STATE of fields get populated - ONCHANGE.
      On sumbit axios.post reguest was made to the endpoint.

      get response, if have token, put it in local storage, otherwise do nothing.

      if any of input field is empty don't allow submit.
      keap errors of empty fields.
  */
  async function loginUser(credentials) {
    return fetch(`${process.env.REACT_APP_API_URL}/users/login`, {
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

    const user = await loginUser({
      email,
      password
    });
    
    if (user.token) {
      localStorage.setItem('token', user.token);
      console.log("bring back :  ",user)
      history.push('/');
    } 
  }

  return (
    <>
      <h1> Login Page! </h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Email</p>
          <input type="text" onChange={e => setEmail(e.target.value)} />
          {errorEmail ? errorEmail : null}
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)} />
          {errorPassword ? errorPassword : null}
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>

    </>
  );
}


export default Login;