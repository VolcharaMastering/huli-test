import React, { useEffect, useState } from 'react';
import { Route, Switch, useLocation, useHistory } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";
import { Provider } from 'react-redux';
import store from './store';

