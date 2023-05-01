import React, { useState } from 'react';
import './LoginForm.css';
import logo from '../../images/Logo.svg';

function LoginForm({ handleClick }) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [eye, setEye] = useState(false);
  const handleEye = () => {
    setEye(!eye);
  }

  return (
    <form className='signin__form' id='signin__form'>
      <img className='logo logo_signin-margin' src={logo} alt="logo" />
      <h2 className="signin__greeting">Вход</h2>
      <div className="signin__input-box">
        <input
          className="signin__input"
          id="login-email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        {/* <span
            className={`signin__valid-error 
                        ${errors.email ? "signin__valid-error_active" : ""}`}
          > 
            {errors?.email && errors?.email?.message}
          </span>*/}
        <input
          type={eye ? 'text' : 'password'}
          className='signin__input'
          id="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          placeholder="Пароль" />
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
        type="button"
        onClick={() => handleClick(email, pass)}
        aria-label="Кнопка авторизации"
      >Войти</button>
    </form>
  )
}

export default LoginForm;