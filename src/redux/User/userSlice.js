import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    user: null,
    loading: false,
    error: null,
    token :null
}
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        signInSuccess:(state, action) => {
            state.user = action.payload;
            state.loading = false;
            state.error = false;
        },
        signInFail:(state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        loginStart: (state) => {
            state.loading = true;
          
        },
        loginSuccess: (state, action) => {
            state.loading = false;
            state.user = action.payload;
        },
        loginFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        logout: (state) => {
            state.user = null;
        },
    },
});
export const { signInSuccess, signInFail, loginStart, loginSuccess, loginFailure, logout } = userSlice.actions;
export default userSlice.reducer;