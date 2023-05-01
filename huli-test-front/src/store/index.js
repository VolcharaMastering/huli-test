import {configureStore} from '@reduxjs/toolkit';
import loginReducer from './slices/loginSlice.js';

const store = configureStore({
    reducer: {
        user: loginReducer,
    }
});

export default store;