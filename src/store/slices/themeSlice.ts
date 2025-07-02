import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/app/store.ts'

interface ThemeState {
  current: 'light' | 'dark'
}

const initialState: ThemeState = {
  current: (localStorage.getItem('app-theme') as 'light' | 'dark') || 'light'
}

export const selectTheme = (state: RootState) => state.theme.current

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<'light' | 'dark'>) {
      state.current = action.payload
      localStorage.setItem('app-theme', action.payload)
    },
    toggleTheme(state) {
      state.current = state.current === 'light' ? 'dark' : 'light'
      localStorage.setItem('app-theme', state.current)
    },
  },
})

export const { setTheme, toggleTheme } = themeSlice.actions
export const themeReducer = themeSlice.reducer
