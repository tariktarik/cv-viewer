import React from 'react';
import { Link, useHistory } from 'react-router-dom';
function Nav({ nav }) {
  const { username, profilePicture } = nav;
  const history = useHistory();
  const logout = () => {
    localStorage.removeItem('token');
    history.push("/login")
  }
  return (

    <nav className="navbar navbar-light navbar-expand-sm">
      <Link to={"/"} className="navbar-brand">
        <img
          src={profilePicture ? profilePicture : 'logo.png'}
          width="60"
          height="60"
          className="d-inline-block mr-3"
          alt=""
          loading="lazy"
        />
        {username ? username : 'AntColony'}
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsingNavbar3"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="navbar-collapse collapse w-100" id="collapsingNavbar3">
        <ul className="navbar-nav w-100 justify-content-center text-nowrap">

          <li className="nav-item active">
            <Link to={"/createcv"} className="nav-link">Create CV</Link>
          </li>
          <li className="nav-item">
            <Link to={"/mydrafts"} className="nav-link" >My drafts</Link>
          </li>
          <li className="nav-item">
            <Link to={"/instructions"} className="nav-link">Instructions</Link>
          </li>
        </ul>
        <ul className="nav navbar-nav ml-auto justify-content-end">
          <li className="nav-item">
            <button onClick={logout} className="btn btn-light ac-logout">
              Logout
          </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav;