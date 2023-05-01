import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate } from "react-router-dom";

import { setUser } from '../../store/slices/loginSlice';
import { authorize } from '../../utils/Api.js'
import './Login.css';
import image1 from '../../images/screenCalls.png';
import image2 from '../../images/screenCharts.png';
import LoginForm from '../LoginForm/LoginForm';
import { useAuth } from '../../hooks/useAuth';

function Login() {
  const [message, setMessage] = useState('');
  const {isAuth} = useAuth();
  const dispatch = useDispatch();

  const handleLogin = (email, password) => {
    authorize({email, password})
      .then((res) => {
        dispatch(setUser({
          email: res.data.email,
          name: res.data.email,
          token: res.token,
        }));
        localStorage.setItem("jwt", res.token);
        setMessage("Вы успешно авторизировались!");
      })
      .catch((err) => {
        setMessage("Что-то пошло не так! Попробуйте ещё раз.");
      })
  }

  return !isAuth ? (
    <section className='signin'>
      <div className='signin__window'>
        <LoginForm

          handleClick={handleLogin}
        />
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
  ) : (
    <Navigate to="/" />
  )
}

export default Login;