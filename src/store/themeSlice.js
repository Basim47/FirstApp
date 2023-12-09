import { createSlice } from '@reduxjs/toolkit';

const LIGHT_THEME = {
    mode: "light",
    primary: "#FAF9F6",
    background: "#FFFFFF",
    text: "#000000",
    accent: "#FF0000",
    input: "#333333",
}

const DARK_THEME = {
    mode: 'dark',
    primary: "#333333",
    background: "#000000",
    text: "#FFFFFF",
    accent: "#FF00",
    input: "#FAF9F6",
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
