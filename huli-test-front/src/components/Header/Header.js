import React from 'react';
import { Link, useLocation } from "react-router-dom";
import logo from '../../images/Logo.svg';
import "./Header.css";

function Header() {
  return (
    <header className='header'>
        <img className='logo' src={logo} alt="logo" />
          <ul className='header__nav-bar'>
            <li><Link to="/" className='header__nav-link'>О нас</Link></li>
            <li><Link to="/charts" className='header__nav-link'>Платформа</Link></li>
            <li><Link to="/portfolio" className='header__nav-link'>Портфолио</Link></li>
            <li><Link to="/contacts" className='header__nav-link'>Контакты</Link></li>
          </ul>
        <div className="header__button">
              <Link to="/signin" className="header__button-label">
                Вход
              </Link>
            </div>
    </header>
  )
}

export default Header;