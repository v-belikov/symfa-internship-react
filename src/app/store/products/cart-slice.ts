import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Products } from 'app/pages/goods';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    productsInCart: [] as Products[],
  },
  reducers: {
    setCartProducts: (state, action: PayloadAction<Products>) => {
      state.productsInCart.push({
        ...action.payload,
        amount: 1,
      });
    },
    addQuantityCartProduct: (state, action: PayloadAction<Products>) => {
      state.productsInCart.map(item =>
        item.id === action.payload.id
          ? {
              ...item,
              amount: item.amount + 1,
            }
          : item,
      );
    },
    removeQuantityCartProduct: (state, action: PayloadAction<Products>) => {
      state.productsInCart.map(item =>
        item.id === action.payload.id
          ? {
              ...item,
              amount: item.amount - 1,
            }
          : item,
      );
    },
    dropProductFromCart: (state, action: PayloadAction<Products>) => {
      state.productsInCart.filter(i => i !== action.payload);
    },
  },
});

export const {
  addQuantityCartProduct,
  dropProductFromCart,
  removeQuantityCartProduct,
  setCartProducts,
} = cartSlice.actions;

export default cartSlice.reducer;
