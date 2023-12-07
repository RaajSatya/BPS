import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import NetInfo from "@react-native-community/netinfo";

export function syncThemeMode() {
    return (dispatch) => {
        AsyncStorage.getItem('mode')
            .then((result) => { result == null ? dispatch(changeThemeMode('light')) : dispatch(changeThemeMode(result)) });
    };
};



const ThemeSlice = createSlice({
    name: 'MyTheme',
    initialState: {
        mode: 'light',
        netState: false
    },
    reducers: {
        changeThemeMode(state, action) {
            state.mode = action?.payload
            AsyncStorage.setItem('mode', action.payload)
        },

    }

})

export const { changeThemeMode } = ThemeSlice.actions
export default ThemeSlice.reducer


