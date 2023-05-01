import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    email: null,
    userName: null,
    token: null,
};

const loginSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            console.log('inState', action)
            state.email = action.payload.email;
            state.userName = action.payload.name;
            state.token = action.payload.token;
        },
        logOut(state) {
            state.email = null;
            state.userName = null;
            state.token = null;
        },
    },
});

export const {setUser, logOut} = loginSlice.actions;

export default loginSlice.reducer;