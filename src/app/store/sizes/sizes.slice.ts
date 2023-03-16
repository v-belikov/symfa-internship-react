import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface ISizesState {
  sizes: string[];
}

const initialState: ISizesState = {
  sizes: [],
};

export const sizesSlice = createSlice({
  name: 'sizes',
  initialState,
  reducers: {
    addToSizes: (state, action) => {
      state.sizes = action.payload;
    },
  },
});

export const getSizesSelector = (state: RootState) => state.sizes.sizes;
export const sizesReducer = sizesSlice.reducer;
export const { addToSizes } = sizesSlice.actions;
