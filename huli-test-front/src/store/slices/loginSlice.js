import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    email: null,
    token: null,
    // id: null,
};

const loginSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.email = action.payload.email;
            state.token = action.payload.token;
            // state.id = action.payload.id;
        },
        logOut(state) {
            state.email = null;
            state.token = null;
            // state.id = null;
        },
    },
});

export const {setUser, logOut} = loginSlice.actions;

export default loginSlice.reducer;