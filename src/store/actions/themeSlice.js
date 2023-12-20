import { createSlice } from '@reduxjs/toolkit';

const LIGHT_THEME = {
  mode: 'light',
  primary: '#f8f8f8',
  background: '#FFFFFF',
  text: '#080808',
  accent: '#b8b8b8',
  input: '#f8f8f8',
  icon: '#656667',
  btn: '#1d1d4d',
  Tab: '#fffdfc'
};

const DARK_THEME = {
  mode: 'dark',
  primary: '#262956',
  background: '#1d1d4d',
  text: '#f8f8f8',
  accent: '#f8f8f8',
  input: '#262956',
  icon: '#f8f8f8',
  btn: '#5c5cd0',
  Tab: '#7b7bf2',
};

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
