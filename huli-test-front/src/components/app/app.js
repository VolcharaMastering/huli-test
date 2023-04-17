import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, useLocation, useHistory } from "react-router-dom";
// import { Provider } from 'react-redux';
import "../../index.css";
import "./App.css";
// import store from '../../store/index';
import Main from '../Main/Main';
import Charts from '../Charts/Charts';
import Login from '../Login/Login';
import Header from '../Header/Header';
import NotFound from '../NotFound/NotFound';

function App() {

    return (
        <div className='page'>
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/charts" element={<Charts />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;