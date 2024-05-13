import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/characters" className="nav-link">
            Characters
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/comics" className="nav-link">
            Comics
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;