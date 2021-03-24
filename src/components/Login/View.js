import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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

    if (email.length < 1) {
      setErrorEmail('Please input email!')
    }
    if (password.length < 1) {
      setErrorPassword('Please input password!')
    }

    if (user.token) {
      localStorage.setItem('token', user.token);
      console.log("bring back :  ", user)
      history.push('/');
    }
  }

  return (
    <>
      <div className="mb-5 text-center">
        <img
          src={'logo.png'}
          width="120"
          height="120"
          alt="Logo"
          loading="lazy"
        />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">
            Email
          </label>
          <input
            autoFocus={true}
            type="text"
            placeholder="Input your email"
            autoComplete="username"
            className="form-control"
            onChange={e => setEmail(e.target.value)} />
          {errorEmail ? <span className="text-danger">{errorEmail}</span> : null}
        </div>
        <div className="form-group">
          <label htmlFor="password">
            Password
          </label>
          <input
            type="password"
            placeholder="Input your passsword"
            autoComplete="current-password"
            className="form-control"
            onChange={e => setPassword(e.target.value)} />
          {errorPassword ? <span className="text-danger">{errorPassword}</span> : null}


        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-primary w-100">Submit</button>
        </div>

      </form>

    </>
  );
}


export default Login;