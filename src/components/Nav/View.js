import React from 'react';

function Nav() {

    return (
    <nav className="navbar navbar-light navbar-expand-sm">
    <a className="navbar-brand" href="#">
      <img
        src="img/logo.png"
        width="60"
        height="60"
        className="d-inline-block mr-3"
        alt=""
        loading="lazy"
      />
      Ant Colony
    </a>
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
          <a className="nav-link" href="#">Create CV</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">My drafts</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Instructions</a>
        </li>
      </ul>
      <ul className="nav navbar-nav ml-auto justify-content-end">
        <li className="nav-item">
          <button className="btn btn-light ac-logout" href="#">
            Logout
          </button>
        </li>
      </ul>
    </div>
  </nav>
    )
}

export default Nav;