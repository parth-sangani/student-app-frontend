import React from 'react';
import { Link } from 'react-router-dom';

function Header(){


    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link tag="a" className="navbar-brand" to="/">Student Portal</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#header" aria-controls="header" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="header">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link tag="a" className="nav-link active" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link tag="a" className="nav-link active" to="/add-student">Add Student</Link>
        </li>
        <li className="nav-item">
          <Link tag="a" className="nav-link active" to="/view-all">View All Students</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </>
    );
}

export default Header;