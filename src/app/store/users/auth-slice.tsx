/* eslint no-param-reassign: ["error", { "props": true, "ignorePropertyModificationsForRegex": ["^state"] }] */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { IUserResponse } from './user.interface';

const initialState: IUserResponse = {
  user: null,
  token: '',
};

export const userSlice = createSlice({
  initialState,
  name: 'user',
  reducers: {
    logout: () => initialState,
    setUser: (state, action: PayloadAction<any>) => {
      // state.token = action.payload;
      state.user = action.payload;
    },
  },
});
export const selectAuth = (state: RootState) => state.user;

export const userReducer = userSlice.reducer;

export const { logout, setUser } = userSlice.actions;
