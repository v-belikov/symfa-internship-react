import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface IUser {
  id: string;
  username: string;
  email: string;
  password: string;
}

interface IUserResponse {
  user: IUser | null;
  token: string;
}

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
      state.user = action.payload;
    },
  },
});
export const getAuthSelector = (state: RootState) => state.auth;

export const userReducer = userSlice.reducer;

export const { logout, setUser } = userSlice.actions;
