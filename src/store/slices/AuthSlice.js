import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import AsyncStorage from "@react-native-async-storage/async-storage";
import MyApi from "../../api/MyApi";
import { useEffect } from "react";

let userData;

const header = {
    headers: {
        "Content-Type": "multipart/form-data",
        Accept: "application/json",
    }
};
export const register = createAsyncThunk('register', async (data, { rejectWithValue, getState, dispatch }) => {
    try {
        const res = await MyApi.post('user/register', data, header)
        return res.data
    } catch (e) {
        return rejectWithValue(e.response.data)
    }
})
export const login = createAsyncThunk('Login', async (data, { rejectWithValue, getState, dispatch }) => {
    try {
        const res = await MyApi.post('user/login', data, header)

        return res.data
    } catch (e) {
        return rejectWithValue(e.response.data)
    }
})
export const logoutUser = createAsyncThunk('logout', async (_, { rejectWithValue, getState, dispatch }) => {
    const tokenss = getState().AUTH.userAuth.userInfo.token
    const header = {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${tokenss}`
        }
    };
    try {
        const res = await MyApi.post('user/logout', {}, header)
        return res.data
    } catch (e) {
        return rejectWithValue(e.response.data)
    }
})
export const getUserProfile = createAsyncThunk('getUserProfile', async (_, { rejectWithValue, getState, dispatch }) => {
    const tokenss = getState().AUTH.userAuth.userInfo.token
    const header = {
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${tokenss}`
        }
    };
    try {
        const res = await MyApi.get('user/get_user_profile', header)
        return res.data
    } catch (e) {
        return rejectWithValue(e?.response?.data)
    }
})

export function getAsyncStorage() {
    return (dispatch) => {
        AsyncStorage.getItem('userInfo')
            .then((result) => { dispatch(setUserInfo(JSON.parse(result))) });
    };
};

const AuthSlice = createSlice({
    name: 'auth',
    initialState: {
        loading: false,
        error: null,
        users: [],
        user: {},
        profile: {},
        userAuth: {
            loading: false,
            error: null,
            userInfo: null
        }
    },
    reducers: {
        setUserInfo(state, action) {
            state.userAuth.userInfo = action.payload
        }
    },
    extraReducers: (builder) => {

        builder.addCase(register.pending, (state) => {
            state.loading = true
        });
        builder.addCase(register.fulfilled, (state, action) => {
            state.loading = false
            state.userAuth.userInfo = action.payload
            state.userAuth.error = null
        });
        builder.addCase(register.rejected, (state, action) => {
            state.loading = false
            state.userAuth.error = action.payload
        });

        // Login Handling
        builder.addCase(login.pending, (state, action) => {
            state.loading = true
        });
        builder.addCase(login.fulfilled, (state, action) => {
            AsyncStorage.setItem('userInfo', JSON.stringify(action.payload))
            state.userAuth.userInfo = action.payload
            state.userAuth.error = null
            state.loading = false
        });
        builder.addCase(login.rejected, (state, action) => {
            state.userAuth.error = action.payload
            state.loading = false
        });

        // GetUserProfile
        builder.addCase(getUserProfile.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(getUserProfile.fulfilled, (state, action) => {
            state.loading = false
            state.profile = action.payload
            // console.log(action.payload)
        })
        builder.addCase(getUserProfile.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
            state.profile = ""
        })

        // Logout Case
        builder.addCase(logoutUser.pending, (state, action) => {
            state.userAuth.loading = true
        });
        builder.addCase(logoutUser.fulfilled, (state, action) => {
            console.log('logoutSuccess', action.payload)
            AsyncStorage.removeItem('userInfo')
            state.userAuth.userInfo = null
            state.userAuth.loading = false
        });
        builder.addCase(logoutUser.rejected, (state, action) => {
            console.log('logoutError', action.payload)
            state.userAuth.loading = false
        });

    }
})



export const { setUserInfo, setToken, setUser } = AuthSlice.actions
export default AuthSlice.reducer