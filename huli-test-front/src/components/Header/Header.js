import React, { useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { useAuth } from '../../hooks/useAuth';
import logo from '../../images/Logo.svg';
import userIcon from '../../images/user.svg';
import { authByToken } from '../../utils/Api.js'
import { setUser } from '../../store/slices/loginSlice';
import "./Header.css";

function Header() {
  const dispatch = useDispatch();
  const { isAuth, email, userName } = useAuth();
  const { pathname } = useLocation();
  const tokenCheck = () => {
      const jwt = localStorage.getItem("jwt");
      if (!jwt) {
        return;
      }
      authByToken(jwt)
        .then((res) => {
          dispatch(setUser({
              email: res.email,
              name: res.userName,
              token: jwt,
            }));
        })
        .catch((err) => {
          console.log(err);
        });
    };
 useEffect(() =>{
  tokenCheck();
 },[isAuth]);
  return (
    <header className='header'>
      <img className='logo' src={logo} alt="logo" />
      <ul className='header__nav-bar'>
        <li><Link to="/" className='header__nav-link'>О нас</Link></li>
        <li><Link
          to="/charts"
          className={
            `header__nav-link 
                ${pathname === "/charts" ? "header__nav-link_underline" : ""
            }`}>
          Платформа
        </Link>
        </li>
        <li><Link to="/portfolio" className={
          `header__nav-link 
                ${pathname === "/portfolio" ? "header__nav-link_underline" : ""
          }`}>
          Портфолио</Link></li>
        <li><Link to="/contacts" className={
          `header__nav-link 
                ${pathname === "/contacts" ? "header__nav-link_underline" : ""
          }`}>
          Контакты</Link></li>
      </ul>
      {
        isAuth ?
          <button
            className='header__user'
            type="button"
          // onClick={handleEye}
          >
            <p className='header__user-name'>{userName}</p>
            <img className='header__user_icon' src={userIcon} alt="user icon" />
          </button>
          :
            <Link to="/signin" className="header__button">
              Вход
            </Link>
      }
    </header>
  )
}

export default Header;