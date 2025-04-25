import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    user: null,
    loading: false,
    error: null,
    token :null,
    superAdmin :("superadmin")
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
        IsNotSuperAdmin:(state,action) =>{
            action.payload= !state.user.adminRole.includes(state.superAdmin)
            state.loading = false;
        }
    },
});
export const { signInSuccess, signInFail, loginStart, loginSuccess, loginFailure, logout,IsNotSuperAdmin } = userSlice.actions;
export default userSlice.reducer;