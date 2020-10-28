import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        isLoggedIn: false,
        user: '',
        isAdmin: false,
    },
    reducers: {
        login: (state, action) => {
            state.isLoggedIn = true;
            state.user = action.payload.user;
            state.isAdmin = action.payload.isAdmin;
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.user = '';
        }
    }
});

export const {
    login,
    logout,
} = userSlice.actions;
export const selectUser = state => state.user.user;
export const selectUserStatus = state => state.user.isAdmin;
export const selectLoginStatus = state => state.user.isLoggedIn;

export default userSlice.reducer;