import {createSlice} from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: { name: null, email: null },
        token: null,
        isLoggedIn: false,
    },
    reducers: {
        setUserAndToken(state, action) {
            state.user = action.payload.user
            state.token = action.payload.token
            state.isLoggedIn = true
        },
        clearUserAndToken(state) {
            state.user = null
            state.token = null
            state.isLoggedIn = false
        },
    },
});

export const { setUserAndToken, clearUserAndToken } = authSlice.actions
export const authReducer = authSlice.reducer

