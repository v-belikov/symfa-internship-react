import { createSlice } from '@reduxjs/toolkit';

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

export const sizesReducer = sizesSlice.reducer;
export const { addToSizes } = sizesSlice.actions;
