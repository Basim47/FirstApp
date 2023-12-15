import { createSlice } from '@reduxjs/toolkit';

const LIGHT_THEME = {
    mode: "light",
    primary: "#f8f8f8",
    background: "#FFFFFF",
    text: "#1d1d4d",
    accent: "#FF0000",
    input: "#f8f8f8",
}

const DARK_THEME = {
    mode: 'dark',
    primary: "#262956",
    background: "#1d1d4d",
    text: "#f8f8f8",
    accent: "#FF00",
    input: "#262956",
}

const themeSlice = createSlice({
    name: 'theme',
    initialState: { mode: LIGHT_THEME },
    reducers: {
        toggleTheme: state => {
            state.mode = state.mode.mode === 'light' ? DARK_THEME : LIGHT_THEME;
        },
    },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
