import React, { useEffect, useState } from 'react';
import { Route, Switch, useLocation, useHistory } from "react-router-dom";
import { Provider } from 'react-redux';
import "../../index.css";
import "./App.css";
import store from './store';

function App() {

    return (
        <main className='main'>
            <Header />
            <Switch>
                <Route path="/">
                    <Main />
                </Route>
                <Route path="/charts">
                    <Charts />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/*">
                    <NotFound makeMark={makeMark} />
                </Route>
            </Switch>
        </main>
    )
}

export default App;