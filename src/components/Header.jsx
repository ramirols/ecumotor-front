import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/ecumotorstock-logo-1611566260-1.svg";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="headerLogo__container">
          <Link to="/">
            <img src={logo} alt="Ecumotor Logo" className="header__logo" />
          </Link>
        </div>
        <nav className="header__menu">
          <Link to="/">Inicio</Link>
          <Link to="/login">Login</Link>
          <Link to="/servicio">Servicio</Link>
          <Link to="/register">Registro</Link>
          <Link to="/forgot-password">Olvidé mi contraseña</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
