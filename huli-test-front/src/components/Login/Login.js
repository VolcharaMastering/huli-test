import React, { useState } from 'react';
import './Login.css';
import logo from '../../images/Logo.svg';
import image1 from '../../images/screenCalls.png';
import image2 from '../../images/screenCharts.png';

function Login() {
  const [eye, setEye] = useState(false);
  const handleEye = () => {
    setEye(!eye);
  }
  return (
    <section className='signin'>
      <div className='signin__window'>
        <form className='signin__form' id='signin__form'>
          <img className='logo logo_signin-margin' src={logo} alt="logo" />
          <h2 className="signin__greeting">Вход</h2>
          <div className="signin__input-box">
            <input className="signin__input" id="login-email" placeholder="Email" />
            {/* <span
            className={`signin__valid-error 
                        ${errors.email ? "signin__valid-error_active" : ""}`}
          > 
            {errors?.email && errors?.email?.message}
          </span>*/}
            <input type={eye ? 'text' : 'password'}
              className='signin__input'
              id="password" placeholder="Пароль" />
            {/* <span
            className={`signin__valid-error 
                        ${errors.password ? "signin__valid-error_active" : ""}`}
          >
            {errors?.password && errors?.password?.message}
          </span> */}
            <button className='signin__hide' type="button" onClick={handleEye}></button>
            {/* <span className="signin__compare-message">{message}</span> */}
            <div className="signin__label">
              <div>
              <input className='signin__checkbox' type="checkbox" />
              <label className='signin__label-checkbox'>Запомнить меня</label>
              </div>
              <label className='signin__label-checkbox'>
                Забыли пароль?
              </label>
            </div>
          </div>

          <button className='signin__button'
            // className={`signin__button ${
            //   (!isValid || blockForm) && "signin__button_disabled"
            // }`}
            // disabled={!isValid || blockForm}
            type="submit"
            aria-label="Кнопка авторизации"
          >Войти</button>
        </form>
      </div>
      <div className='signin__background'>
        <img className='signin__back-image' src={image1} alt='calls' />
        <img className='signin__back-image' src={image2} alt='chart' />
        <h2 className='signin__back-title'>Вся аналитика в одном кабинете</h2>
        <p className='signin__back-description'>
          Теперь просматривать аналитику и создавать отчёты можно без нашей помощи
        </p>
      </div>
    </section>
  )
}

export default Login;