import React from 'react';
import { Link, BrowserRouter, useLocation } from "react-router-dom";
// import Charts from '../Charts/Charts';
// import Main from '../Main/Main';'
import logo from '../../images/Logo.svg';
import "./Header.css";

function Header() {
  return (
    <header className='header'>
        <img className='logo' src={logo} alt="logo" />
      <BrowserRouter basename="">
          <ul className='header__nav-bar'>
            {/* <li><Link className='header__nav-link' to={Main}>О нас</Link></li>
            <li><Link className='header__nav-link' to={Charts}>Платформа</Link></li> */}
            <li><Link className='header__nav-link' to="/">О нас</Link></li>
            <li><Link className='header__nav-link' to="/charts">Платформа</Link></li>
            <li><Link className='header__nav-link' to="/Main">Портфолио</Link></li>
            <li><Link className='header__nav-link' to="/Main">Контакты</Link></li>
          </ul>
        <div className="header__button">
              <Link to="/signin" className="header__button-label">
                Вход
              </Link>
            </div>
      </BrowserRouter>
    </header>
  )
}

export default Header;