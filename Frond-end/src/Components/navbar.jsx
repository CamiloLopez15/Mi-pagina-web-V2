import React from 'react';
import logo from "../assets/logo-sin-fondo.png";
import { Link } from 'react-router-dom';

function Navbar({changeState, newState, logoMenu}) {
  return (
    <div className="container__menu">
        <Link to={'/'}><img className="container__menu-logo" src={logo} /></Link>
        <nav className="container__menu__nav">
          <img
            className="container__menu__nav-menu"
            src={logoMenu}
            onClick={() => {
              changeState(newState);
            }}
          />
        </nav>
    </div>
  )
}

export default Navbar