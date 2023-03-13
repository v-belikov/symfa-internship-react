import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { IUser } from './models';

interface IUserState {
  user: IUser | null;
  token: string;
}

const initialState: IUserState = {
  user: null,
  token: '',
};

export const userSlice = createSlice({
  initialState,
  name: 'user',
  reducers: {
    logout: () => initialState,
    setUser: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
  },
});

export const selectAuth = (state: RootState) => state.auth;

export const userReducer = userSlice.reducer;

export const { logout, setUser } = userSlice.actions;
